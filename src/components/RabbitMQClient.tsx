// Example: src/components/RabbitMQClient.tsx
"use client";
import React, { useEffect } from "react";
import { Client } from "@stomp/stompjs";

const RabbitMQClient = () => {
  useEffect(() => {
    // Create and configure the STOMP client
    const client = new Client({
      brokerURL: "ws://oliverlaptop:15674/ws", // Use ws(s):// URL with proper port
      connectHeaders: {
        login: "chat-client",
        passcode: "password",
      },
      debug: (str) => {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000
    });

    client.onStompError = (frame) => {
        console.error("Broker reported error: " + frame.headers["message"]);
        console.error("Additional details: " + frame.body);
    };

    client.onConnect = (frame) => {
        console.log("Connected to RabbitMQ via STOMP");
        // Subscribe to a destination (e.g., a chat room channel)
        client.subscribe("/queue/test", (message) => {
            console.log("Received message:", message.body);
        })
    };

    console.debug("activating client");
    client.activate();

    // Clean up on component unmount
    return () => {
        console.log("deactivate");
        client.deactivate();
    }
  }, []);

  return <div>RabbitMQ Client Active</div>;
};

export default RabbitMQClient;
