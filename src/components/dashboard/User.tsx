"use client";

import { useState } from "react";
import { Menu, Bell, LogOut, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, BarChart, Bar, XAxis } from "recharts";
import DashboardWidgets from "./DashboardWidgets";
import Notifications from "./Notifications";
import UserProductPage from "./UserProductPage";
import UploadProduct from "./UploadProduct";
import ReferralsDashboard from "./ReferralsDashboard";
import TrackingAnalytics from "./TrackingAnalytics";
import AffiliateLinks from "./AffiliateLinks";
import CreateLink from "./CreateLink";
import BlogPage from "./BlogPage";
import CreatePostPage from "./CreatePostPage";
import EarningsPayouts from "./EarningsPayouts";
import SettingsPage from "./SettingsPage";

const data = Array.from({ length: 30 }, (_, i) => ({
  name: `Jan ${i + 1}`,
  thisMonth: Math.floor(1000 + Math.random() * 4000),
  lastMonth: 3000,
}));

const navLinks = [
  { label: "Dashboard", value: "overview" },
  { label: "Upload Products", value: "upload" },
  { label: "Affiliate Links", value: "links" },
  { label: "Earnings & Payouts", value: "earnings" },
  { label: "Referrals", value: "referrals" },
  { label: "Tracking", value: "tracking" },
  { label: "Blog", value: "blog" },
  { label: "Message", value: "message" },
  { label: "Settings", value: "setting" },
];

function DashboardInfo() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Total Revenue</p>
            <h3 className="text-xl font-bold">$45,231.89</h3>
            <p className="text-xs text-green-500">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Clicks</p>
            <h3 className="text-xl font-bold">+2,350</h3>
            <p className="text-xs text-green-500">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Conversions</p>
            <h3 className="text-xl font-bold">+12,234</h3>
            <p className="text-xs text-green-500">+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Active Campaigns</p>
            <h3 className="text-xl font-bold">+573</h3>
            <p className="text-xs text-green-500">+201 since last hour</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <h4 className="font-bold mb-2">Revenue Overview</h4>
            <p className="text-sm text-gray-500">Total Revenue</p>
            <h3 className="text-lg font-bold">$45,231.89</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={data.map((d) => ({
                  ...d,
                  delta: d.thisMonth - d.lastMonth,
                }))}
              >
                <XAxis dataKey="name" hide />
                <Bar dataKey="lastMonth" stackId="a" fill="#d1d5db" barSize={10} radius={[4, 4, 0, 0]} />
                <Bar dataKey="delta" stackId="a" fill="#000000" barSize={10} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h4 className="font-bold mb-2">Recent Conversions</h4>
            <p className="text-sm text-gray-500 mb-4">You made 265 sales this month.</p>
            <div className="space-y-2">
              {[{ item: "Wireless Headphones", time: "2 hours ago", price: "$129.99" }, { item: "Smart Watch", time: "5 hours ago", price: "$249.99" }, { item: "Fitness Tracker", time: "1 day ago", price: "$89.99" }, { item: "Bluetooth Speaker", time: "2 days ago", price: "$79.99" }].map(({ item, time, price }) => (
                <div className="flex justify-between" key={item}>
                  <div>
                    <p className="font-semibold">{item}</p>
                    <p className="text-sm text-gray-500">{time}</p>
                  </div>
                  <p className="font-semibold">{price}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <DashboardWidgets />
    </>
  );
}


export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [status, setStatus] = useState("overview");

  const getHomeComponent = () => {
    switch (status) {
      case "overview":
        return <DashboardInfo />;
      case "upload":
        return <UploadProduct />;
      case "links":
        return <AffiliateLinks />;
      case "earnings":
        return <EarningsPayouts />;
      case "referrals":
        return <ReferralsDashboard />;
      case "tracking":
        return <TrackingAnalytics />
      case "blog":
        return <BlogPage />;
      case "message":
        return <div>Message</div>;
      case "setting":
        return <SettingsPage />;
       case "Notifications":
        return <Notifications />;
      //  case "Overview":
      //   return <div>Overview</div>;
       case "Products":
        return <UserProductPage />;
      default:
        return <DashboardInfo />;
    }
  };
  // CreateLink
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-white text-gray-950 p-4 w-60 space-y-4 hidden md:block fixed md:static top-0 left-0 h-full z-50 ${
          sidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <h1 className="text-lg font-bold mb-4">Dashboard</h1>
        <nav className="space-y-2">
          {navLinks.map(({ label, value }) => (
            <div
              key={label}
              onClick={() => setStatus(value)}
              className={`flex items-center space-x-2 cursor-pointer hover:bg-gray-800 p-2 rounded ${
                status === value ? "bg-gray-900 text-white" : ""
              }`}
            >
              <span>{label}</span>
            </div>
          ))}
        </nav>
        <div className="absolute bottom-4 left-4 text-red-500 flex items-center cursor-pointer">
          <LogOut className="mr-2 w-4 h-4" /> Logout
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-0 p-4 overflow-auto">
       {status === "overview" &&( <h2 className="text-2xl font-bold mb-4">Dashboard</h2>)}

       {status === "overview" && (<div className="w-full flex md:flex-row flex-col md:justify-between">
          <div className="flex space-x-2 mb-4">
            <Button variant="default" className="w-[10rem]" onClick={() => setStatus("Overview")}>Overview</Button>
            <Button variant="outline" className="w-[10rem]" onClick={() => setStatus("Notifications")}>Notifications</Button>
          </div>

          <Button variant="default" className="mb-4 ml-24 md:ml-0" onClick={() => setStatus("Products")}>Browse Products</Button>
        </div>)}

        {getHomeComponent()}
      </div>
    </div>
  );
}
