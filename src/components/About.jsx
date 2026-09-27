import { about } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.4fr_0.6fr] gap-10">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-paper">About Me</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-body text-lg text-fog leading-relaxed max-w-2xl">{about}</p>
        </Reveal>
      </div>
    </section>
  );
}
