import { BookOpenIcon } from '@phosphor-icons/react';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import { booksCopy } from '@/data/memorialContent';
import { Reveal } from '@/components/Reveal';

/**
 * Full-width band about the audiobooks he narrated and the 2025 memoir.
 *
 * @returns The books section
 */
export function BooksSection(): ReactNode {
  return (
    <section id="books" className="border-y border-gold/25 bg-ink-2">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          <BookOpenIcon size={32} className="mx-auto text-gold" aria-hidden="true" />
          <h2 className="mt-6 font-display text-5xl font-semibold tracking-tight md:text-6xl">
            {booksCopy.title}
          </h2>
          {booksCopy.body.map((paragraph) => (
            <p key={paragraph} className="mx-auto mt-5 max-w-[48ch] leading-relaxed text-moss">
              {paragraph}
            </p>
          ))}
          <a
            href={booksCopy.ctaHref}
            target="_blank"
            rel="noreferrer"
            className="group mt-9 inline-flex items-center rounded-full bg-gold py-3 pr-3 pl-7 text-sm font-semibold tracking-wide text-ink shadow-heaven-sm transition-all duration-500 ease-heaven hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-heaven focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:translate-y-0 active:scale-[0.98]"
          >
            {booksCopy.cta}
            <span className="ml-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/25 transition-transform duration-500 ease-heaven group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRightIcon size={16} weight="bold" aria-hidden="true" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
