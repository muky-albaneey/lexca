import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function SettingsPage() {
  const [platformName, setPlatformName] = useState("Lasocka Marketing Platform");
  const [supportEmail, setSupportEmail] = useState("support@example.com");
  const [commissionRate, setCommissionRate] = useState("15");
  const [theme, setTheme] = useState("Light");
  const [primaryColor, setPrimaryColor] = useState("purple");
  const [twoFactor, setTwoFactor] = useState(false);
  const [emailVerification, setEmailVerification] = useState(false);
  const [productApproval, setProductApproval] = useState(false);
  const [passwordPolicy, setPasswordPolicy] = useState("Strong");
  const [apiKey] = useState("sk_live_29xnqZ23nd38an49s9da3d9as9d");
  const [webhookUrl, setWebhookUrl] = useState("https://yourwebsite.com/api/webhook");
  const [apiRateLimit, setApiRateLimit] = useState("Standard");
  const [bankAccount, setBankAccount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [paypal, setPaypal] = useState(false);
  const [opay, setOpay] = useState(false);
  const [fullName, setFullName] = useState("Admin");
  const [email, setEmail] = useState("admin@example.com");
  const [bio, setBio] = useState("Platform administrator");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const showToast = () => toast.success("Saved Successfully");

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-10">
      <h1 className="text-2xl font-semibold">Platform Settings</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4 border p-4 rounded-md">
          <h2 className="font-semibold">General Settings</h2>
          <div>
            <Label>Platform Name</Label>
            <Input value={platformName} onChange={e => setPlatformName(e.target.value)} />
          </div>
          <div>
            <Label>Support Email</Label>
            <Input value={supportEmail} onChange={e => setSupportEmail(e.target.value)} />
          </div>
          <div>
            <Label>Default Commission Rate (%)</Label>
            <Input value={commissionRate} onChange={e => setCommissionRate(e.target.value)} />
          </div>
          <Button className="w-full" onClick={showToast}>Save General Settings</Button>
        </div>

        <div className="space-y-4 border p-4 rounded-md">
          <h2 className="font-semibold">Appearance</h2>
          <div>
            <Label>Theme</Label>
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger>
                <SelectValue placeholder="Select Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Light">Light</SelectItem>
                <SelectItem value="Dark">Dark</SelectItem>
                <SelectItem value="System">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Label>Primary Color</Label>
          <div className="flex gap-2">
            {["purple", "blue", "green", "orange", "pink"].map(color => (
              <button
                key={color}
                className={`w-8 h-8 rounded ${color === primaryColor ? "ring-2 ring-black" : ""}`}
                style={{ backgroundColor: color }}
                onClick={() => setPrimaryColor(color)}
              />
            ))}
          </div>
          <Button className="w-full" onClick={showToast}>Save Appearance</Button>
        </div>

        <div className="space-y-4 border p-4 rounded-md">
          <h2 className="font-semibold">Security Settings</h2>
          <div className="flex items-center gap-2">
            <Checkbox checked={twoFactor} onCheckedChange={setTwoFactor} />
            <Label>Two-Factor Authentication</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox checked={emailVerification} onCheckedChange={setEmailVerification} />
            <Label>Email Verification</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox checked={productApproval} onCheckedChange={setProductApproval} />
            <Label>Product Approval</Label>
          </div>
          <div>
            <Label>Password Policy</Label>
            <Select value={passwordPolicy} onValueChange={setPasswordPolicy}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Basic">Basic (8+ characters)</SelectItem>
                <SelectItem value="Medium">Medium (8+ chars, letters & number)</SelectItem>
                <SelectItem value="Strong">Strong (8+ chars, mixed case, numbers & symbols)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full" onClick={showToast}>Save Security Settings</Button>
        </div>

        <div className="space-y-4 border p-4 rounded-md">
          <h2 className="font-semibold">API Settings</h2>
          <div>
            <Label>API Key</Label>
            <div className="flex items-center gap-2">
              <Input value={apiKey} readOnly className="flex-1" />
              <Button size="sm">Regenerate</Button>
            </div>
          </div>
          <div>
            <Label>Webhook URL</Label>
            <Input value={webhookUrl} onChange={e => setWebhookUrl(e.target.value)} />
          </div>
          <div>
            <Label>API Rate Limits</Label>
            <Select value={apiRateLimit} onValueChange={setApiRateLimit}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Low">Low (100 requests/min)</SelectItem>
                <SelectItem value="Standard">Standard (500 requests/min)</SelectItem>
                <SelectItem value="High">High (1000 requests/min)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full" onClick={showToast}>Save API Settings</Button>
        </div>
      </div>

      <div className="space-y-4 border p-4 rounded-md">
        <h2 className="font-semibold">Withdrawal Details</h2>
        <div>
          <Label>Bank Account</Label>
          <Input value={bankAccount} onChange={e => setBankAccount(e.target.value)} />
        </div>
        <div>
          <Label>Wallet Address</Label>
          <Input value={walletAddress} onChange={e => setWalletAddress(e.target.value)} />
        </div>
        <Label>Others</Label>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox checked={paypal} onCheckedChange={setPaypal} />
            <Label>Paypal</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox checked={opay} onCheckedChange={setOpay} />
            <Label>opay</Label>
          </div>
        </div>
        <Button className="w-full" onClick={showToast}>Save details</Button>
      </div>

      <div className="space-y-4 border p-4 rounded-md">
        <h2 className="font-semibold">Account Settings</h2>
        <div>
          <Label>Profile Picture</Label>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200" />
            <Button size="sm">Upload new image</Button>
            <Button size="sm" variant="destructive">Remove</Button>
          </div>
        </div>
        <div>
          <Label>Full Name</Label>
          <Input value={fullName} onChange={e => setFullName(e.target.value)} />
        </div>
        <div>
          <Label>Email</Label>
          <Input value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <Label>Bio</Label>
          <Textarea value={bio} onChange={e => setBio(e.target.value)} />
        </div>
        <div>
          <Label>Change Password</Label>
          <div className="grid md:grid-cols-2 gap-4">
            <Input type="password" placeholder="Current Password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
            <Input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Button onClick={showToast}>Save Account Settings</Button>
          <Button variant="destructive">Log Out</Button>
        </div>
      </div>
    </div>
  );
}
