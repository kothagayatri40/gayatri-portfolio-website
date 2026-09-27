import { experience } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 border-t border-line bg-panel/40">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-paper mb-12">Experience</h2>
        </Reveal>

        <div className="space-y-6">
          {experience.map((e, i) => (
            <Reveal key={e.org + e.duration} delay={i * 100}>
              <div className="rounded-lg border border-line bg-panel p-7 grid sm:grid-cols-[1fr_auto] gap-4 items-start transition-all duration-300 hover:border-signal/50 hover:-translate-y-0.5">
                <div>
                  <h3 className="font-display text-lg font-semibold text-paper">
                    {e.role} · {e.org}
                  </h3>
                  <p className="font-body text-xs text-ember mt-1">{e.type}</p>
                  <ul className="font-body text-sm text-fog mt-4 space-y-1.5 list-disc list-inside">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
                <span className="font-body text-sm text-fog whitespace-nowrap">{e.duration}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
