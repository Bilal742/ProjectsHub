"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useState } from "react";
import { Project } from "@/types";

interface Props {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const techColors: { [key: string]: string } = {
    HTML: "#E34F26",
    CSS: "#1572B6",
    JavaScript: "#F7DF1E",
    React: "#61DAFB",
    TypeScript: "#3178C6",
    Tailwind: "#06B6D4",
    Node: "#339933",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}

        <img
          src={project.image}
          alt={project.title}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/400x200?text=No+Image";
          }}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-300 mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(project.techStack || []).map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border border-white/10"
              style={{
                background: `${techColors[tech] || "#374151"}20`,
                color: techColors[tech] || "#D1D5DB",
                borderColor: `${techColors[tech] || "#374151"}40`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-medium flex items-center gap-2"
            >
              <FiExternalLink /> Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium flex items-center gap-2"
            >
              <FiGithub /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
