export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ritika Sharma",
    role: "Bought a home in Gurugram",
    quote:
      "Our advisor understood exactly what we needed within the first call. No unnecessary site visits, no pushy sales calls — just the right three options and honest advice on each.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: "t2",
    name: "Arjun Malhotra",
    role: "Leased commercial space in CP",
    quote:
      "The legal team caught a title issue that would have cost us months of delay. Having that in-house support made the entire commercial lease process painless.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "t3",
    name: "Neha & Karan Kapoor",
    role: "Purchased a villa in Vasant Vihar",
    quote:
      "We compared a few platforms before this. The difference was having one person accountable for the whole journey, not being bounced between agents.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
];