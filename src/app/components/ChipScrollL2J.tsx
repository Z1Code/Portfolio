"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 48;
const FPS = 12;

export default function ChipScrollL2J() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "160px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || framesRef.current.length) return;
    let loaded = 0;
    const frames = Array.from({ length: TOTAL_FRAMES }, (_, index) => {
      const image = new Image();
      image.src = `/sequence-l2j/frame-${String(index + 1).padStart(2, "0")}.webp`;
      const done = () => {
        loaded += 1;
        if (loaded === TOTAL_FRAMES) {
          framesRef.current = frames;
          setIsReady(true);
        }
      };
      image.onload = done;
      image.onerror = done;
      return image;
    });
  }, [isVisible]);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const image = framesRef.current[index];
    const context = canvas?.getContext("2d");
    if (!canvas || !container || !context || !image?.naturalWidth) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    }
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.drawImage(image, 0, 0, width, height);
  }, []);

  useEffect(() => {
    if (!isVisible || !isReady) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      drawFrame(18);
      return;
    }
    let animationFrame = 0;
    let previous = performance.now();
    const tick = (now: number) => {
      if (now - previous >= 1000 / FPS) {
        previous = now;
        frameRef.current = (frameRef.current + 1) % TOTAL_FRAMES;
        drawFrame(frameRef.current);
      }
      animationFrame = requestAnimationFrame(tick);
    };
    drawFrame(0);
    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [drawFrame, isReady, isVisible]);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden bg-[#030712]">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
      <div className="pointer-events-none absolute bottom-4 left-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-300/80">Online worlds</p>
        <p className="mt-1 text-sm font-bold text-white">Java · MMORPG infrastructure</p>
      </div>
      {!isReady && <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-950 via-amber-950/30 to-slate-950" />}
    </div>
  );
}
