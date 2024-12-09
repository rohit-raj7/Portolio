import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import backgroundImage from '../Backgrond_Img/200w.webp';

function About() {
  return (
    <div
      id="About"
      className="flex flex-col items-center justify-center container mx-auto p-6 sm:p-14 md:px-20 lg:px-32 w-full"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-4">
        About{' '}
        <span className="underline underline-offset-4 decoration-2 font-light">
          Our Brand
        </span>
      </h1>
      
<div className="flex flex-col items-center md:items-center mt-10 text-white">
        <div className="grid grid-cols-2 gap-6 md:gap-10 w-full pr-28 border-b-2 border-gray-700 pb-8">
          <div className="border-r-2 border-gray-600 pr-6">
            <p className="text-4xl font-medium ">1+</p>
            <p className='text-gray-300'>Year of Experience</p>
          </div>
          <div className="border-r-2 border-gray-700 pr-6">
            <a href="#Project"><p className="text-4xl font-medium">4+</p>
            <p className='text-gray-300'>Projects Completed</p>
            </a>
          </div>
          <div className="border-r-2 border-gray-700 pr-6">
            <a href="https://leetcode.com/u/rohit-raj7/">
            <p className="text-4xl font-medium">300+</p>
            <p className='text-gray-300'>Questions Solved on LeetCode</p>
            </a>
          </div>
          <div>
            <p className="text-4xl font-medium">2</p>
            <p className='text-gray-300'>Ongoing Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
