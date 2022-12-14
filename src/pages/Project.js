import React from 'react';
import Footer from '../components/organisme/Footer';
import Navbar from '../components/organisme/Navbar';
import TitlePage from '../components/atoms/TitlePage';
import useThemeStore from '../store/ThemeStore';
import ProjectMe from '../components/molecules/ProjectMe';
import { Helmet } from 'react-helmet';
export default function Project() {
  const mode = useThemeStore((state) => state.mode);

  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden">
        <Helmet>
          <title>Project</title>
        </Helmet>
        <Navbar />
        <div className="flex justify-start md:justify-between items-center flex-col md:flex-row  px-10 h-full md:h-4/5 mt-10">
          <div className="flex justify-center items-center flex-col w-1/2 animate__animated animate__backInLeft animate__slow">
            <TitlePage title="Project Me" />
            <div className="flex flex-row items-center gap-2 font-poppins text-sm md:text-lg">
              <hr
                className={`w-[60px] md:w-[105px] border-2 rounded-md font ${
                  mode === 'light' ? 'border-black' : 'border-white'
                }`}
              />
              Page
            </div>
          </div>
          <div className="flex md:w-1/2 w-11/12  justify-center mt-7 md:mt-0 items-center h-2/3 animate__animated animate__fadeIn animate__slow">
            <ProjectMe />
          </div>
        </div>
        <Footer
          nextStatus={true}
          prevStatus={true}
          prevPath="/experience"
          nextPath="/contact"
          no="05"
          name="Project"
        />
      </div>
    </>
  );
}
