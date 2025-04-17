import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import "./index.scss";
import portfolios from "../../data/portfolios.json";

const Portfolio = () => {
	const [letterClass, setLetterClass] = useState("text-animate");

	useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	});

	const renderPortfolio = (portfolios) => {
		return (
			<div className="images-container">
				{portfolios.map((portfolio, idx) => {
					return (
						<div className="image-box" key={idx}>
							<img
								src={portfolio.cover}
								className="portfolio-image"
								alt="portfolio"
							/>
							<div className="content">
								<p className="title">{portfolio.title}</p>
								<h4 className="description">
									{portfolio.description}
								</h4>
								<h4 className="description">
									{portfolio.techStack}
								</h4>
								<button
									className="btn"
									onClick={() => window.open(portfolio.url)}
								>
									View Project
								</button>
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<>
			<div className="container portfolio-page">
				<h1 className="page-title">
					<AnimatedLetters
						letterClass={letterClass}
						strArray={"Portfolio".split("")}
						idx={15}
					/>
				</h1>
				<div>{renderPortfolio(portfolios.portfolios)}</div>
			</div>
			<Loader type="pacman" />
		</>
	);
};

export default Portfolio;
