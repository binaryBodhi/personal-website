import "./index.scss";
import TagCloud from "TagCloud";
import { useEffect } from "react";

const TextSphere = () => {
	const container = ".tagcloud";
	const texts = [
		"JavaScript",
		"C",
		"C++",
		"Java",
		"Python",
		"HTML5",
		"CSS3",
		"React",
		"Node.js",
		"REST Services",
		"GraphQL",
		"MySQL",
		"MongoDB",
		"PostgreSQL",
		"VS Code",
		"AWS",
		"Git",
		"GitHub",
		"JIRA",
		"Docker",
		"Scikit-learn",
		"Numpy",
		"Pandas",
		"TensorFlow",
		"PyTorch",
		"Flask",
		"Django",
		"Express.js",
	];
	const options = {
		radius: 350,
		maxSpeed: "normal",
		initSpeed: "normal",
		keep: true,
	};
	useEffect(() => {
		TagCloud(container, texts, options);
	}, []);
	// useEffect(() => {
	// 	const isMobile = window.innerWidth <= 768;

	// 	const options = {
	// 		radius: isMobile ? 150 : 350, // 👈 responsive radius
	// 		maxSpeed: "normal",
	// 		initSpeed: "normal",
	// 		keep: true,
	// 	};
	// 	TagCloud(container, texts, options);
	// }, []);

	return (
		<>
			<div className="text-sphere">
				<span className="tagcloud"></span>
			</div>
		</>
	);
};

export default TextSphere;
