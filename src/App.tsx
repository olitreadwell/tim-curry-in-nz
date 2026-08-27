'use client';

import type { ReactNode } from 'react';
import { AotearoaSection } from '@/components/AotearoaSection';
import { BooksSection } from '@/components/BooksSection';
import { FooterSection } from '@/components/FooterSection';
import { FirstShowSection } from '@/components/FirstShowSection';
import { GallerySection } from '@/components/GallerySection';
import { Hero } from '@/components/Hero';
import { LessonsSection } from '@/components/LessonsSection';
import { LinksSection } from '@/components/LinksSection';
import { MusicPlayer } from '@/components/MusicPlayer';
import { Nav } from '@/components/Nav';
import { OutfitsSection } from '@/components/OutfitsSection';
import { PressSection } from '@/components/PressSection';
import { QuotesSection } from '@/components/QuotesSection';
import { RecordsSection } from '@/components/RecordsSection';
import { SongMarquee } from '@/components/SongMarquee';
import { StorySection } from '@/components/StorySection';
import { Timeline } from '@/components/Timeline';
import { TributeCards } from '@/components/TributeCards';

/**
 * The Tim Curry Aotearoa memorial page.
 *
 * @returns The full memorial page
 */
export function App(): ReactNode {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <SongMarquee />
        <FirstShowSection />
        <StorySection />
        <Timeline />
        <AotearoaSection />
        <PressSection />
        <QuotesSection />
        <RecordsSection />
        <OutfitsSection />
        <LessonsSection />
        <TributeCards />
        <BooksSection />
        <LinksSection />
        <GallerySection />
      </main>
      <FooterSection />
      <MusicPlayer />
    </div>
  );
}
