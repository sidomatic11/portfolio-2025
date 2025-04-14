import { ReactNode } from 'react';

interface EmbedContainerProps {
  description?: string;
  demoLink?: string;
  demoLinkLabel?: string;
  children: ReactNode;
}

export default function EmbedContainer({ description, demoLink, demoLinkLabel, children }: EmbedContainerProps) {
  return (
    <div className="w-full flex flex-col h-full bg-gray-200 rounded-md p-4 border border-gray-300 mb-8">
      <div className="w-full flex-1">
        {children}
      </div>

      {/* Mobile layout - stacked */}
      <div className="flex flex-col sm:hidden gap-4 mt-4">
        <p className="text-gray-700 max-w-prose">{description}</p>
        {demoLink && demoLinkLabel && (
          <div className="flex justify-end">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-800 text-gray-100 rounded-md hover:bg-gray-700 transition-colors"
            >
              {demoLinkLabel}
            </a>
          </div>
        )}
      </div>

      {/* Desktop layout - side by side with different alignments */}
      <div className="hidden sm:flex items-start justify-between mt-4">
        <p className="text-gray-700 max-w-prose">{description}</p>
        {demoLink && demoLinkLabel && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-gray-100 rounded-md hover:bg-gray-700 transition-colors self-end"
          >
            {demoLinkLabel}
          </a>
        )}
      </div>
    </div>
  );
}
