import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Contact from './pages/Contact';
import useThemeStore from './store/ThemeStore';
import 'animate.css';
import Experience from './pages/Experince';
import Error from './pages/Error';
import React, { useState, useEffect } from 'react';
import wajah from './assets/wajah.svg';
import Typed from 'react-typed';
function App() {
  const theme = useThemeStore((state) => state.mode);
  const [isLoad, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`${
          theme === 'light'
            ? 'bg-white text-gray-900'
            : 'bg-slate-900 text-white'
        }`}
      >
        {isLoad ? (
          <div
            className={`${
              theme === 'light'
                ? 'bg-white text-[#332222]'
                : 'bg-slate-900 text-white'
            } absolute w-full h-full flex justify-center items-center`}
          >
            <div className="max-w-xs w-full h-auto flex justify-center items-center flex-col">
              <img src={wajah} alt="" className="w-1/2 drop-shadow-md" />
              <p className="font-poppins mt-3 font-bold text-lg">
                <Typed
                  loop
                  typeSpeed={70}
                  backSpeed={70}
                  strings={['Loading...']}
                  smartBackspace
                  shuffle={false}
                  backDelay={1}
                  fadeOut={false}
                  fadeOutDelay={200}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
              </p>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;
