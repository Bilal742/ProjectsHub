"use client";

import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { Project } from "@/types";

export default function Page() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(
        "https://api.github.com/repos/Bilal742/JavaScript-projects/contents/projects"
      );
      const data = await res.json();

      const dirs = data.filter((item: any) => item.type === "dir");

      const mapped: Project[] = dirs.map((item: any) => ({
        slug: item.name,
        title: item.name.replace(/-/g, " "),
        description: "No description available",
        image: `https://opengraph.githubassets.com/1/Bilal742/${item.name}`,
        live: `https://bilal742.github.io/JavaScript-projects/projects/${item.name}/index.html`,
        github: item.html_url,
        techStack: [],
      }));

      setProjects(mapped);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-30">
      {/* <h1 className="text-3xl font-bold mb-6">My Projects</h1> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
