import { ArrowDownIcon, LightningIcon } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import { Smoke } from '@/components/Smoke';
import { getMemorialImageUrl, heroCopy } from '@/data/memorialContent';

/**
 * Hero section: split layout with portrait, headline and a single CTA.
 *
 * @returns The hero section
 */
export function Hero(): ReactNode {
  return (
    <section
      id="top"
      className="relative grid min-h-[100dvh] grid-cols-1 overflow-hidden lg:grid-cols-2"
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10">
        <div className="marquee-bulbs h-2.5 w-full animate-flicker" />
        <div className="flex items-center justify-center gap-3 border-b border-blood/25 bg-ink-2/90 py-2 backdrop-blur-sm">
          <span className="marquee-bulbs h-2 w-14" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-blood">
            Now showing · A memorial for Aotearoa
          </p>
          <span className="marquee-bulbs h-2 w-14" />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-44 bg-gradient-to-b from-[#3d0a14]/80 via-[#2a0710]/40 to-transparent"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <Smoke className="animate-smoke absolute top-24 left-[-4rem] w-56 text-[#2a0d16]/90 blur-[2px]" />
        <Smoke className="animate-smoke absolute top-1/3 right-[-5rem] w-72 text-[#33101c]/90 blur-[2px] [animation-delay:-7s]" />
        <Smoke className="animate-smoke absolute bottom-24 left-1/4 w-48 text-[#240a12]/90 blur-[2px] [animation-delay:-3s]" />
        <LightningIcon
          size={18}
          weight="fill"
          className="animate-flicker absolute top-32 right-1/4 text-blood"
        />
        <LightningIcon
          size={14}
          weight="fill"
          className="animate-flicker absolute top-1/2 left-[12%] text-ash [animation-delay:1.2s]"
        />
        <LightningIcon
          size={16}
          weight="fill"
          className="animate-flicker absolute bottom-1/4 right-[8%] text-blood-soft [animation-delay:2s]"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center px-5 pt-36 pb-16 lg:px-16 lg:pt-0 lg:pb-0">
        <p className="animate-rise mb-6 text-[11px] uppercase tracking-[0.22em] text-blood">
          {heroCopy.eyebrow}
        </p>
        <h1 className="animate-rise font-display text-7xl leading-[0.92] font-semibold tracking-tight md:text-8xl">
          {heroCopy.titlePre} <em className="text-blood-soft not-italic">{heroCopy.titleEm}</em>
        </h1>
        <p className="animate-rise mt-6 max-w-[42ch] text-lg leading-relaxed text-smoke">
          {heroCopy.subtitle}
        </p>
        <a
          href={heroCopy.ctaHref}
          className="animate-rise group mt-10 inline-flex w-fit items-center rounded-lg bg-blood py-3 pr-3 pl-7 text-sm font-semibold tracking-wide text-ink shadow-stage-sm transition-all duration-500 ease-stage hover:-translate-y-0.5 hover:bg-blood-soft hover:shadow-stage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blood active:translate-y-0 active:scale-[0.98]"
        >
          {heroCopy.cta}
          <span className="ml-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/25 transition-transform duration-500 ease-stage group-hover:translate-y-0.5">
            <ArrowDownIcon size={16} weight="bold" aria-hidden="true" />
          </span>
        </a>
      </div>
      <div className="relative z-10 min-h-[50vh] lg:min-h-0">
        <img
          src={getMemorialImageUrl('tim-curry-1978.jpg')}
          alt="Portrait of Tim Curry"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-ink/60 lg:via-transparent lg:to-transparent" />
      </div>
    </section>
  );
}
