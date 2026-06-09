import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { ChatContainer } from "./components/ChatContainer";
import { MessageInput } from "./components/MessageInput";
import "./App.css";

export default function App() {
  const messages = useQuery(api.messages.getMessages, {
    customerId: "demo",
  });

  const sendMessage = useMutation(api.messages.sendMessage);

  const handleSend = (text: string) => {
    sendMessage({
      customerId: "demo",
      content: text,
    });
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>AI OS Chat</h1>
      </div>
      <div className="app-content">
        <ChatContainer messages={messages} />
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
}