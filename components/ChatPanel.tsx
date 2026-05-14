"use client";
import { useState } from "react";

export default function ChatPanel() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();
    const reply = data.choices?.[0]?.message;

    setMessages([...newMessages, reply]);
    setInput("");
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="h-96 overflow-y-auto bg-gray-900 p-4 rounded">
        {messages.map((m, i) => (
          <div key={i} className="mb-2">
            <strong>{m.role}:</strong> {m.content}
          </div>
        ))}
      </div>

      <div className="flex mt-4">
        <input
          className="flex-1 p-2 bg-gray-800 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-600 rounded"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
