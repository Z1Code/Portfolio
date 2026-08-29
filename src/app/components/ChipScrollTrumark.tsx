"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";

const BG_COLOR = "#0a0a0a";
const TOTAL_FRAMES = 288;
const FPS = 24;

/* ── Text overlays ── */

interface TextOverlay {
  title: string;
  subtitle?: string;
  position: "center" | "left" | "right";
  startFrame: number;
  endFrame: number;
  gradientColors?: string;
  isLogo?: boolean;
}

const textOverlays: TextOverlay[] = [
  {
    title: "AI-Powered Certification",
    subtitle: "Every vehicle, inspected by intelligence.",
    position: "center",
    startFrame: 0,
    endFrame: 58,
    gradientColors:
      "linear-gradient(90deg, #fef3c7, #fcd34d, #f5f5f4, #fcd34d, #fef3c7)",
  },
  {
    title: "150-Point Inspection",
    subtitle: "Trust score visible to every buyer.",
    position: "left",
    startFrame: 72,
    endFrame: 130,
    gradientColors:
      "linear-gradient(90deg, #a5b4fc, #818cf8, #e0e7ff, #c4b5fd, #818cf8, #a5b4fc)",
  },
  {
    title: "Real-Time Market Pricing",
    subtitle: "Never overpay. Never undersell.",
    position: "right",
    startFrame: 144,
    endFrame: 202,
    gradientColors:
      "linear-gradient(270deg, #fecaca, #f87171, #fef3c7, #fb923c, #f87171, #fecaca)",
  },
  {
    title: "TrueMark | AI",
    position: "center",
    startFrame: 228,
    endFrame: 287,
    isLogo: true,
  },
];

/* ── Annotation dots ── */

interface Annotation {
  label: string;
  sublabel: string;
  dotX: number;
  dotY: number;
  labelOffsetX: number;
  labelOffsetY: number;
  startFrame: number;
  endFrame: number;
}

const annotations: Annotation[] = [
  {
    label: "Nissan GT-R50",
    sublabel: "Italdesign · 720 HP",
    dotX: 58,
    dotY: 32,
    labelOffsetX: 8,
    labelOffsetY: -14,
    startFrame: 10,
    endFrame: 46,
  },
  {
    label: "Rear Spoiler",
    sublabel: "Carbon Fiber · Adjustable",
    dotX: 48,
    dotY: 25,
    labelOffsetX: 14,
    labelOffsetY: -11,
    startFrame: 118,
    endFrame: 146,
  },
  {
    label: "Custom Rims",
    sublabel: 'Italdesign for GT-R50 · 21"',
    dotX: 35,
    dotY: 68,
    labelOffsetX: 8,
    labelOffsetY: -12,
    startFrame: 194,
    endFrame: 240,
  },
  {
    label: "Michelin Pilot Sport",
    sublabel: "Cup 2 · 305/30 ZR20",
    dotX: 55,
    dotY: 28,
    labelOffsetX: 12,
    labelOffsetY: -12,
    startFrame: 102,
    endFrame: 126,
  },
];

/* ── TextOverlayItem ── */

