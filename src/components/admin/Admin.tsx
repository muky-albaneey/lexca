"use client";import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  ArrowDownRight,
  ShoppingCart,
  Users,
  TrendingUp,
  DollarSign,
  RefreshCcw,
  Star,
  LineChart as ChartIcon,
  Truck,
  ShieldCheck,
  ChevronLeft, ChevronRight,
  Link,
  Percent,
  BarChart3,
  PieChart,
  UserPlus,
  FileText,
  Eye,
  Share2,
} from "lucide-react";
import {
    LayoutDashboard,
    User,
    BookOpen,
    Settings,
  } from "lucide-react";
import { AdminUseStatusStore } from "@/store/nav";
import ProductManagement from "./ProductManagement";
import AddProduct from "./AddProduct";
import PlatformSettings from "./PlatformSettings";
import EarningsDashboard from "./EarningsPage";
import ReferralManagement from "./ReferralManagement";
import UserManagement from "./UserManagement";
import BlogManagementPage from "./BlogManagementPage";
import AdminHeader from "./AdminHeader";
  


function Dashboard(){
    const statCards = [
        {
          title: "Total Revenue",
          value: "$12,456.78",
          trend: "+12.5% from last month",
          icon: <DollarSign className="text-green-600" />,
        },
        {
          title: "Active Products",
          value: "245",
          trend: "+3.3% from last month",
          icon: <ShoppingCart className="text-purple-600" />,
        },
        {
          title: "Total Users",
          value: "1,245",
          trend: "+18.2% from last month",
          icon: <Users className="text-blue-600" />,
        },
        {
          title: "Conversion Rate",
          value: "3.2%",
          trend: "+0.63% from last month",
          icon: <TrendingUp className="text-orange-600" />,
        },
      ];
    
      const salesData = [
        { month: "Jan", sales: 4000, commission: 1400 },
        { month: "Feb", sales: 3000, commission: 1200 },
        { month: "Mar", sales: 5000, commission: 1800 },
        { month: "Apr", sales: 4000, commission: 1400 },
        { month: "May", sales: 3000, commission: 1300 },
        { month: "Jun", sales: 2000, commission: 1100 },
        { month: "Jul", sales: 2780, commission: 1000 },
        { month: "Aug", sales: 1890, commission: 800 },
        { month: "Sep", sales: 2390, commission: 900 },
        { month: "Oct", sales: 3490, commission: 1200 },
        { month: "Nov", sales: 4000, commission: 1400 },
        { month: "Dec", sales: 4500, commission: 1600 },
      ];
    return (
        <>
            <div className="flex justify-center md:justify-end items-center mb-6">
          {/* <h1 className="text-1xl md:text-2xl font-bold">Analytics Overview</h1> */}
          <Button variant="outline" className="flex items-center gap-2">
            <RefreshCcw className="w-4 h-4" /> Refresh Data
          </Button>
        </div>

        {/* Stat Cards */}
        <div className="flex flex-col gap-4 justify-center items-center ">
  
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {statCards.map((card, idx) => (
                    <Card key={idx} className="p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm text-gray-500">{card.title}</div>
                            <div className="text-2xl font-bold">{card.value}</div>
                            <div className="text-sm text-green-600 mt-1">{card.trend}</div>
                        </div>
                        <div
                            className={`w-10 h-10 flex items-center justify-center rounded-full text-white`}
                            style={{ backgroundColor: card.color }}
                        >
                            {card.icon}
                        </div>
                        </div>
                    </Card>
                    ))}
                </div>
           </div>


        {/* Sales Chart */}
      {/* Sales & Products Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Sales Performance */}
        <Card className="col-span-2">
            <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
                <CardTitle className="text-lg">Sales Performance</CardTitle>
                <p className="text-sm text-gray-500">Monthly revenue and commission trends</p>
            </div>
            <div className="flex items-center gap-4">
                <Tabs defaultValue="year" className="space-x-2">
                <TabsList>
                    <TabsTrigger value="month">Month</TabsTrigger>
                    <TabsTrigger value="quarter">Quarter</TabsTrigger>
                    <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
                </Tabs>
                <Button className="bg-purple-100 text-purple-700 px-4 py-1 text-sm rounded-full">Overview</Button>
            </div>
            </CardHeader>
            <CardContent className="pb-6">
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={salesData}>
                <defs>
                    <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.7} />
                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="commissionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#818cf8" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="sales" stroke="#7c3aed" fill="url(#salesGradient)" name="Sales ($)" />
                <Area type="monotone" dataKey="commission" stroke="#818cf8" fill="url(#commissionGradient)" name="Commission ($)" />
                </AreaChart>
            </ResponsiveContainer>

            {/* Bottom Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 text-center mt-6 gap-4">
                <div>
                <div className="text-sm text-gray-500">Total Sales</div>
                <div className="text-xl font-bold">$18,452</div>
                <div className="text-green-600 text-sm">+12.5% from last month</div>
                </div>
                <div>
                <div className="text-sm text-gray-500">Commissions</div>
                <div className="text-xl font-bold">$4,320</div>
                <div className="text-green-600 text-sm">+8.2% from last month</div>
                </div>
                <div>
                <div className="text-sm text-gray-500">Refunds</div>
                <div className="text-xl font-bold">$1,280</div>
                <div className="text-red-500 text-sm">-3.1% from last month</div>
                </div>
            </div>
            </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="flex flex-col justify-between">
            <CardHeader>
            <div className="flex items-center justify-between">
                <div>
                <CardTitle>Top Products</CardTitle>
                <p className="text-sm text-gray-500">Best performing affiliate products</p>
                </div>
                <RefreshCcw className="w-4 h-4 text-gray-400 cursor-pointer" />
            </div>
            </CardHeader>
            <CardContent className="space-y-4">
            {[
                {
                name: "Premium Headphones",
                category: "Electronics",
                tag: "HOT",
                sales: 42,
                change: "+12%",
                revenue: "$1,050.00",
                },
                {
                name: "Fitness Tracker Pro",
                category: "Health",
                sales: 28,
                change: "+8%",
                revenue: "$518.00",
                },
                {
                name: "Organic Skincare Set",
                category: "Beauty",
                tag: "HOT",
                sales: 35,
                change: "+15%",
                revenue: "$446.25",
                },
                {
                name: "Organic Skincare Set",
                category: "Beauty",
                tag: "HOT",
                sales: 35,
                change: "+15%",
                revenue: "$446.25",
                },
            ].map((product, index) => (
                <div key={index} className="flex justify-between items-start text-sm">
                <div>
                    <div className="font-medium">{product.name}</div>
                    <div className="flex items-center gap-2 text-xs mt-1">
                    <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">{product.category}</span>
                    {product.tag && (
                        <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full">HOT</span>
                    )}
                    <span className="text-gray-500">{product.sales} sales</span>
                    <span className="text-green-600">↑ {product.change}</span>
                    </div>
                </div>
                <div className="text-green-600 font-medium">{product.revenue}</div>
                </div>
            ))}
            </CardContent>
            <div className="flex items-center justify-center gap-6 p-4 text-gray-400 text-xl">
            <ChevronLeft className="cursor-pointer" />
            <ChevronRight className="cursor-pointer" />
            </div>
        </Card>
        </div>
        {/* Referral Analytics & Traffic Sources */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Referral Analytics */}
        <Card className="lg:col-span-2">
            <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <CardTitle>Referral Analytics</CardTitle>
                <p className="text-sm text-gray-500">Performance metrics for your referral program</p>
            </div>
            <div>
                <Button variant="outline" className="text-sm px-3 py-1.5">Last 7 days</Button>
            </div>
            </CardHeader>
            <CardContent className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                {
                    title: "Total Clicks",
                    icon: Link,
                    value: "24,521",
                    change: "+18.2%",
                },
                {
                    title: "Conversions",
                    icon: DollarSign,
                    value: "1,024",
                    change: "+5.3%",
                },
                {
                    title: "Conv. Rate",
                    icon: Percent,
                    value: "4.2%",
                    change: "+0.8%",
                },
                ].map((stat, index) => (
                <div
                    key={index}
                    className="rounded-xl border p-4 flex items-center gap-4"
                >
                    <div className="bg-purple-100 text-purple-600 rounded-full p-2">
                    <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <p className="text-lg font-medium">{stat.value}</p>
                    <p className="text-xs text-green-600">{stat.change} from last period</p>
                    </div>
                </div>
                ))}
            </div>

            {/* Chart Placeholder */}
            <div className="rounded-xl bg-purple-50 py-12 flex flex-col items-center justify-center text-purple-400 text-sm">
                <BarChart3 className="w-8 h-8 mb-2" />
                Referral Conversion Chart
            </div>
            </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
            <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <p className="text-sm text-gray-500">Where your visitors are coming from</p>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
            {/* Chart Placeholder */}
            <div className="rounded-xl bg-purple-50 py-10 flex flex-col items-center justify-center text-purple-400 text-sm">
                <PieChart className="w-8 h-8 mb-2" />
                Traffic Sources Chart
            </div>

            {/* Legend */}
            <ul className="space-y-1 text-sm">
                <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-600" />
                    Direct
                </div>
                <span>42%</span>
                </li>
                <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-orange-500" />
                    Organic Search
                </div>
                <span>28%</span>
                </li>
                <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    Referral
                </div>
                <span>15%</span>
                </li>
                <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-pink-500" />
                    Social
                </div>
                <span>10%</span>
                </li>
                <li className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gray-500" />
                    Other
                </div>
                <span>5%</span>
                </li>
            </ul>
            </CardContent>
        </Card>
        </div>

    {/* Affiliates & Activity */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Top Affiliates */}
        <Card>
            <CardHeader>
            <CardTitle>Top Affiliates</CardTitle>
            <p className="text-sm text-gray-500">Your best performing partners</p>
            </CardHeader>
            <CardContent className="space-y-4">
            {[
                {
                name: "John Smith",
                email: "john.smith@example.com",
                sales: 42,
                earnings: "$1,250.00",
                change: "+2%",
                },
                {
                name: "Sarah Johnson",
                email: "sarah.j@example.com",
                sales: 38,
                earnings: "$980.00",
                change: "+3%",
                },
                {
                name: "Michael Brown",
                email: "m.brown@example.com",
                sales: 35,
                earnings: "$875.25",
                change: "+5%",
                },
            ].map((affiliate, index) => (
                <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg font-semibold text-gray-500">
                        {affiliate.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {index + 1}
                    </div>
                    </div>
                    <div>
                    <div className="font-medium">{affiliate.name}</div>
                    <div className="text-xs text-gray-500">{affiliate.email}</div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-green-600 font-medium">{affiliate.earnings}</div>
                    <div className="text-xs text-gray-500">{affiliate.sales} sales</div>
                    <div className="text-xs text-green-600">{affiliate.change}</div>
                </div>
                </div>
            ))}
            </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
            <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <p className="text-sm text-gray-500">Latest platform events</p>
            </CardHeader>
            <CardContent className="space-y-5">
            {[
                {
                type: "New Sale",
                tag: "New",
                detail: "Premium Headphones purchased",
                time: "5 minutes ago",
                amount: "$250.00",
                icon: ShoppingCart,
                color: "green-500",
                },
                {
                type: "New User",
                tag: "New",
                detail: "Jane Doe joined as affiliate",
                time: "1 hour ago",
                icon: UserPlus,
                color: "blue-500",
                },
                {
                type: "Blog Post Published",
                detail: "Top 10 Tech Gadgets of 2023",
                time: "3 hours ago",
                icon: FileText,
                color: "purple-500",
                },
                {
                type: "New Affiliate Link",
                detail: "Smart Home Hub added by John Smith",
                time: "5 hours ago",
                icon: Link,
                color: "orange-500",
                },
            ].map((item, index) => (
                <div key={index} className="flex justify-between items-start text-sm">
                <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-full bg-${item.color}/10 flex items-center justify-center`}>
                    <item.icon className={`w-5 h-5 text-${item.color}`} />
                    </div>
                    <div>
                    <div className="font-medium flex items-center gap-2">
                        {item.type}
                        {item.tag && <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">{item.tag}</span>}
                    </div>
                    <p className="text-xs text-gray-500">{item.detail}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                    </div>
                </div>
                {item.amount && <div className="text-green-600 font-medium">{item.amount}</div>}
                </div>
            ))}
            </CardContent>
        </Card>
        </div>

        {/* Blog Performance */}
        <Card className="mt-6">
        <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
            <CardTitle>Blog Performance</CardTitle>
            <p className="text-sm text-gray-500">Engagement metrics for your blog posts</p>
            </div>
            <Button variant="outline" className="text-sm px-4 py-1">View All Posts</Button>
        </CardHeader>
        <CardContent>
            <table className="w-full text-sm">
            <thead className="text-gray-500 text-left">
                <tr>
                <th className="pb-2">Post Title</th>
                <th className="pb-2">Published</th>
                <th className="pb-2"><Eye className="w-4 h-4 inline mr-1" />Views</th>
                <th className="pb-2">Comments</th>
                <th className="pb-2"><Share2 className="w-4 h-4 inline mr-1" />Shares</th>
                <th className="pb-2">CTR</th>
                </tr>
            </thead>
            <tbody>
                {[
                {
                    title: "The Ultimate Guide to Affiliate Marketing",
                    date: "2023-08-15",
                    views: "12,452",
                    comments: "342",
                    shares: "562",
                    ctr: "4.8%",
                },
                {
                    title: "5 Tips to Boost Your Conversion Rate",
                    date: "2023-08-10",
                    views: "9,876",
                    comments: "212",
                    shares: "321",
                    ctr: "3.5%",
                },
                {
                    title: "How to Choose the Right Affiliate Program",
                    date: "2023-08-05",
                    views: "7,654",
                    comments: "156",
                    shares: "234",
                    ctr: "2.9%",
                },
                {
                    title: "The Future of Digital Marketing",
                    date: "2023-08-01",
                    views: "5,432",
                    comments: "98",
                    shares: "145",
                    ctr: "2.2%",
                },
                ].map((post, index) => (
                <tr key={index} className="border-t border-gray-200">
                    <td className="py-3">{post.title}</td>
                    <td>{post.date}</td>
                    <td>{post.views}</td>
                    <td>{post.comments}</td>
                    <td>{post.shares}</td>
                    <td>
                    <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">{post.ctr}</span>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </CardContent>
        </Card>
        </>
    )
}
export default function AdminDashboard() {
  const [selectedRange, setSelectedRange] = useState("7d");
  const { adminStatus, setAdminStatus } = AdminUseStatusStore();

  const  navLinks =[
    { label: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" />, value: "dashboard"},
    { label: "Products", icon: <ShoppingCart className="w-4 h-4" />, value: "products"},
    { label: "Referrals", icon: <Users className="w-4 h-4" />, value: "referrals"},
    { label: "Earnings", icon: <DollarSign className="w-4 h-4" />, value: "earnings"},
    { label: "Users", icon: <User className="w-4 h-4" />, value: "users"},
    { label: "Blog", icon: <BookOpen className="w-4 h-4" />, value: "blog"},
    { label: "Settings", icon: <Settings className="w-4 h-4" />, value: "settings"},
  ]
  const getHomeComponent = () => {
    switch (adminStatus) {
      case "dashboard":
        return <Dashboard />;
      case "products":
        return <ProductManagement />;
      case "referrals":
        return <ReferralManagement />;
      case "add_product":
        return <AddProduct />;
      case "earnings":
         return <EarningsDashboard />;
      case "users":
        return <UserManagement />;
      case "blog":
         return <BlogManagementPage />;
      case "settings":
         return <PlatformSettings />;
      default:
         return <Dashboard />;
    }
  };

  return (
    <>
        <AdminHeader />
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white text-black p-4 space-y-6 rounded-xl shadow-md h-fit hidden md:block">
        <div className="space-y-4">
            {/* <div className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-full font-semibold">
            
            
            </div> */}
            {navLinks.map(({ label, value }) => (
                <div
                key={label}
                onClick={() => setAdminStatus(value)}
                className={`flex items-center gap-2 px-3 py-2  rounded-full font-semibold cursor-pointer hover:bg-gray-800 hover:text-white p-2  ${
                    adminStatus === value ? "bg-gray-900 text-white" : ""
                }`}
                >
                <span>{label}</span>
                </div>
            ))}
        </div>

        <div className="bg-white p-4 rounded-xl shadow mt-4 space-y-3">
            <h4 className="text-sm font-semibold">Platform Status</h4>
            <div className="text-xs flex justify-between">
            <div>
                <div className="text-gray-500">Server Status</div>
                <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Operational
                </div>
            </div>
            <div>
                <div className="text-gray-500">Last Backup</div>
                <div>2 hours ago</div>
            </div>
            </div>
            <div>
            <div className="text-xs text-gray-500 mb-1">System Load</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: "28%" }} />
            </div>
            </div>
            <div>
            <div className="text-xs text-gray-500 mb-1">Storage</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-700 h-2 rounded-full" style={{ width: "64%" }} />
            </div>
            </div>
        </div>
    </aside>


      {/* Main Content */}
      <main className="w-full p-6">
      
        {getHomeComponent()}

      </main>
    </div>
    </>
  );
}
