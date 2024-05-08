import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Skillset from "./pages/Skillset";
import Education from "./pages/Education";
import About from "./pages/About";
import Copyright from "./pages/Copyright";
import Container from "@mui/material/Container";
export default function App() {
  const [location, setLocation] = useState("home");
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.playbackRate = 0.75;
  }, []);
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
      <div style={{ marginTop: "56px" }}>
        <Container maxWidth="md">
          <video
            ref={videoRef}
            autoPlay
            loop="loop"
            muted
            preload="auto"
            id="myVideo"
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
            <source src="/images/space particles.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Home ref={homeRef} />
          <Experience ref={experienceRef} />
          <Skillset ref={skillsetRef} />
        </Container>

        <Education ref={educationRef} />
        <Container maxWidth="md">
          <About ref={aboutRef} />
        </Container>
        <Copyright />
      </div>
      <Socials />
    </BrowserRouter>
  );
}
