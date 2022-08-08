import React from 'react';
import useThemeStore from '../../store/ThemeStore';
export default function Sosmed(props) {
  const mode = useThemeStore((state) => state.mode);
  return (
    <>
      <a href={props.link}>
        <div
          className={`${
            mode === 'light'
              ? 'bg-blue-500/30 hover:bg-blue-500/40'
              : 'bg-white/5 hover:bg-white/10'
          } backdrop-blur-sm rounded-md cursor-pointer shadow-md p-2 `}
        >
          <img
            src={mode === 'light' ? props.image2 : props.image1}
            alt="github"
            className='w-4 md:w-6'
          />
        </div>
      </a>
    </>
  );
}
