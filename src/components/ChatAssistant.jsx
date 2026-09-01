import React, { useEffect, useRef, useState } from "react";

// Original illustrated avatar for the assistant persona "Nora" — not a
// photo (avoids likeness/copyright issues), just a friendly flat-style
// face built from SVG shapes in the app's existing teal/pulse palette.
function NoraAvatar({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <circle cx="32" cy="32" r="32" fill="#0D5C63" />
      <path
        d="M32 46c9 0 15-5.5 15-14.5S41 17 32 17s-15 5.5-15 14.5S23 46 32 46Z"
        fill="#F6D9C9"
      />
      <path
        d="M17 27c0-9 6-15 15-15s15 6 15 15c-3-1-6-4-7-7-3 4-9 6-15 6-3 0-6 1-8 3v-2Z"
        fill="#3D2A22"
      />
      <circle cx="26" cy="31" r="2" fill="#12262A" />
      <circle cx="38" cy="31" r="2" fill="#12262A" />
      <path d="M27 38c1.5 1.6 3.2 2.4 5 2.4s3.5-.8 5-2.4" stroke="#12262A" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="52" cy="12" r="6" fill="#E8604C" stroke="#F5F8F6" strokeWidth="2" />
    </svg>
  );
}

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
  const [showGreeting, setShowGreeting] = useState(true);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! I'm Nora, your care assistant. Ask me about appointments, records, or billing." },
  ]);

  // Auto-dismiss the greeting bubble after a few seconds
  useEffect(() => {
    const t = setTimeout(() => setShowGreeting(false), 6000);
    return () => clearTimeout(t);
  }, []);
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
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="mb-3 flex h-[420px] w-[320px] flex-col overflow-hidden rounded-2xl border border-teal/15 bg-white shadow-[0_20px_60px_-15px_rgba(13,92,99,0.4)] sm:w-[360px]">
          <div className="flex items-center justify-between bg-teal px-4 py-3">
                        <div className="flex items-center gap-2">
              <NoraAvatar className="h-8 w-8 shrink-0" />
              <div>
                <p className="font-display text-sm font-semibold text-mint">Nora</p>
                <p className="font-mono text-[10px] uppercase tracking-wide text-mint/60">Care assistant · online</p>
              </div>
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

            <div className="flex items-center gap-3">
        {!open && showGreeting && (
          <div className="relative rounded-2xl border border-teal/15 bg-white px-4 py-2.5 shadow-[0_12px_30px_-12px_rgba(13,92,99,0.4)]">
            <button
              onClick={() => setShowGreeting(false)}
              aria-label="Dismiss greeting"
              className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-ink/70 text-[9px] text-mint"
            >
              ✕
            </button>
            <p className="font-body text-sm text-ink/80">
              Hi, I'm Nora — here to assist you 👋
            </p>
          </div>
        )}

        <button
          onClick={() => {
            setOpen((v) => !v);
            setShowGreeting(false);
          }}
          aria-label={open ? "Close assistant" : "Open assistant"}
          className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-teal text-mint shadow-[0_12px_30px_-8px_rgba(13,92,99,0.6)] transition-transform hover:scale-105"
        >
          {open ? <span className="text-xl">✕</span> : <NoraAvatar className="h-full w-full" />}
        </button>
      </div>
    </div>
  );
}