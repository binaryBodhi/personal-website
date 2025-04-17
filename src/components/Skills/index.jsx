import "./index.scss";
import Loader from "react-loaders";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import TextSphere from "../TextSphere";

const Skills = () => {
	const [letterClass, setLetterClass] = useState("text-animate");

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 3000);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<>
			<div className="container skills-page">
				<div className="text-zone">
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={"Skills".split("")}
							idx={15}
						/>
					</h1>
				</div>
				<div className="skills-sphere">
					<TextSphere />
				</div>
			</div>
			<Loader type="pacman" />
		</>
	);
};
export default Skills;
