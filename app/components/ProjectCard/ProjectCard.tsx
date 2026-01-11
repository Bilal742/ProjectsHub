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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl overflow-hidden border border-[#213448]/10 hover:border-[#213448]/30 transition-all duration-300 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-56 md:h-64 overflow-hidden bg-[#213448]/5">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#213448]/5 animate-pulse" />
        )}

        <img
          src={project.image}
          alt={project.title}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/600x400?text=No+Image";
          }}
          className={`w-full h-96 object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        />

        {/* Image Overlay */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ 
            background: 'linear-gradient(to top, rgba(33, 52, 72, 0.1), transparent)' 
          }}
        />
      </div>

      {/* Content Section */}
      <div className="p-5 md:p-6">
        {/* Title with Accent Color */}
        <div className="mb-3">
          <h3 className="text-lg md:text-xl font-bold text-[#213448] mb-1">
            {project.title}
          </h3>
          <div 
            className="h-0.5 w-8 bg-[#FFFF80] transform origin-left transition-all duration-300 group-hover:w-12"
          />
        </div>

        <p className="text-[#213448]/70 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack - Minimal Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {(project.techStack || []).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs font-medium rounded-md"
              style={{
                backgroundColor: '#FFFF80',
                color: '#213448',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons - Clean Design */}
        <div className="flex gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-sm"
              style={{
                backgroundColor: '#213448',
                color: 'white',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1a2938';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#213448';
              }}
            >
              <FiExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 text-sm font-medium rounded-lg border flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-sm"
              style={{
                borderColor: '#213448',
                color: '#213448',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFF80';
                e.currentTarget.style.borderColor = '#FFFF80';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = '#213448';
              }}
            >
              <FiGithub className="w-3.5 h-3.5" />
              Code
            </a>
          )}
        </div>
      </div>

      {/* Simple Hover Indicator */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-0.5 transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0"
        style={{ backgroundColor: '#FFFF80' }}
      />
    </motion.div>
  );
}