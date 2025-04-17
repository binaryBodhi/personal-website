import "./index.scss";
import Loader from "react-loaders";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";

const Experience = () => {
	const [letterClass, setLetterClass] = useState("text-animate");

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 3000);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<>
			<div className="container experience-page">
				<div className="text-zone">
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={"Experience".split("")}
							idx={15}
						/>
					</h1>
					<section id="workex">
						<div className="timeline">
							<div className="timeline-block timeline-block-left">
								<div className="marker"></div>
								<div className="timeline-content">
									<h3>Machine Learning Engineer</h3>
									<span>
										<h3>AI Adventures</h3>
										Pune, Maharashtra, India
										<br />
										June 2021 - Aug 2022
									</span>
									<p>
										<li>
											Developed a comprehensive Linear
											Regression syllabus with learning
											modules, culminating in a detailed
											practice notebook; improved student
											performance metrics by 30% and
											retention rates by 20%.
										</li>
										<li>
											Led undergraduates in identifying
											suitable features and machine
											learning algorithms, resulting in a
											45% increase in project accuracy and
											30% reduction in bugs.
										</li>
										<li>
											Mentored a group of AI enthusiasts
											on machine learning libraries, data
											pre-processing, analysis, and
											visualization.
										</li>
									</p>
								</div>
							</div>

							<div className="timeline-block timeline-block-right">
								<div className="marker"></div>
								<div className="timeline-content">
									<h3>Web Developer - Intern</h3>
									<span>
										<h3>ChangePay</h3>
										Bangalore, Karnataka, India
										<br />
										Dec 2019 - Jan 2020
									</span>
									<p>
										<li>
											Built robust back-end services and
											integrated it with front-end
											interfaces, leading to a 16%
											reduction in bugs and a 5% increase
											in overall system reliability.
										</li>
										<li>
											Designed web-dashboard reducing the
											average response time of query by
											25% and showcasing user engagement
											and company-specific metrics,
											increasing sales by 15%.
										</li>
									</p>
								</div>
							</div>

							<div className="timeline-block timeline-block-left">
								<div className="marker"></div>
								<div className="timeline-content">
									<h3>Machine Learning Intern</h3>
									<span>
										<h3>AI Adventures</h3>
										Pune, Maharashtra, India
										<br />
										May 2019 - Jul 2019
									</span>
									<p>
										<li>
											Developed advanced machine learning
											techniques by working closely with
											Project Lead on sentiment analysis
										</li>
										<li>
											Implemented refined data
											pre-processing methods, boosting
											model accuracy by 15% and reducing
											training time by 20%.
										</li>
									</p>
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
export default Experience;
