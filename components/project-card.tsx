import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-rose/50 transition duration-300 hover:-translate-y-1 hover:bg-rose">
      {/* Replace this block with a screenshot later */}
      <div className="aspect-[4/3] bg-rose" aria-hidden />

      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="w-fit rounded-full bg-blush px-3 py-1 text-xs font-medium">
          {project.category}
        </span>
        <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
        <p>{project.summary}</p>
        <p className="text-sm text-plum/70">{project.role}</p>

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex items-center gap-1 pt-2 font-medium text-raspberry hover:underline"
          >
            View project <ArrowUpRight size={18} aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}