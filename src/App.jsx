
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

// Define Rlogo component outside of App
const Rlogo = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 100 100"
        width="100"
        height="100"
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
  );
};

function App() {
  // State to control the display of Rlogo
  const [showRlogo, setShowRlogo] = useState(true);

  // Effect to hide Rlogo after 1 second
  useEffect(() => {
    // Check if the Rlogo has been shown in this session
    const logoShown = sessionStorage.getItem('RlogoShown');
    
    if (!logoShown) {
      // If the logo hasn't been shown, set a timer to hide it after 1 second
      const timer = setTimeout(() => {
        setShowRlogo(false); // Hide Rlogo after 1 second
        sessionStorage.setItem('RlogoShown', 'true'); // Set flag in sessionStorage to persist during reload
      }, 1000);

      // Clean up the timer when the component unmounts
      return () => clearTimeout(timer);
    } else {
      // If the logo was already shown, hide it immediately
      setShowRlogo(false);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Show Rlogo only when showRlogo is true */}
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

