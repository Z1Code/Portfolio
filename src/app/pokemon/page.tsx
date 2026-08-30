import type { Metadata } from "next";
import Image from "next/image";

const whatsappUrl =
  "https://wa.me/56937111513?text=Hola%2C%20me%20interesa%20PokeScan.%20Quiero%20conocer%20mas%20sobre%20el%20proyecto.";

export const metadata: Metadata = {
  title: "PokeScan | Acceso por invitacion",
  description: "Vista previa de PokeScan, plataforma de inteligencia para mercados TCG.",
};

export default function PokemonInterestPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050b17] text-white">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Image
          src="/pokescan-dashboard.png"
          alt="Vista previa bloqueada del dashboard PokeScan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-55 blur-[1px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,.35)_55%,rgba(2,6,23,.9)_100%)]" />
        <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px]" />
        <section className="relative z-10 mx-5 max-w-xl rounded-3xl border border-cyan-300/25 bg-slate-950/80 px-7 py-8 text-center shadow-2xl shadow-cyan-950/60 backdrop-blur-xl sm:px-12 sm:py-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Acceso privado
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">PokeScan</h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-300 sm:text-base">
            Plataforma de inteligencia de mercado para detectar movimientos, oportunidades y arbitraje en TCG.
          </p>
          <div className="mt-7 inline-flex rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20">
            Toca para consultar por WhatsApp
          </div>
        </section>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-20 cursor-pointer"
        aria-label="Consultar por PokeScan en WhatsApp"
      />
    </main>
  );
}
