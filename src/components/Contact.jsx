import { profile } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 border-t border-line overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-signal/10 blur-[120px] animate-glow-pulse"
      />
      <div className="relative max-w-6xl mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper">
            Let's connect
          </h2>
          <p className="font-body text-fog mt-4 max-w-lg mx-auto">
            Open to full stack development and AI-focused opportunities. Reach out through
            any of the channels below.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="px-5 py-3 rounded-md bg-signal text-ink font-body font-semibold text-sm transition-all duration-300 hover:bg-signal2 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(79,214,192,0.6)]"
            >
              {profile.email}
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
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-md border border-line text-paper font-body font-semibold text-sm transition-all duration-300 hover:border-signal hover:text-signal hover:-translate-y-0.5"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
