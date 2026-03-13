import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  container?: boolean;
}

export function Section({ children, id, className = '', container = true }: SectionProps) {
  const content = container ? (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  ) : (
    children
  );

  return (
    <section id={id} className={`py-20 ${className}`}>
      {content}
    </section>
  );
}
