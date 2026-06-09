interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  timestamp?: Date;
}

export function ChatMessage({ role, content, timestamp }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`message-wrapper ${isUser ? "user-wrapper" : "assistant-wrapper"}`}>
      <div className={`message ${isUser ? "user-message" : "assistant-message"}`}>
        <p>{content}</p>
        {timestamp && (
          <span className="message-timestamp">
            {timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
        )}
      </div>
    </div>
  );
}
