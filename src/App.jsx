
// import React from 'react';
// import Header from './Components/Header';
// import About from './Components/About';
// import Project from './Components/Project';
// import Certification from './Components/Certification';
// import Contact from './Components/Contact';
// import {ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
// import Footer from './Components/Footer';
// import Education from './Components/Education';
// import Skills from './Components/Skills';

// import Experience from './Components/Experience';


// function App() {
//   return (
//     <div className="w-full overflow-hidden">
  
//       <ToastContainer/>
//       <Header />
//       <About />
//       <Education/>
//       <div className="flex flex-col justify-around gap-8 md:flex-row ">
//         <Skills />
//      <Experience />
//    </div>

//       <Project/>
//       <Certification/>
      
//       <Contact/>
//       <Footer/>
      
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Project from './Components/Project';
import Certification from './Components/Certification';
import Contact from './Components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import './style/Logo.css';

const Rlogo = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 100 100"
          className="w-24 h-24 sm:w-38 sm:h-38 lg:w-44 lg:h-44"
          aria-label="Hexagon with R"
        >
          {/* Hexagon */}
          <polygon
            points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
            fill="none"
            stroke="#00FFFF"
            strokeWidth="6"
            className="rounding-border"
          />
          {/* Letter R */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            fill="#00FFFF"
            fontSize="45px"
            fontFamily="Consolas, monospace"
            dominantBaseline="middle"
            fontWeight="bold"
          >
            R
          </text>
        </svg>
      </div>
    </div>
  );
};

function App() {
  const [showRlogo, setShowRlogo] = useState(true);

  useEffect(() => {
    const logoShown = sessionStorage.getItem('RlogoShown');

    if (!logoShown) {
      const timer = setTimeout(() => {
        setShowRlogo(false); // Hide Rlogo after 2 seconds
        sessionStorage.setItem('RlogoShown', 'true'); // Persist in session
      }, 2000);

      // Cleanup
      return () => clearTimeout(timer);
    } else {
      setShowRlogo(false);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Display Rlogo only when showRlogo is true */}
      {showRlogo ? <Rlogo /> : null}

      <ToastContainer />
      <Header />
      <About />
      <Education />
      <div className="flex flex-col justify-around gap-8 md:flex-row">
        <Skills />
        <Experience />
      </div>
      <Project />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

