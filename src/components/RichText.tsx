'use client';

import ReactMarkdown from 'react-markdown';

interface RichTextProps {
  content: string;
  className?: string;
}

/**
 * Renders Strapi Rich Text (Markdown) as HTML. Use for description/longDescription
 * from Strapi editor fields.
 */
export default function RichText({ content, className = '' }: RichTextProps) {
  if (!content?.trim()) return null;
  return (
    <div className={`prose prose-lg max-w-none text-gray-700 leading-relaxed ${className}`}>
      <ReactMarkdown
        components={{
          p: ({ children }) => <p className="mb-4">{children}</p>,
          ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>,
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          h2: ({ children }) => <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-900">{children}</h2>,
          h3: ({ children }) => <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-900">{children}</h3>,
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          a: ({ href, children }) => (
            <a href={href} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
