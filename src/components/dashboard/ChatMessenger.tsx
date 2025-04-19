'use client';

import { useState } from 'react';
import { MoreVertical, Phone, Video, Smile, Paperclip, Send } from 'lucide-react';

const conversations = [
  {
    name: 'Support Team',
    time: '10:42 AM',
    unread: true,
    message: 'How can we help you today?',
    messages: [
      { from: 'support', text: 'Hello! How can we help you with your affiliate marketing today?' },
      { from: 'user', text: "I'm having trouble generating links for Amazon products. Can you help?" },
      { from: 'support', text: "Of course! Make sure you've connected your Amazon Associates account in the settings." },
    ],
  },
  {
    name: 'TechGadgets Inc.',
    time: 'Yesterday',
    message: "We've just launched our new pro...",
    messages: [
      { from: 'user', text: 'Hey! Congrats on the launch.' },
      { from: 'support', text: 'Thanks! Let us know if you want an exclusive preview.' },
    ],
  },
  {
    name: 'Sarah Johnson',
    time: 'Monday',
    message: 'Thanks for the affiliate tips!',
    messages: [
      { from: 'sarah', text: 'Thanks for the affiliate tips!' },
      { from: 'support', text: 'Anytime! Glad it helped.' },
    ],
  },
  {
    name: 'HomeEssentials Co.',
    time: 'Last week',
    message: 'Exclusive offer for our top affiliates!',
    messages: [
      { from: 'home', text: 'We’ve launched a new line of products. Special offer for you!' },
      { from: 'support', text: 'Amazing! I’ll share it with our network.' },
    ],
  },
  {
    name: 'Michael Chen',
    time: '2 weeks ago',
    message: "Let's collaborate on the next cam...",
    messages: [
      { from: 'michael', text: "Let's collaborate on the next campaign." },
      { from: 'support', text: 'Absolutely, I’ll set up a meeting.' },
    ],
  },
];

export default function ChatMessenger() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [showChatMobile, setShowChatMobile] = useState(false);

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
    setMenuOpen(false);
    setShowChatMobile(true);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside
        className={`w-full md:w-1/3 border-r border-gray-200 ${
          showChatMobile ? 'hidden md:block' : 'block'
        }`}
      >
        <div className="p-4 border-b border-gray-300">
          <h2 className="text-2xl font-bold">Messages</h2>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>
        <div className="p-2">
          <button className="bg-black text-white rounded px-4 py-2 font-medium mb-2">All</button>
          <ul>
            {conversations.map((item, i) => (
              <li
                key={i}
                onClick={() => handleSelectChat(item)}
                className={`cursor-pointer p-3 border-t flex justify-between items-center ${
                  selectedChat?.name === item.name
                    ? 'bg-gray-500 text-white'
                    : item.unread
                    ? 'bg-white text-black'
                    : ''
                }`}
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm truncate max-w-[200px]">{item.message}</p>
                </div>
                <div className="text-sm text-right">
                  <p>{item.time}</p>
                  {item.unread && (
                    <span className="w-5 h-5 flex items-center justify-center bg-black text-white text-sm rounded-full">
                      1
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Chat Panel */}
      {selectedChat && (
        <main
          className={`flex-1 flex flex-col ${
            showChatMobile ? 'block' : 'hidden'
          } md:block`}
        >
          <header className="flex justify-between items-center p-4 border-b">
  <div className="flex flex-col items-center justify-center space-x-2">
    {/* Back button - only on mobile */}
    <button
      onClick={() => setShowChatMobile(false)}
      className="md:hidden text-gray-600 hover:text-black"
    >
      ← Back
    </button>
    <div>
      <p className="text-lg font-semibold">{selectedChat?.name}</p>
      <p className="text-sm text-gray-500">{selectedChat?.name}</p>
    </div>
  </div>
  <div className="flex items-center space-x-4">
    <Phone className="w-5 h-5" />
    <Video className="w-5 h-5" />
    <div className="relative">
      <button onClick={() => setMenuOpen(!menuOpen)}>
        <MoreVertical className="w-5 h-5" />
      </button>
      {menuOpen && (
        <div className="absolute right-0 top-6 w-40 bg-white border shadow-lg rounded text-sm z-10">
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">View Profile</button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Mute notifications</button>
          <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">Delete conversation</button>
        </div>
      )}
    </div>
  </div>
</header>


          <section className="flex-1 p-4 space-y-4 overflow-y-auto">
            {selectedChat?.messages.map((msg, i) => (
              <div
                key={i}
                className={`p-4 rounded max-w-md ${
                  msg.from === 'user' ? 'ml-auto bg-gray-100 text-black' : 'bg-black text-white'
                }`}
              >
                {msg?.text}
              </div>
            ))}
          </section>

          <footer className="p-4 border-t flex items-center space-x-2">
            <Paperclip className="w-5 h-5" />
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border rounded px-3 py-2"
            />
            <Smile className="w-5 h-5" />
            <button className="text-black">
              <Send className="w-5 h-5" />
            </button>
          </footer>
        </main>
      )}
    </div>
  );
}
