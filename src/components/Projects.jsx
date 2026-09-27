import { projects } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-paper mb-12">Projects</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 90} className="h-full">
              <article className="group rounded-lg border border-line bg-panel p-7 border-l-4 border-l-signal flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-line hover:shadow-[0_16px_36px_-16px_rgba(79,214,192,0.4)]">
                <h3 className="font-display text-xl font-semibold text-paper transition-colors duration-300 group-hover:text-signal">
                  {p.name}
                </h3>

                <div className="flex flex-wrap gap-2 mt-3">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-body text-xs text-signal bg-signal/10 border border-signal/30 rounded px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <p className="font-body text-fog mt-4 leading-relaxed">{p.description}</p>

                <ul className="font-body text-sm text-fog mt-4 space-y-1.5 list-disc list-inside">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-signal hover:text-signal2 w-fit"
                  >
                    View on GitHub
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
