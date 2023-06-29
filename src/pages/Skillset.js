import * as React from "react";
import { forwardRef } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Carousel from "react-material-ui-carousel";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { GetThemeAndBP } from "../utils/getThemeAndBP.js";
import SkillsGrid from "../components/SkillGrid.js";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
	EffectCoverflow,
	Pagination,
	Navigation,
	Autoplay,
} from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "../styles/customSwiper.css";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import TimerIcon from "@mui/icons-material/Timer";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
SwiperCore.use([Navigation]);
const Skillset = forwardRef((props, ref) => {
	const { theme, xs } = GetThemeAndBP();
	// const styles = {
	// 	overlay: {
	// 		backgroundColor: "rgba(0, 0, 0, 0.85)",
	// 		minHeight: "calc(100vh - 48px)",
	// 	},
	// 	// adjusting pseudo classes doesn't work
	// 	navButtonsWrapperProps: {
	// 		backgroundColor: `${theme.palette.primary.main}30`,

	// 		"&:hover": {
	// 			"& $button": {
	// 				backgroundColor: undefined,
	// 				filter: undefined,
	// 				opacity: undefined,
	// 			},
	// 		},
	// 	},
	// 	navButtonsProps: {
	// 		margin: 0,
	// 		color: theme.palette.white.main,
	// 		backgroundColor: theme.palette.primary.main,
	// 		"&:hover": undefined,
	// 	},
	// 	indicators: {
	// 		color: theme.palette.primary.main,
	// 	},
	// 	activeIndicator: {
	// 		color: theme.palette.secondary.main,
	// 	},
	// };

	const skillsets = [
		{
			name: "Soft skills",
			skills: [
				{
					name: "Effective communication",
					src: <SpeakerNotesIcon />,
					level: 85,
				},
				{
					name: "Teamwork and collaboration",
					src: <Diversity2Icon />,
					level: 90,
				},
				{
					name: "Adaptability",
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
					name: "Meticulousness",
					src: <ContentPasteSearchIcon />,
					level: 85,
				},
			],
			height: "600px",
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
			height: "600px",
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
				{ name: "Framer Motion", src: "framermotion.png", level: 70 },
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
			height: "900px",
		},
		{
			name: "Others",
			skills: [
				{ name: "Video editing", src: "videoediting.jpg", level: 60 },
				{ name: "Horology", src: "horology.png", level: 60 },
				{ name: "Guitar", src: "guitar.png", level: 70 },
				{ name: "DIY", src: "guitar.jpg", level: 85 },
			],
			height: "600px",
		},
	];
	return (
		<>
			<Container
				name="skillset"
				maxWidth="md"
				sx={{
					paddingTop: "150px",
					paddingLeft: 0,
					paddingRight: 0,
					paddingBottom: "300px",
				}}
				ref={ref}
			>
				<Typography variant="h2" sx={{ textAlign: "center" }} pb={2}>
					Skillsets
				</Typography>
				<Typography variant="body1" pb={5}>
					Here are my skillsets, which I believe are above average
					compared to peers at my level. However, I recognize that
					there is always room for improvement and growth, which makes
					my self-rating highly subjective. Therefore, I am committed
					to expanding my skills and knowledge, and I welcome any
					feedback that can help me achieve my goals.
				</Typography>
				{/* need to adjust swiper slide heights. 
				supposed to be auto but doesn't seem to be working */}
				<Swiper
					modules={[Pagination, Navigation, Autoplay]}
					loop={true}
					autoHeight={true}
					autoplay={{ delay: 10000 }}
					centeredSlides={true}
					spaceBetween={20}
					pagination={{
						clickable: true,
					}}
					navigation
					onSwiper={(swiper) => console.log(swiper)}
					style={{
						height: "auto",
						width: "100%",
						"--swiper-pagination-color": "#f9ebe0",
						"--swiper-pagination-bullet-inactive-color": "#f9ebe0",
						"--swiper-navigation-color": "#f9ebe0",
						"--swiper-navigation-size": "32px",
						"--swiper-navigation-sides-offset": "0px",
					}}
				>
					{skillsets.map((skillset, i) => {
						return (
							<SwiperSlide key={i}>
								<Box sx={{ height: "auto" }}>
									<Typography
										variant="h4"
										pb={2}
										sx={{ textAlign: "center" }}
									>
										{skillset.name}
									</Typography>
									<SkillsGrid skills={skillset.skills} />
								</Box>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Container>
		</>
	);
});
export default Skillset;
