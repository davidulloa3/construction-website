"use client";

import { useCallback, useRef, useState } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  label?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  label,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const clamp = (val: number, min: number, max: number) =>
    Math.max(min, Math.min(max, val));

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clamp(clientX - rect.left, 0, rect.width);
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    updatePosition(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    updatePosition(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div className="select-none">
      {label && (
        <p className="text-center text-sm font-semibold text-[#a0a0a0] uppercase tracking-widest mb-3">
          {label}
        </p>
      )}
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-xl aspect-[4/3] cursor-ew-resize touch-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* After image — full width behind */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />

        {/* Before image — clipped by position */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${position}%` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={beforeSrc}
            alt={beforeAlt}
            draggable={false}
            style={{
              position: "absolute",
              inset: 0,
              width: containerRef.current
                ? `${containerRef.current.offsetWidth}px`
                : "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/80 pointer-events-none"
          style={{ left: `${position}%` }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-none z-10"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-[#c0392b]"
          >
            <path d="M8.59 16.59L4 12l4.59-4.59L11 9.83 7.83 13 11 16.17 8.59 18.59zm6.82-1.42L19 12l-3.59-3.17L13 6.17 16.17 9 13 12.17 15.41 14.58z" />
          </svg>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-black/70 text-[#f5f5f5] text-xs font-bold px-2.5 py-1 rounded pointer-events-none">
          BEFORE
        </div>
        <div className="absolute top-3 right-3 bg-[#c0392b] text-white text-xs font-bold px-2.5 py-1 rounded pointer-events-none">
          AFTER
        </div>
      </div>
    </div>
  );
}
