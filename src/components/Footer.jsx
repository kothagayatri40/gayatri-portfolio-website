import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-line">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-body text-sm text-fog">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-body text-sm text-fog">Built for hackathon submission</p>
      </div>
    </footer>
  );
}
