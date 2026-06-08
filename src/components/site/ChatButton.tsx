"use client";

import { useState, useRef, useEffect } from "react";

const botResponses: Record<string, string> = {
  "how do i start a store":
    "Starting is easy! Click 'Start Your Store' or head to our Contact section. We'll set up a free custom merch store for your school, team, or org — no upfront fees.",
  "what are your prices":
    "Our pricing is transparent and competitive! On-demand items start around $15–$25, and bulk orders get volume discounts. We'll send a custom quote once we know your needs.",
  "how long does shipping take":
    "Standard orders ship in 7–10 business days. Flash sale/bulk orders typically ship 2–3 weeks after the sale closes. We offer both school delivery and direct-to-home!",
  "do you do fundraising":
    "Absolutely! We build fundraising right into your store. You set a profit margin per item, and we handle everything else. Many groups raise $500–$5,000+ per campaign.",
  "what products do you offer":
    "We offer T-shirts, hoodies, hats, yard signs, tote bags, drinkware, stickers, and much more. If you can print on it, we probably carry it!",
};

const defaultResponse =
  "Great question! I'd love to help. For specific inquiries, our team is available at 1-800-239-9948, or you can fill out the contact form below. Is there anything else I can help with?";

const suggestions = [
  "How do I start a store?",
  "What are your prices?",
  "How long does shipping take?",
  "Do you do fundraising?",
  "What products do you offer?",
];

interface Message {
  role: "bot" | "user";
  text: string;
}

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hey there! 👋 I'm the Spirit Hero assistant. Ask me anything about custom merch stores, pricing, or fundraising!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  function getReply(userText: string): string {
    const lower = userText.toLowerCase().trim();
    for (const [key, value] of Object.entries(botResponses)) {
      if (lower.includes(key) || key.includes(lower)) return value;
    }
    // Partial matching
    const words = lower.split(/\s+/);
    for (const [key, value] of Object.entries(botResponses)) {
      if (words.some((w) => w.length > 3 && key.includes(w))) return value;
    }
    return defaultResponse;
  }

  function handleSend(text?: string) {
    const msg = text || input.trim();
    if (!msg) return;
    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getReply(msg);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  }

  return (
    <>
      {/* Chat Panel */}
      <div className={`chat-panel ${isOpen ? "chat-open" : ""}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar">S</div>
            <div>
              <strong>Spirit Hero</strong>
              <span className="chat-status">● Online</span>
            </div>
          </div>
          <button
            className="chat-close"
            onClick={() => setIsOpen(false)}
            type="button"
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg chat-msg-${msg.role}`}>
              <div className="chat-bubble">{msg.text}</div>
            </div>
          ))}
          {isTyping && (
            <div className="chat-msg chat-msg-bot">
              <div className="chat-bubble chat-typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {messages.length <= 1 && (
          <div className="chat-suggestions">
            {suggestions.map((s) => (
              <button
                key={s}
                className="chat-suggestion"
                onClick={() => handleSend(s)}
                type="button"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <form
          className="chat-input-bar"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message…"
            className="chat-input"
          />
          <button type="submit" className="chat-send" aria-label="Send message">
            ↑
          </button>
        </form>
      </div>

      {/* FAB */}
      <button
        className="chat-fab"
        type="button"
        aria-label="Open chat"
        onClick={() => setIsOpen((o) => !o)}
      >
        {isOpen ? (
          <span className="fab-close-icon">✕</span>
        ) : (
          <>
            <span className="fab-icon">💬</span>
            <span className="fab-pulse"></span>
          </>
        )}
      </button>
    </>
  );
}
