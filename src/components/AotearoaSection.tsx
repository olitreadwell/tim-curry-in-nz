import { WindIcon } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import { aotearoaCopy } from '@/data/memorialContent';
import { Reveal } from '@/components/Reveal';

/**
 * The Aotearoa twist: the show toured New Zealand three times without its
 * most famous Frank, so the country's connection runs through the role.
 *
 * @returns The Aotearoa section
 */
export function AotearoaSection(): ReactNode {
  return (
    <section id="aotearoa" className="border-y border-gold/25 bg-ink-2">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-24 lg:grid-cols-[3fr_2fr]">
        <Reveal>
          <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-gold">
            {aotearoaCopy.eyebrow}
          </p>
          <h2 className="font-display text-5xl leading-[0.95] font-semibold tracking-tight md:text-6xl">
            {aotearoaCopy.title}
          </h2>
          {aotearoaCopy.body.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-[52ch] leading-relaxed text-moss">
              {paragraph}
            </p>
          ))}
        </Reveal>
        <Reveal className="relative">
          <div className="border border-gold/30 bg-ink-3 p-8">
            <WindIcon size={28} className="text-gold" aria-hidden="true" />
            <p className="mt-4 font-display text-2xl leading-snug italic text-cream">
              &ldquo;{aotearoaCopy.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm text-moss">{aotearoaCopy.quoteSub}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
