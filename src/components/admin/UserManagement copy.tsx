import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MoreVertical } from 'lucide-react';

const users = [
  {
    initials: 'JS',
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'Seller',
    status: 'Active',
    revenue: '$84,230',
    joined: '2023-01-15'
  },
  {
    initials: 'EJ',
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    role: 'Affiliate',
    status: 'Active',
    revenue: '$12,450',
    joined: '2023-02-21'
  },
  {
    initials: 'MD',
    name: 'Michael Davis',
    email: 'michael.davis@example.com',
    role: 'Seller',
    status: 'Inactive',
    revenue: '$62,340',
    joined: '2023-03-05'
  },
  {
    initials: 'SW',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@example.com',
    role: 'Affiliate',
    status: 'Active',
    revenue: '$8,790',
    joined: '2023-04-12'
  },
  {
    initials: 'DB',
    name: 'David Brown',
    email: 'david.brown@example.com',
    role: 'Buyer',
    status: 'Blocked',
    revenue: '$2,340',
    joined: '2023-05-18'
  }
];

const statusStyle = {
  Active: 'text-green-700 bg-green-100',
  Inactive: 'text-yellow-700 bg-yellow-100',
  Blocked: 'text-red-700 bg-red-100'
};

export default function UserManagementPage() {
  const [dialog, setDialog] = useState({ type: null, user: null });

  const openDialog = (user, type) => {
    setDialog({ user, type });
  };

  const closeDialog = () => setDialog({ type: null, user: null });

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-semibold">User Management</h2>
      <p className="text-muted-foreground">Manage users, track activity, and control permissions across your platform.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card><CardContent className="p-4"><p>Total Users</p><p className="text-2xl font-bold">5</p><p className="text-sm text-green-600">+3 this week</p></CardContent></Card>
        <Card><CardContent className="p-4"><p>Active Users</p><p className="text-2xl font-bold">3</p><p className="text-sm text-green-600">+2 this week</p></CardContent></Card>
        <Card><CardContent className="p-4"><p>Inactive Users</p><p className="text-2xl font-bold">1</p><p className="text-sm">No change</p></CardContent></Card>
        <Card><CardContent className="p-4"><p>Blocked Users</p><p className="text-2xl font-bold">1</p><p className="text-sm text-red-600">+1 this week</p></CardContent></Card>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <Input className="w-full md:w-1/3" placeholder="Search users..." />
        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All roles</SelectItem>
            <SelectItem value="affiliate">Affiliate</SelectItem>
            <SelectItem value="buyers">Buyers</SelectItem>
            <SelectItem value="sellers">Sellers</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mt-4">
          <TabsTrigger value="all">All Users</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
          <TabsTrigger value="blocked">Blocked</TabsTrigger>
        </TabsList>

        <div className="mt-4 overflow-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">User</th>
                <th className="p-2">Role</th>
                <th className="p-2">Status</th>
                <th className="p-2">Revenue</th>
                <th className="p-2">Joined</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-medium">{user.initials}</div>
                    <div>
                      <p>{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </td>
                  <td className="p-2">
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{user.role}</span>
                  </td>
                  <td className="p-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${statusStyle[user.status]}`}>{user.status}</span>
                  </td>
                  <td className="p-2">{user.revenue}</td>
                  <td className="p-2">{user.joined}</td>
                  <td className="p-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon"><MoreVertical className="w-4 h-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => openDialog(user, 'message')}>Message</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => openDialog(user, 'reset')}>Reset Password</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => openDialog(user, 'block')} className="text-red-600">Block User</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Tabs>

      {dialog.type && (
  <Dialog open onOpenChange={closeDialog}>
    <DialogContent>
      {dialog.type === 'message' && (
        <>
          <DialogHeader>
            <DialogTitle>Send Message to {dialog.user?.name}</DialogTitle>
            <p className="text-sm text-muted-foreground">This message will be sent to the user's email address.</p>
          </DialogHeader>
          <div className="space-y-2">
            <Input value={dialog.user?.email} readOnly />
            <Input value="Message from lexcxa admin" readOnly />
            <textarea placeholder="Type your message here...." className="w-full border rounded p-2 h-32"></textarea>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={closeDialog}>Cancel</Button>
            <Button>Send Message</Button>
          </DialogFooter>
        </>
      )}

      {dialog.type === 'reset' && (
        <>
          <DialogHeader>
            <DialogTitle>Reset Password for {dialog.user?.name}</DialogTitle>
            <p className="text-sm text-muted-foreground">This will generate a temporary password and send it to the user's email.</p>
          </DialogHeader>
          <div className="flex items-center gap-2 border p-2 rounded">
            <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full font-medium">{dialog.user?.initials}</div>
            <div>
              <p>{dialog.user?.name}</p>
              <p className="text-sm text-muted-foreground">{dialog.user?.email}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">The user will receive an email with instructions to set a new password.</p>
          <DialogFooter>
            <Button variant="outline" onClick={closeDialog}>Cancel</Button>
            <Button>Reset Password</Button>
          </DialogFooter>
        </>
      )}

      {dialog.type === 'block' && (
        <>
          <DialogHeader>
            <DialogTitle>Block User</DialogTitle>
            <p className="text-sm text-muted-foreground">This will prevent the user from accessing the platform.</p>
          </DialogHeader>
          <div className="flex items-center gap-2 border p-2 rounded">
            <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full font-medium">{dialog.user?.initials}</div>
            <div>
              <p>{dialog.user?.name}</p>
              <p className="text-sm text-muted-foreground">{dialog.user?.email}</p>
            </div>
          </div>
          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
            <li>Prevent them from logging in</li>
            <li>Hide their products from the marketplace</li>
            <li>Suspend their affiliate links</li>
            <li>Pause any pending payouts</li>
          </ul>
          <DialogFooter>
            <Button variant="outline" onClick={closeDialog}>Cancel</Button>
            <Button variant="destructive">Block User</Button>
          </DialogFooter>
        </>
      )}
    </DialogContent>
  </Dialog>
)}

    </div>
  );
}
