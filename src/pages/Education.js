import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
	Parallax,
	ParallaxBanner,
	ParallaxBannerLayer,
} from "react-scroll-parallax";
import EducationComponent from "../components/EducationComponent.js";
export default function Education() {
	const educations = [
		{
			id: 2,
			school: "Singapore Management University",
			degree: "Bachelor's Degree in Information Systems",
			tracks: ["Digital Cloud Solutions", "Business Analytics"],
			awards: [],
			coCurricular: [],
			period: "2021  Present",
			gpa: "Cumulative GPA: 3.43",
			image: "./images/education/smu.jpg",
			first: true,
		},
		{
			id: 1,
			school: "Ngee Ann Polytechnic",
			degree: "Diploma in Financial Informatics (School of Infocomm Technology)",
			tracks: ["Financial Analytics"],
			awards: [
				"Director's List for excellent academic performance Academic Year 2017/2018",
			],
			coCurricular: [
				"Member of ICT Society (2017-2018)",
				"Group Leader for ICT Society Camp (2017)",
				"Head of Welfare for ICT Welcoming Camp (2018)",
			],
			period: "2016  2019",
			gpa: "Cumulative GPA: 3.61",
			image: "./images/education/np.jpg",
		},
		{
			id: 0,
			school: "Anglo-Chinese School (Barker Road)",
			degree: "GCE 'O' Levels",
			tracks: ["Financial Analytics"],
			awards: [],
			coCurricular: [],
			period: "2012  2015",
			image: "./images/education/acsbr.jpg",
			last: true,
		},
	];
	return (
		<Box>
			<Typography variant="h2" pb={5} sx={{ textAlign: "center" }}>
				My Education
			</Typography>
			<Parallax easing="easeInOut">
				{educations.map((education) => (
					<EducationComponent key={education.id} {...education} />
				))}
				{/* <ParallaxBanner
					style={{
						height: "100vh",
					}}
				>
					<Box sx={{ ...styles.blur }}>
						<ParallaxBannerLayer
							speed={-10}
							image="./images/education/smu.jpg"
							style={{
								backgroundSize: "cover",
							}}
						/>
					</Box>
					<Box sx={{ ...styles.overlay }}></Box>
					<ParallaxBannerLayer style={{ ...styles.center }}>
						<h1>My Headline</h1>
					</ParallaxBannerLayer>
				</ParallaxBanner>
				<ParallaxBanner
					style={{
						height: "100vh",
					}}
				>
					<Box sx={{ ...styles.blur }}>
						<ParallaxBannerLayer
							speed={-10}
							image="./images/education/np1.jpg"
							style={{ backgroundSize: "cover" }}
						/>
					</Box>
					<Box sx={{ ...styles.overlay }} />
					<ParallaxBannerLayer style={{ ...styles.center }}>
						<h1>My Headline</h1>
					</ParallaxBannerLayer>
				</ParallaxBanner>
				<ParallaxBanner
					style={{
						height: "100vh",
					}}
				>
					<Box sx={{ ...styles.blur }}>
						<ParallaxBannerLayer
							speed={-10}
							image="./images/education/acsbr.jpg"
						/>
					</Box>
					<Box sx={{ ...styles.overlay }} />
					<ParallaxBannerLayer style={{ ...styles.center }}>
						<h1>My Headline</h1>
					</ParallaxBannerLayer>
				</ParallaxBanner> */}
			</Parallax>
		</Box>
	);
}
