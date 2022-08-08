import React from 'react';
import TitlePage from '../components/atoms/TitlePage';
import CardContact from '../components/molecules/CardContact';
import Footer from '../components/organisme/Footer';
import Navbar from '../components/organisme/Navbar';
import useThemeStore from '../store/ThemeStore';
import instagram from '../assets/instagram.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import google from '../assets/google.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

export default function Contact() {
  const mode = useThemeStore((state) => state.mode);
  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden">
        <Helmet>
          <title>Contact</title>
        </Helmet>
        <Navbar />
        <div className="flex justify-start md:justify-between items-center flex-col md:flex-row  px-10 h-full md:h-4/5 mt-10 mb-36 md:mb-0">
          <div className="flex justify-center items-center flex-col w-1/2 animate__animated animate__backInLeft animate__slow">
            <TitlePage title="Contact Me" />
            <div className="flex flex-row items-center gap-2 font-poppins text-sm md:text-lg">
              <hr
                className={`w-[70px] md:w-[120px] border-2 rounded-md font ${
                  mode === 'light' ? 'border-black' : 'border-white'
                }`}
              />
              Page
            </div>
          </div>
          <div className="md:w-1/2 w-11/12 mt-7 md:mt-0 h-2/3 flex items-start md:items-center justify-center">
            <div className="flex md:flex-row flex-col gap-4 md:flex-wrap justify-center items-center">
              <CardContact
                image={google}
                order="Copy"
                name="Email"
                account="asfahmi5@gmail.com"
                textColor="text-red-500"
                bg="bg-red-500"
                toast={toast}
              />
              <CardContact
                image={github}
                order="Link"
                name="Github"
                account="fahmiady11"
                textColor="text-blue-500"
                bg="bg-blue-500"
                link="https://github.com/Fahmiady11"
              />
              <CardContact
                image={linkedin}
                order="Link"
                name="Linkedin"
                account="Muhammad Fahmi A.S"
                textColor="text-yellow-500"
                bg="bg-yellow-500"
                link="https://www.linkedin.com/in/muhammad-fahmi-ady-susilo-ba05a41b0/"
              />
              <CardContact
                image={instagram}
                order="Link"
                name="Instagram"
                account="Fahmiady_11"
                textColor="text-green-500"
                bg="bg-green-500"
                link="https://www.instagram.com/fahmiady_11/"
              />
            </div>
          </div>
          <ToastContainer theme={mode === 'light' ? 'colored' : 'dark'} />
        </div>
        <Footer
          nextStatus={false}
          prevStatus={true}
          nextPath="/contact"
          prevPath="/project"
          no="06"
          name="Contact"
        />
      </div>
    </>
  );
}
