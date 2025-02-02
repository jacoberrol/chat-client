// src/app/rabbitmq-client/page.tsx
"use client";
import React from "react";
import RabbitMQClient from "@/components/RabbitMQClient";

export default function RabbitMQPage() {
  return (
    <div>
      <h1>RabbitMQ Client</h1>
      <RabbitMQClient />
    </div>
  );
}
