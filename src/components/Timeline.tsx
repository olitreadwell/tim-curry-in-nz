import type { ReactNode } from 'react';
import { timelineEntries } from '@/data/memorialContent';
import { Reveal } from '@/components/Reveal';

/**
 * Vertical timeline of Tim Curry's life and the New Zealand productions of
 * the show he made famous, sourced to Wikipedia and AudioCulture.
 *
 * @returns The story timeline section
 */
export function Timeline(): ReactNode {
  return (
    <section id="timeline" className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          His <em className="text-blood-soft not-italic">story</em>
        </h2>
      </Reveal>
      <ol className="mt-14 border-l border-blood/30">
        {timelineEntries.map((entry, index) => (
          <li key={entry.year + entry.title} className="relative pb-12 pl-10 last:pb-0">
            <span className="absolute top-1 left-[-5px] h-2.5 w-2.5 rounded-full bg-blood" />
            <Reveal>
              <p className="font-display text-2xl text-blood">{entry.year}</p>
              <h3 className="mt-2 text-xl font-semibold text-bone">{entry.title}</h3>
              <p className="mt-2 max-w-[58ch] leading-relaxed text-smoke">{entry.body}</p>
              {index === timelineEntries.length - 1 ? null : <span className="sr-only">Next</span>}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
