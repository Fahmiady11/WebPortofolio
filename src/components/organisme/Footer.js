import React from 'react';
import SosmedFooter from '../molecules/SosmedFooter';
import github from '../../assets/image/githab.svg';
import github2 from '../../assets/image/githab-1.svg';
import linkedin from '../../assets/image/linkedinput.svg';
import linkedin2 from '../../assets/image/linkedin.svg';
import instagram from '../../assets/image/instagram.svg';
import instagram2 from '../../assets/image/instagram-1.svg';
import NextBack from '../molecules/NextBack';
import useThemeStore from '../../store/ThemeStore';
export default function Footer(props) {
  const { nextStatus, prevStatus, nextPath, prevPath, no, name } = props;
  const mode = useThemeStore((state) => state.mode);
  return (
    <>
      <div
        className={`flex flex-row justify-between w-full items-center py-3 px-4 sm:px-12 fixed bottom-0 bg-white ${
          mode === 'light'
            ? 'bg-white text-gray-900'
            : 'bg-slate-900 text-white'
        }`}
      >
        <p className="font-nunito hidden md:flex">
          Muhammad Fahmi ady susilo © 2022
        </p>
        <NextBack
          nextStatus={nextStatus}
          prevStatus={prevStatus}
          nextPath={nextPath}
          prevPath={prevPath}
          no={no}
          name={name}
        />
        <div className="flex-row items-center justify-center gap-3 hidden md:flex">
          <SosmedFooter
            image1={linkedin}
            image2={linkedin2}
            link="https://www.linkedin.com/in/muhammad-fahmi-ady-susilo-ba05a41b0/"
          />
          <SosmedFooter
            image1={github}
            image2={github2}
            link="https://github.com/Fahmiady11"
          />
          <SosmedFooter
            image1={instagram}
            image2={instagram2}
            link="https://www.instagram.com/fahmiady_11/"
          />
        </div>
      </div>
    </>
  );
}