function TextOverlayItem({
  overlay,
  currentFrame,
}: {
  overlay: TextOverlay;
  currentFrame: number;
}) {
  const isVisible =
    currentFrame >= overlay.startFrame && currentFrame <= overlay.endFrame;

  const fadeRange = 8;
  let opacity = 0;
  if (isVisible) {
    if (currentFrame < overlay.startFrame + fadeRange) {
      opacity = (currentFrame - overlay.startFrame) / fadeRange;
    } else if (currentFrame > overlay.endFrame - fadeRange) {
      opacity = (overlay.endFrame - currentFrame) / fadeRange;
    } else {
      opacity = 1;
    }
  }
  if (opacity <= 0) return null;

  if (overlay.isLogo) {
    return (
      <div
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4"
        style={{ opacity, transition: "opacity 0.15s ease-out" }}
      >
        <span className="text-lg font-semibold tracking-tight text-white sm:text-xl md:text-2xl">
          TrueMark
          <span className="mx-1.5 font-light text-white/30">|</span>
          <span>A</span>
          <span>I</span>
          <motion.span
            className="text-indigo-500"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
          >
            I
          </motion.span>
        </span>
      </div>
    );
  }

  const progress =
    (currentFrame - overlay.startFrame) /
    (overlay.endFrame - overlay.startFrame);
  const gradPos = progress * 200;

  const defaultGrad =
    "linear-gradient(90deg, #fef3c7, #fde68a, #6ee7b7, #fde68a, #fef3c7)";

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-4 ${
        overlay.position === "left"
          ? "md:items-start md:pl-6"
          : overlay.position === "right"
            ? "md:items-end md:pr-6"
            : "items-center"
      }`}
      style={{ opacity, transition: "opacity 0.15s ease-out" }}
    >
      <div
        className={`max-w-full text-center ${
          overlay.position === "left"
            ? "md:text-left"
            : overlay.position === "right"
              ? "md:text-right"
              : ""
        }`}
      >
        <h2
          className="bg-clip-text text-lg font-bold tracking-tight text-transparent drop-shadow-2xl sm:text-xl md:text-2xl"
          style={{
            backgroundImage: overlay.gradientColors || defaultGrad,
            backgroundSize: "200% 100%",
            backgroundPosition: `${gradPos}% 0`,
            filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.5))",
          }}
        >
          {overlay.title}
        </h2>
        {overlay.subtitle && (
          <p
            className="mt-1 text-xs font-light tracking-tight text-white/80 sm:text-sm"
            style={{ textShadow: "0 0 30px rgba(0,0,0,0.9)" }}
          >
            {overlay.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

/* ── AnnotationItem ── */

function AnnotationItem({
  annotation,
  currentFrame,
}: {
  annotation: Annotation;
  currentFrame: number;
}) {
  const isVisible =
    currentFrame >= annotation.startFrame &&
    currentFrame <= annotation.endFrame;

  let opacity = 0;
  if (isVisible) {
    const fadeIn = currentFrame - annotation.startFrame;
    const fadeOut = annotation.endFrame - currentFrame;
    opacity = fadeIn < 6 ? fadeIn / 6 : fadeOut < 6 ? fadeOut / 6 : 1;
  }
  if (opacity <= 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {/* Dot */}
      <div
        className="absolute h-2 w-2 rounded-full border border-cyan-500/30 bg-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
        style={{
          left: `${annotation.dotX}%`,
          top: `${annotation.dotY}%`,
          opacity,
          transition: "opacity 0.15s ease-out",
        }}
      />
      {/* Label */}
      <div
        className="absolute flex flex-col"
        style={{
          left: `${annotation.dotX + annotation.labelOffsetX}%`,
          top: `${annotation.dotY + annotation.labelOffsetY}%`,
          opacity,
          transition: "opacity 0.15s ease-out",
        }}
      >
        <span className="text-[7px] font-semibold tracking-wide text-cyan-300 whitespace-nowrap sm:text-[10px]">
          {annotation.label}
        </span>
        <span className="text-[7px] font-medium tracking-wide text-cyan-400/70 whitespace-nowrap sm:text-[10px]">
          {annotation.sublabel}
        </span>
      </div>
    </div>
  );
}

/* ── Main component ── */

export default function ChipScrollTrumark() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/sequence-trumark/frame_${String(i).padStart(4, "0")}.webp`;

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
        setCurrentFrame(next);
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
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500"
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
        <>
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
          {textOverlays.map((overlay, i) => (
            <TextOverlayItem
              key={i}
              overlay={overlay}
              currentFrame={currentFrame}
            />
          ))}
          {annotations.map((annotation, i) => (
            <AnnotationItem
              key={i}
              annotation={annotation}
              currentFrame={currentFrame}
            />
          ))}
        </>
      )}
    </div>
  );
}
