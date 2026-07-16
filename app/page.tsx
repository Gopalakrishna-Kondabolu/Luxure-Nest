import Hero from "@/components/sections/Hero";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ComparisonTable from "@/components/sections/ComparisonTable";
import Testimonials from "@/components/sections/Testimonials";
import ChatWidget from '@/components/ui/ChatWidget';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <ComparisonTable />
      <Testimonials />
      <ChatWidget />
    </>
  );
}