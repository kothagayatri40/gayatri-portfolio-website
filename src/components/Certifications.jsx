import { certifications } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24 border-t border-line bg-panel/40">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-paper mb-12">
            Certifications & Achievements
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 100}>
              <div className="rounded-lg border border-line bg-panel p-6 flex items-start gap-4 transition-all duration-300 hover:border-signal/50 hover:-translate-y-1">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="mt-1 shrink-0">
                  <path
                    d="M12 2l2.6 5.27 5.82.85-4.21 4.1.99 5.79L12 15.27l-5.2 2.74.99-5.79-4.21-4.1 5.82-.85L12 2z"
                    stroke="#4FD6C0"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h3 className="font-body font-semibold text-paper">{c.name}</h3>
                  <p className="font-body text-sm text-fog mt-1">{c.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
