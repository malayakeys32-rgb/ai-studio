"use client";

import { useState } from "react";

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  async function sendMessage() {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setResponse(data.response);
  }

  return (
    <div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />

      <button onClick={sendMessage}>Send</button>

      <div>{response}</div>
    </div>
  );
}
