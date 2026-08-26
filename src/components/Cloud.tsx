import type { ReactNode } from 'react';

/**
 * Soft cloud shape used as a decorative sky motif across the page.
 *
 * @param props - Cloud props
 * @param props.className - Width, tint and animation classes
 * @returns The cloud SVG
 */
export function Cloud({ className }: Readonly<{ className?: string }>): ReactNode {
  return (
    <svg viewBox="0 0 220 80" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M38 76a24 24 0 0 1 8-47 32 32 0 0 1 58-8 27 27 0 0 1 50 8 22 22 0 0 1 4 44z" />
      <path d="M10 72a14 14 0 0 1 3-27 20 20 0 0 1 34-4z" opacity="0.8" />
      <path d="M206 68a12 12 0 0 0 2-23 18 18 0 0 0-30-3z" opacity="0.8" />
    </svg>
  );
}
