
import React from 'react';
import Navbar from './Navbar';
import { LayoutGroup, motion } from "framer-motion";
import Social from './Social';
import { assets } from "../assets/assets";
import Logo from './Logo';

function Header() {
  return (
    <div
      id="Header"
      className="ml-4  min-h-screen flex flex-col md:flex-row justify-between items-center w-full pt-12 overflow-hidden relative"
    >
      <Navbar />

      <motion.div
        
        
        className="flex flex-col items-start text-left px-12 py-8 lg:w-1/2"
      >
        <h2 className="text-4xl sm:text-5xl md:text-[80px] font-semibold">
          Hey there, It's <span className="animated-text">Rohit Raj</span>
        </h2>
        <div className="space-x-6 mt-8">
          <a href="#Project" className="border border-white px-8 py-3 rounded ">
                     Projects
          </a>
          <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded">
            Contact Us
          </a>
        </div>
        <div className="mt-8">
          <Social />
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.75, delay: 0.1 }}
        className="relative flex-1 flex justify-center items-center mt-4"
      >
       <img
  src={assets.main_img}
  alt="Header"
  className="w-13 h-13 object-cover max-w-[500px] max-h-[500px] rounded-md"
/>

      </motion.div>
      <div className='invisible'> <Logo/></div>
    </div>
  );
}

export default Header;
