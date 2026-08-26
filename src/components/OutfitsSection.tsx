'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react';
import { useRef } from 'react';
import type { ReactNode } from 'react';
import { outfitLooks } from '@/data/memorialContent';
import { Reveal } from '@/components/Reveal';

/**
 * A look book across five decades shown as a keyboard-friendly carousel,
 * each image credited under its Commons licence.
 *
 * @returns The outfits section
 */
export function OutfitsSection(): ReactNode {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollToLook = (index: number): void => {
    const track = trackRef.current;
    const slide = track?.querySelectorAll<HTMLElement>('[data-slide]')[index];
    if (!track || !slide) return;
    const trackRect = track.getBoundingClientRect();
    const slideRect = slide.getBoundingClientRect();
    track.scrollTo({
      left: track.scrollLeft + slideRect.left - trackRect.left,
      behavior: 'smooth',
    });
  };

  const slideBy = (direction: 1 | -1): void => {
    const track = trackRef.current;
    const slide = track?.querySelector<HTMLElement>('[data-slide]');
    if (!track || !slide) return;
    const step = slide.getBoundingClientRect().width + 24;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <section id="outfits" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              The <em className="text-gold-soft">look book</em>
            </h2>
            <p className="mt-4 max-w-[60ch] leading-relaxed text-moss">
              From a corset and heels to King Arthur&rsquo;s crown. Swipe or use the arrows.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous look"
              onClick={() => slideBy(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <ArrowLeftIcon size={18} weight="bold" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next look"
              onClick={() => slideBy(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <ArrowRightIcon size={18} weight="bold" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-12">
        <div role="region" aria-roledescription="carousel" aria-label="Tim Curry look book">
          <ul
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {outfitLooks.map((look) => (
              <li
                key={look.src}
                data-slide
                className="w-[82%] shrink-0 snap-start sm:w-[55%] lg:w-[31%]"
              >
                <figure className="h-full">
                  <div className="overflow-hidden border border-gold/25">
                    <img
                      src={look.src}
                      alt={look.alt}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-3">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gold">{look.era}</p>
                    <p className="mt-1 text-sm font-semibold text-cream">{look.caption}</p>
                    <p className="mt-1 text-xs text-moss">
                      {look.credit}, {look.license}
                      <span className="mx-1">·</span>
                      <a
                        href={look.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${look.alt} source`}
                        className="underline underline-offset-2 hover:text-gold"
                      >
                        Source
                      </a>
                    </p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2" aria-label="Look book slides">
            {outfitLooks.map((look, index) => (
              <button
                key={look.src}
                type="button"
                aria-label={`Go to look ${index + 1}: ${look.caption}`}
                onClick={() => scrollToLook(index)}
                className="h-2.5 w-2.5 rounded-full bg-gold/30 transition-colors hover:bg-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
