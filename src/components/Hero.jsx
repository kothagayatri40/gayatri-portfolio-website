import { profile } from "../data.js";
import NetworkMotif from "./NetworkMotif.jsx";

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div
        aria-hidden="true"
        className="absolute -top-24 right-0 w-[420px] h-[420px] rounded-full bg-signal/10 blur-[110px] animate-glow-pulse"
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <p
            className="font-body text-signal text-sm font-medium mb-4 animate-hero-in"
            style={{ animationDelay: "0ms" }}
          >
            {profile.headline}
          </p>
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-paper leading-[1.08] text-balance animate-hero-in"
            style={{ animationDelay: "80ms" }}
          >
            {profile.name}
          </h1>
          <p
            className="mt-6 font-body text-lg text-fog max-w-xl leading-relaxed animate-hero-in"
            style={{ animationDelay: "180ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 animate-hero-in"
            style={{ animationDelay: "280ms" }}
          >
            <a
              href="#projects"
              className="px-5 py-3 rounded-md bg-signal text-ink font-body font-semibold text-sm transition-all duration-300 hover:bg-signal2 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(79,214,192,0.6)]"
            >
              View Projects
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-md border border-line text-paper font-body font-semibold text-sm transition-all duration-300 hover:border-signal hover:text-signal hover:-translate-y-0.5"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-md border border-line text-paper font-body font-semibold text-sm transition-all duration-300 hover:border-signal hover:text-signal hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
            <a
              href={profile.resumeFile}
              download
              className="px-5 py-3 rounded-md border border-line text-paper font-body font-semibold text-sm transition-all duration-300 hover:border-signal hover:text-signal hover:-translate-y-0.5"
            >
              Resume
            </a>
          </div>
        </div>

        <div aria-hidden="true" className="animate-drift">
          <NetworkMotif />
        </div>
      </div>
    </section>
  );
}
