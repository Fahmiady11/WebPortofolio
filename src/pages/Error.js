import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/organisme/Navbar';
import error from '../assets/image/404.svg';
export default function Error() {

  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden">
        <Helmet>
          <title>Error</title>
        </Helmet>
        <Navbar />
        <div className="flex justify-center items-start w-full h-full">
          <div className=" max-w-lg w-4/5 md:w-full mt-36">
            <img src={error} alt="" className="drop-shadow-lg" />
          </div>
        </div>
      </div>
    </>
  );
}
