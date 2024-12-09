
import React from 'react';
import { motion } from 'framer-motion';
import { assets, projectData } from '../assets/assets';

function Testimonials() {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.75, delay: 0.1 }}
      className="mt-3 container mx-auto py-10 lg:px-32 w-full px-4 sm:px-6 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card"
      id="Project"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Project <span className="underline underline-offset-4 decoration-1 font-light">Completed</span>
      </h1>
      <p className="text-center text-gray-400 mb-12 max-w-md mx-auto">
        Please go through the project given below.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="max-w-full border shadow-lg rounded px-6 py-8 text-start hover:bg-gray-800"
          >
            <div className="flex flex-row gap-2 items-center">
              <img
                className="w-12 h-12 rounded-full border-2 border-blue-400"
                src={project.image}
                alt={project.name}
              />
              <h2 className="text-lg sm:text-xl text-green-400 font-medium">{project.name}</h2>
            </div>
            <p className="text-gray-300 font-medium mb-4 text-sm">{project.title}</p>
            <div className="flex flex-wrap gap-2 text-red-500 mb-4">
              {project.techStack.map((tech, idx) => (
                <img
                  key={idx}
                  src={tech}
                  alt="tech stack"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              ))}
            </div>
            <p className="text-gray-300 text-sm sm:text-base">{project.text}</p>
            <div className="flex gap-4 mt-4">
              <a href={project.link_src} target="_blank" rel="noopener noreferrer">
                <img src={project.link} alt="Project Link" className="w-8 h-8" />
              </a>
              <a href={project.github_src} target="_blank" rel="noopener noreferrer">
                <img src={project.github} alt="GitHub Link" className="w-8 h-8" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Testimonials;
