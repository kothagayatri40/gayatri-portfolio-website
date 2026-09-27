import { education } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-paper mb-12">Education</h2>
        </Reveal>

        <ol className="relative border-l border-line ml-2 space-y-10">
          {education.map((ed, i) => (
            <Reveal key={ed.degree} delay={i * 110} as="li" className="ml-6">
              <span className="absolute -translate-x-1/2 w-3 h-3 rounded-full bg-signal border-2 border-ink mt-1.5 animate-glow-pulse" />
              <h3 className="font-display text-lg font-semibold text-paper">{ed.degree}</h3>
              <p className="font-body text-fog mt-1">
                {ed.institution} · {ed.location}
              </p>
              <p className="font-body text-sm text-signal mt-1">
                {ed.duration} &nbsp;·&nbsp; {ed.detail}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
