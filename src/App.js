import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar.js";
import Socials from "./components/Socials.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Skillset from "./pages/Skillset";
import Education from "./pages/Education";
import About from "./pages/About";
import Container from "@mui/material/Container";
import ExperienceContent from "./components/ExperienceContent.js";
export default function App() {
	const [location, setLocation] = useState("home");
	const homeRef = useRef(null);
	const experienceRef = useRef(null);
	const skillsetRef = useRef(null);
	const educationRef = useRef(null);
	const aboutRef = useRef(null);
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			// offSet top may not be correct property
			if (
				scrollPosition >= homeRef.current.offsetTop &&
				scrollPosition < experienceRef.current.offsetTop
			) {
				setLocation("home");
			} else if (
				scrollPosition >= experienceRef.current.offsetTop &&
				scrollPosition < skillsetRef.current.offsetTop
			) {
				setLocation("experience");
			} else if (
				scrollPosition >= skillsetRef.current.offsetTop &&
				scrollPosition < educationRef.current.offsetTop
			) {
				setLocation("skillset");
			} else if (
				scrollPosition >= educationRef.current.offsetTop &&
				scrollPosition < aboutRef.current.offsetTop
			) {
				setLocation("education");
			} else if (scrollPosition >= aboutRef.current.offsetTop) {
				setLocation("about");
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<BrowserRouter>
			<Navbar location={location} />
			<div style={{ marginTop: "48px" }}>
				<Container maxWidth="md">
					<video
						autoplay="autoplay"
						loop="loop"
						muted
						defaultMuted
						playsinline
						preload="auto"
						id="myVideo"
						playbackRate={0.2}
						style={{
							position: "fixed",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							objectFit: "cover",
							zIndex: "-1",
						}}
					>
						<source
							src="/images/space particles.mp4"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
					<Home ref={homeRef} />
					<Experience ref={experienceRef} />
					<Skillset ref={skillsetRef} />
					<Education ref={educationRef} />
					<About ref={aboutRef} />
				</Container>
			</div>
			<Socials />
		</BrowserRouter>
	);
}
