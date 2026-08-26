import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomePage from '@/app/page';
import {
  galleryImages,
  funnyQuotes,
  lessonItems,
  musicSongs,
  outfitLooks,
  outsideLinks,
  pressArticles,
  recordItems,
  timelineEntries,
  tributeCards,
  triviaItems,
  visits,
} from '@/data/memorialContent';

describe('HomePage', () => {
  it('renders the hero with title, subtitle and CTA', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tim Curry in New Zealand');
    expect(screen.getByText('Read his story')).toBeInTheDocument();
  });

  it('renders every timeline entry', () => {
    render(<HomePage />);
    for (const entry of timelineEntries) {
      expect(screen.getAllByText(entry.title).length).toBeGreaterThan(0);
      expect(screen.getAllByText(entry.year).length).toBeGreaterThan(0);
    }
  });

  it('leads with the first time the role reached Aotearoa', () => {
    render(<HomePage />);
    expect(
      screen.getByRole('heading', { name: 'The role arrived. He didn\u2019t.' })
    ).toBeInTheDocument();
    expect(screen.getByText('Aotearoa, 28 July 1978')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Hear the 1978 NZ cast album' })).toBeInTheDocument();
  });

  it('renders the Aotearoa section', () => {
    render(<HomePage />);
    expect(screen.getByText('The show came. He didn\u2019t.')).toBeInTheDocument();
    expect(screen.getByText(/Gary Glitter wore the corset in 1978/)).toBeInTheDocument();
    expect(screen.getByText(/Richard O\u2019Brien grew up in Hamilton/)).toBeInTheDocument();
  });

  it('renders the three arrivals with the story opener', () => {
    render(<HomePage />);
    expect(screen.getAllByText(/1978, 1986 and 2010/).length).toBeGreaterThan(0);
    for (const visit of visits) {
      expect(screen.getByText(visit.title)).toBeInTheDocument();
      expect(screen.getByText(visit.line)).toBeInTheDocument();
      if (visit.image !== undefined) {
        expect(screen.getByAltText(visit.image.alt)).toBeInTheDocument();
      }
    }
  });

  it('renders every funny quote', () => {
    render(<HomePage />);
    for (const item of funnyQuotes) {
      expect(screen.getAllByText(new RegExp(item.quote)).length).toBeGreaterThan(0);
    }
  });

  it('renders records, trivia and lessons', () => {
    render(<HomePage />);
    for (const item of recordItems) {
      expect(screen.getByText(item.fact)).toBeInTheDocument();
    }
    for (const item of triviaItems) {
      expect(screen.getByText(item.fact)).toBeInTheDocument();
    }
    for (const lesson of lessonItems) {
      expect(screen.getByText(lesson.title)).toBeInTheDocument();
    }
  });

  it('renders the look book with credits and sources', () => {
    render(<HomePage />);
    for (const look of outfitLooks) {
      expect(screen.getByAltText(look.alt)).toBeInTheDocument();
      expect(screen.getAllByText(`${look.credit}, ${look.license}`).length).toBeGreaterThan(0);
    }
  });

  it('renders his pages and causes', () => {
    render(<HomePage />);
    for (const link of outsideLinks) {
      expect(
        screen.getByRole('link', { name: `${link.label}, opens in a new tab` })
      ).toHaveAttribute('href', link.url);
    }
  });

  it('renders the listen control with every song', () => {
    render(<HomePage />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Tim Curry' }));
    for (const song of musicSongs) {
      expect(screen.getByRole('button', { name: song.title })).toBeInTheDocument();
    }
  });

  it('renders every New Zealand press article', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: /In the New Zealand press/ })).toBeInTheDocument();
    for (const clip of pressArticles) {
      expect(screen.getByText(clip.headline)).toBeInTheDocument();
    }
  });

  it('renders every tribute card with a labelled source link', () => {
    render(<HomePage />);
    for (const card of tributeCards) {
      expect(
        screen.getByRole('link', { name: `${card.headline}, ${card.outlet}` })
      ).toHaveAttribute('href', card.url);
    }
  });

  it('renders the gallery with credits and sources', () => {
    render(<HomePage />);
    for (const image of galleryImages) {
      expect(screen.getByAltText(image.alt)).toBeInTheDocument();
      expect(screen.getAllByText(`${image.credit}, ${image.license}`).length).toBeGreaterThan(0);
    }
  });

  it('renders navigation and a footer link to the sources page', () => {
    render(<HomePage />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'The full source list' })).toHaveAttribute(
      'href',
      '/sources'
    );
  });
});
