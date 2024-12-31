
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

// Define Rlogo component outside of App

  @keyframes border-draw {
    0% {
      stroke-dasharray: 0, 400;
    }
    100% {
      stroke-dasharray: 300, 0;
    }
  }
  
  .rounding-border {
    stroke-dasharray: 0, 400;
    animation: border-draw 2s linear forwards; /* Stops after one iteration */
  }
  

function App() {
  
  const [showRlogo, setShowRlogo] = useState(true);

  // Effect to hide Rlogo after 1 second
  useEffect(() => {
    // Check if the Rlogo has been shown in this session
    const logoShown = sessionStorage.getItem('RlogoShown');
    
    if (!logoShown) {
      const timer = setTimeout(() => {
        setShowRlogo(false); 
        sessionStorage.setItem('RlogoShown', 'true'); 
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      
      setShowRlogo(false);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">
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

