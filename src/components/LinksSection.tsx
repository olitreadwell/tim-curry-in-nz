import { ArrowUpRightIcon } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import { outsideLinks } from '@/data/memorialContent';
import { Reveal } from '@/components/Reveal';

/**
 * His own pages and the causes he lent his name to, so visitors can keep
 * the story going instead of just remembering.
 *
 * @returns The links section
 */
export function LinksSection(): ReactNode {
  return (
    <section id="links" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          His pages, and <em className="text-gold-soft">his causes</em>
        </h2>
        <p className="mt-4 max-w-[60ch] leading-relaxed text-moss">
          The official site, the memoir, and the charities that the theatre world he came from
          carries.
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {outsideLinks.map((link) => (
          <Reveal key={link.url} className="h-full">
            <div className="h-full rounded-[2rem] bg-white/5 p-1.5 shadow-heaven-sm ring-1 ring-gold/15 transition-shadow duration-500 ease-heaven hover:shadow-heaven">
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${link.label}, opens in a new tab`}
                className="group flex h-full flex-col rounded-[1.6rem] bg-ink-2 p-7 transition-transform duration-500 ease-heaven hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <span>
                  <span className="font-display text-2xl font-semibold text-cream">
                    {link.label}
                  </span>
                  <span className="mt-3 block text-sm leading-relaxed text-moss">{link.blurb}</span>
                </span>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  Visit
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/25 transition-transform duration-500 ease-heaven group-hover:translate-x-0.5">
                    <ArrowUpRightIcon size={13} weight="bold" aria-hidden="true" />
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
