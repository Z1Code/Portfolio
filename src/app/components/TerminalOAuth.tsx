"use client";

import { useEffect, useState } from "react";

const LINES: { text: string; type: "cmd" | "log" | "ok" | "result" | "success" }[] = [
  { text: "$ node create-oauth-client.mjs 'my-app'", type: "cmd" },
  { text: "[1/6] Chrome profile ready ✓", type: "ok" },
  { text: "[2/6] GCP Console loaded", type: "log" },
  { text: "[3/6] Consent screen configured ✓", type: "ok" },
  { text: "[4/6] OAuth client form: Web application", type: "log" },
  { text: "[5/6] Redirect URI injected ✓", type: "ok" },
  { text: '[6/6] {"clientId":"...googleusercontent.com",', type: "result" },
  { text: '       "clientSecret":"GOCSPX-..."}', type: "result" },
  { text: "✓ Credentials saved to .env.local", type: "success" },
];

const DELAYS = [200, 600, 900, 1300, 1800, 2200, 2700, 2900, 3400];
const RESET_AFTER = 6000;

export default function TerminalOAuth() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    let timers: ReturnType<typeof setTimeout>[] = [];

    const run = () => {
      setVisible(0);
      timers.forEach(clearTimeout);
      timers = [];

      DELAYS.forEach((delay, i) => {
        timers.push(setTimeout(() => setVisible(i + 1), delay));
      });

      timers.push(setTimeout(() => run(), RESET_AFTER));
    };

    run();
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0d1117] font-mono">
      {/* Window bar */}
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-2 text-[10px] text-white/30">gcp-oauth-automator</span>
      </div>

      {/* Terminal lines */}
      <div className="px-3 py-2.5 text-[11px] leading-5">
        {LINES.slice(0, visible).map((line, i) => (
          <div
            key={i}
            className={
              line.type === "cmd"
                ? "text-white/90"
                : line.type === "ok"
                  ? "text-emerald-400"
                  : line.type === "result"
                    ? "text-sky-300"
                    : line.type === "success"
                      ? "font-semibold text-emerald-300"
                      : "text-white/45"
            }
          >
            {line.text}
          </div>
        ))}
        {visible < LINES.length && (
          <span className="inline-block h-3 w-1.5 animate-pulse bg-emerald-400" />
        )}
      </div>
    </div>
  );
}
