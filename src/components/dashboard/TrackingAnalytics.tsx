'use client';
import { useState } from 'react';
import { Calendar, Download } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format, isWithinInterval, subDays } from 'date-fns';
import jsPDF from 'jspdf';

export default function TrackingAnalytics() {
  const [activeTab, setActiveTab] = useState('Traffic Sources');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedRange, setSelectedRange] = useState<{ from: Date; to: Date }>();

  const topReferrers = [
    { source: 'Google', clicks: 8245, conversions: 312, rate: '3.8%', revenue: '$7,890.45', date: new Date('2024-04-01') },
    { source: 'Facebook', clicks: 5120, conversions: 187, rate: '3.7%', revenue: '$4,675.20', date: new Date('2024-04-03') },
    { source: 'Instagram', clicks: 4350, conversions: 143, rate: '3.3%', revenue: '$3,575.00', date: new Date('2024-04-05') },
    { source: 'YouTube', clicks: 3210, conversions: 98, rate: '3.1%', revenue: '$2,450.75', date: new Date('2024-04-06') },
    { source: 'Direct', clicks: 2890, conversions: 76, rate: '2.6%', revenue: '$1,900.30', date: new Date('2024-04-07') },
  ];

  const filteredReferrers = selectedRange
    ? topReferrers.filter((ref) =>
        isWithinInterval(ref.date, {
          start: selectedRange.from,
          end: selectedRange.to,
        })
      )
    : topReferrers;

  const handleExport = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Top Referrers', 10, 10);

    let y = 20;
    filteredReferrers.forEach((ref) => {
      doc.setFontSize(12);
      doc.text(
        `Source: ${ref.source} | Clicks: ${ref.clicks} | Conversions: ${ref.conversions} | Rate: ${ref.rate} | Revenue: ${ref.revenue}`,
        10,
        y
      );
      y += 10;
    });

    doc.save('top-referrers.pdf');
  };

  return (
    <div className="p-4 md:p-10 max-w-6xl mx-auto text-black relative">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tracking & Analytics</h1>
        <div className="flex gap-2 relative">
          <button
            className="border px-4 py-2 rounded flex items-center gap-2"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <Calendar size={16} />{' '}
            {selectedRange
              ? `${format(selectedRange.from, 'PPP')} - ${format(selectedRange.to, 'PPP')}`
              : 'Select Date Range'}
          </button>

          {showCalendar && (
            <div className="absolute top-12 right-0 z-50 bg-white shadow-lg border rounded p-4">
              <DayPicker
                mode="range"
                selected={selectedRange}
                onSelect={(range) => {
                  if (range?.from && range.to) {
                    setSelectedRange(range);
                    setShowCalendar(false);
                  }
                }}
              />
            </div>
          )}

          <button
            onClick={handleExport}
            className="bg-black text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Download size={16} /> Export Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="border p-4 rounded-xl">
          <p className="text-sm text-gray-500">Total Clicks</p>
          <h2 className="text-2xl font-bold">24,531</h2>
          <p className="text-sm text-green-500">+12.5% from last month</p>
        </div>
        <div className="border p-4 rounded-xl">
          <p className="text-sm text-gray-500">Conversion Rate</p>
          <h2 className="text-2xl font-bold">3.2%</h2>
          <p className="text-sm text-green-500">+0.5% from last month</p>
        </div>
        <div className="border p-4 rounded-xl">
          <p className="text-sm text-gray-500">Average Order Value</p>
          <h2 className="text-2xl font-bold">$78.45</h2>
          <p className="text-sm text-green-500">+4.20 from last month</p>
        </div>
        <div className="border p-4 rounded-xl">
          <p className="text-sm text-gray-500">Revenue per Click</p>
          <h2 className="text-2xl font-bold">$2.51</h2>
          <p className="text-sm text-green-500">+0.32 from last month</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex gap-2 mb-4">
          {['Traffic Sources', 'Devices', 'Geography'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 rounded border ${
                activeTab === tab ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="border p-4 rounded-xl min-h-[200px] flex items-center justify-center bg-gray-200">
          <p className="text-gray-600">{activeTab}</p>
        </div>
      </div>

      <div className="border p-4 rounded-xl">
        <h2 className="font-semibold mb-1">Top Referrers</h2>
        <p className="text-sm text-gray-500 mb-4">
          Websites sending the most traffic to your affiliate links.
        </p>

        <div className="hidden md:grid grid-cols-5 font-semibold border-b py-2">
          <p>Source</p>
          <p>Clicks</p>
          <p>Conversions</p>
          <p>Conversion Rate</p>
          <p>Revenue</p>
        </div>

        {filteredReferrers.map((ref, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-0 border-b py-2 text-sm"
          >
            <p>
              <span className="md:hidden font-semibold">Source </span>
              {ref.source}
            </p>
            <p>
              <span className="md:hidden font-semibold">Clicks </span>
              {ref.clicks.toLocaleString()}
            </p>
            <p>
              <span className="md:hidden font-semibold">Conversions </span>
              {ref.conversions}
            </p>
            <p>
              <span className="md:hidden font-semibold">Conversion Rate </span>
              {ref.rate}
            </p>
            <p>
              <span className="md:hidden font-semibold">Revenue </span>
              {ref.revenue}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
