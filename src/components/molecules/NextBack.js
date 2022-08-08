import React from 'react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
export default function NextBack(props) {
  const navigate = useNavigate();
  const { nextStatus, prevStatus, nextPath, prevPath, no, name } = props;
  return (
    <>
      <div className="flex justify-between w-full md:w-0 sm:justify-center items-center gap-5">
        <div className=" flex flex-row gap-1 items-center">
          <p className="text-green-600 font-semibold font-poppins">{name}</p>
          <p className="text-green-600 font-semibold font-poppins">{no}</p>
          <p className="text-gray-700 font-semibold font-poppins">/</p>
          <p className="text-gray-700 font-semibold font-poppins">05</p>
        </div>
        <div className="flex flex-row gap-5 items-center">
          {prevStatus ? (
            <ArrowLeftIcon
              onClick={() => navigate(prevPath)}
              className="h-5 w-5 hover:text-green-600 cursor-pointer"
            />
          ) : null}
          {nextStatus ? (
            <ArrowRightIcon
              onClick={() => navigate(nextPath)}
              className="h-5 w-5 hover:text-green-600 cursor-pointer"
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
