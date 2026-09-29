"use client";

import { useEffect, useRef } from "react";

export default function SmokeEffect({
  opacity = 0.5,
  className = "",
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Autoplay configuration
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      if (!video.paused) return;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Playback deferred until interaction or data loaded
        });
      }
    };

    tryPlay();

    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        tryPlay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-screen ${className}`}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        preload="auto"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noplaybackrate"
        tabIndex={-1}
        className="smoke-video absolute inset-0 h-full w-full object-cover"
        style={{
          opacity,
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        <source src="/smokeEffect/smoke.webm" type="video/webm" />
        <source src="/smokeEffect/smoke.mp4" type="video/mp4" />
      </video>
    </div>
  );
}