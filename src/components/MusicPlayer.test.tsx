import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MusicPlayer } from '@/components/MusicPlayer';

describe('MusicPlayer', () => {
  it('stays closed with nothing playing until the visitor asks', () => {
    render(<MusicPlayer />);
    const toggle = screen.getByRole('button', { name: 'Listen to Tim Curry' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Sweet Transvestite')).not.toBeInTheDocument();
  });

  it('opens the song list and loads the audio only after a song is picked', () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Tim Curry' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sweet Transvestite' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Sweet Transvestite' }));
    const audio = screen.getByTitle('Sweet Transvestite');
    expect(audio.tagName).toBe('AUDIO');
    expect(audio).toHaveAttribute('aria-label', 'Sweet Transvestite, performed by Tim Curry');
    expect(audio).not.toHaveAttribute('autoplay');
    expect(audio.querySelector('source')?.getAttribute('src')).toContain(
      'TimCurry-SweetTransvestite.mp3'
    );
  });

  it('closes on Escape', () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Tim Curry' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('hides the panel but keeps the audio mounted so the music keeps playing', () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Tim Curry' }));
    fireEvent.click(screen.getByRole('button', { name: 'Sweet Transvestite' }));
    const audio = screen.getByTitle('Sweet Transvestite');

    fireEvent.click(screen.getByRole('button', { name: 'Hide music player' }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByTitle('Sweet Transvestite')).toBe(audio);
    expect(
      screen.getByRole('group', { name: 'Now playing: Sweet Transvestite' })
    ).toBeInTheDocument();
  });

  it('stops the music and clears the player entirely', () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Tim Curry' }));
    fireEvent.click(screen.getByRole('button', { name: 'Sweet Transvestite' }));

    fireEvent.click(screen.getByRole('button', { name: 'Stop music' }));

    expect(screen.queryByTitle('Sweet Transvestite')).not.toBeInTheDocument();
    expect(
      screen.queryByRole('group', { name: 'Now playing: Sweet Transvestite' })
    ).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Listen to Tim Curry' })).toBeInTheDocument();
  });

  it('advances to the next track when the current one ends', () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Tim Curry' }));
    fireEvent.click(screen.getByRole('button', { name: 'Sweet Transvestite' }));

    fireEvent.ended(screen.getByTitle('Sweet Transvestite'));

    expect(screen.getByTitle('The Time Warp')).toBeInTheDocument();
  });

  it('loops back to the first track after the last one', () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Tim Curry' }));
    fireEvent.click(screen.getByRole('button', { name: 'Over at the Frankenstein Place' }));

    fireEvent.ended(screen.getByTitle('Over at the Frankenstein Place'));

    expect(screen.getByTitle('Sweet Transvestite')).toBeInTheDocument();
  });

  it('skips forward and back through the playlist', () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Tim Curry' }));
    fireEvent.click(screen.getByRole('button', { name: 'Sweet Transvestite' }));

    fireEvent.click(screen.getByRole('button', { name: 'Next song' }));
    expect(screen.getByTitle('The Time Warp')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Previous song' }));
    expect(screen.getByTitle('Sweet Transvestite')).toBeInTheDocument();
  });
});
