'use client';

import { useState } from 'react';

interface VideoEmbedProps {
  videoId: string;
  title?: string;
  thumbnail?: string;
}

export default function VideoEmbed({ videoId, title = 'App demo', thumbnail: customThumbnail }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = customThumbnail ?? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[inherit]">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&modestbranding=1&playsinline=1&rel=0`}
          className="h-full w-full"
          allow="autoplay; fullscreen"
          allowFullScreen
          title={title}
          style={{ border: 'none' }}
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="group relative h-full w-full cursor-pointer"
          aria-label="Play video"
        >
          {/* Thumbnail */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-2xl transition-transform group-hover:scale-110">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#0F172A"
                className="translate-x-0.5"
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </div>

          {/* Sound hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
            🔊 Tap to watch with sound
          </div>
        </button>
      )}
    </div>
  );
}
