"use client";

import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Circle } from 'lucide-react';

const notificationsData = [
  {
    id: 1,
    title: "New Sale Completed",
    description: "You earned $24.99 commission from Wireless Headphones sale.",
    time: "2 hours ago",
    icon: "$",
    type: "sale",
    isRead: false
  },
  {
    id: 2,
    title: "Payout Processed",
    description: "Your payout of $1,250.00 has been processed and will arrive in 2-3 business days.",
    time: "Yesterday",
    icon: "P",
    type: "sale",
    isRead: false
  },
  {
    id: 3,
    title: "New Product Available",
    description: "A new product in Electronics category is available for promotion.",
    time: "2 days ago",
    icon: "📦",
    type: "product",
    isRead: true
  },
  {
    id: 4,
    title: "Commission Rate Increased",
    description: "Your commission rate for Electronics category has increased to 12%.",
    time: "3 days ago",
    icon: "📈",
    type: "sale",
    isRead: true
  },
  {
    id: 5,
    title: "New Follower",
    description: "Sarah Johnson started following your profile.",
    time: "5 days ago",
    icon: "👤",
    type: "social",
    isRead: true
  },
  {
    id: 6,
    title: "Trending Product Alert",
    description: "Smart Home Hub is trending. Consider promoting it now.",
    time: "1 week ago",
    icon: "🔥",
    type: "product",
    isRead: true
  },
  {
    id: 7,
    title: "New Comment on Your Post",
    description: "Michael Chen commented on your review of Wireless Earbuds.",
    time: "1 week ago",
    icon: "💬",
    type: "social",
    isRead: true
  },
  {
    id: 8,
    title: "Limited Time Offer",
    description: "Increase your commission to 15% for the next 48 hours on all Home products.",
    time: "1 week ago",
    icon: "⏰",
    type: "sale",
    isRead: true
  },
  {
    id: 9,
    title: "New Sale Completed",
    description: "You earned $18.50 commission from Smart Watch sale.",
    time: "2 weeks ago",
    icon: "$",
    type: "sale",
    isRead: true
  },
  {
    id: 10,
    title: "Account Milestone",
    description: "Congratulations! You've reached 100 sales this month.",
    time: "2 weeks ago",
    icon: "🏆",
    type: "sale",
    isRead: true
  }
];

export default function Notifications() {
  const [selectedTab, setSelectedTab] = useState<'all' | 'sales'>('all');
  const [notifications, setNotifications] = useState(notificationsData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredNotifications =
    selectedTab === 'all'
      ? notifications
      : notifications.filter(n => n.type === 'sale');

  const totalPages = Math.ceil(filteredNotifications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNotifications = filteredNotifications.slice(startIndex, startIndex + itemsPerPage);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <Button onClick={markAllAsRead} className="bg-black text-white">Mark all as read</Button>
      </div>
      <p className="text-sm text-gray-500 mb-4">View all your recent notifications and alerts.</p>

      <div className="flex space-x-2 mb-4">
        <Button
          variant={selectedTab === 'all' ? 'default' : 'outline'}
          onClick={() => { setSelectedTab('all'); setCurrentPage(1); }}
        >
          All
        </Button>
        <Button
          variant={selectedTab === 'sales' ? 'default' : 'outline'}
          onClick={() => { setSelectedTab('sales'); setCurrentPage(1); }}
        >
          Sales
        </Button>
      </div>

      <div className="space-y-2">
        {paginatedNotifications.map((notif) => (
          <Card key={notif.id} className="flex items-start justify-between p-4 border rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="text-xl w-6 h-6 flex items-center justify-center">
                {notif.icon}
              </div>
              <div>
                <p className="font-medium text-sm">{notif.title}</p>
                <p className="text-sm text-gray-500 max-w-md">{notif.description}</p>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-1 text-sm text-gray-500">
              <span>{notif.time}</span>
              {!notif.isRead && <Circle className="w-2 h-2 fill-black text-black" />}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>Showing {paginatedNotifications.length} of {filteredNotifications.length} notifications</span>
        <div className="space-x-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
