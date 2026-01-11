"use client";

import { useEffect, useState } from "react";
import ProjectCard from "@/app/components/ProjectCard/ProjectCard";
import { Project } from "@/types";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/Bilal742/JavaScript-projects/contents/projects"
        );
        const data = await res.json();

        const dirs = data.filter((item: any) => item.type === "dir");

        const mapped: Project[] = await Promise.all(
          dirs.map(async (item: any) => {
            try {
              const metaRes = await fetch(
                `https://raw.githubusercontent.com/Bilal742/JavaScript-projects/main/projects/${item.name}/meta.json`
              );

              const meta = metaRes.ok ? await metaRes.json() : {};

              return {
                slug: item.name,
                title: meta.title ?? item.name.replace(/-/g, " "),
                description: meta.description ?? "No description available",
                image:
                  meta.image ??
                  `https://opengraph.githubassets.com/1/Bilal742/${item.name}`,
                live: `https://bilal742.github.io/JavaScript-projects/projects/${item.name}/index.html`,
                github: item.html_url,
                techStack: meta.techStack ?? [],
              };
            } catch {
              return {
                slug: item.name,
                title: item.name.replace(/-/g, " "),
                description: "No description available",
                image: `https://opengraph.githubassets.com/1/Bilal742/${item.name}`,
                live: `https://bilal742.github.io/JavaScript-projects/projects/${item.name}/index.html`,
                github: item.html_url,
                techStack: [],
              };
            }
          })
        );

        setProjects(mapped);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p className="text-center mt-10 text-lg">Loading projects...</p>;

  return (
    <div className="max-w-7xl mx-auto px-5 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#213448] mb-4">All Projects</h1>
      <p className="text-[#213448]/70 text-lg mb-10">
        Ye sab projects hain jo maine GitHub par banaye hain.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
