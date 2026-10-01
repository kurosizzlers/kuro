"use client";

import { useEffect, useRef } from "react";

export default function SmokeEffect({ opacity = 0.5, className = "" }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // WebKit/Apple Policy: Muted state explicitly set in JS memory
    video.muted = true;
    video.defaultMuted = true;

    // Direct play call as safety backup
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn("Autoplay attempt failed:", error);
      });
    }
  }, []);

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{
        // Prevents Apple GPU layer drop / vanishing glitch
        WebkitTransform: "translate3d(0, 0, 0)",
        transform: "translate3d(0, 0, 0)",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        isolation: "isolate",
      }}
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
        disablePictureInPicture
        controlsList="nodownload nofullscreen noplaybackrate"
        tabIndex={-1}
        className="smoke-video absolute inset-0 h-full w-full object-cover"
        style={{
          opacity: opacity,
          mixBlendMode: "screen",
          WebkitMixBlendMode: "screen",
        }}
      >
        <source src="/smokeEffect/smoke.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
