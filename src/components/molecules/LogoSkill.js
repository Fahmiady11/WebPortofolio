import React from "react";
import zustand from "../../assets/image/logoSkill/zustand.png";
import nextJs from "../../assets/image/logoSkill/next.png";
import ImageSkill from "../atoms/ImageSkill";

export default function LogoSkill(props) {
	return (
		<>
			<div className="flex flex-row justify-center mb-20 md:justify-start items-center flex-wrap 2xl:w-3/4">
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
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
					alt=""
				/>
				{/* <ImageSkill
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
					alt=""
				/> */}
				<ImageSkill
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
					alt=""
				/>
				<ImageSkill
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
					alt=""
				/>
				<ImageSkill
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
					alt=""
				/>
				<ImageSkill
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
					alt=""
				/>
				<ImageSkill
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
					alt=""
				/>
				<ImageSkill
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
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
				<ImageSkill
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
					alt=""
				/>
				<ImageSkill
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
					alt=""
				/>
				<ImageSkill
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg"
					alt=""
				/>
				{/* <ImageSkill src={zustand} alt="" /> */}
			</div>
		</>
	);
}
