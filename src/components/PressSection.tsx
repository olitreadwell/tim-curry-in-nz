import { ArrowUpRightIcon } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import { pressArticles } from '@/data/memorialContent';
import type { PressKind } from '@/data/memorialContent';
import { Reveal } from '@/components/Reveal';

const kindLabels: Record<PressKind, { label: string; link: string }> = {
  article: { label: 'Article', link: 'Read' },
  audio: { label: 'Audio', link: 'Listen' },
  photo: { label: 'Photos', link: 'View' },
  video: { label: 'Video', link: 'Watch' },
};

/**
 * Newspaper and magazine coverage of the role in Aotearoa, from the 1978
 * tour to the 2026 obituaries.
 *
 * @returns The New Zealand press section
 */
export function PressSection(): ReactNode {
  return (
    <section id="press" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          In the New Zealand <em className="text-blood-soft not-italic">press</em>
        </h2>
        <p className="mt-4 max-w-[60ch] leading-relaxed text-smoke">
          From the first Auckland Rocky Horror in 1978 to the tours that followed, and the coverage
          Aotearoa wrote about the man behind the role.
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-px bg-blood/20 md:grid-cols-3">
        {pressArticles.map((clip) => (
          <Reveal key={clip.headline} className="bg-ink">
            <article className="flex h-full flex-col border border-blood/20 bg-ink-2 p-6">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] uppercase tracking-[0.2em] text-blood">{clip.outlet}</p>
                <p className="text-[11px] text-smoke">{kindLabels[clip.kind].label}</p>
              </div>
              <p className="mt-2 text-xs text-smoke">{clip.date}</p>
              <h3 className="mt-3 text-lg leading-snug font-semibold text-bone">{clip.headline}</h3>
              <blockquote className="mt-4 flex-1">
                <p className="font-display text-xl leading-snug text-blood">
                  &ldquo;{clip.quote}&rdquo;
                </p>
              </blockquote>
              <a
                href={clip.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${clip.headline}, ${clip.outlet}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blood underline-offset-4 hover:underline focus-visible:underline"
              >
                {kindLabels[clip.kind].link}
                <ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
