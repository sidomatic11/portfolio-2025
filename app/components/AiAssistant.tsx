"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/ai/chat",
    }),
  });
  const isLoading = status === "submitted" || status === "streaming";

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!error) return;
    const msg = error instanceof Error ? error.message : String(error);
    // #region agent log
    fetch('http://127.0.0.1:7584/ingest/6c57a2ed-337d-4f98-97be-be152c67fb23',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'51a094'},body:JSON.stringify({sessionId:'51a094',runId:'pre-fix',hypothesisId:'D',location:'app/components/AiAssistant.tsx:error',message:'useChat error',data:{status,errorMessage:msg,messagesCount:messages.length},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log
  }, [error, status, messages.length]);

  useEffect(() => {
    if (!open) return;
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [open, messages.length]);

  return (
    <div className="fixed right-4 bottom-20 z-[60] sm:bottom-4">
      {open && (
        <div
          id="ai-assistant-panel"
          className="border-border-level-1 bg-background-level-1 mb-3 w-[min(92vw,420px)] overflow-hidden border shadow-[8px_8px_0_0_var(--color-gray-300)]"
        >
          <div className="border-border-level-1 flex items-center justify-between border-b px-4 py-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold tracking-wide uppercase">
                portfolio assistant
              </p>
              <p className="text-xs text-gray-500">
                Ask about projects, background, or what to read next.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="border-border-level-1 hover:bg-background-level-0 ml-4 inline-flex h-9 w-9 items-center justify-center border text-sm"
              aria-label="Close assistant"
            >
              ✕
            </button>
          </div>

          <div
            ref={scrollRef}
            className="max-h-[55vh] space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.length === 0 && (
              <div className="text-left">
                <div className="border-border-level-0 bg-background-level-0 inline-block max-w-[90%] whitespace-pre-wrap border px-3 py-2 text-sm leading-relaxed">
                  Hey — I can help you navigate Siddhant’s work. What are you
                  looking for?
                </div>
              </div>
            )}
            {messages.map((m) => {
              const isUser = m.role === "user";
              return (
                <div key={m.id} className={isUser ? "text-right" : "text-left"}>
                  <div
                    className={[
                      "inline-block max-w-[90%] whitespace-pre-wrap border px-3 py-2 text-sm leading-relaxed",
                      isUser
                        ? "border-border-level-1 bg-white"
                        : "border-border-level-0 bg-background-level-0",
                    ].join(" ")}
                  >
                    {m.parts
                      .filter((p) => p.type === "text")
                      .map((p) => p.text)
                      .join("")}
                  </div>
                </div>
              );
            })}

            {error && (
              <div className="border-border-level-1 bg-white border px-3 py-2 text-sm text-red-700">
                {error instanceof Error
                  ? error.message
                  : "Something went wrong. Please try again."}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (status !== "ready") return;
              const text = input.trim();
              if (!text) return;
              // #region agent log
              fetch('http://127.0.0.1:7584/ingest/6c57a2ed-337d-4f98-97be-be152c67fb23',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'51a094'},body:JSON.stringify({sessionId:'51a094',runId:'pre-fix',hypothesisId:'E',location:'app/components/AiAssistant.tsx:onSubmit',message:'Sending message via useChat.sendMessage',data:{status,inputLength:text.length,messagesPreview:messages.slice(-6).map((m)=>({role:m.role,parts:m.parts?.map((p:any)=>p?.type)}))},timestamp:Date.now()})}).catch(()=>{});
              // #endregion agent log
              sendMessage({ text });
              setInput("");
            }}
            className="border-border-level-1 flex gap-2 border-t p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything…"
              className="border-border-level-1 bg-white flex-1 border px-3 py-2 text-sm outline-none"
              disabled={status !== "ready"}
              maxLength={1000}
            />
            <button
              type="submit"
              disabled={status !== "ready" || input.trim().length === 0}
              className="border-border-level-1 bg-white hover:bg-background-level-0 disabled:opacity-60 border px-3 py-2 text-sm font-medium"
            >
              {isLoading ? "…" : "Send"}
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="border-border-level-1 bg-background-level-1 hover:bg-background-level-0 inline-flex items-center gap-2 border px-4 py-3 text-sm font-semibold shadow-[8px_8px_0_0_var(--color-brand-yellow)]"
        aria-expanded={open}
        aria-controls="ai-assistant-panel"
      >
        <span className="text-base">Ask AI</span>
        <span className="text-xs font-normal tracking-wide text-gray-500 uppercase">
          beta
        </span>
      </button>
    </div>
  );
}

