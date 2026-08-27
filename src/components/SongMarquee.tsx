import type { ReactNode } from 'react';
import { marqueeSongs } from '@/data/memorialContent';

/**
 * Song-title marquee, the midnight-show motif of the page.
 *
 * @returns The marquee band
 */
export function SongMarquee(): ReactNode {
  const lane = marqueeSongs.join('   ·   ');
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-blood/25 bg-ink-2 py-3">
      <div className="marquee-scroll flex w-max whitespace-nowrap font-display text-lg font-semibold tracking-[0.18em] text-blood uppercase">
        <span className="pr-8">{lane}</span>
        <span className="pr-8">{lane}</span>
      </div>
    </div>
  );
}
