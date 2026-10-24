"use client";

import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/projects";

// Only shows tags that have at least one project, so new tags
// appear on their own once you add Slides or Ads.
const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function WorksGrid() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              active === category
                ? "bg-raspberry text-white"
                : "bg-rose/60 hover:bg-rose"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  );
}