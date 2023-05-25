import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Carousel from "react-material-ui-carousel";
import Typography from "@mui/material/Typography";
import { GetThemeAndXSBP } from "../utils/getThemeAndXSBP.js";
import SkillsComponent from "../components/SkillGrid.js";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import TimerIcon from "@mui/icons-material/Timer";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
export default function Skillset() {
	const { theme, xs } = GetThemeAndXSBP();
	const styles = {
		overlay: {
			backgroundColor: "rgba(0, 0, 0, 0.85)",
			minHeight: "calc(100vh - 48px)",
		},
		// adjusting pseudo classes doesn't work
		navButtonsWrapperProps: {
			backgroundColor: `${theme.palette.primary.main}30`,

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
					src: <SpeakerNotesIcon />,
					level: 85,
				},
				{
					name: "Teamwork and collaboration",
					src: <Diversity2Icon />,
					level: 90,
				},
				{
					name: "Adaptability and flexibility",
					src: <ChangeCircleIcon />,
					level: 90,
				},
				{
					name: "Leadership",
					src: <FollowTheSignsIcon />,
					size: "xl",
					level: 85,
				},
				{
					name: "Time management",
					src: <TimerIcon />,
					level: 80,
				},
				{
					name: "Attention to detail",
					src: <ContentPasteSearchIcon />,
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
				{
					name: "Postman",
					src: "postman.png",
					level: 50,
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
				{ name: "Bootstrap", src: "bootstrap.png", level: 70 },
				{ name: "React", src: "react.png", level: 25 },
				{ name: "React Spring", src: "reactspring.png", level: 70 },
				{ name: "Next.js", src: "nextjs.png", level: 25 },
				{ name: "Chakra UI", src: "chakraui.jpg", level: 80 },
				{ name: "Mantine UI", src: "mantine.png", level: 70 },
				{ name: "Vue.js", src: "vue.png", level: 70 },
				{ name: "Quasar", src: "quasar.png", level: 70 },
				{ name: "Vuetify", src: "vuetify.png", level: 50 },
				{ name: "GSAP", src: "gsap.png", level: 50 },
				{ name: "Telegram API", src: "telegram.png", level: 60 },
				{ name: "Tableau", src: "tableau.png", level: 55 },
				{ name: "SQL", src: "sql.png", level: 70 },
				{ name: "PHP", src: "php.png", level: 30 },
				{ name: "VBA", src: "vba.png", level: 80 },
			],
		},
		{
			name: "Others",
			skills: [
				{ name: "Video editing", src: "videoediting.jpg", level: 60 },
				{ name: "Horology", src: "horology.png", level: 60 },
				{ name: "Guitar", src: "guitar.png", level: 70 },
				{ name: "DIY", src: "guitar.jpg", level: 85 },
			],
		},
	];
	return (
		<Box>
			<Typography variant="h2" sx={{ textAlign: "center" }} pb={5}>
				Skillsets
			</Typography>
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
						<Box key={i}>
							<Typography
								variant="h5"
								pb={2}
								sx={{ textAlign: "center" }}
							>
								{skillset.name}
							</Typography>
							<SkillsComponent skills={skillset.skills} />
						</Box>
					);
				})}
			</Carousel>
		</Box>
	);
}
