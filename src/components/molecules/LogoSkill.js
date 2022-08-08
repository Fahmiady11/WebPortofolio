import React from 'react';
import zustand from '../../assets/image/logoSkill/zustand.png';
import nextJs from '../../assets/image/logoSkill/next.png';
import ImageSkill from '../atoms/ImageSkill';

export default function LogoSkill(props) {
  return (
    <>
      <div className="flex flex-row justify-center mb-10 md:justify-start items-center flex-wrap 2xl:w-1/2">
        <ImageSkill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
          alt=""
        />
        <ImageSkill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
          alt=""
        />
        <ImageSkill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
          alt=""
        />
        <ImageSkill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt=""
        />
        <ImageSkill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
          alt=""
        />
        <ImageSkill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          alt=""
        />
        <ImageSkill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
          alt=""
        />
        <ImageSkill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg"
          alt=""
        />
        <ImageSkill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt=""
        />
          <ImageSkill
            src={nextJs}
            alt=""
          />
        <ImageSkill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          alt=""
        />
        <ImageSkill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          alt=""
        />
        <ImageSkill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          alt=""
        />
        <ImageSkill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          alt=""
        />
        <ImageSkill
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          alt=""
        />
        <ImageSkill src={zustand} alt="" />
      </div>
    </>
  );
}
