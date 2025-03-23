import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import CategorySection from "@/components/products/CategorySection";
import CategoryGrid from "@/components/testimony/CategoryGrid";
import TestimonialCarousel from "@/components/testimony/TestimonialCarousel";
import BlogSection from "@/components/blog/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <CategorySection />
  
      <TestimonialCarousel />
      <BlogSection />
      <Footer />
    </div>
  );
}
