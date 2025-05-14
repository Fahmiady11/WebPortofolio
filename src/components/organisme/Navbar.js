import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeMode from '../molecules/ThemeMode';
import useThemeStore from '../../store/ThemeStore';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

export default function Navbar() {
  const mode = useThemeStore((state) => state.mode);
  const [openNav, setOpenNav] = useState(false);
  let menu = [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'About',
      path: '/about',
    },
    {
      id: 3,
      name: 'Skill',
      path: '/skill',
    },
    {
      id: 4,
      name: 'Experience',
      path: '/experience',
    },
    {
      id: 5,
      name: 'Project',
      path: '/project',
    },
    {
      id: 6,
      name: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <>
      <div className={`flex justify-between items-center py-3 px-4 sm:px-12 shadow-lg sticky top-0 z-50 bg-white ${
          mode === 'light'
            ? 'bg-white text-gray-900'
            : 'bg-slate-900 text-white'
        }`}>
        <NavLink to="/">
          <p className="font-nunito font-bold text-xl tracking-wide">
            FahmiAdy🚀
          </p>
        </NavLink>
        <div className="sm:flex flex-row items-center gap-10 hidden">
          <div className="flex justify-center items-center gap-8">
            <ul className="flex gap-5 items-center">
              {menu.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? ' text-sm text-white bg-green-700 py-2 px-4 rounded-md shadow-md backdrop-blur-2xl'
                      : 'text-sm'
                  }
                >
                  {}
                  <p
                    className="font-poppins font-semibold tracking-wide hover:text-yellow-600"
                    key={item.id}
                  >
                    {item.name}
                  </p>
                </NavLink>
              ))}
            </ul>
          </div>
          <ThemeMode />
        </div>
        <div
          onClick={() => setOpenNav(!openNav)}
          className={`${
            mode === 'light'
              ? 'bg-blue-500/30 hover:bg-blue-500/40'
              : 'bg-white/5 hover:bg-white/10'
          } backdrop-blur-sm rounded-md cursor-pointer shadow-md sm:hidden flex`}
        >
          {openNav ? (
            <div className="rotate-0 transition duration-500 ease-in-out hover:rotate-180 p-2">
              <XIcon className="h-5 w-5" />
            </div>
          ) : (
            <div className="rotate-180 transition duration-500 ease-in-out  hover:rotate-0 p-2">
              <MenuIcon className="h-5 w-5" />
            </div>
          )}
        </div>
        {openNav ? (
          <div className="absolute min-w-full h-auto mx-auto top-[60px] left-0 sm:hidden z-50">
            <div
              className={` ${
                mode === 'light'
                  ? 'bg-white/70 backdrop-blur-md text-gray-900'
                  : 'bg-slate-900/70 backdrop-blur-md text-white'
              } w-full h-full m-auto shadow-md sticky py-10`}
            >
              <div className="sm:hidden flex-col items-center gap-4 flex">
                <ul className="flex flex-col gap-4 items-center">
                  {menu.map((item) => (
                    <NavLink
                      key={item.id}
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? ' text-sm text-white bg-green-700 py-2 px-16 sm:px-4 rounded-full sm:rounded-md shadow-md backdrop-blur-2xl'
                          : 'text-sm'
                      }
                    >
                      {}
                      <p
                        className="font-poppins font-semibold tracking-wide hover:text-yellow-600 text-base"
                        key={item.id}
                      >
                        {item.name}
                      </p>
                    </NavLink>
                  ))}
                </ul>
                <ThemeMode />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
