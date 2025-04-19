import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, Download, RefreshCcw } from "lucide-react";

export default function EarningsDashboard() {
  return (
    <div className="p-4 md:p-6 max-w-screen-xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold">Earnings</h2>
        <p className="text-sm text-muted-foreground">
          Track your earnings, manage payouts, and view financial performance.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            title: "Total Earnings",
            amount: "$4,628.62",
            subtitle: "+ 11.05% from last month",
          },
          {
            title: "Pending Earnings",
            amount: "$1,197.77",
            subtitle: "Awaiting payout",
          },
          {
            title: "Paid Earnings",
            amount: "$3,430.85",
            subtitle: "Total paid out",
          },
          {
            title: "This Month",
            amount: "$9,100",
            subtitle: "+ 11.05% from last month",
          },
        ].map((item, index) => (
          <Card key={index} className="relative">
            <CardContent className="p-4 space-y-1">
              <p className="text-sm text-muted-foreground">{item.title}</p>
              <div className="text-xl font-semibold">{item.amount}</div>
              <p className="text-xs text-emerald-600">{item.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters + Button Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div className="flex items-center gap-2 order-2 md:order-1">
          <Button variant="outline" size="icon">
            <RefreshCcw className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="w-4 h-4" />
          </Button>
          <Button variant="outline" className="flex items-center gap-1 text-sm font-medium">
            <span>This Month</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
        <Button className="order-1 md:order-2 self-start md:self-auto">Withdraw Funds</Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="flex md:grid md:grid-cols-3 w-full flex-col rounded-md bg-muted p-1">
          <TabsTrigger
            value="overview"
            className="flex-1 rounded-md text-xs md:text-sm data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="transactions"
            className="flex-1 rounded-md text-xs md:text-sm data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            Transactions
          </TabsTrigger>
          <TabsTrigger
            value="payouts"
            className="flex-1 rounded-md text-xs md:text-sm data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            Payouts
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Earnings Chart + Sales Summary */}
      <Card>
        <CardContent className="p-4 md:p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-medium">Earnings Overview</h3>
              <p className="text-sm text-muted-foreground">
                Your earnings performance over time
              </p>
            </div>
            <div className="w-full h-48 md:h-60 bg-muted rounded-md flex items-center justify-center text-muted-foreground text-sm">
              Earnings Chart
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Product Sales</p>
                <p className="text-xl font-semibold">$7,200</p>
                <p className="text-xs text-emerald-600">+ 10.8%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Affiliate Commissions</p>
                <p className="text-xl font-semibold">$1,900</p>
                <p className="text-xs text-emerald-600">+ 11.8%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardContent className="p-4 md:p-6 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-base font-semibold">Recent Transactions</h3>
              <p className="text-sm text-muted-foreground">
                Your most recent earnings activity
              </p>
            </div>
            <Button variant="outline" size="sm" className="text-xs">
              View All
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-muted-foreground text-left border-b">
                  <th className="py-2 pr-4">Date</th>
                  <th className="py-2 pr-4">Amount</th>
                  <th className="py-2 pr-4">Source</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    date: "2023-08-15",
                    amount: "$1,245.67",
                    source: "Product Sales",
                    status: "Paid",
                  },
                  {
                    date: "2023-08-10",
                    amount: "$876.32",
                    source: "Affiliate Commissions",
                    status: "Pending",
                  },
                  {
                    date: "2023-08-05",
                    amount: "$543.21",
                    source: "Product Sales",
                    status: "Paid",
                  },
                  {
                    date: "2023-08-01",
                    amount: "$321.45",
                    source: "Affiliate Commissions",
                    status: "Processing",
                  },
                  {
                    date: "2023-07-25",
                    amount: "$987.65",
                    source: "Product Sales",
                    status: "Paid",
                  },
                ].map((item, index) => (
                  <tr key={index} className="border-b last:border-none">
                    <td className="py-2 pr-4 whitespace-nowrap">{item.date}</td>
                    <td className="py-2 pr-4 font-medium">{item.amount}</td>
                    <td className="py-2 pr-4">{item.source}</td>
                    <td className="py-2">
                      <span
                        className={`px-2 py-1 text-xs rounded-md font-medium ${
                          item.status === "Paid"
                            ? "bg-emerald-100 text-emerald-700"
                            : item.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
