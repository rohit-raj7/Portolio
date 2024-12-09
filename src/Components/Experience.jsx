// import React from 'react';
// import { ExperienceData } from '../assets/assets';
// import '../style/Experience.css';
// import { motion } from "framer-motion";

// const Experience = () => {
//   return (
//     <div className="containers-all relative w-full mx-auto justify-end py-20 md:justify-start">
//       <h1 id='Experience' className="text-2xl sm:text-4xl font-bold mb-4 text-center mb-9">
//       Experience
//       </h1>
//       {/* Experience Items */}
//       {ExperienceData.map((item, index) => (
//         <motion.div
//           key={item.title}
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           viewport={{ once: false, amount: 0.5 }}
//           transition={{ duration: 0.75, delay: index * 0.1 }}
//           className="containers right-containers relative w-full max-w-lg p-4"
//         >
//           <img
//             src={item.image}
//             alt={item.company}
//           //   className="absolute w-13 h-13 max-w-[50px] max-h-[50px] rounded-full right-[-20px] top-[32px] z-10"
//           // />
//           className="absolute w-20 h-20 max-w-[80px] max-h-[80px] rounded-full right-[-20px] top-[32px] z-10"
// />
//           <div className="text-box p-5 rounded-md text-base w-full text-white">
//             <h2 className="font-semibold text-xl font-medium">{item.company}</h2>
//             <p className='font-medium text-gray-200'>{item.position}</p>
//             <small className="block mb-3 font-medium">{item.date}</small>
//             <p className='font-medium text-gray-300'>{item.description}</p>
//             <span className="right-containers-arrow absolute top-[28px] right-[-15px] border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white"></span>
//           </div>
//         </motion.div>
//       ))}
//       <div className="timeline-line absolute top-0 right-0 transform translate-x-1/2 w-[1px] bg-white z-[-1]"></div>
//     </div>
//   );
// };

// export default Experience;


// import React from "react";
// import { motion } from "framer-motion"; // Import motion from framer-motion

// const timelineData = [
//   {
//     year: "2024",
//     title: "Salesforce",
//     position: "Virtual Internship",
//     description:
//       "The Salesforce virtual internship offers hands-on experience in CRM development, Trailhead learning, and Superbadges, enhancing technical and problem-solving skills.",
//     color: "#41516C",
//   },
//   {
//     year: "2024",
//     title: "Upcoming",
//     position: "XYZ",
//     description:
//       "Developed scalable web solutions for millions of users worldwide. Developed scalable web solutions for millions of users worldwide. Developed scalable web solutions for millions of users worldwide.",
//     color: "#FBCA3E",
//   },
//   {
//     year: "2012",
//     title: "Upcoming",
//     position: "XYZ",
//     description:
//       "Developed scalable web solutions for millions of users worldwide. Developed scalable web solutions for millions of users worldwide. Developed scalable web solutions for millions of users worldwide.",
//     color: "#E24A68",
//   },
// ];

// const Timeline = () => {
//   return (
//     <div className="relative w-full mx-auto py-20 bg-gray-900 text-gray-100">
//       <h1
//         id="Experience"
//         className="text-3xl sm:text-5xl font-extrabold text-center mb-12 tracking-wide"
//       >
//         Experience
//       </h1>
//       <ul className="relative grid gap-12 sm:gap-20 max-w-5xl mx-auto px-4 sm:px-8 before:absolute before:top-0 before:bottom-0 before:left-4 sm:before:left-10 before:w-1 before:bg-gray-700">
//         {timelineData.map((item, index) => (
//           <motion.li
//             key={index}
//             className={`relative flex flex-col items-start gap-6 pl-8 pr-4 sm:pl-14 sm:pr-8`}
//             initial={{ scale: 0.9, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             viewport={{ once: false, amount: 0.5 }}
//             transition={{ duration: 0.75, delay: index * 0.1 }}
//           >
//             <div className="flex items-center gap-4">
//               <span
//                 className="block w-4 h-4 sm:w-6 sm:h-6 bg-[var(--accent-color)] border border-gray-400"
//                 style={{ "--accent-color": item.color }}
//               ></span>
//               <h2 className="text-lg sm:text-xl font-bold text-white">{item.title}</h2>
//             </div>
//             <div className="flex flex-col gap-4 sm:gap-6">
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-lg font-semibold">
//                 <span className="text-gray-200">{item.position}</span>
//                 <span className="text-gray-400 mt-1 sm:mt-0">{item.year}</span>
//               </div>
//               <p className="text-gray-300 leading-relaxed pl-4 sm:pl-6">{item.description}</p>
//             </div>
//           </motion.li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Timeline;




// import React from "react";
// import { motion } from "framer-motion"; // Import motion from framer-motion

// const timelineData = [
//   {
//     year: "2024",
//     title: "Salesforce",
//     position: "Virtual Internship",
//     description:
//       "The Salesforce virtual internship offers hands-on experience in CRM development, Trailhead learning, and Superbadges, enhancing technical and problem-solving skills.",
//     color: "#41516C",
//   },
//   {
//     year: "2024",
//     title: "Upcoming",
//     position: "XYZ",
//     description:
//       "Developed scalable web solutions for millions of users worldwide. Developed scalable web solutions for millions of users worldwide. Developed scalable web solutions for millions of users worldwide.",
//     color: "#FBCA3E",
//   },
//   {
//     year: "2012",
//     title: "Upcoming",
//     position: "XYZ",
//     description:
//       "Developed scalable web solutions for millions of users worldwide. Developed scalable web solutions for millions of users worldwide. Developed scalable web solutions for millions of users worldwide.",
//     color: "#E24A68",
//   },
// ];

// const Timeline = () => {
//   return (
//     <div className="relative w-full mx-auto py-20 bg-gray-900 text-gray-100">
//       <h1
//         id="Experience"
//         className="text-3xl sm:text-5xl font-extrabold text-center mb-12 tracking-wide"
//       >
//         Experience
//       </h1>
//       <ul className="relative grid gap-12 sm:gap-20 max-w-5xl mx-auto px-4 sm:px-8 before:absolute before:top-0 before:bottom-0 before:left-4 sm:before:left-10 before:w-[1px] before:bg-gray-700">
//         {timelineData.map((item, index) => (
//           <motion.li
//             key={index}
//             className={`relative flex flex-col items-start gap-6 pl-8 pr-4 sm:pl-14 sm:pr-8`}
//             initial={{ scale: 0.9, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             viewport={{ once: false, amount: 0.5 }}
//             transition={{ duration: 0.75, delay: index * 0.1 }}
//           >
//             <div className="flex items-center gap-4">
//               <span
//                 className="block w-4 h-4 sm:w-6 sm:h-6 bg-[var(--accent-color)] border border-gray-700"
//                 style={{ "--accent-color": item.color }}
//               ></span>
//               <h2 className="text-lg sm:text-xl font-bold text-white">{item.title}</h2>
//             </div>
//             <div className="flex flex-col gap-4 sm:gap-6">
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-lg font-semibold">
//                 <span className="text-gray-200">{item.position}</span>
//                 <span className="text-gray-400 mt-1 sm:mt-0">{item.year}</span>
//               </div>
//               <p className="text-gray-300 leading-relaxed pl-4 sm:pl-6">{item.description}</p>
//             </div>
//           </motion.li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Timeline;




import React from "react";
import { motion } from "framer-motion"; 

import { ExperienceData } from '../assets/assets';


const Timeline = () => {
  return (
    <div className="relative w-full mx-auto py-20 bg-gray-900 text-gray-100">
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
                className="block w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover" // Increased size here
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
