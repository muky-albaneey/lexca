import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Eye, MessageSquare, Share2 } from 'lucide-react';

const posts = [
  {
    title: 'The Ultimate Guide to Affiliate Marketing',
    category: 'Affiliate Marketing',
    date: '2023-08-15',
    status: 'Published',
    views: '12,452',
    comments: '342',
    shares: '562'
  },
  {
    title: '5 Tips to Boost Your Conversion Rate',
    category: 'Conversion Optimization',
    date: '2023-08-10',
    status: 'Published',
    views: '9,878',
    comments: '212',
    shares: '321'
  },
  {
    title: 'How to Choose the Right Affiliate Program',
    category: 'Affiliate Marketing',
    date: '2023-08-08',
    status: 'Published',
    views: '7,654',
    comments: '156',
    shares: '234'
  },
  {
    title: 'The Future of Digital Marketing',
    category: 'Digital Marketing',
    date: '2023-08-01',
    status: 'Published',
    views: '5,432',
    comments: '96',
    shares: '145'
  },
  {
    title: 'Email Marketing for Affiliates',
    category: 'Email Marketing',
    date: '2023-07-25',
    status: 'Draft',
    views: '0',
    comments: '0',
    shares: '0'
  }
];

const statusColor = {
  Published: 'bg-green-100 text-green-700',
  Draft: 'bg-yellow-100 text-yellow-700'
};

export default function BlogManagementPage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Blog Management</h1>
      <p className="text-muted-foreground">Create, edit, and manage blog content to drive traffic and engagement.</p>

      <div className="flex flex-col sm:flex-row gap-2 justify-between items-center">
        <Input className="sm:w-1/3" placeholder="Search posts..." />
        <Button onClick={() => setDialogOpen(true)}>Create New Post</Button>
      </div>

      <Card className="p-4 space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Blog Posts</h2>
          <p className="text-muted-foreground">Manage your published and draft posts</p>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="bg-gray-100 w-full justify-start">
            <TabsTrigger value="all">All Posts</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="border-b text-left">
              <tr>
                <th className="p-2">Title</th>
                <th className="p-2">Category</th>
                <th className="p-2">Date</th>
                <th className="p-2">Status</th>
                <th className="p-2">Stats</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2 whitespace-nowrap">{post.title}</td>
                  <td className="p-2 whitespace-nowrap">{post.category}</td>
                  <td className="p-2 whitespace-nowrap">{post.date}</td>
                  <td className="p-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${statusColor[post.status]}`}>{post.status}</span>
                  </td>
                  <td className="p-2 flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1"><Eye className="w-4 h-4" /> {post.views}</div>
                    <div className="flex items-center gap-1"><MessageSquare className="w-4 h-4" /> {post.comments}</div>
                    <div className="flex items-center gap-1"><Share2 className="w-4 h-4" /> {post.shares}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-sm text-muted-foreground">Showing 5 of 5 posts</div>
        <div className="flex justify-end gap-2">
          <Button variant="outline">Previous</Button>
          <Button variant="outline">Next</Button>
        </div>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Create New Post</DialogTitle>
            <p className="text-sm text-muted-foreground">Fill in the details below to create a new blog post. You can save as draft or publish immediately.</p>
          </DialogHeader>

          <div className="space-y-4">
            <Input placeholder="Enter a compelling title" />

            <div className="flex flex-col sm:flex-row gap-4">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Affiliate Marketing">Affiliate Marketing</SelectItem>
                  <SelectItem value="Conversion Optimization">Conversion Optimization</SelectItem>
                  <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                  <SelectItem value="Email Marketing">Email Marketing</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Draft" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Draft">Draft</SelectItem>
                  <SelectItem value="Published">Published</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Input placeholder="Brief summary of your post (Appears in preview)" />
            <Textarea placeholder="Write your blog post content here" className="h-32" />

            <div className="flex gap-4 text-sm text-muted-foreground">
              <Button variant="ghost" className="gap-1"><span role="img">📁</span> Upload media</Button>
              <Button variant="ghost" className="gap-1"><span role="img">🔗</span> Attach url</Button>
            </div>
          </div>

          <DialogFooter className="pt-4">
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button>Save as Draft</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
