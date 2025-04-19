"use client";
import { useState, useRef } from "react";
import { Switch } from "@headlessui/react";
import { CheckCircle } from "lucide-react";


export default function CreatePostPage() {
  const [allowComments, setAllowComments] = useState(false);
  const [featuredPost, setFeaturedPost] = useState(false);
  const [seoOptimized, setSeoOptimized] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDraftModal, setShowDraftModal] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postCategory, setPostCategory] = useState('SEO');
  const [postExcerpt, setPostExcerpt] = useState('');
  const [postTags, setPostTags] = useState('affiliate, marketing');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [postUrl, setPostUrl] = useState('');

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            setImages((prev) => [...prev, reader.result as string]);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(event.target.files);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleFiles(event.dataTransfer.files);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePublish = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("User is not authenticated.");
      return;
    }
  
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const userEmail = decodedToken.email;
  
      // Gather the data to be sent
      const postData = {
        title: postTitle, // Use state for dynamic data
        url: postUrl || postTitle.toLowerCase().replace(/\s+/g, '-'),
        content: postContent, // Use state for dynamic data
        category: postCategory, // Use state for dynamic data
        excerpt: postExcerpt, // Use state for dynamic data
        tags: postTags.split(',').map(tag => tag.trim()), // Convert string to array
        allowComments,
        featuredPost,
        seoOptimized,
        images, // Include images here
      };
  
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log("Post created:", result);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        console.error("Error creating post:", result);
        alert("Error creating post.");
      }
    } catch (err) {
      console.error("Error publishing post:", err);
      alert("Error publishing post.");
    }
  };

  const handleSaveDraft = () => {
    setShowDraftModal(true);
    setTimeout(() => setShowDraftModal(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 text-black">
      <div className="flex items-center mb-6">
        <button className="text-2xl font-bold mr-2">←</button>
        <h1 className="text-2xl font-bold">Create New Post</h1>
        <div className="ml-auto flex gap-2">
          <button
            onClick={handleSaveDraft}
            className="border px-4 py-2 rounded bg-white text-black"
          >
            Save as Draft
          </button>
          <button
            onClick={handlePublish}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Publish Post
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Left side */}
        <div className="flex flex-col gap-4">
          <div className="border rounded p-4">
            <label className="block text-sm font-semibold mb-1">Post Title</label>
            <input
              className="w-full border rounded p-2"
              placeholder="Enter a descriptive title"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)} // Bind to state
            />
            <label className="block text-sm font-semibold mt-4 mb-1">Url (Optional)</label>
            <input
              className="w-full border rounded p-2"
              placeholder="Enter post url"
              value={postUrl}
              onChange={(e) => setPostUrl(e.target.value)}
            />

            <label className="block text-sm font-semibold mt-4 mb-1">Content</label>
            <textarea
              className="w-full border rounded p-2 min-h-[200px]"
              placeholder="Write your blog post content here..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)} // Bind to state
            ></textarea>
          </div>

          <div className="border rounded p-4">
            <h2 className="font-semibold mb-1">Featured Image</h2>
            <p className="text-sm text-gray-500 mb-4">
              Upload one or more images to be displayed as featured images for this post.
            </p>

            <div
              className="border border-dashed rounded p-6 text-center text-sm text-gray-500 cursor-pointer"
              onClick={handleClick}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              {images.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {images.map((img, index) => (
                    <div key={index} className="relative">
                      <img
                        src={img}
                        alt={`Uploaded ${index}`}
                        className="w-full h-32 object-cover rounded"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-black text-white rounded-full w-6 h-6 text-xs"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="mb-2 text-2xl">📷</div>
                  Drag & drop images here, or click to browse
                </>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />

            <button
              className="mt-4 bg-black text-white px-4 py-2 rounded"
              onClick={handleClick}
            >
              Upload Image
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-4">
          <div className="border rounded p-4">
            <h2 className="font-semibold text-lg mb-1">Post Settings</h2>
            <p className="text-sm text-gray-500 mb-4">
              Configure your post settings and metadata.
            </p>
            <label className="block text-sm font-semibold mb-1">Category</label>
            <select
              className="w-full border rounded p-2 mb-4"
              value={postCategory}
              onChange={(e) => setPostCategory(e.target.value)} // Bind to state
            >
              <option>SEO</option>
              <option>Email Marketing</option>
              <option>Audience Building</option>
              <option>Content Creation</option>
              <option>Social Media</option>
            </select>
            <label className="block text-sm font-semibold mb-1">Excerpt</label>
            <textarea
              className="w-full border rounded p-2 mb-1"
              placeholder="Write a short excerpt for your post..."
              value={postExcerpt}
              onChange={(e) => setPostExcerpt(e.target.value)} // Bind to state
            />
            <p className="text-xs text-gray-500 mb-4">
              This will be displayed on the blog listing page.
            </p>
            <label className="block text-sm font-semibold mb-1">Tags</label>
            <input
              className="w-full border rounded p-2"
              value={postTags}
              onChange={(e) => setPostTags(e.target.value)} // Bind to state
              placeholder="affiliate, marketing, tips (comma separated)"
            />
          </div>

          <div className="border rounded p-4">
            <h2 className="font-semibold text-lg mb-4">Publishing Options</h2>
            <div className="flex items-center justify-between mb-2">
              <span>Allow Comments</span>
              <Switch
                checked={allowComments}
                onChange={setAllowComments}
                className={`${allowComments ? "bg-black" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition" />
              </Switch>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Featured Post</span>
              <Switch
                checked={featuredPost}
                onChange={setFeaturedPost}
                className={`${featuredPost ? "bg-black" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition" />
              </Switch>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>SEO Optimized</span>
              <Switch
                checked={seoOptimized}
                onChange={setSeoOptimized}
                className={`${seoOptimized ? "bg-black" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition" />
              </Switch>
            </div>
            <button
              onClick={handlePublish}
              className="mt-4 bg-black text-white px-4 py-2 w-full rounded"
            >
              Publish Post
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow text-center">
            <p className="mb-2 text-lg font-medium">Blog post created successfully!</p>
            <CheckCircle className="mx-auto text-green-600" size={32} />
          </div>
        </div>
      )}

      {showDraftModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white px-6 py-4 rounded shadow text-center text-lg">
            Draft saved!
          </div>
        </div>
      )}
    </div>
  );
}
