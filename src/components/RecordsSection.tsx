import { ArrowUpRightIcon, TrophyIcon, SparkleIcon } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import { recordItems, triviaItems } from '@/data/memorialContent';
import { Reveal } from '@/components/Reveal';

/**
 * The record books and the lesser known facts side by side.
 *
 * @returns The records and trivia section
 */
export function RecordsSection(): ReactNode {
  return (
    <section id="records" className="border-y border-gold/25 bg-ink-2">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            In the <em className="text-gold-soft">record books</em>
          </h2>
          <p className="mt-4 max-w-[60ch] leading-relaxed text-moss">
            Tony and Olivier nominations, a Daytime Emmy, a Grammy nod, and the record his most
            famous film keeps setting.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gold">
                <TrophyIcon size={16} aria-hidden="true" />
                Records
              </p>
              <ul className="mt-4 space-y-4">
                {recordItems.map((item) => (
                  <li key={item.fact} className="border border-gold/20 bg-ink p-5">
                    <div className="rounded-[1.35rem] bg-white/40 p-1 ring-1 ring-gold/15">
                      <div className="rounded-[1.05rem] bg-ink-2 p-5">
                        <p className="font-display text-lg font-semibold text-cream">{item.fact}</p>
                        <p className="mt-2 text-sm leading-relaxed text-moss">{item.detail}</p>
                        {item.sourceLabel ? (
                          <a
                            href={item.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${item.sourceLabel}, ${item.fact}`}
                            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold underline-offset-4 hover:underline focus-visible:underline"
                          >
                            {item.sourceLabel}
                            <ArrowUpRightIcon size={12} weight="bold" aria-hidden="true" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gold">
                <SparkleIcon size={16} aria-hidden="true" />
                Lesser known
              </p>
              <ul className="mt-4 space-y-4">
                {triviaItems.map((item) => (
                  <li key={item.fact} className="border border-gold/20 bg-ink p-5">
                    <div className="rounded-[1.35rem] bg-white/40 p-1 ring-1 ring-gold/15">
                      <div className="rounded-[1.05rem] bg-ink-2 p-5">
                        <p className="font-display text-lg font-semibold text-cream">{item.fact}</p>
                        <p className="mt-2 text-sm leading-relaxed text-moss">{item.detail}</p>
                        {item.sourceLabel ? (
                          <a
                            href={item.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${item.sourceLabel}, ${item.fact}`}
                            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold underline-offset-4 hover:underline focus-visible:underline"
                          >
                            {item.sourceLabel}
                            <ArrowUpRightIcon size={12} weight="bold" aria-hidden="true" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
