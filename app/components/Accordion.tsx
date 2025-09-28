'use client';

import { useState } from 'react';
import { NavArrowUp } from 'iconoir-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

/**
 * Basic accordion component for collapsible content sections
 * Uses nav-arrow-up icon from iconoir for the chevron indicator
 */
export default function Accordion({
  title,
  children,
  defaultOpen = false,
  className = ''
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`w-full border border-gray-900 overflow-hidden ${className}`}>
      <button
        onClick={toggleAccordion}
        className="w-full py-4 pl-4 pr-12 sm:pr-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between text-left cursor-pointer relative"
        aria-expanded={isOpen}
        aria-controls="accordion-content"
      >
        <span className="text-2xl w-full max-w-xl mx-auto font-light text-gray-700">{title}</span>
        <NavArrowUp
          className={`w-5 h-5 text-gray-600 transition-transform duration-200 flex-shrink-0 absolute right-4 ${isOpen ? 'rotate-180' : ''
            }`}
        />
      </button>

      <div
        id="accordion-content"
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-auto opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-6 py-4 bg-white border-t border-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
}