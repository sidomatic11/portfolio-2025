"use client";

import { Copy, Linkedin, Twitter, Instagram } from "iconoir-react";
import { useState } from "react";

export default function Footer() {
  const [copySuccess, setCopySuccess] = useState(false);
  const email = "email@email.com";

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
    <footer className="row-start-3 flex flex-col items-center justify-center h-64 pb-16 bg-gray-900 text-white lg:w-[calc(100%-4rem)] mx-auto relative before:content-[''] before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-screen before:bg-gray-900 before:-z-10">
      <nav className="flex gap-6 mb-8">
        <a
          href="https://www.linkedin.com/in/patilsiddhant/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-300 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://x.com/sidomatic11"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-300 transition-colors"
        >
          <Twitter className="w-5 h-5" />
          <span>Twitter</span>
        </a>
        <a
          href="https://www.instagram.com/sidomatic11/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-300 transition-colors"
        >
          <Instagram className="w-5 h-5" />
          <span>Instagram</span>
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <a
          href={`mailto:${email}`}
          className="hover:text-gray-300 transition-colors"
        >
          {email}
        </a>
        <button
          onClick={copyToClipboard}
          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          aria-label="Copy email to clipboard"
        >
          <Copy className="w-5 h-5" />
        </button>
        {copySuccess && (
          <span className="text-sm text-green-400">Copied!</span>
        )}
      </div>
    </footer>
  );
} 