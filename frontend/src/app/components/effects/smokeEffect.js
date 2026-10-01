"use client";

import { useEffect, useRef, useState } from "react";

export default function SmokeEffect({ opacity = 0.5, className = "" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Direct JS property assignment for iOS WebKit compatibility
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    let timeoutId;

    const handlePlaying = () => {
      setIsPlaying(true);
      setIsLowPowerMode(false);
      if (timeoutId) clearTimeout(timeoutId);
    };

    const attemptPlay = () => {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsLowPowerMode(false);
            if (timeoutId) clearTimeout(timeoutId);
          })
          .catch((error) => {
            console.warn("Apple WebKit Autoplay Blocked:", error);
            setIsLowPowerMode(true);
            if (timeoutId) clearTimeout(timeoutId);
          });
      }
    };

    // Safety fallback for Apple Low Power Mode
    timeoutId = setTimeout(() => {
      if (video.paused) {
        setIsLowPowerMode(true);
      }
    }, 2000);

    video.addEventListener("playing", handlePlaying);
    
    // Attempt play immediately
    attemptPlay();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      video.removeEventListener("playing", handlePlaying);
    };
  }, []); // Empty dependency array prevents re-render loop on iOS

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{
        // Forces Apple devices to create a dedicated GPU hardware layer
        WebkitTransform: "translate3d(0,0,0)",
        transform: "translate3d(0,0,0)",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        isolation: "isolate", // Fixes blend-mode rendering glitches on Apple
      }}
      aria-hidden="true"
    >
      {/* 1. Video Element (Kept in DOM so Apple GPU doesn't destroy render pipeline) */}
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
        className="smoke-video absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
        style={{
          opacity: isPlaying && !isLowPowerMode ? opacity : 0,
          mixBlendMode: "screen",
          WebkitMixBlendMode: "screen",
        }}
      >
        {/* Apple MP4 Pehle rakha hai kyunki WebM Apple GPU crash kar deta hai */}
        <source src="/smokeEffect/smoke.mp4" type="video/mp4" />
        <source src="/smokeEffect/smoke.webm" type="video/webm" />
      </video>

      {/* 2. Low Power Mode / iOS Fallback */}
      {isLowPowerMode && (
        <div
          className="battery-saver-smoke-fallback absolute inset-0 h-full w-full"
          style={{
            mixBlendMode: "screen",
            WebkitMixBlendMode: "screen",
          }}
        >
          <div
            className="smoke-puff puff-1"
            style={{ "--smoke-drift": "25vw", "--smoke-scale": "1.6", opacity }}
          />
          <div
            className="smoke-puff puff-2"
            style={{ "--smoke-drift": "-20vw", "--smoke-scale": "1.9", opacity }}
          />
        </div>
      )}
    </div>
  );
}
