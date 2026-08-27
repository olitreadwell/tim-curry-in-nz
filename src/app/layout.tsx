import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@fontsource/cinzel/500.css';
import '@fontsource/cinzel/600.css';
import '@fontsource/cinzel/700.css';
import '@fontsource/spectral/400.css';
import '@fontsource/spectral/500.css';
import '@fontsource/spectral/600.css';
import '@fontsource/spectral/400-italic.css';
import '@fontsource/spectral/500-italic.css';
import '@fontsource/spectral/600-italic.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tim Curry in NZ · A Memorial',
  description:
    'An Aotearoa memorial for Tim Curry. He never toured here; the role did, in 1978, 1986 and 2010. The tributes ran the day he died.',
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
