import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import logoS from "../../assets/images/logo-s.png";
// import logoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faInfoCircle,
	faEnvelope,
	faSuitcase,
	faBook,
	faBars,
	faClose,
	faUserTie,
	faGear,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Sidebar = () => {
	const [showNav, setShowNav] = useState(false);

	return (
		<div className="nav-bar">
			<Link to="/" className="logo">
				<img src={logoS} alt="Logo" />
				{/* <img className="sub-logo" src={logoSubtitle} alt="Shantanu" /> */}
			</Link>
			<nav className={showNav ? "mobile-show" : ""}>
				{/* HOME LINK */}
				{/* <NavLink exact="true" activeclassname="active" to="/">
					<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
				</NavLink> */}

				{/* ABOUT LINK */}
				<NavLink
					exact="true"
					activeclassname="active"
					className="about-link"
					to="/about"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faInfoCircle} color="#4d4d4e" />
				</NavLink>

				{/* EDUCATION LINK */}
				<NavLink
					exact="true"
					activeclassname="active"
					className="education-link"
					to="/education"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faBook} color="#4d4d4e" />
				</NavLink>

				{/* SKILLS LINK */}
				<NavLink
					exact="true"
					activeclassname="active"
					className="skills-link"
					to="/skills"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faGear} color="#4d4d4e" />
				</NavLink>

				{/* EXPERIECE LINK */}
				<NavLink
					exact="true"
					activeclassname="active"
					className="experience-link"
					to="/experience"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faUserTie} color="#4d4d4e" />
				</NavLink>

				{/* PORTFOLIO LINK */}
				<NavLink
					exact="true"
					activeclassname="active"
					className="portfolio-link"
					to="/portfolio"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
				</NavLink>

				{/* CONTACT LINK */}
				<NavLink
					exact="true"
					activeclassname="active"
					className="contact-link"
					to="/contact"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
				</NavLink>

				<FontAwesomeIcon
					onClick={() => setShowNav(false)}
					icon={faClose}
					color="#ffd700"
					size="3x"
					className="close-icon"
				/>
			</nav>
			<ul>
				<li>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/shantanu-kshatriya-5835a3185/"
					>
						<FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noreferrer"
						href=" https://github.com/binaryBodhi"
					>
						<FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
					</a>
				</li>
			</ul>
			<FontAwesomeIcon
				onClick={() => setShowNav(true)}
				icon={faBars}
				color="#ffd700"
				size="3x"
				className="hamburger-icon"
			/>
		</div>
	);
};
export default Sidebar;
