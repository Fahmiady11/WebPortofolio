import React from 'react';
import useThemeStore from '../../store/ThemeStore';
import { ZoomInIcon } from '@heroicons/react/solid';
import style from '../../assets/css/overlayImage.module.css';

export default function ImageCertif(props) {
  const mode = useThemeStore((state) => state.mode);
  const { img, openLight, no } = props;
  return (
    <>
      <div className={`md:w-1/4 relative ${style.photoImage}`}>
        <img
          className={`border-2 rounded-xl shadow-md cursor-pointer ${
            mode === 'light' ? 'border-black' : 'border-white'
          }`}
          src={img}
          alt="certif"
          loading="lazy"
        />
        <div
          onClick={() => openLight(no)}
          className={`bg-white/30 cursor-pointer border-2 backdrop-blur-sm w-full h-full absolute rounded-xl top-0 left-0 flex items-center justify-center ${
            style.overlay
          } ${mode === 'light' ? 'border-black' : 'border-white'}`}
        >
          <ZoomInIcon className="h-10 w-10 md:h-5 md:w-5 text-black/70" />
        </div>
      </div>
    </>
  );
}
