import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/index.jsx";
import Home from "./components/Home/index.jsx";
import About from "./components/About/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Portfolio from "./components/Portfolio/index.jsx";
import Education from "./components/Education/index.jsx";
import Experience from "./components/Experience/index.jsx";
import Skills from "./components/Skills/index.jsx";
import TextSphere from "./components/TextSphere/index.jsx";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="education" element={<Education />} />
					<Route path="experience" element={<Experience />} />
					<Route path="skills" element={<Skills />} />
					<Route path="contact" element={<Contact />} />
					<Route path="portfolio" element={<Portfolio />} />
					<Route path="textsphere" element={<TextSphere />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
