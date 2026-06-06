import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

export default function App() {
  const [text, setText] = useState("");

  const messages = useQuery(api.messages.getMessages, {
    customerId: "demo",
  });

  const sendMessage = useMutation(api.messages.sendMessage);

  return (
    <div style={{ padding: 20 }}>
      <h1>AI OS MVP</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe un mensaje..."
        />

        <button
          onClick={() => {
            sendMessage({
              customerId: "demo",
              content: text,
            });
            setText("");
          }}
        >
          Enviar
        </button>
      </div>

      <h3>Mensajes:</h3>

      <div>
        {messages?.map((m) => (
          <div key={m._id}>
            <b>{m.role}:</b> {m.content}
          </div>
        ))}
      </div>
    </div>
  );
}