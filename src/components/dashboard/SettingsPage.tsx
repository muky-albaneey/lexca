'use client';
import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';

type User = {
  fname: string;
  lname: string;
  email: string;
  description?: string;
  socialMedia:{
    website?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  };
  username?: string;
  password?: string;  // For handling the password field
  language?: string;  // For the language setting
  timezone?: string;  // For the timezone setting
};

export default function SettingsPage() {
  const [user, setUser] = useState<User | null>(null);
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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('authToken'); // ✅ OK in browser
    
        if (!token) {
          console.error('No token found');
          return;
        }
    
        const response = await fetch('/api/user', {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Send token in header
          },
        });
    
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        
          console.log(data,'move2')
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (err) {
        console.error('Error fetching user:', err);
      }
    };
    
  
    fetchUserData();
  }, []);
  
  

  const handleSaveChanges = async () => {
    const token = localStorage.getItem('authToken'); // or however you store it

    if (!token) {
      console.error('User is not authenticated');
      return;
    }
  
    if (!user) {
      console.error('No user data available to save');
      return;
    }
  
    try {
      const response = await fetch('/api/updateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Correctly include the token in the header
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Changes saved', data.user);
      } else {
        const errorData = await response.json();
        console.error('Failed to save changes:', errorData.message);
      }
      
    } catch (error) {
      console.error('Error saving changes', error);
    }
  };
  
  if (!user) {
    return (
      <div className="space-y-4 p-4">
        <Skeleton className="h-10 w-1/2" />
        <Skeleton className="h-10 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }
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
                <Input
                  type="text"
                  placeholder="First name"
                  value={user?.fname || ''}
                  onChange={(e) => setUser({ ...user!, fname: e.target.value })}
                />
                <Input
                  type="text"
                  placeholder="Last name"
                  value={user?.lname || ''}
                  onChange={(e) => setUser({ ...user!, lname: e.target.value })}
                />
              </div>
              <Input
                type="email"
                placeholder="Email"
                value={user?.email || ''}
                onChange={(e) => setUser({ ...user!, email: e.target.value })}
              />
              <textarea
                placeholder="description of the Bio"
                className="border p-2 rounded w-full"
                rows={3}
                value={user?.description || ''}
                onChange={(e) => setUser({ ...user!, description: e.target.value })}
              ></textarea>
              <Input
                type="url"
                placeholder="Website"
                value={user?.socialMedia?.website || ''}
                onChange={(e) =>
                  setUser({
                    ...user!,
                    socialMedia: {
                      ...user?.socialMedia,
                      website: e.target.value,
                    },
                  })
                }
                
              />
            </div>

            <div className="border p-4 rounded-md space-y-4">
              <h2 className="font-semibold text-lg">Social Profiles</h2>
              <p className="text-gray-500 text-sm">Connect your social media accounts to increase your reach.</p>
              <Input
                type="text"
                placeholder="Twitter"
                value={user?.socialMedia?.twitter || ''}
                // onChange={(e) => setUser({ ...user, twitter: e.target.value })}
                onChange={(e) =>
                  setUser({
                    ...user!,
                    socialMedia: {
                      ...user?.socialMedia,
                      twitter: e.target.value,
                    },
                  })
                }
                
              />
              <Input
                type="text"
                placeholder="Instagram"
                value={user?.socialMedia?.instagram || ''}
                // onChange={(e) => setUser({ ...user, instagram: e.target.value })}
                onChange={(e) =>
                  setUser({
                    ...user!,
                    socialMedia: {
                      ...user?.socialMedia,
                      instagram: e.target.value,
                    },
                  })
                }
              />
              <Input
                type="text"
                placeholder="YouTube"
                value={user?.socialMedia?.youtube || ''}
                // onChange={(e) => setUser({ ...user, youtube: e.target.value })}
                onChange={(e) =>
                  setUser({
                    ...user!,
                    socialMedia: {
                      ...user?.socialMedia,
                      youtube: e.target.value,
                    },
                  })
                }
              />
            </div>
            <Button className="w-full md:w-fit" onClick={handleSaveChanges}>Save Changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="account">
          <div className="space-y-6">
            <div className="border p-4 rounded-md space-y-4">
              <h2 className="font-semibold text-lg">Account Settings</h2>
              <p className="text-gray-500 text-sm">Manage your account settings and preferences</p>
                <Input
                  type="text"
                  value={user?.username ?? ""}
                  onChange={(e) => setUser({ ...user!, username: e.target.value })}
                  placeholder="Username"
                />

              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={user?.password || ''}
                  onChange={(e) => setUser({ ...user!, password: e.target.value })}
                  className="pr-10"
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute right-2 top-2.5 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <Select value={user?.language} onValueChange={(value) => setUser({ ...user!, language: value })}>
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
            <Button className="w-full md:w-fit" onClick={handleSaveChanges}>Save Changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="payment">
          <div className="space-y-6">
            <div className="border rounded-lg p-4 space-y-4">
              <h2 className="text-xl font-semibold">Payment Method</h2>
              <p className="text-sm text-gray-500">Add and manage your payment method</p>
              <div className="grid gap-4">
                <Input
                  type="text"
                  value={bank}
                  onChange={(e) => setBank(e.target.value)}
                  placeholder="Bank Name"
                />
                <Input
                  type="text"
                  value={minPayout}
                  onChange={(e) => setMinPayout(e.target.value)}
                  placeholder="Minimum Payout"
                />
                <Select value={payoutFrequency} onValueChange={setPayoutFrequency}>
                  <SelectTrigger>
                    <SelectValue placeholder="Payout Frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Weekly">Weekly</SelectItem>
                    <SelectItem value="Monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center space-x-4">
                  <Switch
                    checked={autoPayout}
                    onCheckedChange={setAutoPayout}
                  />
                  <span>Enable Auto Payout</span>
                </div>
              </div>
            </div>
            <Button className="w-full md:w-fit" onClick={handleSaveChanges}>Save Payment Method</Button>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Notification Preferences</h2>
            <p className="text-sm text-gray-500">Manage the types of notifications you wish to receive</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Email Notifications</span>
                <Switch
                  checked={notifications.email}
                  onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, email: checked }))}
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Sales Notifications</span>
                <Switch
                  checked={notifications.sales}
                  onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, sales: checked }))}
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Payout Notifications</span>
                <Switch
                  checked={notifications.payout}
                  onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, payout: checked }))}
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Products Notifications</span>
                <Switch
                  checked={notifications.products}
                  onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, products: checked }))}
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Marketing Notifications</span>
                <Switch
                  checked={notifications.marketing}
                  onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, marketing: checked }))}
                />
              </div>
            </div>
            <Button className="w-full md:w-fit" onClick={handleSaveChanges}>Save Notifications</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
