"use client";

import { useEffect, useRef, useState } from "react";

export default function SmokeEffect({
  opacity = 0.5,
  className = "",
}) {
  const videoRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Important for autoplay reliability
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const handleReady = () => {
      setIsReady(true);

      video.play().catch(() => {
        // Browser may temporarily block playback.
        // The video can retry when it becomes playable.
      });
    };

    // Video may already be ready before React event fires
    if (video.readyState >= 3) {
      handleReady();
    } else {
      video.addEventListener("canplay", handleReady, { once: true });
    }

    // Explicitly start loading
    video.load();

    return () => {
      video.removeEventListener("canplay", handleReady);
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
        onLoadedData={() => setIsReady(true)}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          opacity: isReady ? opacity : 0,
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transition: "opacity 0.3s ease",
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