import React from 'react';
import useThemeStore from '../../store/ThemeStore';
export default function ImageSkill(props) {
  const mode = useThemeStore((state) => state.mode);
  const { src } = props;
  return (
    <>
      <div
        className={`p-5 rounded-xl hover:shadow-sm hover:border-2 animate__animated animate__jackInTheBox animate__slow ${
          mode === 'light' ? 'hover:bg-slate-100 hover:border-black/50' : 'hover:bg-slate-100/10 hover:border-white/50'
        }`}
      >
        <img className='h-16 drop-shadow-md' src={src} alt="" />
      </div>
    </>
  );
}
