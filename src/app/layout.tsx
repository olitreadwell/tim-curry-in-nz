import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@fontsource-variable/outfit';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/700.css';
import '@fontsource/cormorant-garamond/500-italic.css';
import '@fontsource/cormorant-garamond/600-italic.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tim Curry in NZ · A Memorial',
  description:
    'An Aotearoa memorial for Tim Curry. He never toured here; the role did — 1978, 1986 and 2010 — and the tributes written the day he died.',
  icons: { icon: '/favicon.svg' },
};

/**
 * Root layout: wraps every route in the HTML shell.
 *
 * @param props - Layout props
 * @param props.children - Rendered route content
 * @returns The root HTML document
 */
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): ReactNode {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
