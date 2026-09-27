import { skills } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 border-t border-line bg-panel/40">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-paper mb-12">
            Technical Skills
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 90}>
              <div className="rounded-lg border border-line bg-panel p-6 h-full transition-all duration-300 hover:border-signal/50 hover:-translate-y-1 hover:shadow-[0_12px_28px_-14px_rgba(79,214,192,0.35)]">
                <h3 className="font-body font-semibold text-signal text-sm mb-4">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-body text-sm text-paper bg-panel2 border border-line rounded px-3 py-1.5 transition-all duration-200 hover:border-signal hover:text-signal hover:-translate-y-0.5"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
