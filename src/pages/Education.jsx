import React from "react";
import { forwardRef } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Parallax } from "react-scroll-parallax";
import EducationComponent from "../components/EducationComponent";
const Education = forwardRef((props, ref) => {
	const educations = [
		{
			id: 2,
			school: "Singapore Management University",
			degree: "Bachelor's Degree in Information Systems",
			tracks: ["Digital Cloud Solutions", "Business Analytics"],
			awards: [],
			coCurricular: ["SMU Blockchain Club", "SMU Muay Thai"],
			period: "2021 to ~2025",
			gpa: "3.43",
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
			period: "2016 to 2019",
			gpa: "3.61",
			image: "./images/education/np.jpg",
		},
		{
			id: 0,
			school: "Anglo-Chinese School (Barker Road)",
			degree: "GCE 'O' Levels",
			tracks: [],
			awards: [],
			coCurricular: ["Waterpolo (2013 - 2014)", "Handball (2015 - 2016)"],
			period: "2012 to 2015",
			image: "./images/education/acsbr.jpg",
			last: true,
		},
	];
	return (
		<Box
			name="education"
			sx={{
				paddingTop: "150px",
				paddingLeft: "0px",
				paddingRight: "0px",
				paddingBottom: "300px",
			}}
			ref={ref}
		>
			<Typography variant="h2" pb={5} sx={{ textAlign: "center" }}>
				My Education
			</Typography>
			<Parallax easing="easeInOut">
				{educations.map((education) => (
					<EducationComponent key={education.id} {...education} />
				))}
			</Parallax>
		</Box>
	);
});
export default Education;
