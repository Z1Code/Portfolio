"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";

const BG_COLOR = "#0a0a0a";
const TOTAL_FRAMES = 64;
const FPS = 24;

export default function ChipScrollFashion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/sequence-fashion/frame_${String(i).padStart(4, "0")}.webp`;

      const onDone = () => {
        loaded++;
        setLoadProgress(loaded / TOTAL_FRAMES);
        if (loaded === TOTAL_FRAMES) {
          imagesRef.current = images;
          setIsLoading(false);
        }
      };
      img.onload = onDone;
      img.onerror = onDone;
      images[i] = img;
    }
  }, []);

  const drawFrame = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[idx];
    if (!canvas || !ctx || !img?.complete || img.naturalWidth === 0) return;

    const container = containerRef.current;
    const dpr = window.devicePixelRatio || 1;
    const w = container?.clientWidth || 400;
    const h = container?.clientHeight || 192;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, w, h);

    const crop = 0.12;
    const sx = img.naturalWidth * crop;
    const sw = img.naturalWidth * (1 - crop * 2);
    const sh = img.naturalHeight;
    const zoom = 1.05;
    const dw = w * zoom;
    const dh = h * zoom;
    const dx = (w - dw) / 2;
    const dy = (h - dh) / 2;
    ctx.drawImage(img, sx, 0, sw, sh, dx, dy, dw, dh);

    const grad = ctx.createRadialGradient(
      w / 2, h / 2, Math.min(w, h) * 0.3,
      w / 2, h / 2, Math.max(w, h) * 0.7,
    );
    grad.addColorStop(0, "rgba(0,0,0,0)");
    grad.addColorStop(0.7, "rgba(0,0,0,0)");
    grad.addColorStop(1, "rgba(0,0,0,0.4)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  }, []);

  useEffect(() => {
    if (isLoading || imagesRef.current.length === 0) return;

    let raf: number;
    const frameDur = 1000 / FPS;
    let last = Date.now();

    const tick = () => {
      const now = Date.now();
      if (now - last >= frameDur) {
        last = now - ((now - last) % frameDur);
        const next = (frameRef.current + 1) % TOTAL_FRAMES;
        frameRef.current = next;
        drawFrame(next);
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isLoading, drawFrame]);

  useEffect(() => {
    const onResize = () => drawFrame(frameRef.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [drawFrame]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden"
      style={{ backgroundColor: BG_COLOR }}
    >
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center"
            style={{ backgroundColor: BG_COLOR }}
          >
            <div className="relative h-1 w-32 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500"
                initial={{ width: 0 }}
                animate={{ width: `${loadProgress * 100}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="mt-2 text-[11px] font-medium tracking-wide text-white/40">
              {Math.round(loadProgress * 100)}%
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      )}
    </div>
  );
}
