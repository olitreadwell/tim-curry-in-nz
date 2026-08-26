import { describe, expect, it } from 'vitest';
import {
  galleryImages,
  getMemorialImageUrl,
  firstShowCopy,
  funnyQuotes,
  heroCopy,
  lessonItems,
  musicSongs,
  outfitLooks,
  outsideLinks,
  pressArticles,
  recordItems,
  sourceLinks,
  storyCopy,
  timelineEntries,
  tributeCards,
  triviaItems,
  visits,
} from './memorialContent';

describe('memorialContent', () => {
  it('keeps hero copy short enough for the hero discipline', () => {
    const heroSubtitleWordLimit = 20;
    expect(heroCopy.subtitle.split(' ').length).toBeLessThanOrEqual(heroSubtitleWordLimit);
    expect(heroCopy.cta).not.toHaveLength(0);
  });

  it('orders timeline entries by year', () => {
    const years = timelineEntries.map((entry) => Number(entry.year));
    expect(years).toEqual([...years].sort((a, b) => a - b));
    expect(timelineEntries.some((entry) => entry.title === 'King Arthur')).toBe(true);
    expect(timelineEntries.some((entry) => entry.title === 'The role comes to Aotearoa')).toBe(
      true
    );
  });

  it('gives every tribute card a source url and a quote', () => {
    for (const card of tributeCards) {
      expect(card.url).toMatch(/^https:\/\//);
      expect(card.quote).toBeTruthy();
    }
  });

  it('gives every press article a source url, date and kind', () => {
    const validKinds = new Set(['article', 'audio', 'photo', 'video']);
    for (const clip of pressArticles) {
      expect(clip.url).toMatch(/^https:\/\//);
      expect(clip.date).toMatch(/^\d{1,2} [A-Z][a-z]{2} \d{4}$/);
      expect(clip.headline).not.toHaveLength(0);
      expect(clip.quote).toBeTruthy();
      expect(validKinds.has(clip.kind)).toBe(true);
    }
  });

  it('links every gallery image to its commons source', () => {
    expect(galleryImages.length).toBeGreaterThanOrEqual(20);
    for (const image of galleryImages) {
      expect(image.sourceUrl).toMatch(/^https:\/\/commons\.wikimedia\.org/);
      expect(image.credit).not.toHaveLength(0);
    }
  });

  it('builds basePath-prefixed image urls for static export', () => {
    expect(getMemorialImageUrl('tim-curry-1978.jpg')).toBe('/images/tim-curry-1978.jpg');
    for (const image of galleryImages) {
      expect(image.src).toMatch(/^\/images\//);
    }
  });

  it('points every source link at a real url', () => {
    for (const link of sourceLinks) {
      expect(link.url).toMatch(/^https:\/\//);
    }
  });

  it('points every music song at a streamable archive recording', () => {
    expect(musicSongs.length).toBeGreaterThanOrEqual(6);
    for (const song of musicSongs) {
      expect(song.audioUrl).toMatch(/^https:\/\/archive\.org\/download\//);
      expect(song.sourceUrl).toMatch(/^https:\/\/archive\.org\/details\//);
      expect(song.artist).not.toHaveLength(0);
      expect(song.title).not.toHaveLength(0);
    }
  });

  it('sources the first show copy', () => {
    expect(firstShowCopy.ctaHref).toMatch(/^https:\/\//);
    expect(firstShowCopy.body.length).toBeGreaterThan(0);
  });

  it('orders the three arrivals oldest to newest', () => {
    const years = visits.map((visit) => Number(visit.year));
    expect(years).toEqual([...years].sort((a, b) => a - b));
    for (const visit of visits) {
      expect(visit.sourceUrl).toMatch(/^https:\/\//);
      expect(visit.body.length).toBeGreaterThan(0);
      if (visit.image !== undefined) {
        expect(visit.image.src).toMatch(/^\/images\//);
        expect(visit.image.credit).not.toHaveLength(0);
        expect(visit.image.sourceUrl).toMatch(/^https:\/\//);
      }
      for (const source of visit.extraSources ?? []) {
        expect(source.url).toMatch(/^https:\/\//);
      }
    }
  });

  it('keeps the story opener short and weather-light', () => {
    expect(storyCopy.intro.length).toBeGreaterThan(1);
    expect(storyCopy.intro[0]).not.toContain('Noon Forecast');
    expect(sourceLinks.map((link) => link.label).join(' ')).not.toMatch(/weather/i);
  });

  it('opens the story with the three-arrival frame first', () => {
    expect(storyCopy.intro[0]).toMatch(/1978/);
    expect(storyCopy.intro[0]).toMatch(/1986/);
    expect(storyCopy.intro[0]).toMatch(/2010/);
  });

  it('shows only one press article per year', () => {
    const years = pressArticles.map((clip) => clip.date.split(' ').at(-1));
    expect(new Set(years).size).toBe(years.length);
  });

  it('sources the first show quotes on AudioCulture and Discogs', () => {
    for (const source of firstShowCopy.sources) {
      expect(source.url).toMatch(/^https:\/\//);
      expect(source.label).not.toHaveLength(0);
    }
  });

  it('sources or labels every funny quote', () => {
    for (const item of funnyQuotes) {
      expect(item.quote.length).toBeGreaterThan(10);
      expect(item.context.length).toBeGreaterThan(0);
      if (item.sourceUrl !== undefined) {
        expect(item.sourceUrl).toMatch(/^https:\/\//);
      }
    }
  });

  it('sources every record, trivia item and lesson', () => {
    for (const item of [...recordItems, ...triviaItems]) {
      expect(item.fact.length).toBeGreaterThan(0);
      expect(item.detail.length).toBeGreaterThan(0);
      if (item.sourceUrl !== undefined) {
        expect(item.sourceUrl).toMatch(/^https:\/\//);
      }
    }
    for (const lesson of lessonItems) {
      expect(lesson.title.length).toBeGreaterThan(0);
      expect(lesson.body.length).toBeGreaterThan(0);
    }
  });

  it('includes the longest-running release fact', () => {
    expect(
      recordItems.some((item) => item.fact.includes('longest-running theatrical release'))
    ).toBe(true);
  });

  it('links every look to its commons source', () => {
    expect(outfitLooks.length).toBeGreaterThanOrEqual(6);
    for (const look of outfitLooks) {
      expect(look.sourceUrl).toMatch(/^https:\/\/commons\.wikimedia\.org/);
      expect(look.src).toMatch(/^\/images\//);
      expect(look.credit).not.toHaveLength(0);
    }
  });

  it('points every outside link at a real url', () => {
    for (const link of outsideLinks) {
      expect(link.url).toMatch(/^https:\/\//);
      expect(link.blurb.length).toBeGreaterThan(0);
    }
  });
});
