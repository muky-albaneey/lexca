import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

const CustomModal = ({ isOpen, onClose, type, user }) => {
  if (!isOpen) return null;

  return (
    <div style={{ background: "rgba(0,0,0,.7)" }} className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">
            {type === 'message' ? `Send Message to ${user?.name}` :
             type === 'reset' ? `Reset Password for ${user?.name}` :
             'Block User'}
          </h3>
          <Button variant="ghost" onClick={onClose}>X</Button>
        </div>

        {type === 'message' && (
          <>
            <p className="text-sm text-muted-foreground mb-2">This message will be sent to the user's email address.</p>
            <div className="space-y-2 mb-4">
              <Input value={user?.email} readOnly />
              <Input value="Message from admin" readOnly />
              <textarea placeholder="Type your message here...." className="w-full border rounded p-2 h-32" />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button>Send Message</Button>
            </div>
          </>
        )}

        {type === 'reset' && (
          <>
            <div className="flex items-center gap-2 border p-2 rounded mb-4">
              <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full font-medium">{user?.initials}</div>
              <div>
                <p>{user?.name}</p>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">The user will receive an email with instructions to set a new password.</p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button>Reset Password</Button>
            </div>
          </>
        )}

        {type === 'block' && (
          <>
            <div className="flex items-center gap-2 border p-2 rounded mb-4">
              <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full font-medium">{user?.initials}</div>
              <div>
                <p>{user?.name}</p>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
            </div>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1 mb-4">
              <li>Prevent them from logging in</li>
              <li>Hide their products from the marketplace</li>
              <li>Suspend their affiliate links</li>
              <li>Pause any pending payouts</li>
            </ul>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button variant="destructive">Block User</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default function UserManagementPage() {
  const [dialog, setDialog] = useState({ type: null, user: null });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDialog = (user, type) => {
    setDialog({ user, type });
    setIsModalOpen(true);
  };

  const closeDialog = () => {
    setDialog({ type: null, user: null });
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-semibold">User Management</h2>
      <p className="text-muted-foreground">Manage users, track activity, and control permissions across your platform.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Same cards as before */}
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

      <CustomModal
        isOpen={isModalOpen}
        onClose={closeDialog}
        type={dialog.type}
        user={dialog.user}
      />
    </div>
  );
}
