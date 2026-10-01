"use client";

import { useEffect, useRef, useState } from "react";

export default function SmokeEffect({ opacity = 0.5, className = "" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    // Timeout: Safari battery saver silent block safety
    const timeoutId = setTimeout(() => {
      if (!isPlaying) {
        setIsLowPowerMode(true);
      }
    }, 2500);

    const attemptPlay = () => {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsLowPowerMode(false);
            clearTimeout(timeoutId);
          })
          .catch((error) => {
            // Safari Low Power Mode ya Autoplay Policy block trigger hua
            console.warn("Autoplay blocked (likely Low Power Mode):", error);
            setIsLowPowerMode(true);
            clearTimeout(timeoutId);
          });
      }
    };

    attemptPlay();

    const handlePlaying = () => {
      setIsPlaying(true);
      setIsLowPowerMode(false);
      clearTimeout(timeoutId);
    };

    video.addEventListener("playing", handlePlaying);
    video.addEventListener("loadeddata", attemptPlay);

    return () => {
      clearTimeout(timeoutId);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("loadeddata", attemptPlay);
    };
  }, [isPlaying]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-screen ${className}`}
      aria-hidden="true"
    >
      {/* 1. Video Player (Only rendered when NOT in Battery Saver mode) */}
      {!isLowPowerMode && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          webkitPlaysInline={true}
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noplaybackrate"
          tabIndex={-1}
          className="smoke-video absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
          style={{
            opacity: isPlaying ? opacity : 0,
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <source src="/smokeEffect/smoke.webm" type="video/webm" />
          <source src="/smokeEffect/smoke.mp4" type="video/mp4" />
        </video>
      )}

      {/* 2. Low Power Mode Fallback (CSS Keyframe Smoke Particles) */}
      {isLowPowerMode && (
        <div className="battery-saver-smoke-fallback absolute inset-0 h-full w-full">
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
