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

      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.75, delay: 0.1 }}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          height: '100%',
          width: '100%',
        }}
        className="container mx-auto py-10 lg:px-32 w-full overflow-hidden px-6 sm:px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card"
      >
        <div className="flex flex-col sm:flex-row w-full gap-8 items-center justify-center">
          <div className="relative flex-basis-40 w-full">
            <img
              src={assets.rohit_img}
              className="w-full rounded-lg"
              alt="Rohit"
            />
          </div>
          <div className="flex-basis-56 w-full text-center sm:text-left">
            <h3 className="font-semibold text-lg text-gray-300">About me</h3>
            <h2 className="text-2xl font-medium text-blue-900 my-2 max-w-xs">
              {/* Add your subtitle here */}
            </h2>
            <p className="text-gray-200 text-lg sm:text-xl mb-4 bg-gray-800 p-4 rounded">
              I’m Rohit Raj, a B.Tech student in Computer Science and
              Engineering, specializing in IoT. I have hands-on experience in
              programming and project development. My passion lies in using
              technology to solve complex problems, foster collaboration, and
              create impactful solutions that contribute to the ever-evolving
              tech landscape.
            </p>
          </div>
        </div>
      </motion.div>
      

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
