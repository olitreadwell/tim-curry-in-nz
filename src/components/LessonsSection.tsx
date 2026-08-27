import { ArrowUpRightIcon } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import { lessonItems } from '@/data/memorialContent';
import { Reveal } from '@/components/Reveal';

/**
 * What he left behind that anyone can pick up: six sourced lessons.
 *
 * @returns The lessons section
 */
export function LessonsSection(): ReactNode {
  return (
    <section id="lessons" className="border-y border-blood/25 bg-ink-3">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            What he <em className="text-blood-soft not-italic">taught us</em>
          </h2>
          <p className="mt-4 max-w-[60ch] leading-relaxed text-smoke">
            Lessons from the actor who lived them, not about him.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lessonItems.map((lesson) => (
            <Reveal key={lesson.title} className="h-full">
              <div className="h-full rounded-lg bg-white/5 p-1.5 shadow-stage-sm ring-1 ring-blood/15">
                <article className="flex h-full flex-col rounded-lg bg-ink p-7">
                  <h3 className="font-display text-2xl font-semibold text-bone">{lesson.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-smoke">{lesson.body}</p>
                  {lesson.quote ? (
                    <blockquote className="mt-5 border-l-2 border-blood pl-4">
                      <p className="font-display text-lg leading-snug text-blood">
                        &ldquo;{lesson.quote}&rdquo;
                      </p>
                    </blockquote>
                  ) : null}
                  {lesson.sourceUrl ? (
                    <a
                      href={lesson.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${lesson.quoteSource ?? lesson.title}, lesson source`}
                      className="mt-auto inline-flex items-center gap-1 pt-5 text-xs font-semibold text-blood underline-offset-4 hover:underline focus-visible:underline"
                    >
                      {lesson.quoteSource}
                      <ArrowUpRightIcon size={12} weight="bold" aria-hidden="true" />
                    </a>
                  ) : null}
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
