"use client";

import { Copy, Linkedin, Instagram, X } from "iconoir-react";
import { useState } from "react";

export default function Footer() {
  const [copySuccess, setCopySuccess] = useState(false);
  const email = "sidomatic11@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <footer className="row-start-3 border-t border-gray-900 flex flex-col items-center justify-center h-64 bg-white text-gray-700 mx-auto relative before:content-[''] before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-screen before:bg-white before:-z-10 pb-16 sm:pb-0">
      <div className="w-full max-w-96 mx-auto px-8">
        <nav className="w-full flex gap-6 mb-4">
          <a
            href="https://www.linkedin.com/in/patilsiddhant/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 flex-1 flex items-center justify-center gap-2 text-gray-900 hover:bg-gray-200 transition-colors py-2 border border-gray-900 rounded-md"
          >
            <Linkedin className="w-5 h-5" />

          </a>
          <a
            href="https://x.com/sidomatic11"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 flex-1 flex items-center justify-center gap-2 text-gray-900 hover:bg-gray-200 transition-colors py-2 border border-gray-900 rounded-md"
          >
            <X className="w-5 h-5" />

          </a>
          <a
            href="https://www.instagram.com/sidomatic11/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 flex-1 flex items-center justify-center gap-2 text-gray-900 hover:bg-gray-200 transition-colors py-2 border border-gray-900 rounded-md"
          >
            <Instagram className="w-5 h-5" />

          </a>
        </nav>
        <div className="w-full flex items-center justify-between gap-4 h-10 border border-gray-900 rounded-md overflow-hidden">
          <a
            href={`mailto:${email}`}
            className="px-4 font-light hover:font-medium transition-all"
          >
            {copySuccess ? "Copied!" : email}
          </a>
          <button
            onClick={copyToClipboard}
            className="p-2 hover:bg-gray-200 w-12 h-full flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Copy email to clipboard"
          >
            <Copy className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
} 