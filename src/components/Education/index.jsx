import "./index.scss";
import Loader from "react-loaders";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";

const Education = () => {
	const [letterClass, setLetterClass] = useState("text-animate");

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 3000);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<>
			<div className="container education-page">
				<div className="text-zone">
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={"Education".split("")}
							idx={15}
						/>
					</h1>
					<section id="education">
						{/* <h1 className="section-header">education</h1> */}
						<div className="timeline">
							<div className="timeline-block timeline-block-right">
								<div className="marker"></div>
								<div className="timeline-content">
									<h3>M.Sc. (Software Engineering)</h3>
									<span>
										Stevens Institute of Technology, NJ,
										United States
										<br />
										2022 - 2024
									</span>
									<p>Courses: to-be-filled</p>
								</div>
							</div>

							<div className="timeline-block timeline-block-left">
								<div className="marker"></div>
								<div className="timeline-content">
									<h3>
										B.Tech (Computer Science and
										Engineering)
									</h3>
									<span>
										National Institute of Technology,
										Karnataka, India
										<br />
										2021 - 2017
									</span>
									<p>Courses: to-be-filled</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<Loader type="pacman" />
		</>
	);
};
export default Education;
