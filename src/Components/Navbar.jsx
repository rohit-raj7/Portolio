import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to fix the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div
      className={`w-full z-10 ${isScrolled ? "fixed top-0 left-0 bg-gray-800 shadow-md" : "absolute top-0 left-0"} transition-all`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <div className="flex items-center space-x-2">
          <img src={assets.logo} alt="Logo" className="h-10 w-10" />
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex gap-7 text-lg text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
          <div className="relative group">
            <a className="cursor-pointer hover:text-gray-400">About</a>
            <ul className="absolute hidden group-hover:flex flex-col gap-2 bg-gray-800 p-4 rounded mt-2 shadow-lg">
              <a href="#About" className="hover:text-white">Introduction</a>
              <a href="#Education" className="hover:text-white">Education</a>
              <a href="#Skills" className="hover:text-white">Skills</a>
              <a href="#Certification" className="hover:text-white">Certifications</a>
            </ul>
          </div>
          <a href="#Project" className="cursor-pointer hover:text-gray-400">Projects</a>
          <a href="#Experience" className="cursor-pointer hover:text-gray-400">Experience</a>
        </ul>

        {/* Mobile Menu Trigger */}
        <div className="cursor-pointer">
          <p onClick={() => setShowMobileMenu(true)} className="md:hidden w-14 h-14 text-4xl mr-2 text-white rounded-full cursor-pointer">&#8801;</p>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <>
          <div
            className="fixed inset-0 bg-opacity-50 z-20"
            onClick={() => setShowMobileMenu(false)}
          />
          <div className="fixed top-0 right-0 w-30 h-screen bg-gray-800 z-30">
            <div className="flex justify-end p-6 cursor-pointer">
              <p
                onClick={() => setShowMobileMenu(false)}
                className="md:hidden w-12 h-12 text-2xl text-white rounded-full"
              >
                &#10005;
              </p>
            </div>
            <ul className="flex flex-col items-start gap-2 mt-5 px-5 text-lg font-medium">
              <a href="#Header" className="px-4 py-2 rounded-full inline-block">Home</a>
              <div className="relative">
                <a
                  className="px-4 py-2 rounded-full inline-block cursor-pointer"
                  onClick={() => setShowAboutMenu(!showAboutMenu)}
                >
                  About
                </a>
                {showAboutMenu && (
                  <ul className="flex flex-col gap-4 bg-gray-800 p-4 rounded mt-2 shadow-lg w-full">
                    <a href="#About" className="hover:text-white">Introduction</a>
                    <a href="#Education" className="hover:text-white">Education</a>
                    <a href="#Skills" className="hover:text-white">Skills</a>
                    <a href="#Certification" className="hover:text-white">Certifications</a>
                  </ul>
                )}
              </div>
              <a href="#Project" className="px-4 py-2 rounded-full inline-block">Projects</a>
              <a href="#Experience" className="px-4 py-2 rounded-full inline-block">Experience</a>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;











// import React, { useEffect, useState } from 'react';
// import { assets } from '../assets/assets';

// function Navbar() {
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const [showAboutMenu, setShowAboutMenu] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Handle scroll to fix the navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
  
//   useEffect(() => {
//     if (showMobileMenu) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [showMobileMenu]);

//   return (
//     <div className={`w-full z-10 ${isScrolled ? "fixed top-0 left-0 bg-gray-800 shadow-md" : "absolute top-0 left-0"} transition-all`}>
//       <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
//         <div className="flex items-center space-x-2">
//           <img src={assets.logo} alt="Logo" className="h-10 w-10" />
//         </div>

//         <ul className="hidden md:flex gap-7 text-lg text-white">
//           <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
//           <div className="relative group">
//             <a  className="cursor-pointer hover:text-gray-400">About</a>
//             <ul className="absolute hidden group-hover:flex flex-col gap-2 bg-gray-800 p-4 rounded mt-2 shadow-lg">
//               <a href="#About" className="hover:text-white">Introduction</a>
//               <a href="#Education" className="hover:text-white">Education</a>
//               <a href="#Skills" className="hover:text-white">Skills</a>
//               <a href="#Certification" className="hover:text-white">Certifications</a>
//             </ul>
//           </div>
//           <a href="#Project" className="cursor-pointer hover:text-gray-400">Projects</a>
//           <a href="#Experience" className="cursor-pointer hover:text-gray-400">Experience</a>
//         </ul>

//         <div className="cursor-pointer">
//           <p onClick={() => setShowMobileMenu(true)} className="md:hidden w-14 h-14 text-4xl mr-2 text-white rounded-full cursor-pointer">&#8801;</p>
//         </div>
//       </div>

//       {showMobileMenu && (
//         <>
//           <div
//             className="fixed inset-0 bg-opacity-50 z-20"
//             onClick={() => setShowMobileMenu(false)}
//           />
//           <div className="fixed top-0 right-0 w-30 h-screen bg-gray-800 z-30">
//             <div className="flex justify-end p-6 cursor-pointer">
//               <p
//                 onClick={() => setShowMobileMenu(false)}
//                 className="md:hidden w-12 h-12 text-2xl text-white rounded-full"
//               >
//                 &#10005;
//               </p>
//             </div>
//             <ul className="flex flex-col items-start gap-2 mt-5 px-5 text-lg font-medium">
//               <a href="#Header" className="px-4 py-2 rounded-full inline-block">Home</a>
//               <div className="relative">
//                 <a
//                   className="px-4 py-2 rounded-full inline-block cursor-pointer"
//                   onClick={() => setShowAboutMenu(!showAboutMenu)}
//                 >
//                   About
//                 </a>
//                 {showAboutMenu && (
//                   <ul className="flex flex-col gap-4 bg-gray-800 p-4 rounded mt-2 shadow-lg w-full">
//                     <a href="#About" className="hover:text-white">Introduction</a>
//                     <a href="#Education" className="hover:text-white">Education</a>
//                     <a href="#Skills" className="hover:text-white">Skills</a>
//                     <a href="#Certification" className="hover:text-white">Certifications</a>
//                   </ul>
//                 )}
//               </div>
//               <a href="#Project" className="px-4 py-2 rounded-full inline-block">Projects</a>
//               <a href="#Experience" className="px-4 py-2 rounded-full inline-block">Experience</a>
//             </ul>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Navbar;
