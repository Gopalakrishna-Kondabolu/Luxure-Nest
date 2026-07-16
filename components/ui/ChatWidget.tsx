"use client";

import { useState, useRef, useEffect } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: 'Welcome to Luxure Nest. How can our advisory team assist with your portfolio today?' }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history: messages })
      });
      
      const data = await res.json();
      
      if (data.reply) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Our advisory desk is currently offline. Please use the contact form.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-inter">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-panel border border-line rounded-lg w-80 sm:w-96 h-[500px] mb-4 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.6)] overflow-hidden">
          {/* Header */}
          <div className="bg-ink border-b border-line p-4 flex justify-between items-center">
            <div>
              <h3 className="text-gold font-fraunces text-lg">Luxure AI Advisor</h3>
              <p className="text-slate text-xs uppercase tracking-wider font-mono mt-1">Online</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate hover:text-ivory transition-colors text-xl"
            >
              ×
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-ink/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-gold text-ink font-medium rounded-tr-none' 
                    : 'bg-panel border border-line text-ivory rounded-tl-none leading-relaxed'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-panel border border-line rounded-lg rounded-tl-none p-4 flex gap-1">
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="bg-panel p-3 border-t border-line flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about properties, legal..."
              className="flex-1 bg-ink border border-line rounded px-3 py-2 text-ivory text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-gold hover:bg-[#D4AF37] text-ink px-4 py-2 rounded text-sm font-semibold transition-colors disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-gold hover:bg-[#D4AF37] text-ink p-4 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
}