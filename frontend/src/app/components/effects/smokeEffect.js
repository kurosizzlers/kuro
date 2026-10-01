"use client";

import { useEffect, useRef, useState } from "react";

export default function SmokeEffect({ opacity = 0.5, className = "" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Safari autoplay requirement setup
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    let timeoutId;

    const attemptPlay = async () => {
      try {
        await video.play();
        setIsPlaying(true);
        setIsLowPowerMode(false);
      } catch (error) {
        console.warn("Autoplay / Safari power policy fallback:", error);
        // Fallback to CSS animation without unmounting video layer
        setIsLowPowerMode(true);
      }
    };

    // Safety timeout for silent block
    timeoutId = setTimeout(() => {
      if (!isPlaying && video.paused) {
        setIsLowPowerMode(true);
      }
    }, 2000);

    attemptPlay();

    const handlePlaying = () => {
      setIsPlaying(true);
      setIsLowPowerMode(false);
      if (timeoutId) clearTimeout(timeoutId);
    };

    video.addEventListener("playing", handlePlaying);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      video.removeEventListener("playing", handlePlaying);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{
        // Safari Hardware Acceleration & Stacking fix
        WebkitTransform: "translate3d(0, 0, 0)",
        transform: "translate3d(0, 0, 0)",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      }}
      aria-hidden="true"
    >
      {/* Video Element - Always kept in DOM to prevent Safari unmount render crash */}
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
        {/* Safari optimization: MP4 pehle ranking me rakha hai */}
        <source src="/smokeEffect/smoke.mp4" type="video/mp4" />
        <source src="/smokeEffect/smoke.webm" type="video/webm" />
      </video>

      {/* Fallback CSS Smoke for Low Power Mode */}
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
