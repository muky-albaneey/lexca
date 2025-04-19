import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const categories = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Sport & Outdoor",
  "Beauty & Personal Care"
];

export default function AddProduct() {
  const [category, setCategory] = useState("");
  const [published, setPublished] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-4 gap-4">
      <div className="w-full lg:w-3/4 space-y-4">
        <Button variant="ghost" className="flex items-center gap-2 text-sm">
          <ChevronLeft size={16} /> Back to Products
        </Button>

        <h1 className="text-2xl font-bold">Add New Product</h1>
        <p className="text-gray-500">Create a new product to sell on your platform.</p>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="pricing">Pricing & Inventory</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <div className="space-y-4 border p-4 rounded-xl">
              <h2 className="text-xl font-semibold">Basic Information</h2>
              <p className="text-sm text-gray-500">Enter the basic details of your product.</p>
              <Input placeholder="Enter product name" />
              <Textarea placeholder="Enter product description" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <select
                    className="w-full border rounded-md p-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Select category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <Input placeholder="Enter brand name" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pricing">
            <div className="space-y-4 border p-4 rounded-xl">
              <h2 className="text-xl font-semibold">Pricing & Inventory</h2>
              <p className="text-sm text-gray-500">
                Set your product's pricing and inventory details.
              </p>
              <Input placeholder="Enter price" />
              <Input placeholder="Enter sale price" />
              <Input placeholder="Enter quantity" />
              <div>
                <label className="block mb-1">Affiliate Commission</label>
                <Input value="10%" readOnly />
                <p className="text-xs text-gray-500 mt-1">
                  This is the percentage of the sale price that affiliates will earn for each sale.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="media">
            <div className="space-y-4 border p-4 rounded-xl">
              <h2 className="text-xl font-semibold">Product Image</h2>
              <p className="text-sm text-gray-500">
                Upload images of your product. The first image will be the featured image.
              </p>
              <div className="border border-dashed border-gray-400 rounded-md p-6 flex items-center justify-center text-center text-gray-500">
                <div>
                  <span className="text-2xl">🖼️</span>
                  <p>Click to upload or drag and drop, png, jpeg, max 5mb</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="w-full lg:w-1/4 space-y-4">
        <div className="border p-4 rounded-xl">
          <h2 className="text-lg font-semibold">Product Status</h2>
          <p className="text-sm text-gray-500 mb-4">Control the visibility and status of your product.</p>
          <div className="flex items-center justify-between mb-2">
            <span>Published</span>
            <Switch checked={published} onCheckedChange={setPublished} />
          </div>
          <div className="flex items-center justify-between mb-4">
            <span>Featured</span>
            <Switch checked={featured} onCheckedChange={setFeatured} />
          </div>
          <Dialog open={showDialog} onOpenChange={setShowDialog}>
                    <DialogTrigger asChild>
                      <Button className="w-full" onClick={() => setShowDialog(true)}>
                        Save Product
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Saved Successfully</DialogTitle>
                        <DialogDescription>
                          Your product has been saved successfully.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
        </div>

        <div className="border p-4 rounded-xl">
          <h2 className="text-lg font-semibold">Preview</h2>
          <p className="text-sm text-gray-500 mb-4">See how your product will look.</p>
          <div className="border border-dashed border-gray-400 rounded-md p-6 text-center">
            <span className="text-2xl">🖼️</span>
            <p className="mt-2 font-semibold">Product Name</p>
            <p className="text-sm">$0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
