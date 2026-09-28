"use client";

import { useState } from "react";

export default function SmokeEffect({
  opacity = 0.5,
  className = "",
}) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-screen ${className}`}
      aria-hidden="true"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noplaybackrate"
        tabIndex={-1}
        onCanPlay={() => setIsReady(true)}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          opacity: isReady ? opacity : 0,
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transition: "opacity 0.2s ease",
        }}
      >
        {/* Modern browsers */}
        <source src="/smokeEffect/smoke.webm" type="video/webm" />

        {/* Safari / fallback */}
        <source src="/smokeEffect/smoke.mp4" type="video/mp4" />
      </video>
    </div>
  );
}