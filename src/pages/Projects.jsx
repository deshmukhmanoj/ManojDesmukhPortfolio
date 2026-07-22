import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCircle } from "react-icons/fa";
import { projects } from "../data/projectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-2 text-center"
      >
        My <span className="text-blue-400">Projects</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-gray-400 text-center mb-10"
      >
        A selection of full stack applications I've architected and shipped
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const isLive = Boolean(project.live);
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedProject(project)}
              className="relative bg-linear-to-br from-gray-800/70 to-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer group overflow-hidden"
            >
              {/* Accent glow on hover */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors pr-2">
                  {project.title}
                </h3>
                {isLive && (
                  <span className="flex items-center gap-1.5 shrink-0 px-2.5 py-1 bg-green-500/15 text-green-400 rounded-full text-xs font-medium">
                    <FaCircle size={6} className="animate-pulse" />
                    Live
                  </span>
                )}
              </div>

              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium inline-flex items-center gap-1">
                Click to view details
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-gray-700"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-blue-400 pr-4">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors shrink-0"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <p className="text-gray-300 mb-4">{selectedProject.description}</p>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-blue-400">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-blue-400">Key Features</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 mt-6">
                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <FaGithub /> View Code
                  </a>
                ) : (
                  <span
                    title="Repository link coming soon"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/40 text-gray-500 rounded-lg cursor-not-allowed"
                  >
                    <FaGithub /> Code Coming Soon
                  </span>
                )}

                {selectedProject.live ? (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                ) : (
                  <span
                    title="Live demo coming soon"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/30 text-blue-200/60 rounded-lg cursor-not-allowed"
                  >
                    <FaExternalLinkAlt /> Demo Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;