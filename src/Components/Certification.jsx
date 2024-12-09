

import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(Math.min(projectsData.length, 3)); // Show max 3 containers
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2); // Show 2 containers for tablet-sized screens
      } else {
        setCardsToShow(1); // Show 1 container for mobile-sized screens
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const container = e.currentTarget.getBoundingClientRect();
    const x = ((clientX - container.left) / container.width - 0.5) * 20; // Adjust sensitivity
    const y = ((clientY - container.top) / container.height - 0.5) * 20; // Adjust sensitivity
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      id="Certification"
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 py-20 w-full overflow-hidden"
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.75, delay: 0.1 }}
      onMouseMove={handleMouseMove}
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        transition: "transform 0.1s ease",
      }}
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
      Certification{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
        Achieved
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
      Please go through the Certification given below.
      </p>

      <div className="flex justify-end items-center mb-8 ">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>

        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      <div className="overflow-hidden ">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out "
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
            width: `${cardsToShow * 100}%`, // Adjust the width dynamically
          }}
        >
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="flex-shrink-0 max-w-full sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] border shadow-lg rounded px-6 sm:px-8 py-8 sm:py-12 text-start  hover:bg-gray-800 "
              style={{ flex: `0 0 ${100 / cardsToShow}%` }}
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-xl text-gray-200 font-medium">
                  {project.title}
                </h2>
                <img
                  className="w-13 h-13 mr-auto mb-4"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="flex flex-row justify-center items-center gap-4 mt-2">
                <p className="text-gray-300">Certificate Link:</p>
                <a href={project.src} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.links_img}
                    alt="Project Link"
                    className="w-8 h-8 bg-transparent"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
