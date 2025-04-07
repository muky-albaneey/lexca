// app/settings/page.tsx

'use client';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [bank, setBank] = useState('first bank');
  const [payoutFrequency, setPayoutFrequency] = useState('Monthly');
  const [minPayout, setMinPayout] = useState('$50.00');
  const [autoPayout, setAutoPayout] = useState(false);
  const [notifications, setNotifications] = useState({
    email: false,
    sales: false,
    payout: false,
    products: false,
    marketing: false,
  });

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="space-y-6">
            <div className="border p-4 rounded-md space-y-4">
              <h2 className="font-semibold text-lg">Profile Information</h2>
              <p className="text-gray-500 text-sm">Update your profile information and how others see you on the platform.</p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gray-200" />
                <button className="bg-black text-white px-3 py-1 rounded">Change Avatar</button>
              </div>
              <p className="text-xs text-gray-500">JPG, GIF or PNG. Max size of 2MB.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" placeholder="First name" defaultValue="John" />
                <Input type="text" placeholder="Last name" defaultValue="Doe" />
              </div>
              <Input type="email" placeholder="Email" defaultValue="john@example.com" />
              <textarea placeholder="Bio" className="border p-2 rounded w-full" rows={3} defaultValue={`I'm a tech blogger and affiliate marketer specializing in consumer electronics and gadgets.`}></textarea>
              <Input type="url" placeholder="Website" defaultValue="https://johndoe.com" />
            </div>

            <div className="border p-4 rounded-md space-y-4">
              <h2 className="font-semibold text-lg">Social Profiles</h2>
              <p className="text-gray-500 text-sm">Connect your social media accounts to increase your reach.</p>
              <Input type="text" placeholder="Twitter" defaultValue="@johndoe" />
              <Input type="text" placeholder="Instagram" defaultValue="@johndoe" />
              <Input type="text" placeholder="YouTube" defaultValue="JohnDoeReviews" />
            </div>
            <Button className="w-full md:w-fit">Save Changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="account">
          <div className="space-y-6">
            <div className="border p-4 rounded-md space-y-4">
              <h2 className="font-semibold text-lg">Account Settings</h2>
              <p className="text-gray-500 text-sm">Manage your account settings and preference</p>
              <Input type="text" defaultValue="John" placeholder="Username" />
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  defaultValue="password123"
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute right-2 top-2.5 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <Select defaultValue="English">
                <SelectTrigger>
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="Pacific UTC(-8)">
                <SelectTrigger>
                  <SelectValue placeholder="Timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pacific UTC(-8)">Pacific UTC(-8)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="border p-4 rounded-md space-y-4">
              <h2 className="font-semibold text-lg">Two-Factor Authentication</h2>
              <p className="text-gray-500 text-sm">Add an extra layer of security to your account</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Enable two-factor authentication</p>
                  <p className="text-sm text-gray-500">Receive a code via SMS or authenticator app when logging in</p>
                </div>
                <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
              </div>
            </div>
            <Button className="w-full md:w-fit">Save Changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="payment">
          <div className="space-y-6">
            <div className="border rounded-lg p-4 space-y-4">
              <h2 className="text-xl font-semibold">Payment Method</h2>
              <p className="text-sm text-gray-500">Add and manage your payment method</p>
              <div className="grid gap-4">
                <div>
                  <Label>Payment Method</Label>
                  <Input value="Direct deposit" disabled />
                </div>
                <div>
                  <Label>Bank Name</Label>
                  <Select value={bank} onValueChange={setBank}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select bank" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="first bank">First bank</SelectItem>
                      <SelectItem value="gtbank">gtbank</SelectItem>
                      <SelectItem value="access bank">Access bank</SelectItem>
                      <SelectItem value="UBA">UBA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Account Number</Label>
                  <Input value="xxxx-xxx-xxx-xx234" disabled />
                </div>
                <div>
                  <Label>Routing Number</Label>
                  <Input value="xxx-xxx-xxx" disabled />
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-4 space-y-4">
              <h2 className="text-xl font-semibold">Payment Settings</h2>
              <p className="text-sm text-gray-500">Configure how and when you receive your earnings</p>
              <div className="grid gap-4">
                <div>
                  <Label>Payout Frequency</Label>
                  <Select value={payoutFrequency} onValueChange={setPayoutFrequency}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Monthly">Monthly</SelectItem>
                      <SelectItem value="Weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Minimum Payout Amount</Label>
                  <Input value={minPayout} onChange={(e) => setMinPayout(e.target.value)} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Automatic Payout</Label>
                    <p className="text-sm text-gray-500">
                      Automatically receive payout when your balance reaches the minimum amount
                    </p>
                  </div>
                  <Switch checked={autoPayout} onCheckedChange={setAutoPayout} />
                </div>
              </div>
            </div>
            <Button className="mt-4">Save Changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <div className="space-y-6 border rounded-lg p-4">
            <h2 className="text-xl font-semibold">Notifications</h2>
            <p className="text-sm text-gray-500">Choose how you want to receive notifications</p>
            <div className="space-y-4">
              {[
                { label: 'Email notification', desc: 'Receive notification via email', key: 'email' },
                { label: 'Sales notification', desc: 'Get notified when you make a sale', key: 'sales' },
                { label: 'Payout notification', desc: 'Get notified about payout status changes', key: 'payout' },
                { label: 'Products update', desc: 'Get notified about new products and offers', key: 'products' },
                { label: 'Marketing tips', desc: 'Receive tips and best practices for affiliate marketing', key: 'marketing' },
              ].map((item) => (
                <div className="flex items-center justify-between" key={item.key}>
                  <div>
                    <Label>{item.label}</Label>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                  <Switch
                    checked={notifications[item.key]}
                    onCheckedChange={(val) => setNotifications((prev) => ({ ...prev, [item.key]: val }))}
                  />
                </div>
              ))}
            </div>
            <Button className="mt-4">Save Changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="api">
          <div className="text-gray-500 text-sm mt-6">This section is under construction.</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}