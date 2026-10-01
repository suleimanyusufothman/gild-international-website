"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function WelcomeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [shouldLoad]);

  function toggleMuted() {
    const nextMuted = !isMuted;
    if (videoRef.current) videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg bg-[#000814]">
      <video
        ref={videoRef}
        src={shouldLoad ? "/videos/Welcome%20Message%20GILD.mp4" : undefined}
        autoPlay
        loop
        muted
        playsInline
        preload={shouldLoad ? "metadata" : "none"}
        aria-label="Welcome message from GILD International"
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={toggleMuted}
        aria-label={isMuted ? "Turn video sound on" : "Turn video sound off"}
        title={isMuted ? "Turn sound on" : "Turn sound off"}
        className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#D89030]/60 bg-[#000814]/80 text-[#F0C050] backdrop-blur-sm transition-colors hover:bg-[#001B45] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0C050]"
      >
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>
    </div>
  );
}
