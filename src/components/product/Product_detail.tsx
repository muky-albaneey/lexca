"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check, Star, Tag, BadgePercent, Truck, ShieldCheck, Copy, Share } from "lucide-react";
import Image from "next/image";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("/headphones.svg");
  const thumbnails = ["/head1.svg", "/head2.svg", "/head3.svg"];

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <a href="#" className="text-sm text-gray-500">Back to Product | Electronics | <span className="text-blue-600">Soundcore</span></a>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="flex-1">
          <div className="aspect-square relative rounded-2xl overflow-hidden">
             <Image
              src={selectedImage}
              alt="Selected Headphones"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="flex space-x-3 mt-4">
            {thumbnails.map((src, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(src)}
                className="w-20 h-20 relative rounded-lg overflow-hidden focus:outline-none ring-offset-2 focus:ring-2 focus:ring-blue-500"
              >
                <Image src={src} alt={`Thumbnail ${i}`} layout="fill" objectFit="cover" />
              </button>
            ))}
          </div>
          <Tabs defaultValue="description" className="mt-8">
        <TabsList className="flex space-x-4 border-b w-full overflow-x-auto">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="review">Review</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-4 text-sm text-gray-600">
          Premium noise-canceling wireless earbuds with 24-hour battery life. Experience crystal-clear sound quality and seamless Bluetooth connectivity. The ergonomic design ensures a comfortable fit for extended wear, while the included charging case provides additional power on the go. This premium product offers exceptional quality and performance, making it a favorite among our customers.
        </TabsContent>

        <TabsContent value="specifications" className="mt-4 text-sm text-gray-600">
          - Bluetooth 5.0<br />
          - 30-hour battery life<br />
          - Active Noise Cancellation<br />
          - Memory foam ear cushions<br />
          - USB-C Quick Charging<br />
        </TabsContent>

        <TabsContent value="review" className="mt-4 text-sm text-gray-600">
          143 reviews with a 4.8/5 star rating. Most users praised the audio quality, battery life, and comfort. A few mentioned improvements in noise cancellation over previous models.
        </TabsContent>
      </Tabs>

        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Wireless Noise-Cancelling Headphones</h1>
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <span className="text-gray-500 text-sm">(4.8). 143 reviews</span>
          </div>
          <div className="flex space-x-2 items-center">
            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">14% off</span>
            <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">In stock</span>
          </div>
          <div className="text-3xl font-semibold text-gray-800">$299.99 <span className="line-through text-gray-400 text-lg">$599.99</span></div>
          <p className="text-gray-600">Premium wireless headphones with active noise cancellation and 30-hour battery life. Perfect for immersive listening experiences whether you're traveling, working, or relaxing at home. Features include quick charging, comfortable over-ear design, and premium audio quality.</p>

          <div>
            <h3 className="font-semibold text-lg">Key Features</h3>
            <ul className="space-y-1 text-sm text-gray-700 mt-2">
              {["Active Noise Cancellation", "30-hour battery life", "Bluetooth 5.0 connectivity", "High resolution audio", "Comfortable memory foam cushion", "Quick charge (10min charge=5 hours playback)"].map((feature, i) => (
                <li key={i} className="flex items-center"><Check className="w-4 h-4 text-green-600 mr-2" /> {feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">Quantity</h3>
            <div className="w-[28%] md:w-[15%] flex items-center  mt-2 border rounded-lg">
              <Button onClick={decrement} size="icon" className="bg-white text-black hover:bg-white">-</Button>
              <span className="">{quantity}</span>
              <Button onClick={increment} size="icon" className="bg-white text-black hover:bg-white">+</Button>
            </div>
            <div className="text-sm text-gray-500 mt-1">Total: ${(quantity * 299.99).toFixed(2)}</div>
          </div>

          <div className="flex  mt-4 gap-4 md:w-[50%] w-[100%]">
            <Button variant="outline" className="w-[45%] md:w-[50%]">Add to Cart</Button>
            <Button  className="w-[45%] md:w-[50%]">Buy now</Button>
          </div>

          <div className="border p-3 rounded-lg bg-gray-50 mt-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Affiliate commission <span className="text-green-600">10%</span></p>
                <p className="text-xs text-gray-500">Earn $12.99 for each sale through your referral link.</p>
                <div className="bg-white border rounded px-2 py-1 text-xs mt-1 flex items-center justify-between">
                  https://affiliatehub.com/user1231 <Copy className="w-4 h-4 text-gray-500 ml-2" />
                </div>
              </div>
              <Share className="w-4 h-4 text-gray-500" />
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-4">
            <div className="flex items-center"><Truck className="w-4 h-4 mr-1" /> Free Shipping</div>
            <div className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1" /> 2-year manufacturer warranty</div>
          </div>
        </div>
      </div>

    
    </div>
  );
}