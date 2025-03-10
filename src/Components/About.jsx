
import React from 'react';

function About() {
  return (
    <div
      id="About"
      className="flex flex-col items-center justify-center container mx-auto p-6 sm:p-14 md:px-20 lg:px-32 w-full"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 underline">
        About
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start mt-10 text-white w-full">

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-6 md:gap-10 w-full md:w-1/2 md:pr-16 border-b-2 md:border-b-0 md:border-r-2 border-gray-700 pb-8 md:pb-0">
          <div className="border-r-2 border-gray-600 pr-6">
            <p className="text-4xl font-medium">1+</p>
            <p className='text-gray-300'>Year of Experience</p>
          </div>
          <div className="border-r-2 border-gray-700 pr-6">
            <a href="#Project">
              <p className="text-4xl font-medium">4+</p>
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

        {/* About Description */}
        <div className="relative left-1 text-white p-4 md:p-4 rounded-lg w-full md:w-3/4 lg:w-1/2 mx-auto shadow-lg">
          <div className="absolute top-1 left-0 w-9 h-9 border-t-4 border-l-4  border-sky-400 "></div>
          <div className="absolute bottom-0 right-1 w-9 h-9 border-b-4 border-r-4 border-sky-400"></div>

          <p className="text-gray-300 text-[17px] md:text-xl">
            I’m <a className=" text-blue-300 cursor-pointer">Rohit Raj</a>, a B.Tech student in Computer Science and Engineering (IoT).
            Passionate about technology, I specialize in frontend development, problem-solving, and project building.
            With hands-on experience in programming, I strive to create impactful solutions that drive innovation and
            enhance user experiences in the evolving tech landscape.
          </p>
        </div>


      </div>
    </div>
  );
}

export default About;









// import React from 'react';
// import { motion } from 'framer-motion';
// import { assets } from '../assets/assets';
// import backgroundImage from '../Backgrond_Img/200w.webp';

// function About() {
//   return (
//     <div
//       id="About"
//       className="flex flex-col items-center justify-center container mx-auto p-6 sm:p-14 md:px-20 lg:px-32 w-full"
//     >
//       <h1 className="text-2xl sm:text-4xl font-bold mb-4 underline">
//         About{' '}
       
//       </h1>

//       <div className="flex flex-col items-center md:items-center mt-10 text-white">
//         <div className="grid grid-cols-2 gap-6 md:gap-10 w-full md:pr-28 border-b-2 border-gray-700 pb-8">
//           <div className="border-r-2 border-gray-600 pr-6">
//             <p className="text-4xl font-medium">1+</p>
//             <p className='text-gray-300'>Year of Experience</p>
//           </div>
//           <div className="border-r-2 border-gray-700 pr-6">
//             <a href="#Project">
//               <p className="text-4xl font-medium">4+</p>
//               <p className='text-gray-300'>Projects Completed</p>
//             </a>
//           </div>
//           <div className="border-r-2 border-gray-700 pr-6">
//             <a href="https://leetcode.com/u/rohit-raj7/">
//               <p className="text-4xl font-medium">300+</p>
//               <p className='text-gray-300'>Questions Solved on LeetCode</p>
//             </a>
//           </div>
//           <div>
//             <p className="text-4xl font-medium">2</p>
//             <p className='text-gray-300'>Ongoing Projects</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
