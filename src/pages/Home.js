import React from 'react';
import Navbar from '../components/organisme/Navbar';
import fotoUtama from '../assets/image/fotoutama.jpeg';
import github from '../assets/image/githab.svg';
import github2 from '../assets/image/githab-1.svg';
import linkedin from '../assets/image/linkedinput.svg';
import linkedin2 from '../assets/image/linkedin.svg';
import instagram from '../assets/image/instagram.svg';
import instagram2 from '../assets/image/instagram-1.svg';
import useThemeStore from '../store/ThemeStore';
import cv from '../assets/cv.pdf';
import Typed from 'react-typed';
import { Helmet } from 'react-helmet';
import {
  LocationMarkerIcon,
  PhoneIcon,
  AtSymbolIcon,
  DownloadIcon,
} from '@heroicons/react/solid';
import Sosmed from '../components/molecules/Sosmed';
import Footer from '../components/organisme/Footer';
export default function Home() {
  const mode = useThemeStore((state) => state.mode);
  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Navbar />
        <div className="flex gap-10 flex-col-reverse mt-10 md:mt-10 mb-28 sm:mb-0 items-center justify-end md:justify-around md:flex-row md:px-10 h-full md:h-4/5">
          <div className="animate__animated animate__backInLeft animate__slow flex flex-col items-center gap-3 md:gap-5 md:items-start ">
            <p className="font-nunito px-3 py-2 h-10 w-36 tracking-wider text-white bg-green-800 text-center rounded-tr-full rounded-br-full rounded-tl-full">
              <Typed
                loop
                typeSpeed={90}
                backSpeed={90}
                strings={["Hello I'am"]}
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
            <div className="flex items-center justify-center flex-col md:items-start gap-2">
              <p className="font-nunito font-bold text-2xl tracking-wider md:text-5xl text-center sm:text-left px-4 sm:px-0">
                Muhammad Fahmi Ady Susilo👋
              </p>
              <p
                className={`font-nunito font-semibold text-md md:text-4xl ${
                  mode === 'light' ? 'text-orange-600' : ' text-[#12F3D8]'
                }`}
              >
                Front End Engginering
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <LocationMarkerIcon
                  className={`h-5 w-5 md:w-7 md:h-7 ${
                    mode === 'light' ? 'text-orange-600' : ' text-[#12F3D8]'
                  } `}
                />
                <p className="text-sm font-quicksand font-semibold md:text-base">
                  Lamongan,Indonesia
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <PhoneIcon
                  className={`h-5 w-5 md:w-7 md:h-7 ${
                    mode === 'light' ? 'text-orange-600' : ' text-[#12F3D8]'
                  }`}
                />
                <p className="text-sm font-quicksand font-semibold md:text-base">
                  +62 851-5774-3801
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <AtSymbolIcon
                  className={`h-5 w-5 md:w-7 md:h-7 ${
                    mode === 'light' ? 'text-orange-600' : ' text-[#12F3D8]'
                  }`}
                />
                <p className="text-sm font-quicksand font-semibold md:text-base">
                  asfahmi5@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
              <Sosmed
                image1={linkedin}
                image2={linkedin2}
                link="https://www.linkedin.com/in/muhammad-fahmi-ady-susilo-ba05a41b0/"
              />
              <Sosmed
                image1={github}
                image2={github2}
                link="https://github.com/Fahmiady11"
              />
              <Sosmed
                image1={instagram}
                image2={instagram2}
                link="https://www.instagram.com/fahmiady_11/"
              />
            </div>
            <a href={cv} download>
              <button className="flex gap-2 hover:text-red-600">
                <DownloadIcon className="h-5 w-5 md:w-7 md:h-7" />
                <p>Download CV</p>
              </button>
            </a>
          </div>
          <div className="animate__animated animate__flipInY animate__slow max-w-xs md:max-w-md p-5  bg-blue-800/10 rounded-full backdrop-blur-2xl rotate-0 hover:origin-center hover:-rotate-180 transition duration-500 ease-in-out ">
            <div className="w-full p-5 bg-blue-800/10 rounded-full backdrop-blur-2xl">
              <img
                className="rounded-full w-full"
                src={fotoUtama}
                alt="fotoUtama"
              />
            </div>
          </div>
        </div>
        <Footer
          nextStatus={true}
          prevStatus={false}
          prevPath="/"
          nextPath="/about"
          no="01"
          name="Home"
        />
      </div>
    </>
  );
}
