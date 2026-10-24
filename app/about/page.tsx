import type { Metadata } from "next";
import { Award } from "lucide-react";
import { certificates } from "@/lib/certificates";

export const metadata: Metadata = {
  title: "About – Your Name",
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Figma",
  "Canva",
];

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-5xl font-bold sm:text-6xl">About me</h1>

      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.4fr]">
        {/* Replace this block with your photo later */}
        <div
          className="aspect-square rounded-3xl bg-rose"
          aria-hidden
        />

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Write a short intro here: who you are, where you studied, and what
            you like making.
          </p>
          <p>
            Say what you're working on next. Websites, corporate slide designs
            and advertisements are all on the way.
          </p>

          <div>
            <h2 className="font-display text-2xl font-semibold">Tools I use</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-rose px-4 py-1.5 text-sm font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-display text-3xl font-semibold">Certificates</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <li
              key={`${cert.title}-${i}`}
              className="flex gap-4 rounded-2xl bg-rose/50 p-5"
            >
              <Award className="mt-1 shrink-0 text-raspberry" aria-hidden />
              <div>
                <p className="font-medium">{cert.title}</p>
                <p className="text-sm text-plum/70">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}