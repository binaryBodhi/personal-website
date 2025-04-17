import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngular,
	faCss3,
	faGitAlt,
	faHtml5,
	faJsSquare,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
	const [letterClass, setLetterClass] = useState("text-animate");
	const birthDate = new Date("1999-06-14"); // YYYY-MM-DD
	const age = Math.floor(
		(new Date() - birthDate) / (365.25 * 24 * 60 * 60 * 1000)
	);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 3000);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<>
			<div className="container about-page">
				<div className="text-zone">
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
							idx={15}
						/>
					</h1>
					<p>
						Hi there! I'm Shantanu Kshatriya, a {age} year old
						software engineer with a strong background in machine
						learning and data science. I'm a problem solver at heart
						and my passion for developing software solutions stems
						from the desire to use technology to tackle real-world
						challenges.
					</p>
					<p>
						I hold a Master's degree (M.Sc.) in Software Engineering
						from Stevens Institute of Technology, NJ and I'm always
						looking for new and exciting ways to grow my skills and
						contribute to the field.
					</p>
					<p>
						I fell in love with the world of code at the young age
						of 17 and my fascination with technology has only grown
						stronger since then. With a creative mind and a love for
						finding patterns in data, data science was the natural
						next step for me.
					</p>
				</div>

				<div className="stage-cube-cont">
					<div className="cubespinner">
						<div className="face1">
							<FontAwesomeIcon icon={faAngular} color="#DD0031" />
						</div>
						<div className="face2">
							<FontAwesomeIcon icon={faHtml5} color="#F06529" />
						</div>
						<div className="face3">
							<FontAwesomeIcon icon={faCss3} color="#28A4D9" />
						</div>
						<div className="face4">
							<FontAwesomeIcon icon={faReact} color="#5ED4F4" />
						</div>
						<div className="face5">
							<FontAwesomeIcon
								icon={faJsSquare}
								color="#EFD81D"
							/>
						</div>
						<div className="face6">
							<FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
						</div>
					</div>
				</div>
			</div>
			<Loader type="pacman" />
		</>
	);
};
export default About;
