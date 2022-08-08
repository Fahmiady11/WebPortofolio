import React from 'react';
import TitlePage from '../components/atoms/TitlePage';
import LogoSkill from '../components/molecules/LogoSkill';
import Footer from '../components/organisme/Footer';
import Navbar from '../components/organisme/Navbar';
import useThemeStore from '../store/ThemeStore';

export default function Skill() {
  const mode = useThemeStore((state) => state.mode);
  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden ">
        <Navbar />
        <div className="flex justify-start md:justify-between items-center flex-col md:flex-row  px-10 h-full md:h-4/5 mt-10">
          <div className="flex justify-center items-center flex-col w-1/2 animate__animated animate__backInLeft animate__slow">
            <TitlePage title="Skill Me" />
            <div className="flex flex-row items-center gap-2 font-poppins text-sm md:text-lg">
              <hr
                className={`w-[30px] md:w-[60px] border-2 rounded-md font ${
                  mode === 'light' ? 'border-black' : 'border-white'
                }`}
              />
              Page
            </div>
          </div>
          <div className="flex md:w-1/2 w-full justify-center mt-7 md:mt-0">
            <LogoSkill />
          </div>
        </div>
        <Footer
          nextStatus={true}
          prevStatus={true}
          prevPath="/about"
          nextPath="/experience"
          no="03"
          name="Skill"
        />
      </div>
    </>
  );
}
