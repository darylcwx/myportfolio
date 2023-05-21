import Navbar from "./components/Navbar.js";
import Socials from "./components/Socials.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Skillset from "./pages/Skillset";
import Education from "./pages/Education";
import About from "./pages/About";
export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<div style={{ marginTop: "48px" }}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="experience" element={<Experience />} />
					<Route path="skillset" element={<Skillset />} />
					<Route path="education" element={<Education />} />
					<Route path="about" element={<About />} />
				</Routes>
			</div>
			<Socials />
		</BrowserRouter>
	);
}
