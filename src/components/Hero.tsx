import { ArrowDownIcon, SparkleIcon } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import { Cloud } from '@/components/Cloud';
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
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <Cloud className="animate-drift absolute top-24 left-[-4rem] w-56 text-[#e8e3f4]/90 blur-[2px]" />
        <Cloud className="animate-drift absolute top-1/3 right-[-5rem] w-72 text-[#e2ecf8]/90 blur-[2px] [animation-delay:-7s]" />
        <Cloud className="animate-drift absolute bottom-24 left-1/4 w-48 text-[#f4e2ec]/90 blur-[2px] [animation-delay:-3s]" />
        <SparkleIcon
          size={18}
          weight="fill"
          className="animate-twinkle absolute top-32 right-1/4 text-gold"
        />
        <SparkleIcon
          size={14}
          weight="fill"
          className="animate-twinkle absolute top-1/2 left-[12%] text-blush [animation-delay:1.2s]"
        />
        <SparkleIcon
          size={16}
          weight="fill"
          className="animate-twinkle absolute bottom-1/4 right-[8%] text-gold-soft [animation-delay:2s]"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center px-5 pt-28 pb-16 lg:px-16 lg:pt-0 lg:pb-0">
        <p className="animate-rise mb-6 text-[11px] uppercase tracking-[0.22em] text-gold">
          {heroCopy.eyebrow}
        </p>
        <h1 className="animate-rise font-display text-7xl leading-[0.92] font-semibold tracking-tight md:text-8xl">
          {heroCopy.titlePre} <em className="text-gold-soft">{heroCopy.titleEm}</em>
        </h1>
        <p className="animate-rise mt-6 max-w-[42ch] text-lg leading-relaxed text-moss">
          {heroCopy.subtitle}
        </p>
        <a
          href={heroCopy.ctaHref}
          className="animate-rise group mt-10 inline-flex w-fit items-center rounded-full bg-gold py-3 pr-3 pl-7 text-sm font-semibold tracking-wide text-ink shadow-heaven-sm transition-all duration-500 ease-heaven hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-heaven focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:translate-y-0 active:scale-[0.98]"
        >
          {heroCopy.cta}
          <span className="ml-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/25 transition-transform duration-500 ease-heaven group-hover:translate-y-0.5">
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
