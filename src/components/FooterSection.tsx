import { HeartIcon } from '@phosphor-icons/react';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import type { ReactNode } from 'react';

/**
 * Footer with a link to the full sources page and image credits.
 *
 * @returns The footer
 */
export function FooterSection(): ReactNode {
  return (
    <footer className="border-t border-blood/25 bg-ink-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold">
            Tim Curry in <em className="text-blood-soft not-italic">New Zealand</em>
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-smoke">
            Made in Aotearoa, for the midnight show.
            <HeartIcon size={14} weight="fill" className="text-blood" aria-hidden="true" />
          </p>
          <p className="mt-6 text-sm text-smoke">
            An unofficial fan memorial. Not affiliated with the Tim Curry estate or his family.
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-blood">Sources</p>
          <p className="mt-3 text-sm leading-relaxed text-smoke">
            Every fact on this page is sourced, from AudioCulture&rsquo;s history of the show to the
            obituaries that ran the day he died.
          </p>
          <a
            href="/sources"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blood underline-offset-4 hover:underline focus-visible:underline"
          >
            The full source list
            <ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-blood">Image credits</p>
          <p className="mt-3 text-sm text-smoke">
            Photographs are used under their Wikimedia Commons licenses, credited inline in the
            gallery. Full source links sit next to each image.
          </p>
        </div>
      </div>
    </footer>
  );
}
