"use client";

import { useEffect, useRef, useState } from "react";

export default function SmokeEffect({ opacity = 0.5, className = "" }) {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [useWebP, setUseWebP] = useState(false);

  useEffect(() => {
    // 1. Apple OS / WebKit Detection
    const userAgent = window.navigator.userAgent || window.navigator.vendor || "";
    const platform = window.navigator.platform || "";

    const isAppleDevice =
      /iPad|iPhone|iPod|Macintosh|MacIntel|MacPPC|Mac68K/i.test(platform) ||
      (/Macintosh/i.test(userAgent) && navigator.maxTouchPoints > 1) ||
      (/Safari/i.test(userAgent) && !/Chrome/i.test(userAgent));

    
    setVideoSrc(
      isAppleDevice
        ? "/smokeEffect/smoke.mp4"
        : "/smokeEffect/smoke.webm"
    );
  }, []);

  useEffect(() => {
    if (!videoSrc) return;

    const video = videoRef.current;
    if (!video) return;

    // Direct WebKit Muted Bindings
    video.muted = true;
    video.defaultMuted = true;

    // Autoplay attempt
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Normal mode: Video successfully playing
          setUseWebP(false);
        })
        .catch(() => {
          // Low Power Mode active: Video autoplay blocked -> Instant WebP Fallback
          setUseWebP(true);
        });
    }
  }, [videoSrc]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{
        WebkitTransform: "translate3d(0, 0, 0)",
        transform: "translate3d(0, 0, 0)",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        isolation: "isolate",
      }}
      aria-hidden="true"
    >
      {/* Fallback 1: Low Power Mode / Battery Saver WebP Image render */}
      {useWebP ? (
        <img
          src="/smokeEffect/smoke.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            opacity: opacity,
            mixBlendMode: "screen",
            WebkitMixBlendMode: "screen",
          }}
        />
      ) : (
        /* Normal Mode: Smooth Autoplay Video */
        videoSrc && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            preload="metadata"
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
            <source
              src={videoSrc}
              type={videoSrc.endsWith(".mp4") ? "video/mp4" : "video/webm"}
            />
          </video>
        )
      )}
    </div>
  );
}