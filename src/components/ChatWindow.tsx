// src/components/ChatWindow.tsx
"use client";

import React from "react";
import { Chat } from "@/types/chat";
import MessageInput from "./MessageInput";

interface ChatWindowProps {
  chat?: Chat;
  onSendMessage: (message: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chat, onSendMessage }) => {
  if (!chat) {
    return <div className="p-4">No chat selected</div>;
  }

  return (
    <div className="flex flex-col h-full">
      {/* Chat header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold">{chat.title}</h2>
      </div>
      {/* Chat messages list */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chat.messages.map((message) => (
          <div key={message.id} className="p-2 border-b border-gray-200">
            <div className="font-semibold">{message.sender}</div>
            <div>{message.text}</div>
            <div className="text-sm text-gray-500">{message.timestamp}</div>
          </div>
        ))}
      </div>
      {/* Message input at the bottom */}
      <MessageInput onSend={onSendMessage} />
    </div>
  );
};

export default ChatWindow;