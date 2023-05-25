import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Carousel from "react-material-ui-carousel";
import Typography from "@mui/material/Typography";
import { GetThemeAndXSBP } from "../utils/getThemeAndXSBP.js";
import SkillsComponent from "../components/SkillGrid.js";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
export default function Skillset() {
	const { theme, xs } = GetThemeAndXSBP();
	const styles = {
		overlay: {
			backgroundColor: "rgba(0, 0, 0, 0.85)",
			minHeight: "calc(100vh - 48px)",
		},
		// adjusting pseudo classes doesn't work
		navButtonsWrapperProps: {
			opacity: 1,
			"&:hover": {
				"& $button": {
					backgroundColor: undefined,
					filter: undefined,
					opacity: undefined,
				},
			},
		},
		navButtonsProps: {
			margin: 0,
			color: theme.palette.white.main,
			backgroundColor: theme.palette.primary.main,
			"&:hover": undefined,
		},
		indicators: {
			color: theme.palette.primary.main,
		},
		activeIndicator: {
			color: theme.palette.secondary.main,
		},
	};

	const skillsets = [
		{
			name: "Soft skills",
			skills: [
				{
					name: "Communication skills",
					src: "fa-solid fa-person-chalkboard",
					size: "xl",
					level: 85,
				},
				{
					name: "Teamwork and collaboration",
					src: "fa-solid fa-people-group",
					size: "xl",
					level: 90,
				},
				{
					name: "Adaptability and flexibility",
					src: "fa-solid fa-arrows-rotate",
					size: "xl",
					level: 90,
				},
				{
					name: "Leadership",
					src: "fa-solid fa-person-chalkboard",
					size: "xl",
					level: 85,
				},
				{
					name: "Time management",
					src: "fa-solid fa-clock",
					size: "xl",
					level: 80,
				},
				{
					name: "Attention to detail",
					src: "fa-solid fa-rectangle-list",
					size: "xl",
					level: 85,
				},
			],
		},
		{
			name: "Software",
			skills: [
				{ name: "Microsoft Word", src: "word.png", level: 80 },
				{
					name: "Microsoft Powerpoint",
					src: "powerpoint.png",
					level: 80,
				},
				{ name: "Microsoft Excel", src: "excel.png", level: 95 },
				{ name: "Google Suite", src: "google.png", level: 80 },
				{ name: "Figma", src: "figma.png", level: 30 },
				{ name: "Canva", src: "canva.png", level: 60 },
				{ name: "Adobe After Effects", src: "ae.png", level: 60 },
				{ name: "Adobe Premiere Pro", src: "pp.png", level: 50 },
				{ name: "Adobe Photoshop", src: "photoshop.png", level: 20 },
				{
					name: "Adobe Illustrator",
					src: "illustrator.png",
					level: 10,
				},
			],
		},
		{
			name: "Frameworks",
			skills: [
				{ name: "Python", src: "python.png", level: 80 },
				{ name: "Flask", src: "flask.png", level: 30 },
				{ name: "HTML", src: "html.png", level: 80 },
				{ name: "CSS", src: "css.png", level: 70 },
				{ name: "Javascript", src: "js.png", level: 70 },
				{ name: "React", src: "react.png", level: 25 },
				{ name: "Next.js", src: "nextjs.png", level: 25 },
				{ name: "Mantine UI", src: "mantine.png", level: 70 },
				{ name: "Telegram API", src: "telegram.png", level: 60 },
				{ name: "Vue.js", src: "vue.png", level: 70 },
				{ name: "Vuetify", src: "vuetify.png", level: 50 },
				{ name: "GSAP", src: "gsap.png", level: 50 },
				{ name: "Tableau", src: "tableau.png", level: 55 },
				{ name: "SQL", src: "sql.png", level: 70 },
				{ name: "PHP", src: "php.png", level: 30 },
				{ name: "VBA", src: "vba.png", level: 80 },
			],
		},
		{
			name: "Others",
			skills: [
				{ name: "Video editing", src: "", level: 60 },
				{ name: "Horology", src: "", level: 60 },
				{ name: "Guitar", src: "", level: 70 },
				{ name: "DIY", src: "", level: 85 },
				{ name: "", src: "", level: 0 },
			],
		},
	];
	return (
		<Box py={5}>
			<Carousel
				animation={"slide"}
				duration={600}
				autoPlay={false}
				navButtonsWrapperProps={{
					style: styles.navButtonsWrapperProps,
				}}
				navButtonsProps={{ style: styles.navButtonsProps }}
				indicatorIconButtonProps={{
					style: styles.indicators,
				}}
				activeIndicatorIconButtonProps={{
					style: styles.activeIndicator,
				}}
				IndicatorIcon={<FiberManualRecordIcon size="small" />}
			>
				{skillsets.map((skillset, i) => {
					return (
						<Box
							key={i}
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<Typography
									variant="h4"
									sx={{ textAlign: "center" }}
									pb={5}
								>
									{skillset.name}
								</Typography>
								<SkillsComponent skills={skillset.skills} />
							</Box>
						</Box>
					);
				})}
			</Carousel>
		</Box>
	);
}
