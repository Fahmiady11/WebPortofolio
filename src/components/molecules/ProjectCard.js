import React, { useState } from 'react';
import useThemeStore from '../../store/ThemeStore';
import { LinkIcon } from '@heroicons/react/solid';
import FsLightbox from 'fslightbox-react';
import style from '../../assets/css/overlayImage.module.css';
import { ZoomInIcon } from '@heroicons/react/solid';

export default function ProjectCard(props) {
  const {
    image,
    title,
    decs,
    tag,
    isGithub,
    isWebsite,
    linkGithub,
    linkWebsite,
  } = props;
  const mode = useThemeStore((state) => state.mode);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }
  return (
    <>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={image}
        slide={lightboxController.slide}
      />
      <div
        className={`rounded-xl max-w-6xl w-full border-2 items-center backdrop-blur-sm justify-between shadow-md md:items-start p-4 gap-4 flex flex-col xl:flex-row ${
          mode === 'light' ? 'bg-gray-100 border-gray-200/80' : 'bg-white/5 border-white/10'
        }`}
      >
        <div
          className={`w-full xl:w-[25%] h-44 xl:h-36 relative ${style.photoImage}`}
        >
          <img
            src={image[0]}
            className={`w-full h-full object-cover border-2  rounded-xl shadow-md cursor-pointer object-top ${
              mode === 'light' ? 'border-slate-300' : 'border-white/30'
            }`}
            alt="imageProject"
          />
          <div
            onClick={() => openLightboxOnSlide(1)}
            className={`bg-white/30 cursor-pointer border-2 backdrop-blur-sm w-full h-full absolute rounded-xl top-0 left-0 flex items-center justify-center ${
              style.overlay
            } ${mode === 'light' ? 'border-slate-300' : 'border-white/30'}`}
          >
            <ZoomInIcon className="h-10 w-10 md:h-5 md:w-5 text-black/70" />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full xl:w-[75%]">
          <p
            className={`font-semibold font-poppins text-xl ${
              mode === 'light' ? 'text-orange-600' : ' text-[#12F3D8]'
            }`}
          >
            {title}
          </p>
          <p
            className={`font-normal font-poppins text-sm ${
              mode === 'light' ? 'text-black' : ' text-white'
            }`}
          >
            {decs}
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <div className="flex gap-2">
              {tag.map((item, index) => (
                <p
                  key={index}
                  className="py-1 px-3 shadow-md rounded-md bg-orange-500 text-white text-sm"
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="flex gap-2">
              {isGithub ? (
                <a href={linkGithub}>
                  <div className="flex flex-row gap-1 py-1 px-2 shadow-md rounded-md bg-[#12F3D8] text-black text-sm cursor-pointer hover:bg-[#0ddac2]">
                    <img
                      className="w-5"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt=""
                    />
                    <p className="truncate">Github</p>
                  </div>
                </a>
              ) : null}
              {isWebsite ? (
                <a href={linkWebsite}>
                  <div className="flex flex-row gap-1 py-1 px-2 shadow-md rounded-md bg-[#12F3D8] text-black text-sm cursor-pointer hover:bg-[#0ddac2]">
                    <LinkIcon className="w-5" />
                    <p className="truncate">Website</p>
                  </div>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
