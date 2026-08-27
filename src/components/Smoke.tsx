import type { ReactNode } from 'react';

/**
 * Soft smoke puff used as a decorative haze motif across the page.
 *
 * @param props - Smoke props
 * @param props.className - Width, tint and animation classes
 * @returns The smoke SVG
 */
export function Smoke({ className }: Readonly<{ className?: string }>): ReactNode {
  return (
    <svg viewBox="0 0 220 120" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M60 110a34 34 0 0 1 6-67 44 44 0 0 1 78-6 38 38 0 0 1 52 16 30 30 0 0 1-8 57z" />
      <path d="M24 104a20 20 0 0 1 2-40 28 28 0 0 1 44-2z" opacity="0.7" />
      <path d="M196 100a18 18 0 0 0 0-36 26 26 0 0 0-40-4z" opacity="0.7" />
    </svg>
  );
}
