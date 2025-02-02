// app/page.tsx
"use client";

import React, { useState } from "react";
import ChatList from "@/components/ChatList";
import ChatWindow from "@/components/ChatWindow";
import { Chat } from "@/types/chat";

const initialChats: Chat[] = [
  {
    id: 1,
    title: "General Chat",
    messages: [
      { id: 1, sender: "Alice", text: "Hello everyone!", timestamp: "2025-01-31 10:00" },
      { id: 2, sender: "Bob", text: "Hi Alice!", timestamp: "2025-01-31 10:05" },
    ],
  },
  {
    id: 2,
    title: "Project Discussion",
    messages: [
      { id: 1, sender: "Carol", text: "Did you review the code?", timestamp: "2025-01-31 11:00" },
      { id: 2, sender: "Dave", text: "Yes, looks good!", timestamp: "2025-01-31 11:05" },
    ],
  },
  {
    id: 3,
    title: "Random",
    messages: [
      { id: 1, sender: "Eve", text: "Anyone up for a game tonight?", timestamp: "2025-01-31 12:00" },
    ],
  },
];

export default function Home() {
  const [chats, setChats] = useState<Chat[]>(initialChats);
  const [selectedChatId, setSelectedChatId] = useState<number>(initialChats[0].id);

  const handleChatSelect = (id: number) => {
    setSelectedChatId(id);
  };

  const handleSendMessage = (messageText: string) => {
    setChats((prevChats) =>
      prevChats.map((chat) => {
        if (chat.id === selectedChatId) {
          return {
            ...chat,
            messages: [
              ...chat.messages,
              {
                id: chat.messages.length + 1,
                sender: "You",
                text: messageText,
                timestamp: new Date().toLocaleString(),
              },
            ],
          };
        }
        return chat;
      })
    );
  };

  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  return (
    <div className="flex h-screen">
      {/* Left Panel */}
      <div className="w-1/3 border-r overflow-y-auto">
        <ChatList
          chats={chats}
          selectedChatId={selectedChatId}
          onSelectChat={handleChatSelect}
        />
      </div>
      {/* Right Panel */}
      <div className="flex-1 overflow-y-auto">
        <ChatWindow chat={selectedChat} onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}