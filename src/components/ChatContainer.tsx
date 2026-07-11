import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";

interface Message {
  _id: string;
  role: string;
  content: string;
  createdAt: number;
}

interface ChatContainerProps {
  messages: Message[] | undefined;
  isLoading?: boolean;
}

export function ChatContainer({ messages, isLoading }: ChatContainerProps) {
  const endRef = useRef<HTMLDivElement>(null);
  const isAtBottomRef = useRef(true);
  const lastScrollTopRef = useRef(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 40;
    if (atBottom) {
      isAtBottomRef.current = true;
    } else if (el.scrollTop < lastScrollTopRef.current) {
      // Solo desanclar cuando el usuario desplaza hacia arriba; el scroll
      // programado hacia abajo emite eventos intermedios que no deben desanclar.
      isAtBottomRef.current = false;
    }
    lastScrollTopRef.current = el.scrollTop;
  };

  useEffect(() => {
    if (isAtBottomRef.current) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
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
    <div className="chat-container" aria-live="polite" onScroll={handleScroll}>
      {messages.map((message) => (
        <ChatMessage
          key={message._id}
          role={(message.role as "user" | "assistant") || "assistant"}
          content={message.content}
          timestamp={new Date(message.createdAt)}
        />
      ))}
      {isLoading && (
        <div className="message-wrapper assistant-wrapper">
          <div className="message assistant-message loading">
            <span
              className="loader"
              role="status"
              aria-label="El asistente está escribiendo"
            ></span>
          </div>
        </div>
      )}
      <div ref={endRef} />
    </div>
  );
}
