import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SourcesPage from '@/app/sources/page';
import { sourceLinks } from '@/data/memorialContent';

describe('SourcesPage', () => {
  it('renders every source as a labelled external link', () => {
    render(<SourcesPage />);
    expect(screen.getByRole('heading', { name: /Sources & reading list/ })).toBeInTheDocument();
    const labelledLinks = new Map(
      screen
        .getAllByRole('link')
        .map((anchor) => [anchor.textContent?.trim(), anchor.getAttribute('href')])
    );
    for (const link of sourceLinks) {
      expect(labelledLinks.get(link.label)).toBe(link.url);
    }
  });

  it('links back to the memorial', () => {
    render(<SourcesPage />);
    expect(screen.getByRole('link', { name: 'Back to the memorial' })).toHaveAttribute('href', '/');
  });
});
