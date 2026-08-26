import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Nav } from '@/components/Nav';

describe('Nav', () => {
  it('toggles the mobile menu from the hamburger button', () => {
    render(<Nav />);
    const toggle = screen.getByRole('button', { name: 'Open menu' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getAllByRole('link', { name: 'Aotearoa' })).toHaveLength(1);

    fireEvent.click(toggle);
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    expect(screen.getAllByRole('link', { name: 'Aotearoa' })).toHaveLength(2);

    fireEvent.click(screen.getAllByRole('link', { name: 'Aotearoa' })[1]);
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });
});
