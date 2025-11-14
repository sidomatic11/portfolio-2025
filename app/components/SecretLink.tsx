"use client";

import { useState, useEffect } from "react";

interface SecretLinkProps {
  href: string;
  text: string;
  className?: string;
}

/**
 * SecretLink Component
 *
 * A hidden button/link that becomes visible when the 'Z' key is pressed.
 * Positioned on the left side of the page, towards the top.
 * Slides in from the left border when visible, slides back when key is released.
 *
 * @param href - The URL to link to
 * @param text - The button text to display
 * @param className - Optional additional CSS classes
 */
export default function SecretLink({
  href,
  text,
  className = "",
}: SecretLinkProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Normalize URL: prepend https:// if no protocol is present
  const normalizedHref =
    href.startsWith("http://") || href.startsWith("https://")
      ? href
      : `https://${href}`;

  useEffect(() => {
    /**
     * Handle keydown event - show button when 'Z' is pressed
     */
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for 'Z' key (case-sensitive, key code 90)
      if (event.key === "Z" || event.key === "z") {
        setIsVisible(true);
      }
    };

    /**
     * Handle keyup event - hide button when 'Z' is released
     */
    const handleKeyUp = (event: KeyboardEvent) => {
      // Check for 'Z' key (case-sensitive, key code 90)
      if (event.key === "Z" || event.key === "z") {
        setIsVisible(false);
      }
    };

    // Add event listeners to window
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    /**
     * Cleanup function - remove event listeners on unmount
     */
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []); // Empty dependency array - run once on mount

  return (
    <div
      className={`fixed top-16 left-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      } ${className}`}
    >
      <a
        href={normalizedHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border-y border-r border-gray-900 bg-gray-100 px-4 py-2 text-base font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-200"
      >
        {text}
      </a>
    </div>
  );
}
