'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { type CaseStudy } from '@/data/cases';

interface VideoCaseProps {
  caseStudy: CaseStudy;
  index?: number;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

function getYouTubeId(url: string): string | null {
  if (!url) return null;

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  // A raw 11-character value is already a video ID.
  if (url.length === 11 && /^[a-zA-Z0-9_-]+$/.test(url)) {
    return url;
  }

  return null;
}

function isYouTubeUrl(url: string): boolean {
  return /youtube\.com|youtu\.be/.test(url) || getYouTubeId(url) !== null;
}

export default function VideoCase({ caseStudy, index = 0 }: VideoCaseProps) {
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);
  const durationRef = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Prefer the explicitly configured YouTube source over a local video.
  const videoUrl = caseStudy.youtubeUrl || caseStudy.videoUrl;
  const isYouTube = videoUrl ? isYouTubeUrl(videoUrl) : false;
  const youtubeId = videoUrl && isYouTube ? getYouTubeId(videoUrl) : null;
  const thumbnailUrl = youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    : null;

  const startTimeTracking = (player: any) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const checkTime = () => {
      try {
        const currentTime = player.getCurrentTime();
        const duration = durationRef.current || player.getDuration();

        // Restart at one second when playback reaches the final second.
        if (duration > 0 && currentTime >= duration - 1) {
          player.seekTo(1);
        }
      } catch (e) {
        // Ignore transient player-state errors while the iframe is changing state.
      }
    };

    intervalRef.current = setInterval(checkTime, 100);
  };

  // Load the YouTube IFrame API once for all case-study players.
  useEffect(() => {
    if (!isYouTube || !youtubeId || !iframeRef.current) return;

    const initializePlayer = () => {
      if (!iframeRef.current || !youtubeId || playerRef.current) return;

      try {
        playerRef.current = new window.YT.Player(iframeRef.current, {
          videoId: youtubeId,
          playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: youtubeId,
            controls: 0,
            mute: 1,
            modestbranding: 1,
            rel: 0,
            playsinline: 1,
            iv_load_policy: 3,
            enablejsapi: 1,
            start: 1,
          },
          events: {
            onReady: (event: any) => {
              const duration = event.target.getDuration();
              durationRef.current = duration;
              startTimeTracking(event.target);
            },
          },
        });
      } catch (e) {
        console.error('Error initializing YouTube player:', e);
      }
    };

    // Reuse the API script when another player has already loaded it.
    if (window.YT && window.YT.Player) {
      // Give the iframe a moment to finish initializing before creating the player.
      setTimeout(initializePlayer, 100);
      return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      setTimeout(initializePlayer, 100);
    };

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // The iframe may already be gone during teardown.
        }
        playerRef.current = null;
      }
    };
  }, [isYouTube, youtubeId]);

  const handleVideoClick = () => {
    if (isYouTube && youtubeId) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="overflow-hidden rounded-lg border border-divider bg-white shadow-md"
      >
        {videoUrl && !imageError ? (
          <div
            className={`relative w-full overflow-hidden bg-black ${isYouTube && youtubeId ? 'aspect-video' : 'h-64'}`}
          >
            {isYouTube && youtubeId ? (
              <iframe
                ref={iframeRef}
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&autoplay=1&loop=1&playlist=${youtubeId}&controls=0&mute=1&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&start=1`}
                title={`Video for ${caseStudy.address}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={false}
                style={{ pointerEvents: 'none', border: 'none' }}
              />
            ) : (
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="h-full w-full object-cover"
                onError={() => setImageError(true)}
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            )}
          </div>
        ) : (
          <div className="relative flex h-64 w-full items-center justify-center bg-gray-800">
            <span className="text-gray-500">Video Preview</span>
          </div>
        )}

        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-semibold text-divider">{caseStudy.city}</span>
            <span className="text-sm text-text-secondary">{caseStudy.timeframe}</span>
          </div>

          <h3 className="mb-2 text-lg font-semibold text-text-primary">{caseStudy.address}</h3>

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded bg-secondary px-2 py-1 text-sm text-text-secondary">
              {caseStudy.condition}
            </span>
            <span className="rounded bg-divider/20 px-2 py-1 text-sm text-divider">
              {caseStudy.result}
            </span>
          </div>

          <p className="text-sm text-text-secondary">{caseStudy.description}</p>
        </div>
      </motion.div>

      {isModalOpen && youtubeId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeModal}
        >
          <div
            className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-lg bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black/90"
              aria-label="Close video"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title={`Video for ${caseStudy.address}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
