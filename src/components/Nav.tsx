'use client';

import { ListIcon, XIcon } from '@phosphor-icons/react';
import { useState } from 'react';
import type { ReactNode } from 'react';

const navItems = [
  'Story',
  'Aotearoa',
  'Press',
  'Quotes',
  'Records',
  'Outfits',
  'Lessons',
  'Gallery',
] as const;

/**
 * Floating glass pill navigation. Detached from the top edge with a soft
 * tinted shadow, the links sit in a desktop row or a glass dropdown on
 * narrow screens.
 *
 * @returns The page navigation bar
 */
export function Nav(): ReactNode {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav aria-label="Page sections" className="fixed inset-x-0 top-3 z-20 flex justify-center px-4">
      <div className="relative w-full max-w-5xl">
        <div className="flex items-center justify-between rounded-full border border-white/60 bg-ink/80 py-2 pr-2 pl-5 shadow-heaven backdrop-blur-md">
          <a href="#top" className="font-display text-lg font-semibold tracking-wide">
            Tim Curry in <span className="italic text-gold">New Zealand</span>
          </a>
          <ul className="hidden items-center gap-5 text-sm md:flex">
            {navItems.map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className="text-moss transition-colors duration-500 hover:text-gold focus-visible:text-gold"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-full p-2 text-gold transition-colors duration-500 hover:text-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:hidden"
          >
            {menuOpen ? (
              <XIcon size={24} aria-hidden="true" />
            ) : (
              <ListIcon size={24} aria-hidden="true" />
            )}
          </button>
        </div>
        {menuOpen ? (
          <div
            id="mobile-nav-menu"
            className="absolute inset-x-0 top-full mt-3 rounded-3xl border border-white/60 bg-white/90 shadow-heaven backdrop-blur-lg md:hidden"
          >
            <ul className="space-y-1 px-6 py-4">
              {navItems.map((label, index) => (
                <li
                  key={label}
                  className="animate-rise"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <a
                    href={`#${label.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-sm text-moss transition-colors duration-500 hover:text-gold focus-visible:text-gold"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
