import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Contact from './pages/Contact';
import useThemeStore from './store/ThemeStore';
import 'animate.css';
import Experience from './pages/Experince';
function App() {
  const theme = useThemeStore((state) => state.mode);
  return (
    <>
      <div
        className={`${
          theme === 'light'
            ? 'bg-white text-gray-900'
            : 'bg-slate-900 text-white'
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
