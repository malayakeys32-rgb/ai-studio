"use client";

import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(e) {
    e?.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input.trim() };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await res.json();
      if (data?.reply) {
        setMessages([...nextMessages, data.reply]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-6">
      {/* Chat panel */}
      <div className="flex flex-col border border-gray-800 rounded-xl bg-black/40">
        <div className="px-4 py-3 border-b border-gray-800 text-sm text-gray-400">
          Conversation
        </div>

        <div className="flex-1 min-h-[260px] max-h-[420px] overflow-y-auto px-4 py-4 space-y-3 text-sm">
          {messages.length === 0 && (
            <div className="text-gray-500">
              Start a conversation with your AI workspace.
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-3 py-2 ${
                  m.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-900 text-gray-100 border border-gray-700"
                }`}
              >
                <div className="text-[11px] uppercase tracking-wide mb-1 opacity-70">
                  {m.role === "user" ? "You" : "AI"}
                </div>
                <div className="whitespace-pre-wrap">{m.content}</div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="text-xs text-gray-500">AI is thinking…</div>
          )}
        </div>

        <form onSubmit={sendMessage} className="border-t border-gray-800 p-3">
          <div className="flex gap-2">
            <input
              className="flex-1 bg-black border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              placeholder="Ask anything about text, code, or documents…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 text-sm rounded-md bg-blue-600 hover:bg-blue-500 disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send"}
            </button>
          </div>
        </form>
      </div>

      {/* Right tools panel */}
      <div className="space-y-3 text-sm">
        <div className="border border-gray-800 rounded-xl bg-black/40 p-4">
          <div className="text-xs font-semibold text-gray-400 mb-2">
            Tools
          </div>
          <ul className="space-y-1 text-gray-300">
            <li>• General chat</li>
            <li>• Code explanation</li>
            <li>• Drafting + rewriting</li>
            <li>• Brainstorming flows</li>
          </ul>
        </div>

        <div className="border border-gray-800 rounded-xl bg-black/40 p-4">
          <div className="text-xs font-semibold text-gray-400 mb-2">
            Session
          </div>
          <div className="text-gray-400 text-xs">
            Messages: {messages.length}
          </div>
        </div>
      </div>
    </div>
  );
}
