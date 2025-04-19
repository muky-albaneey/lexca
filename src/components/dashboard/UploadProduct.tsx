"use client";import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function UploadProduct() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [success, setSuccess] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    commission: '',
    url: '',
    videoUrl: '',
    trackingId: '',
    slug: '',
  });

  const categories = [
    'Electronics',
    'Home & kitchen',
    'Fashion',
    'health & Beauty',
    'Sports & Outdoors',
  ];

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setCategoryOpen(false);
  };
  const handleSaveDraft = async () => {
    const token = localStorage.getItem('authToken');
  
    const payload = {
      ...formData,
      category,
      status: 'draft', // 👈 Add status explicitly
      images: images.map((img) => URL.createObjectURL(img)), // Adjust image upload as needed
    };
  
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
  
      const result = await res.json();
  
      if (result.success) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);
      } else {
        alert(result.error || 'Failed to save draft.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong!');
    }
  };
  
  const handlePublish = async () => {
    const token = localStorage.getItem('authToken'); // or however you store it
  
    const payload = {
      ...formData,
      category,
      images: images.map((img) => URL.createObjectURL(img)), // Placeholder, consider uploading first
    };
  
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // ✅ Add token here
        },
        body: JSON.stringify(payload),
      });
  
      const result = await res.json();
  
      if (result.success) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);
      } else {
        alert(result.error || 'Failed to publish product.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong!');
    }
  };
  
  
  

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files].slice(0, 5));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setImages((prev) => [...prev, ...files].slice(0, 5));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const updateField = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-10">
      <h1 className="text-2xl font-bold mb-4">Upload Products</h1>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3 border p-4 rounded-xl">
          <h2 className="font-semibold text-lg">Product Information</h2>
          <p className="text-sm text-gray-500 mb-4">Enter the details of the product you want to promote.</p>

          <label className="block mb-2">Product Name</label>
          <input type="text" value={formData.name} onChange={(e) => updateField('name', e.target.value)} placeholder="Enter product name" className="w-full border p-2 rounded mb-4" />

          <label className="block mb-2">Product Description</label>
          <textarea value={formData.description} onChange={(e) => updateField('description', e.target.value)} placeholder="Enter product description" className="w-full border p-2 rounded mb-4 h-24"></textarea>

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block mb-2">Price ($)</label>
              <input type="number" value={formData.price} onChange={(e) => updateField('price', e.target.value)} className="w-full border p-2 rounded" placeholder="0.00" />
            </div>
            <div className="w-1/2">
              <label className="block mb-2">Commission (%)</label>
              <input type="number" value={formData.commission} onChange={(e) => updateField('commission', e.target.value)} className="w-full border p-2 rounded" placeholder="10" />
            </div>
          </div>

          <label className="block mb-2">Category</label>
          <div className="relative mb-4">
            <button onClick={() => setCategoryOpen(!categoryOpen)} className="w-full border p-2 rounded text-left">
              {category || 'Select category'}
            </button>
            {categoryOpen && (
              <div className="absolute z-10 bg-white border rounded w-full mt-1 shadow">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className={`p-2 cursor-pointer hover:bg-gray-100 ${
                      cat === category ? 'bg-black text-white' : ''
                    }`}
                  >
                    {cat}
                  </div>
                ))}
              </div>
            )}
          </div>

          <label className="block mb-2">Product URL</label>
          <input type="url" value={formData.url} onChange={(e) => updateField('url', e.target.value)} className="w-full border p-2 rounded mb-4" placeholder="https://example.com/product" />
        </div>

        <div className="w-full md:w-1/3 border p-4 rounded-xl">
          <h2 className="font-semibold text-lg">Product Images</h2>
          <p className="text-sm text-gray-500 mb-2">Upload images of the product. You can upload up to 5 images.</p>

          <div
            className="border-2 border-dashed rounded p-6 flex flex-col items-center justify-center text-center mb-4 cursor-pointer"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <p className="mb-2">Drag & drop files here, or click to browse</p>
            <label className="bg-black text-white px-4 py-1 rounded cursor-pointer">
              Browse Files
              <input type="file" multiple accept="image/*" className="hidden" onChange={handleFileChange} />
            </label>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {images.map((img, idx) => (
              <div key={idx} className="border rounded overflow-hidden relative w-full h-20">
                <Image
                  src={URL.createObjectURL(img)}
                  alt={`preview-${idx}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <label className="block mb-2">Video URL (Optional)</label>
          <input type="url" value={formData.videoUrl} onChange={(e) => updateField('videoUrl', e.target.value)} className="w-full border p-2 rounded" placeholder="https://youtube.com/watch?v=..." />
        </div>
      </div>

      <div className="border p-4 mt-4 rounded-xl">
        <h2 className="font-semibold text-lg">Affiliate Settings</h2>
        <p className="text-sm text-gray-500 mb-4">Configure how this product will be promoted through your affiliate links.</p>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input type="text" value={formData.trackingId} onChange={(e) => updateField('trackingId', e.target.value)} className="w-full border p-2 rounded" placeholder="your-tracking-id" />
          <input type="text" value={formData.slug} onChange={(e) => updateField('slug', e.target.value)} className="w-full border p-2 rounded" placeholder="product-name" />
        </div>

        <div className="flex gap-4">
          <button onClick={handleSaveDraft} className="bg-black text-white px-4 py-2 rounded">Save as Draft</button>
          <button onClick={handlePublish} className="border border-black px-4 py-2 rounded">Publish Product</button>
        </div>
      </div>

      {success && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
            <p className="font-semibold text-lg mb-2">Product Upload Successful!</p>
            <CheckCircle className="text-black" size={32} />
          </div>
        </div>
      )}
    </div>
  );
}
