import React from 'react';
import TitlePage from '../components/atoms/TitlePage';
import Footer from '../components/organisme/Footer';
import Navbar from '../components/organisme/Navbar';
import useThemeStore from '../store/ThemeStore';
import { Helmet } from 'react-helmet';
import ListExperience from '../components/molecules/ListExperience';
export default function Experience() {
  const mode = useThemeStore((state) => state.mode);
  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden">
        <Helmet>
          <title>Experience</title>
        </Helmet>
        <Navbar />
        <div className="flex justify-start md:justify-between items-center flex-col md:flex-row  px-10 h-full md:h-4/5 mt-10">
          <div className="flex justify-center items-center flex-col w-1/2 animate__animated animate__backInLeft animate__slow">
            <TitlePage title="Experience" />
            <div className="flex flex-row items-center gap-2 font-poppins text-sm md:text-lg">
              <hr
                className={`w-[70px] md:w-[115px] border-2 rounded-md font ${
                  mode === 'light' ? 'border-black' : 'border-white'
                }`}
              />
              Page
            </div>
          </div>
          <div className="md:w-1/2 w-11/12 mt-7 md:mt-0 h-2/3 overflow-y-auto px-4 animate__animated animate__fadeIn animate__slow">
            <ListExperience/>
          </div>
        </div>
        <Footer
          nextStatus={true}
          prevStatus={true}
          prevPath="/skill"
          nextPath="/project"
          no="04"
          name="Experience"
        />
      </div>
    </>
  );
}
