'use client';

import {
  ArrowUpRightIcon,
  CaretDownIcon,
  CaretUpIcon,
  MusicNotesIcon,
  PauseIcon,
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
  XIcon,
} from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { musicSongs } from '@/data/memorialContent';

/**
 * Floating listen control that doubles as a gapless cover playlist. Closed
 * by default and nothing plays until the visitor picks a song. The
 * playlist advances track to track on its own and loops, closing the panel
 * keeps the audio running, and a compact now-playing pill takes over.
 *
 * @returns The music player widget
 */
export function MusicPlayer(): ReactNode {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [minimized, setMinimized] = useState(false);
  const [showList, setShowList] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const song = active === null ? null : musicSongs[active];
  const nextIndex = active === null ? null : (active + 1) % musicSongs.length;
  const showPill = song !== null && !open && minimized;

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent): void => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      if (song !== null) setMinimized(true);
      toggleRef.current?.focus();
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open, song]);

  useEffect(() => {
    if (!open) toggleRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio !== null && active !== null) void audio.play();
  }, [active]);

  const closePanel = (): void => {
    setOpen(false);
    if (song !== null) {
      setMinimized(true);
    } else {
      setActive(null);
    }
  };

  const openPanel = (): void => {
    setOpen(true);
    setMinimized(false);
  };

  const stopMusic = (): void => {
    audioRef.current?.pause();
    setActive(null);
    setMinimized(false);
    setIsPlaying(false);
    setShowList(false);
    setOpen(false);
  };

  const togglePlayback = (): void => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play();
    } else {
      audio.pause();
    }
  };

  const goTo = (index: number): void => {
    setActive(index);
    setShowList(false);
  };

  const nextSong = (): void => {
    if (active === null) return;
    setActive((active + 1) % musicSongs.length);
  };

  const previousSong = (): void => {
    if (active === null) return;
    setActive((active - 1 + musicSongs.length) % musicSongs.length);
  };

  const panelMounted = active !== null || open;

  return (
    <div className="fixed right-4 bottom-4 z-30 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {panelMounted ? (
        <div
          id="music-panel"
          role="dialog"
          aria-label="Listen to Tim Curry"
          aria-modal="true"
          hidden={!open}
          className="w-[min(26rem,calc(100vw-2rem))] rounded-lg border border-white/10 bg-ink-2/95 shadow-stage backdrop-blur-md"
        >
          <div className="flex items-center justify-between border-b border-blood/25 px-5 py-3">
            <p className="font-display text-lg font-semibold text-bone">The songs</p>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Hide music player"
              onClick={closePanel}
              className="p-1 text-blood transition-colors hover:text-blood-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-blood"
            >
              <XIcon size={20} aria-hidden="true" />
            </button>
          </div>
          {song !== null ? (
            <audio
              ref={audioRef}
              key={song.audioUrl}
              controls
              preload="auto"
              title={song.title}
              aria-label={`${song.title}, performed by ${song.artist}`}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={nextSong}
              className={`mt-4 w-full px-5 ${showList ? 'hidden' : ''}`}
            >
              <source src={song.audioUrl} type="audio/mpeg" />
              Your browser does not support audio playback.
            </audio>
          ) : null}
          {song !== null && nextIndex !== null ? (
            <audio
              src={musicSongs[nextIndex].audioUrl}
              preload="auto"
              aria-hidden="true"
              className="hidden"
            />
          ) : null}
          {song !== null && !showList ? (
            <div className="px-5 pb-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-blood">
                Track {active! + 1} of {musicSongs.length}
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-bone">{song.title}</p>
              <p className="mt-1 text-xs text-smoke">Performed by {song.artist}.</p>
              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous song"
                  onClick={previousSong}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-blood/10 text-blood transition-colors hover:bg-blood/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blood"
                >
                  <SkipBackIcon size={18} weight="fill" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Next song"
                  onClick={nextSong}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-blood/10 text-blood transition-colors hover:bg-blood/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blood"
                >
                  <SkipForwardIcon size={18} weight="fill" aria-hidden="true" />
                </button>
                <p className="ml-auto text-xs text-smoke">
                  Plays straight through, cover to cover.
                </p>
              </div>
              <a
                href={song.sourceUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Recording source for ${song.title}`}
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blood underline-offset-4 hover:underline focus-visible:underline"
              >
                Recording on the Internet Archive
                <ArrowUpRightIcon size={12} weight="bold" aria-hidden="true" />
              </a>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <button
                  type="button"
                  onClick={() => setShowList(true)}
                  className="text-sm text-smoke underline-offset-4 hover:text-blood hover:underline"
                >
                  All songs
                </button>
                <button
                  type="button"
                  onClick={stopMusic}
                  className="text-sm font-semibold text-blood underline-offset-4 hover:underline"
                >
                  Stop music
                </button>
              </div>
            </div>
          ) : null}
          {song === null || showList ? (
            <>
              <ul className="px-5 py-3">
                {musicSongs.map((item, index) => (
                  <li key={item.title}>
                    <button
                      type="button"
                      onClick={() => goTo(index)}
                      className="block w-full border-b border-blood/10 py-3 text-left font-display text-lg text-bone transition-colors last:border-0 hover:text-blood focus-visible:text-blood focus-visible:outline-none"
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
              <p className="border-t border-blood/20 px-5 py-3 text-xs text-smoke">
                Covers of the songs he made famous, from Rocky Horror to the stage. Nothing plays
                until you press play, and the playlist keeps going track to track.
              </p>
            </>
          ) : null}
        </div>
      ) : null}
      {showPill ? (
        <div
          role="group"
          aria-label={`Now playing: ${song.title}`}
          className="flex w-full max-w-sm items-center gap-3 rounded-lg border border-white/10 bg-ink-2/95 py-2 pr-2 pl-4 shadow-stage backdrop-blur-md"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blood text-ink">
            <MusicNotesIcon size={16} weight="fill" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-bone">{song.title}</p>
            <p className="truncate text-[11px] text-smoke">{song.artist}</p>
          </div>
          <button
            type="button"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
            onClick={togglePlayback}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blood/15 text-blood transition-colors hover:bg-blood/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blood"
          >
            {isPlaying ? (
              <PauseIcon size={16} weight="fill" aria-hidden="true" />
            ) : (
              <PlayIcon size={16} weight="fill" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            aria-label="Open the music player"
            onClick={openPanel}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-blood transition-colors hover:text-blood-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-blood"
          >
            <CaretUpIcon size={16} weight="bold" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Hide the music player"
            onClick={() => setMinimized(false)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-blood transition-colors hover:text-blood-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-blood"
          >
            <CaretDownIcon size={16} weight="bold" aria-hidden="true" />
          </button>
        </div>
      ) : null}
      <button
        ref={toggleRef}
        type="button"
        aria-label="Listen to Tim Curry"
        aria-expanded={open}
        aria-controls="music-panel"
        onClick={() => {
          if (open) {
            closePanel();
          } else {
            openPanel();
          }
        }}
        className={
          showPill
            ? 'hidden'
            : 'inline-flex items-center gap-2 bg-blood px-5 py-3 text-sm font-semibold tracking-wide text-ink shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-blood-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blood active:translate-y-0'
        }
      >
        <MusicNotesIcon size={18} weight="bold" aria-hidden="true" />
        {open ? 'Hide' : song !== null ? 'Now playing' : 'Listen'}
      </button>
    </div>
  );
}
