"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";

const Widget = ({ title, subtitle, children }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-2xl p-4 w-full">
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full text-left"
        >
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {open && <div className="mt-4">{children}</div>}
      </div>

      <div className="hidden md:block">
        <div className="flex items-center justify-between w-full text-left">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default function DashboardWidgets() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Top Products */}
      <Widget
        title="Top Products"
        subtitle="Your best performing products this month."
      >
        <div className="space-y-4">
          <div className="flex justify-between">
            <div>
              <p className="font-medium">Wireless Earbuds</p>
              <p className="text-sm text-muted-foreground">Electronics</p>
            </div>
            <div className="text-right">
              <p className="font-medium">$12.50</p>
              <p className="text-sm text-muted-foreground">156 sales</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="font-medium">Smart Home Hub</p>
              <p className="text-sm text-muted-foreground">Home</p>
            </div>
            <div className="text-right">
              <p className="font-medium">$24.99</p>
              <p className="text-sm text-muted-foreground">129 sales</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="font-medium">Fitness Tracker</p>
              <p className="text-sm text-muted-foreground">Health</p>
            </div>
            <div className="text-right">
              <p className="font-medium">$9.99</p>
              <p className="text-sm text-muted-foreground">104 sales</p>
            </div>
          </div>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-xl font-medium text-sm flex items-center justify-center gap-2">
            View All Products <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </Widget>

      {/* Recent Links */}
      <Widget
        title="Recent Links"
        subtitle="Your recently created affiliate links."
      >
        <div className="space-y-4">
          <div className="flex justify-between">
            <div>
              <p className="font-medium">Summer Sale Campaign</p>
              <p className="text-sm text-muted-foreground">https://amzn.to/summer-sale</p>
            </div>
            <div className="text-right">
              <p className="font-medium">423 clicks</p>
              <p className="text-sm text-muted-foreground">2 days ago</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="font-medium">Tech Gadgets Review</p>
              <p className="text-sm text-muted-foreground">https://amzn.to/tech-review</p>
            </div>
            <div className="text-right">
              <p className="font-medium">287 clicks</p>
              <p className="text-sm text-muted-foreground">5 days ago</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="font-medium">Home Office Essentials</p>
              <p className="text-sm text-muted-foreground">https://amzn.to/home-office</p>
            </div>
            <div className="text-right">
              <p className="font-medium">156 clicks</p>
              <p className="text-sm text-muted-foreground">1 week ago</p>
            </div>
          </div>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-xl font-medium text-sm flex items-center justify-center gap-2">
            View All Links <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </Widget>

      {/* Upcoming Payouts */}
      <Widget
        title="Upcoming Payouts"
        subtitle="Your scheduled earnings payouts."
      >
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">$1,250.00</p>
              <p className="text-sm text-muted-foreground">July 15, 2023</p>
            </div>
            <span className="border px-3 py-1 rounded-full text-xs">Scheduled</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">$890.75</p>
              <p className="text-sm text-muted-foreground">August 1, 2023</p>
            </div>
            <span className="border px-3 py-1 rounded-full text-xs">Pending</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">$1,890.50</p>
              <p className="text-sm text-muted-foreground">August 15, 2023</p>
            </div>
            <span className="border px-3 py-1 rounded-full text-xs">Pending</span>
          </div>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-xl font-medium text-sm flex items-center justify-center gap-2">
            View Earnings <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </Widget>
    </div>
  );
}
