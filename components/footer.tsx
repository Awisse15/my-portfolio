import { ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 bg-rose">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <p className="font-display text-3xl font-bold sm:text-4xl">
          Let's work together
        </p>

        <a
          href="mailto:you@example.com"
          className="mt-6 inline-flex items-center gap-2 text-lg font-medium hover:text-raspberry"
        >
          <Mail size={20} aria-hidden /> you@example.com
        </a>

        <ul className="mt-6 flex flex-wrap gap-6 text-sm">
          <li>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-raspberry"
            >
              GitHub <ArrowUpRight size={16} aria-hidden />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-raspberry"
            >
              LinkedIn <ArrowUpRight size={16} aria-hidden />
            </a>
          </li>
        </ul>

        <p className="mt-10 text-sm text-plum/70">
          © 2026 Anne Louisse Echanes
        </p>
      </div>
    </footer>
  );
}