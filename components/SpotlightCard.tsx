"use client";

import React, { useRef, useState } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  glowColor = "rgba(16, 185, 129, 0.15)", // Default emerald glow
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative rounded-2xl overflow-hidden bg-slate-dark/30 border border-white/5 p-6 md:p-8 transition-shadow duration-300 shadow-md ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow Overlay layer */}
      {isFocused && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl transition duration-300 -z-10"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
          }}
        />
      )}

      {/* Interactive Spotlight border layer */}
      {isFocused && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl transition duration-300 -z-20 opacity-100"
          style={{
            background: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, rgba(251, 191, 36, 0.35), transparent 80%)`,
          }}
        />
      )}

      {children}
    </div>
  );
}
