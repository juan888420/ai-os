import { useState, useRef } from "react";

interface MessageInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export function MessageInput({ onSend, disabled }: MessageInputProps) {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="input-container">
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe un mensaje..."
        aria-label="Escribe un mensaje"
        disabled={disabled}
        className="message-input"
      />
      <button
        onClick={handleSend}
        disabled={disabled || !text.trim()}
        className="send-button"
      >
        Enviar
      </button>
    </div>
  );
}
