import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Download } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { format, isWithinInterval, parse } from 'date-fns';
import jsPDF from 'jspdf';
const earningsData = [
  { date: 'Jul 12, 2023', program: 'Amazon Associates', product: 'Wireless Headphones', rate: '8%', amount: '$24.99', status: 'Pending' },
  { date: 'Jul 10, 2023', program: 'eBay Partner Network', product: 'Vintage Camera', rate: '5%', amount: '$15.50', status: 'Pending' },
  { date: 'Jul 8, 2023', program: 'Walmart Affiliates', product: 'Kitchen Blender', rate: '6%', amount: '$11.99', status: 'Pending' },
  { date: 'Jul 5, 2023', program: 'Amazon Associates', product: 'Smart Watch', rate: '8%', amount: '$31.99', status: 'Pending' },
  { date: 'Jul 1, 2023', program: 'Best Buy Affiliates', product: 'Laptop Computer', rate: '4%', amount: '$39.99', status: 'Pending' },
  { date: 'Jun 28, 2023', program: 'Target Partners', product: 'Home Decor Set', rate: '7%', amount: '$18.49', status: 'Paid' },
  { date: 'Jun 25, 2023', program: 'Amazon Associates', product: 'Fitness Tracker', rate: '8%', amount: '$15.99', status: 'Paid' },
];

const payoutsData = [
  { date: 'Jul 10, 2023', amount: '$5000', method: 'Direct transfer', action: 'Receipt', status: 'Completed' },
  { date: 'Jul 12, 2023', amount: '$2000', method: 'Direct transfer', action: 'Receipt', status: 'Completed' },
  { date: 'Jul 8, 2023', amount: '$8000', method: 'Direct transfer', action: 'Logout', status: 'Completed' },
  { date: 'Jul 5, 2023', amount: '$10,000', method: 'Smart Watch', action: 'Receipt', status: 'Pending' },
  { date: 'Jul 1, 2023', amount: '$1500', method: 'Laptop Computer', action: 'Receipt', status: 'Pending' },
  { date: 'Jun 28, 2023', amount: 'Target Partners', method: 'Home Decor Set', action: 'Receipt', status: 'Paid' },
  { date: 'Jun 25, 2023', amount: 'Amazon Associates', method: 'Fitness Tracker', action: 'Receipt', status: 'Paid' },
];

const statusStyles = {
  Pending: 'bg-yellow-100 text-yellow-900',
  Paid: 'bg-green-100 text-green-800',
  Completed: 'bg-green-900 text-white',
};

export default function EarningsPayouts() {
  const [activeTab, setActiveTab] = useState<'earnings' | 'payouts'>('earnings');
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date } | undefined>(undefined);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const parseDate = (str: string) => parse(str, 'MMM d, yyyy', new Date());

  const filteredEarnings = earningsData.filter(item =>
    !dateRange ||
    isWithinInterval(parseDate(item.date), {
      start: dateRange.from,
      end: dateRange.to,
    })
  );

  const filteredPayouts = payoutsData.filter(item =>
    !dateRange ||
    isWithinInterval(parseDate(item.date), {
      start: dateRange.from,
      end: dateRange.to,
    })
  );
  const handleExport = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(activeTab === 'earnings' ? 'Earnings Report' : 'Payouts Report', 10, 10);

    let y = 20;
    const dataToExport = activeTab === 'earnings' ? filteredEarnings : filteredPayouts;

    dataToExport.forEach((item) => {
      const line = activeTab === 'earnings'
        ? `Date: ${item.date}, Program: ${item.program}, Product: ${item.product}, Rate: ${item.rate}, Amount: ${item.amount}, Status: ${item.status}`
        : `Date: ${item.date}, Amount: ${item.amount}, Method: ${item.method}, Action: ${item.action}, Status: ${item.status}`;
      doc.setFontSize(12);
      doc.text(line, 10, y);
      y += 10;
    });

    doc.save(`${activeTab}-report.pdf`);
  };

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Earnings & Payouts</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mb-6">
        <SummaryCard title="Total Earnings" value="$45,231.89" subtitle="Lifetime earnings" />
        <SummaryCard title="Available Balance" value="$2,350.45" subtitle="Available for withdrawal" />
        <SummaryCard title="Pending Earnings" value="$1,890.50" subtitle="Will be available on Aug 15, 2023" />
        <SummaryCard title="Next Payout" value="$2,350.45" subtitle="Scheduled for Jul 15, 2023" />
      </div>

      <div className="flex flex-wrap gap-4 justify-between mb-4">
        <div className="flex gap-2">
          <Button variant={activeTab === 'earnings' ? 'default' : 'outline'} onClick={() => setActiveTab('earnings')}>Earnings</Button>
          <Button variant={activeTab === 'payouts' ? 'default' : 'outline'} onClick={() => setActiveTab('payouts')}>Payouts</Button>
        </div>
        <div className="flex gap-2">
          <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" onClick={() => setCalendarOpen(!calendarOpen)}>
                <CalendarIcon className="w-4 h-4 mr-2" />
                {dateRange?.from && dateRange?.to
                  ? `${format(dateRange.from, 'MMM d, yyyy')} - ${format(dateRange.to, 'MMM d, yyyy')}`
                  : 'Select Date Range'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={setDateRange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        
          <Button onClick={handleExport}>
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg border">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Earnings History</h2>
          <p className="text-sm text-gray-500">View your earnings from all affiliate programs.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50 text-sm text-gray-500">
              <tr>
                {activeTab === 'earnings' ? (
                  ['Date', 'Program', 'Product', 'Commission Rate', 'Amount', 'Status'].map((header, idx) => (
                    <th key={idx} className="px-4 py-3 text-left whitespace-nowrap">{header}</th>
                  ))
                ) : (
                  ['Date', 'Amount', 'Method', 'Action', 'Status'].map((header, idx) => (
                    <th key={idx} className="px-4 py-3 text-left whitespace-nowrap">{header}</th>
                  ))
                )}
              </tr>
            </thead>
            <tbody>
              {(activeTab === 'earnings' ? filteredEarnings : filteredPayouts).map((row, i) => (
                <tr key={i} className="border-t text-sm">
                  {activeTab === 'earnings' ? (
                    <>
                      <td className="px-4 py-3 whitespace-nowrap">{row.date}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.program}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.product}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.rate}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.amount}</td>
                      <td className="px-4 py-3"><span className={`text-xs font-medium px-2 py-1 rounded ${statusStyles[row.status]}`}>{row.status}</span></td>
                    </>
                  ) : (
                    <>
                      <td className="px-4 py-3 whitespace-nowrap">{row.date}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.amount}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.method}</td>
                      <td className="px-4 py-3 whitespace-nowrap underline cursor-pointer">{row.action}</td>
                      <td className="px-4 py-3"><span className={`text-xs font-medium px-2 py-1 rounded ${statusStyles[row.status]}`}>{row.status}</span></td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center p-4 text-sm text-gray-600">
          <span>Showing {activeTab === 'earnings' ? filteredEarnings.length : filteredPayouts.length} of 120 {activeTab}</span>
          <div className="space-x-2">
            <Button size="sm" variant="outline">Previous</Button>
            <Button size="sm" variant="outline">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ title, value, subtitle }: { title: string; value: string; subtitle: string }) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
      <p className="text-xl font-bold mb-1">{value}</p>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
  );
}
