import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ project, isDarkMode }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-500"
    >
      {/* Card Background */}
      <div
        className={`rounded-2xl overflow-hidden   transition-all duration-300 backdrop-blur-sm ${
          isDarkMode
            ? "bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10"
            : "bg-white/80 border-gray-200 hover:border-gray-300 hover:shadow-2xl hover:shadow-blue-500/10"
        }`}
      >
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                Featured
              </span>
            </div>
          )}

          {/* Overlay with Live/Github links */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
            {/* <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium pointer-events-auto transform transition-all hover:scale-105"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a> */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium pointer-events-auto transform transition-all hover:scale-105"
            >
              <FiGithub size={16} />
              <span>Github</span>
            </a>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 bg-transparent">
          <h3
            className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              isDarkMode
                ? "text-white group-hover:text-blue-400"
                : "text-gray-900 group-hover:text-blue-500"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`text-sm leading-relaxed mb-4 ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs px-2 py-1 rounded-full font-medium transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
