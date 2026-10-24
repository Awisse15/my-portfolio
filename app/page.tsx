import CursorGlow from "@/components/cursor-glow";
import Hero from "@/components/hero";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <CursorGlow />
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Featured work
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}