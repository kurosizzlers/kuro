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

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      if (!video.paused) return;

      const promise = video.play();

      if (promise !== undefined) {
        promise.catch(() => {
          // Decorative effect:
          // another retry will happen when video becomes ready
        });
      }
    };

    // Initial attempt
    tryPlay();

    // Retry as soon as enough video data becomes available
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    // If user returns to the tab
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        tryPlay();
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
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
        <source
          src="/smokeEffect/smoke.webm"
          type="video/webm"
        />

        <source
          src="/smokeEffect/smoke.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}