import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    // Map history to the required message format for the API
    const formattedHistory = history.map((msg: {role: string, content: string}) => ({
      role: msg.role,
      content: msg.content
    }));

    // Calling the Groq API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant', // The valid, upgraded model
        messages: [
          { 
            role: 'system', 
            content: 'You are an elite, highly professional real estate advisor for Luxure Nest, a luxury real estate advisory firm in Delhi NCR. You are data-driven, precise, and discreet. Do not use generic sales jargon. Provide concise, sophisticated answers regarding luxury properties, legal compliance, and real estate investments. If you do not know an answer, advise the user to contact the senior advisory team.' 
          },
          ...formattedHistory,
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 250,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Groq API Error Details:', errorText);
      // We return a Next.js response here instead of throwing to prevent the undefined crash
      return NextResponse.json(
        { error: 'Groq API rejected the request' }, 
        { status: response.status }
      );
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content || "I am currently unable to process your request.";

    // The successful return
    return NextResponse.json({ reply });
    
  } catch (error) {
    console.error('Chatbot API Error:', error);
    // The fallback error return
    return NextResponse.json(
      { error: 'Failed to process request' }, 
      { status: 500 }
    );
  }
}