import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./index.scss";
import LogoTitle from "../../assets/images/logo-s.png";
import AnimatedLetters from "../AnimatedLetters/index.jsx";
import Logo from "./Logo/index.jsx";
import Loader from "react-loaders";

const Home = () => {
	const nameArray = ["h", "a", "n", "t", "a", "n", "u"];
	const [letterClass, setLetterClass] = useState("text-animate");

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 4000);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<>
			<div className="container home-page">
				<div className="text-zone">
					<h1>
						<span className={letterClass}>H</span>
						<span className={`${letterClass} _12`}>i,</span> <br />
						<span className={`${letterClass} _13`}>I</span>
						<span className={`${letterClass} _14`}>'m</span>
						<img src={LogoTitle} alt="developer" />
						<AnimatedLetters
							letterClass={letterClass}
							strArray={nameArray}
							idx={15}
						/>
					</h1>
					<h2>
						I build modern web applications powered by machine
						learning and AI.
					</h2>
					<Link to="/contact" className="flat-button">
						Contact Me
					</Link>
				</div>
				<Logo />
			</div>
			<Loader type="pacman" />
		</>
	);
};
export default Home;
