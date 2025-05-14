import React from 'react';
import { DuplicateIcon, LinkIcon } from '@heroicons/react/solid';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import useThemeStore from '../../store/ThemeStore';
export default function CardContact(props) {
  const { name, account, order, image, textColor, bg, link, toast } = props;
  const mode = useThemeStore((state) => state.mode);
  const notify = () => {
    toast.success('Success Copied', {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <>
      <div
        className={`${
          mode === 'light' ? 'bg-gray-100' : 'bg-white/5'
        } w-full h-full md:w-[350px] md:h-[100px] gap-2 items-center flex backdrop-blur-sm justify-start p-2 rounded-tl-full rounded-bl-full  shadow-md animate__animated animate__jackInTheBox  animate__slow`}
      >
        <div className="w-1/4 h-full flex items-center ">
          <img
            src={image}
            className={`rounded-full border-2 shadow-sm h-full w-full  object-cover object-center ${
              mode === 'light' ? 'border-slate-300' : 'border-white/30'
            }`}
            alt=""
          />
        </div>
        <div className="flex w-3/4 items-center justify-between p-1 gap-5">
          <div className="flex flex-col w-3/5 ">
            <p className={`font-semibold text-lg drop-shadow-sm ${textColor}`}>
              {name}
            </p>
            <p className="text-sm truncate">{account}</p>
          </div>
          <div className="w-2/5 flex justify-end">
            {order === 'Copy' ? (
              <CopyToClipboard text={account}>
                <div
                  onClick={notify}
                  className={`flex w-7 h-7 sm:w-auto  flex-row gap-1 cursor-pointer sm:py-2  sm:px-3 sm:h-1/2 my-auto ${bg} justify-center items-center rounded-md shadow-md ${
                    mode === 'light'
                      ? ' hover:bg-blue-500/40'
                      : 'hover:bg-white/10'
                  } backdrop-blur-sm`}
                >
                  {order === 'Copy' ? (
                    <DuplicateIcon className="h-5 w-5 text-white" />
                  ) : (
                    <LinkIcon className="h-5 w-5 text-white" />
                  )}
                  <p
                    className={`font-poppins hidden sm:flex text-xs font-medium text-white`}
                  >
                    {order}
                  </p>
                </div>
              </CopyToClipboard>
            ) : (
              <a
                href={link}
                rel="noreferrer"
                target="_blank"
                className={`w-7 h-7 sm:w-auto flex justify-center items-center  cursor-pointer sm:py-2  sm:px-3 sm:h-1/2 my-auto ${bg} rounded-md shadow-md ${
                  mode === 'light'
                    ? ' hover:bg-blue-500/40'
                    : 'hover:bg-white/10'
                } backdrop-blur-sm`}
              >
                <div className="flex flex-row gap-1 justify-center items-center">
                  {order === 'Copy' ? (
                    <DuplicateIcon className="h-5 w-5 text-white" />
                  ) : (
                    <LinkIcon className="h-5 w-5 text-white" />
                  )}
                  <p
                    className={`font-poppins hidden sm:flex text-xs font-medium text-white`}
                  >
                    {order}
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
