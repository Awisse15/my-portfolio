import type { Metadata } from "next";
import WorksGrid from "@/components/works-grid";

export const metadata: Metadata = {
  title: "Works – Your Name",
};

export default function Works() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-5xl font-bold sm:text-6xl">Works</h1>
      <p className="mt-4 max-w-xl text-lg">
        Websites, team projects and more. Filter by type.
      </p>
      <div className="mt-10">
        <WorksGrid />
      </div>
    </section>
  );
}