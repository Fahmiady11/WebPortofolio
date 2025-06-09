import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import useThemeStore from "./store/ThemeStore";
import "animate.css";
import Experience from "./pages/Experince";
import Error from "./pages/Error";
import React, { useState, useEffect, useRef } from "react";
// import wajah from "./assets/wajah.svg";
import Typed from "react-typed";
import iconload from "./assets/iconload.png";
import awan from "./assets/awan.png";
// import { useSpring } from "motion/react";
import { useSpring, motion, frame } from "framer-motion";

function App() {
	const theme = useThemeStore((state) => state.mode);
	const [isLoad, setLoad] = useState(true);
	const ref = useRef(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoad(false);
		}, 4000);
		return () => clearTimeout(timer);
	}, []);

	console.log(ref);
	const { x, y } = useFollowPointer(ref);

	return (
		<>
			<div
				className={`${
					theme === "light"
						? "bg-white text-gray-900"
						: "bg-slate-900 text-white"
				}`}
			>
				{isLoad ? (
					<div
						className={`${
							theme === "light"
								? "bg-white text-[#332222]"
								: "bg-slate-900 text-white"
						} absolute w-full h-full flex justify-center items-center`}
					>
						<div className="max-w-xs w-full h-auto flex justify-center items-center flex-col">
							<div className="relative w-full flex justify-end">
								<div className="absolute -top-[120px] -left-[70px] w-1/2">
									<div className="w-[300px] h-[300px] flex justify-end relative">
										<div className="absolute top-[83px] left-[60px] w-[180px] h-[120px]">
											<div className="flex justify-center items-center w-full h-full">
												<p className="font-poppins mt-3 text-md text-[#0F172A]">
													<Typed
														loop
														typeSpeed={70}
														backSpeed={40}
														strings={["Please wait", "Just a moment!"]}
														smartBackspace
														shuffle={false}
														backDelay={1}
														fadeOut={false}
														fadeOutDelay={100}
														loopCount={0}
														showCursor
														cursorChar="|"
													/>
												</p>
											</div>
										</div>
										<img
											src={awan}
											alt="awan"
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
								<img src={iconload} alt="" className="w-1/2 drop-shadow-md" />
							</div>
						</div>
					</div>
				) : (
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/skill" element={<Skill />} />
						<Route path="/project" element={<Project />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/experience" element={<Experience />} />
						<Route path="/*" element={<Error />} />
					</Routes>
				)}
			<motion.div ref={ref} style={{ ...ball, x, y }} />
			</div>
		</>
	);
}

const ball = {
	width: 10,
	height: 10,
	backgroundColor: "var(--hue-1)",
	borderRadius: "50%",
}

function useFollowPointer(ref) {

	const spring = { damping: 3, stiffness: 50, restDelta: 0.001 }

	const x = useSpring(0, spring);
	const y = useSpring(0, spring);
  
	useEffect(() => {
	  if (!ref.current) return
  
	  const handlePointerMove = ({ clientX, clientY }) => {
		if (!ref.current) return;
		const element = ref.current;

  
		frame.read(() => {
		  x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
		  y.set(clientY - element.offsetTop - element.offsetHeight / 2)
		})
	  }
  
	  window.addEventListener("pointermove", handlePointerMove)
  
	  return () => window.removeEventListener("pointermove", handlePointerMove)
	}, [])
  
	return { x, y }
  }


export default App;
