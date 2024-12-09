
import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Project from './Components/Project';
import Certification from './Components/Certification';
import Contact from './Components/Contact';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Footer from './Components/Footer';
import Education from './Components/Education';
import Skills from './Components/Skills';

import Experience from './Components/Experience';


function App() {
  return (
    <div className="w-full overflow-hidden">
  
      <ToastContainer/>
      <Header />
      <About />
      <Education/>
      <div className="flex flex-col justify-around gap-8 md:flex-row ">
        <Skills />
     <Experience />
   </div>

      <Project/>
      <Certification/>
      
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
