export type Category = "Websites" | "Team projects" | "Slides" | "Ads";

export type Project = {
  slug: string;
  title: string;
  category: Category;
  summary: string;
  role: string;
  stack: string[];
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "college-project-one",
    title: "College project one",
    category: "Websites",
    summary: "A one-line description of what the site does.",
    role: "Designed and built the whole site",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://example.com",
    featured: true,
  },
  {
    slug: "college-project-two",
    title: "College project two",
    category: "Team projects",
    summary: "A one-line description of what the site does.",
    role: "Built the front end in a team of four",
    stack: ["React", "Tailwind CSS"],
    featured: true,
  },
  {
    slug: "college-project-three",
    title: "College project three",
    category: "Websites",
    summary: "A one-line description of what the site does.",
    role: "Designed the layout and wrote the code",
    stack: ["HTML", "CSS"],
    featured: true,
  },
];