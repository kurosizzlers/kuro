"use client";

import { useEffect, useRef, useState } from "react";

export default function SmokeEffect({
  opacity = 0.5,
  className = "",
}) {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    // Detect Safari
    const userAgent = navigator.userAgent;

    const isSafari =
      /Safari/i.test(userAgent) &&
      !/Chrome|CriOS|Chromium|Edg|OPR|FxiOS/i.test(userAgent);

    // Safari → MP4
    // Other browsers → lightweight WebM
    setVideoSrc(
      isSafari
        ? "/smokeEffect/smoke.mp4"
        : "/smokeEffect/smoke.webm"
    );
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !videoSrc) return;

    // Autoplay requirements
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      if (!video.paused) return;

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If playback isn't possible yet,
          // canplay / loadeddata will retry.
        });
      }
    };

    // Initial attempt
    tryPlay();

    // Retry when video has enough data
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    // Resume if browser pauses video after
    // switching tabs / returning to page
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
  }, [videoSrc]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-screen ${className}`}
      aria-hidden="true"
    >
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
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
        />
      )}
    </div>
  );
}