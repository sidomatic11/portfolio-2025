"use client";

import { Copy, Linkedin, X } from "iconoir-react";
import { useState } from "react";

export default function Footer() {
  const [copySuccess, setCopySuccess] = useState(false);
  const email = "siddhant.v.patil@outlook.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <footer className="border-border-level-1 relative row-start-3 mx-auto flex h-64 flex-col items-center justify-center border-t bg-slate-800 pb-16 text-gray-700 before:absolute before:inset-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-white before:content-[''] sm:pb-0">
      <div className="border-border-level-1 relative isolate flex h-full w-full max-w-5xl flex-col justify-center border-x px-8 md:px-32 lg:px-64">
        <div className="border-border-level-1 pointer-events-none absolute top-0 left-0 z-[-1] h-full w-1/2 border-r" />
        <nav className="flex w-full">
          <a
            href="https://www.linkedin.com/in/patilsiddhant/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-border-level-1 flex h-14 flex-1 items-center justify-center gap-2 border border-r-0 bg-slate-800 py-2 text-white transition-colors hover:bg-slate-700/40"
            style={{
              boxShadow: "inset -1px 0 0 0 var(--border-level-1)",
            }}
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://x.com/sidomatic11"
            target="_blank"
            rel="noopener noreferrer"
            className="border-border-level-1 flex h-14 flex-1 items-center justify-center gap-2 border border-l-0 bg-slate-800 py-2 text-white transition-colors hover:bg-slate-700/40"
          >
            <X className="h-5 w-5" />
          </a>
          {/* <a
            href="https://www.instagram.com/sidomatic11/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 flex-1 flex items-center justify-center gap-2 text-gray-900 hover:bg-gray-200 transition-colors py-2 border border-gray-900 rounded-md"
          >
            <Instagram className="w-5 h-5" />

          </a> */}
        </nav>
        <div className="border-border-level-1 -mt-px flex h-14 w-full items-center overflow-hidden border">
          <a
            href={`mailto:${email}`}
            className="flex h-full flex-1 items-center bg-slate-800 px-4 font-light text-white transition-all hover:bg-slate-700 hover:font-medium"
          >
            {copySuccess ? "Copied!" : email}
          </a>
          <button
            onClick={copyToClipboard}
            className="border-border-level-1 -ml-px flex h-full w-12 cursor-pointer items-center justify-center border-l bg-slate-800 p-2 text-white transition-colors hover:bg-slate-700/40"
            aria-label="Copy email to clipboard"
          >
            <Copy className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
