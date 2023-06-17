import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js";
import Socials from "./components/Socials.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Skillset from "./pages/Skillset";
import Education from "./pages/Education";
import About from "./pages/About";
import Container from "@mui/material/Container";
export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
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
					<Home id="home" />
					<Experience id="experience" />
					<Skillset id="skillset" />
					<Education id="education" />
					<About id="about" />
				</Container>
			</div>
			<Socials />
		</BrowserRouter>
	);
}
