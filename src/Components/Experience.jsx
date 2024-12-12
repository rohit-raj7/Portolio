
import React from "react";
import { motion } from "framer-motion"; 

import { ExperienceData } from '../assets/assets';


const Timeline = () => {
  return (
    <div className="relative w-2/3 mx-auto py-20 bg-gray-900 text-gray-100">
      <h1
        id="Experience"
        className="text-3xl sm:text-5xl font-extrabold text-center mb-12 tracking-wide"
      >
        Experience
      </h1>
      <ul className="relative grid gap-12 sm:gap-20 max-w-5xl mx-auto px-4 sm:px-8 before:absolute before:top-0 before:bottom-0 before:left-4 sm:before:left-10 before:w-[1px] before:bg-gray-700">
        {ExperienceData.map((item, index) => (
          <motion.li
            key={index}
            className={`relative flex flex-col items-start gap-6 pl-8 pr-4 sm:pl-14 sm:pr-8`}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.75, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.title}
                className="block w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover" 
              />
              <h2 className="text-lg sm:text-xl font-bold text-white">{item.title}</h2>
              <a href={item.link_src}>
                <img className="w-5 h-5" src={item.link} alt="" />
                 </a>

            </div>
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-lg font-semibold">
                <span className="text-gray-200">{item.position}</span>
                <span className="text-gray-400 mt-1 sm:mt-0">{item.year}</span>
              </div>
              <p className="text-gray-300 leading-relaxed pl-4 sm:pl-6">{item.description}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
