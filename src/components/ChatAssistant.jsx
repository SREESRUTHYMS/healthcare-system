import React, { useEffect, useRef, useState } from "react";

// Floating AI assistant, bottom-right. Ships with canned responses so the
// UI is fully clickable with no backend — swap `getAssistantReply` for a
// real call to Claude (or any LLM) via your backend once you're ready.

const QUICK_PROMPTS = [
  "How do I book an appointment?",
  "Where can I see my prescriptions?",
  "How does billing work?",
];

const CANNED_REPLIES = [
  {
    match: /appointment|book|doctor/i,
    reply:
      "Head to your Patient dashboard → Appointments tab, then \"Book new appointment.\" You can filter doctors by specialization and pick any open slot.",
  },
  {
    match: /prescription|medicine|medication/i,
    reply:
      "Your prescriptions live under Patient dashboard → Medical records. Each one has a \"Download PDF\" link if you need a copy for a pharmacy.",
  },
  {
    match: /bill|payment|invoice|insurance/i,
    reply:
      "Billing is under Patient dashboard → Billing. Outstanding invoices show a \"Pay now\" button, and insurance claims are tracked alongside each invoice.",
  },
];

function getAssistantReply(message) {
  // Replace this with a real API call, e.g.:
  //
  // const res = await fetch("/api/assistant", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ message }),
  // });
  // const data = await res.json();
  // return data.reply;
  const hit = CANNED_REPLIES.find((r) => r.match.test(message));
  return (
    hit?.reply ||
    "I'm a demo assistant for now — connect me to a real backend to answer questions like that. Try asking about appointments, prescriptions, or billing."
  );
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! I'm the Vitals assistant. Ask me about appointments, records, or billing." },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", text: getAssistantReply(trimmed) }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {open && (
        <div className="mb-3 flex h-[420px] w-[320px] flex-col overflow-hidden rounded-2xl border border-teal/15 bg-white shadow-[0_20px_60px_-15px_rgba(13,92,99,0.4)] sm:w-[360px]">
          <div className="flex items-center justify-between bg-teal px-4 py-3">
            <div>
              <p className="font-display text-sm font-semibold text-mint">Vitals assistant</p>
              <p className="font-mono text-[10px] uppercase tracking-wide text-mint/60">Online · demo mode</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              className="rounded-full p-1 text-mint/80 hover:text-mint"
            >
              ✕
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-mint px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-3 py-2 font-body text-sm leading-relaxed ${
                  m.role === "assistant" ? "bg-white text-ink/80" : "ml-auto bg-teal text-mint"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 border-t border-teal/10 bg-white px-4 py-3">
              {QUICK_PROMPTS.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="rounded-full border border-teal/20 px-3 py-1.5 font-body text-xs text-teal hover:bg-mint-soft"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-teal/10 bg-white p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="flex-1 rounded-full border border-teal/20 px-4 py-2 font-body text-sm text-ink outline-none focus:border-teal"
            />
            <button
              type="submit"
              className="rounded-full bg-teal px-4 py-2 font-body text-sm font-medium text-mint hover:bg-teal-dark"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close assistant" : "Open assistant"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-teal text-mint shadow-[0_12px_30px_-8px_rgba(13,92,99,0.6)] transition-transform hover:scale-105"
      >
        {open ? (
          <span className="text-xl">✕</span>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
            <path
              d="M12 3C7 3 3 6.6 3 11c0 2.4 1.2 4.6 3.1 6.1L5 21l4.3-1.7c.9.2 1.8.3 2.7.3 5 0 9-3.6 9-8S17 3 12 3Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <circle cx="8.5" cy="11" r="1" fill="currentColor" />
            <circle cx="12" cy="11" r="1" fill="currentColor" />
            <circle cx="15.5" cy="11" r="1" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
}