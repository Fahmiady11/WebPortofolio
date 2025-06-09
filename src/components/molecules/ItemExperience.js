import React from 'react';
import useThemeStore from '../../store/ThemeStore';
import { ClipboardListIcon } from '@heroicons/react/solid';
export default function ItemExperience(props) {
  const { title, date, decs, latest } = props;
  const mode = useThemeStore((state) => state.mode);
  console.log(decs);
  return (
    <>
      <li className="mb-10 ml-6 ">
        <span
          className={`flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ${
            mode === 'light'
              ? 'ring-white bg-orange-600'
              : 'ring-slate-900 bg-[#12F3D8]'
          } `}
        >
          <ClipboardListIcon
            className={`h-4 w-4 ${
              mode === 'light' ? 'text-white' : 'text-slate-900'
            }`}
          />
        </span>
        <h3
          className={`flex items-center mb-1 text-lg font-semibold ${
            mode === 'light' ? 'ring-white' : 'ring-slate-900'
          }`}
        >
          {title}
          {latest ? (
            <span
              className={`text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3 ${
                mode === 'light' ? 'text-white bg-orange-600' : 'bg-[#12F3D8] text-gray-900'
              }`}
            >
              Latest
            </span>
          ) : null}
        </h3>
        <time
          className={`block mb-2 text-sm font-normal leading-none ${
            mode === 'light' ? 'text-gray-900/70' : 'text-white/50'
          }`}
        >
          {date}
        </time>
        <p
          className={`mb-4 text-base font-normal text-justify ${
            mode === 'light' ? 'text-gray-900' : 'text-white'
          }`}
        >
         <ul className='list-disc pl-5'>{decs}</ul>
        </p>
      </li>
    </>
  );
}
