import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { ChatContainer } from "./components/ChatContainer";
import { LandingPage } from "./components/LandingPage";
import { MessageInput } from "./components/MessageInput";
import "./App.css";

function getOrCreateAnonymousCustomerId(): string {
  const storageKey = "aios:customerId";
  let customerId = localStorage.getItem(storageKey);
  if (!customerId) {
    customerId = crypto.randomUUID();
    localStorage.setItem(storageKey, customerId);
  }
  return customerId;
}

const anonymousCustomerId = getOrCreateAnonymousCustomerId();

export default function App() {
  const [view, setView] = useState<"landing" | "chat">("landing");

  const messages = useQuery(api.messages.getMessages, {
    customerId: anonymousCustomerId,
  });

  const sendMessage = useMutation(api.messages.sendMessage);

  const isWaitingForAssistant =
    messages !== undefined &&
    messages.length > 0 &&
    messages[messages.length - 1].role === "user";

  const handleSend = (text: string) => {
    sendMessage({
      customerId: anonymousCustomerId,
      content: text,
    });
  };

  if (view === "landing") {
    return <LandingPage onOpenChat={() => setView("chat")} />;
  }

  return (
    <div className="app">
      <div className="app-header">
        <button
          className="back-link"
          onClick={() => setView("landing")}
          aria-label="Volver a la página principal"
        >
          ← AI OS
        </button>
        <h1>AI OS Chat</h1>
      </div>
      <div className="app-content">
        <ChatContainer messages={messages} isLoading={isWaitingForAssistant} />
        <MessageInput onSend={handleSend} disabled={isWaitingForAssistant} />
      </div>
    </div>
  );
}