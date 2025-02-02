// components/ChatList.tsx
"use client";

import React, { useState } from "react";
import { Chat } from "@/types/chat";
import { Button } from "@/components/ui/button"; // shadcn/ui Button component
import { Input } from "@/components/ui/input"; // shadcn/ui Input component
import { Plus } from "lucide-react";

interface ChatListProps {
  chats: Chat[];
  selectedChatId: number;
  onSelectChat: (id: number) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, selectedChatId, onSelectChat }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter chats based on the search term.
  const filteredChats = chats.filter((chat) =>
    chat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCreateChat = () => {
    // Replace with your own chat creation logic.
    alert("Create new chat clicked!");
  };

  return (
    <div className="p-4">
      {/* Header: Chats title and create new chat button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Chats</h2>
        <Button variant="outline" onClick={handleCreateChat} title="Create New Chat">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      {/* Search Box */}
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search chats..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full"
        />
      </div>
      {/* Chat List Items */}
      <div className="space-y-2">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`p-2 rounded cursor-pointer hover:bg-gray-200 ${
              chat.id === selectedChatId ? "bg-gray-300" : ""
            }`}
          >
            {chat.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
