import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";

interface Message {
  _id: string;
  role: string;
  content: string;
  timestamp?: Date;
}

interface ChatContainerProps {
  messages: Message[] | undefined;
  isLoading?: boolean;
}

export function ChatContainer({ messages, isLoading }: ChatContainerProps) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!messages || messages.length === 0) {
    return (
      <div className="chat-empty">
        <div className="empty-state">
          <h2>AI OS Chat</h2>
          <p>Comienza escribiendo un mensaje para empezar una conversación</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-container">
      {messages.map((message) => (
        <ChatMessage
          key={message._id}
          role={(message.role as "user" | "assistant") || "assistant"}
          content={message.content}
          timestamp={message.timestamp}
        />
      ))}
      {isLoading && (
        <div className="message-wrapper assistant-wrapper">
          <div className="message assistant-message loading">
            <span className="loader"></span>
          </div>
        </div>
      )}
      <div ref={endRef} />
    </div>
  );
}
