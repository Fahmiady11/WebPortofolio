import React from 'react';
import Description from '../components/atoms/Description';
import TitlePage from '../components/atoms/TitlePage';
import Certificate from '../components/molecules/Certificate';
import Footer from '../components/organisme/Footer';
import Navbar from '../components/organisme/Navbar';
import useThemeStore from '../store/ThemeStore';

export default function About() {
  const mode = useThemeStore((state) => state.mode);
  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden">
        <Navbar />
        <div className="flex justify-start md:justify-between items-center flex-col md:flex-row  px-10 h-full md:h-4/5 mt-10">
          <div className="flex justify-center items-center flex-col w-1/2 animate__animated animate__backInLeft animate__slow">
            <TitlePage title="About Me" />
            <div className="flex flex-row items-center gap-2 font-poppins text-sm md:text-lg">
              <hr
                className={`w-[49px] md:w-[90px] border-2 rounded-md font ${
                  mode === 'light' ? 'border-black' : 'border-white'
                }`}
              />
              Page
            </div>
          </div>
          <div className="md:w-1/2 w-11/12 mt-7 md:mt-0 animate__animated animate__fadeIn animate__slow">
            <Description decs="I am an Informatics Engineering student who focuses on web programming, especially on the front end, in web programming I have skills in HTML, CSS, Bootstarp, Tailwind, Javascript, React, NextJs and others which can be seen on the next page." />
            <div className="mt-7">
              <div className="flex flex-row items-center gap-2 font-poppins">
                <hr
                  className={`w-[49px] border-2 rounded-md font ${
                    mode === 'light' ? 'border-black' : 'border-white'
                  }`}
                />
                Certificate
              </div>
              <div className="h-72 overflow-y-auto mt-5">
                <Certificate />
              </div>
            </div>
          </div>
        </div>
        <Footer
          nextStatus={true}
          prevStatus={true}
          prevPath="/"
          nextPath="/skill"
          no="02"
          name="About"
        />
      </div>
    </>
  );
}
