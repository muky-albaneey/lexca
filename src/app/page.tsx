import Image from "next/image";
import Navbar from "../components/header/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/products/FeaturedProducts";
import CategorySection from "@/components/home/products/CategorySection";
import TestimonialCarousel from "@/components/home/testimony/TestimonialCarousel";
import BlogSection from "@/components/home/blog/BlogSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <FeaturedProducts />
      <CategorySection />
      <TestimonialCarousel />
      <BlogSection />
    </div>
  );
}
