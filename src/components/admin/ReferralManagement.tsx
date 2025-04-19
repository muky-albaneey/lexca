import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, RefreshCcw, Download, Info } from "lucide-react";

export default function ReferralManagement() {
  return (
    <div className="p-4 md:p-6 max-w-screen-xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-lg font-semibold">Referral Management</h2>
        <p className="text-sm text-muted-foreground">
          Track and analyze your affiliate referral program performance.
        </p>
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div className="flex items-center gap-2 order-2 md:order-1">
          <Button variant="outline" className="text-sm font-medium flex items-center gap-1">
            Last 7 days
            <ChevronDown className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon">
            <RefreshCcw className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {[
          {
            title: "Total Clicks",
            amount: "10,226",
            subtitle: "+12.5% from last period",
          },
          {
            title: "Conversions",
            amount: "556",
            subtitle: "+12.5% from last period",
          },
          {
            title: "Conv. Rate",
            amount: "5.4%",
            subtitle: "+0.8% from last period",
          },
          {
            title: "Revenue",
            amount: "$47,842",
            subtitle: "+12.5% from last period",
          },
          {
            title: "Commission",
            amount: "$7,176",
            subtitle: "+12.5% from last period",
          },
        ].map((item, index) => (
          <Card key={index} className="relative">
            <CardContent className="p-4 space-y-1">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                {item.title}
                <Info className="w-3 h-3" />
              </div>
              <div className="text-xl font-semibold">{item.amount}</div>
              <p className="text-xs text-emerald-600">{item.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 rounded-md bg-muted p-1">
          <TabsTrigger value="overview" className="text-xs md:text-sm">
            Overview
          </TabsTrigger>
          <TabsTrigger value="transactions" className="text-xs md:text-sm">
            Transactions
          </TabsTrigger>
          <TabsTrigger value="payouts" className="text-xs md:text-sm">
            Payouts
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Chart Section */}
      <Card>
        <CardContent className="p-4 md:p-6 space-y-4">
          <div>
            <h3 className="text-base font-semibold">Daily Performance</h3>
            <p className="text-sm text-muted-foreground">
              Track daily clicks, conversions, and revenue
            </p>
          </div>
          <div className="w-full h-48 md:h-60 bg-muted rounded-md flex items-center justify-center text-muted-foreground text-sm">
            Daily Performance Chart
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-muted-foreground text-left border-b">
                  <th className="py-2 pr-4">Date</th>
                  <th className="py-2 pr-4">Clicks</th>
                  <th className="py-2 pr-4">Conversions</th>
                  <th className="py-2 pr-4">Revenue</th>
                  <th className="py-2">Conv. Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["2023-08-01", "145", "32", "$1,245", "3.8%"],
                  ["2023-08-02", "161", "38", "$1,456", "4.1%"],
                  ["2023-08-03", "139", "29", "$1,123", "3.7%"],
                  ["2023-08-04", "160", "35", "$1,345", "4.0%"],
                  ["2023-08-05", "141", "41", "$1,567", "4.4%"],
                  ["2023-08-06", "142", "45", "$1,678", "4.4%"],
                  ["2023-08-07", "154", "52", "$1,890", "4.6%"],
                ].map(([date, clicks, conversions, revenue, rate], index) => (
                  <tr key={index} className="border-b last:border-none">
                    <td className="py-2 pr-4 whitespace-nowrap">{date}</td>
                    <td className="py-2 pr-4">{clicks}</td>
                    <td className="py-2 pr-4">{conversions}</td>
                    <td className="py-2 pr-4">{revenue}</td>
                    <td className="py-2">{rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Traffic Sources & Top Affiliates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 md:p-6 space-y-4">
            <h3 className="text-base font-semibold">Traffic Sources</h3>
            <p className="text-sm text-muted-foreground">
              Where your referral traffic is coming from
            </p>
            <div className="w-full h-48 bg-muted rounded-md flex items-center justify-center text-muted-foreground text-sm">
              Traffic Sources Chart
            </div>
            <ul className="text-sm space-y-1">
              <li>🔵 Direct - 42%</li>
              <li>🟢 Organic Search - 28%</li>
              <li>🟠 Referral - 15%</li>
              <li>🔴 Social - 10%</li>
              <li>⚫ Other - 5%</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 md:p-6 space-y-4">
            <h3 className="text-base font-semibold">Top Affiliates</h3>
            <p className="text-sm text-muted-foreground">
              Best performing affiliates this period
            </p>
            <ul className="text-sm divide-y">
              {[
                { initials: "JS", name: "John Smith", conversions: 148, commission: "$2,416" },
                { initials: "EJ", name: "Emily Johnson", conversions: 92, commission: "$1,103" },
                { initials: "MD", name: "Michael Davis", conversions: 64, commission: "$980" },
                { initials: "SW", name: "Sarah Wilson", conversions: 42, commission: "$1,890" },
              ].map(({ initials, name, conversions, commission }, idx) => (
                <li key={idx} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted text-center text-xs font-medium flex items-center justify-center">
                      {initials}
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-foreground leading-tight">{name}</div>
                      <div className="text-xs text-muted-foreground">{conversions} conversions</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-foreground">{commission}</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
