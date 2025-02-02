// types/chat.ts

export interface Message {
    id: number;
    sender: string;
    text: string;
    timestamp: string;
}
  
export interface Chat {
    id: number;
    title: string;
    messages: Message[];
}