export type PropertyType = "buy" | "rent" | "commercial";

export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  price: number;
  priceLabel: string;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  areaSqft: number;
  image: string;
  featured: boolean;
  description: string;
  amenities: string[];
  lat: number;
  lng: number;
}

export const properties: Property[] = [
  {
    id: "ln-001",
    title: "The Aravali Residence",
    location: "Golf Course Road, Gurugram",
    city: "Gurugram",
    price: 42000000,
    priceLabel: "₹4.2 Cr",
    type: "buy",
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 3200,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200",
    featured: true,
    description:
      "An expansive four-bedroom residence with panoramic golf course views, finished with imported marble and a private terrace garden.",
    amenities: ["Private Terrace", "Clubhouse Access", "24/7 Security", "Covered Parking", "Modular Kitchen"],
    lat: 28.4595,
    lng: 77.0266,
  },
  {
    id: "ln-002",
    title: "Vasant Vihar Villa",
    location: "Vasant Vihar, New Delhi",
    city: "New Delhi",
    price: 95000000,
    priceLabel: "₹9.5 Cr",
    type: "buy",
    bedrooms: 5,
    bathrooms: 5,
    areaSqft: 4800,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
    featured: true,
    description:
      "A heritage-inspired independent villa in one of Delhi's most prestigious diplomatic enclaves, with a private pool and landscaped lawn.",
    amenities: ["Private Pool", "Landscaped Garden", "Home Theatre", "Servant Quarters", "4 Covered Parking"],
    lat: 28.5606,
    lng: 77.1611,
  },
  {
    id: "ln-003",
    title: "DLF Cyber City Loft",
    location: "DLF Phase 3, Gurugram",
    city: "Gurugram",
    price: 65000,
    priceLabel: "₹65,000/mo",
    type: "rent",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 1850,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200",
    featured: true,
    description:
      "A fully furnished, contemporary 3BHK loft steps away from Cyber Hub, ideal for executives seeking a premium rental.",
    amenities: ["Fully Furnished", "Gym Access", "Rooftop Lounge", "High-speed Fiber", "Power Backup"],
    lat: 28.4949,
    lng: 77.0925,
  },
  {
    id: "ln-004",
    title: "Connaught Place Business Suites",
    location: "Connaught Place, New Delhi",
    city: "New Delhi",
    price: 180000000,
    priceLabel: "₹18 Cr",
    type: "commercial",
    bedrooms: 0,
    bathrooms: 4,
    areaSqft: 6000,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
    featured: true,
    description:
      "Grade-A commercial office space in the heart of CP, with column-free floor plates and premium lobby access.",
    amenities: ["Column-free Layout", "Central AC", "24/7 Power Backup", "Dedicated Parking", "High-speed Elevators"],
    lat: 28.6315,
    lng: 77.2167,
  },
  {
    id: "ln-005",
    title: "Greater Kailash Garden Flat",
    location: "Greater Kailash I, New Delhi",
    city: "New Delhi",
    price: 28000,
    priceLabel: "₹28,000/mo",
    type: "rent",
    bedrooms: 2,
    bathrooms: 2,
    areaSqft: 1200,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200",
    featured: false,
    description:
      "A sunlit 2BHK with a private garden patch, tucked in a quiet residential block of GK-I.",
    amenities: ["Private Garden Patch", "Covered Parking", "Power Backup", "Pet Friendly"],
    lat: 28.5494,
    lng: 77.2425,
  },
  {
    id: "ln-006",
    title: "Dwarka Sector 12 Commercial Plaza",
    location: "Sector 12, Dwarka",
    city: "New Delhi",
    price: 32000000,
    priceLabel: "₹3.2 Cr",
    type: "commercial",
    bedrooms: 0,
    bathrooms: 2,
    areaSqft: 2400,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
    featured: false,
    description:
      "Ground-floor retail unit on a high-footfall arterial road, suited for flagship retail or a bank branch.",
    amenities: ["High Street Frontage", "Ample Parking", "Loading Bay", "Fire Safety Certified"],
    lat: 28.5921,
    lng: 77.0460,
  },
];

export function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}  

export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  price: number;
  priceLabel: string;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  areaSqft: number;
  image: string;
  featured: boolean;
  description: string;
  amenities: string[];
  lat: number;
  lng: number;
  // Add these two lines:
  images?: string[];
  mapEmbedUrl?: string;
}