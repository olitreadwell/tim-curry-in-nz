import { ArrowUpRightIcon } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import { funnyQuotes } from '@/data/memorialContent';
import { Reveal } from '@/components/Reveal';

/**
 * A spread of his funniest lines, most of them told in the interviews
 * around the 2025 memoir.
 *
 * @returns The quotes section
 */
export function QuotesSection(): ReactNode {
  return (
    <section id="quotes" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Keep <em className="text-blood-soft not-italic">him laughing</em>
        </h2>
        <p className="mt-4 max-w-[60ch] leading-relaxed text-smoke">
          The punchlines he polished for half a century, from the corset years to the memoir.
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-px bg-blood/20 md:grid-cols-2 lg:grid-cols-3">
        {funnyQuotes.map((item) => (
          <Reveal key={item.quote} className="bg-ink">
            <div className="h-full rounded-lg bg-white/5 p-1.5 shadow-stage-sm ring-1 ring-blood/15">
              <figure className="flex h-full flex-col rounded-lg bg-ink-2 p-7">
                <blockquote className="flex-1">
                  <p className="font-display text-2xl leading-snug text-bone">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm text-smoke">{item.context}</p>
                  {item.sourceLabel ? (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${item.sourceLabel}, quote source`}
                      className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-blood underline-offset-4 hover:underline focus-visible:underline"
                    >
                      {item.sourceLabel}
                      <ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" />
                    </a>
                  ) : null}
                </figcaption>
              </figure>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
