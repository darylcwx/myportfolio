import * as React from "react";
import { useState, useRef, forwardRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { GetThemeAndBP } from "../utils/getThemeAndBP";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import WatchIcon from "@mui/icons-material/Watch";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import CelebrationIcon from "@mui/icons-material/Celebration";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import AboutPicsComponent from "../components/AboutPicsComponent";
const About = forwardRef((props, ref) => {
	const { theme } = GetThemeAndBP();

	// tabs and swiper linkage
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef(null);
	const handleTabChange = (event, newIndex) => {
		setActiveIndex(newIndex);
		swiperRef.current.swiper.slideTo(newIndex);
	};
	const handleSlideChange = (swiper) => {
		setActiveIndex(swiper.activeIndex);
	};

	const iconSize = "24px";
	const about = [
		{
			tab: "Values",
			header: "My guiding principles",
			items: [
				{
					title: "Discipline",
					icon: "",
					description:
						"The most important virtue of all. Discipline is about doing the hard things you need to do even when you don't feel like it.",
				},
				{
					title: "Gratitude",
					icon: "",
					description:
						"Gratitude is being thankful for the things you have, for what you've gone through, and for where you are now.",
				},
				{
					title: "Humility",
					icon: "",
					description:
						"Humility is knowing that you don't know as much as you think you do. Humility kills pride and ego and allows you to have a student mindset.",
				},
				{
					title: "Mindfulness",
					icon: "",
					description:
						"Having the ability to bring back a wandering mind to stay focused and present regardless of the task at hand is pretty cool. It allows me to be 'in the zone' during work and helps me treasure how I spend my time.",
				},
				{
					title: "Leadership",
					icon: "",
					description:
						"Leadership goes beyond the workplace, and to me, it means taking responsibility of others. How I exude leadership is in the friendship and meaningful connections I build with the people I care about.",
				},
			],
		},
		{
			tab: "Hobbies",
			header: "In my free time, I...",
			items: [
				{
					title: "Do calisthenics",
					icon: <FitnessCenterIcon sx={{ fontSize: iconSize }} />,
					description:
						"By training a couple of times a week, I am able to maintain discipline, improve my physique, and promote overall health and well-being.",
					quote: "It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.",
					cite: "Socrates",
				},
				{
					title: "Build watches",
					icon: <WatchIcon sx={{ fontSize: iconSize }} />,
					description:
						"One day, a friend and I were pondering the rationale behind some watches' exorbitant price point. This initial curiosity developed into a hobby where we build our very own Seiko timepieces.",
				},
				{
					title: "Embrace unfamiliarity",
					icon: <ParaglidingIcon sx={{ fontSize: iconSize }} />,
					description:
						"I'm always eager to try new things, whether it's free-diving, going on a solo trip, or maybe even attend a woodworking lesson. Nothing compares to stepping outside of my comfort zone and immersing myself in novel experiences.",
				},
				{
					title: "Talk about ideas",
					icon: <TipsAndUpdatesIcon sx={{ fontSize: iconSize }} />,
					description:
						"This resonates with me deeply, and I find delight in conversations that revolve around ideas, as they have the potential to spark inspiration and provide valuable insights.",
					quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
					cite: "Eleanor Roosevelt",
				},
				{
					title: "Crack a cold one with the boys",
					icon: <SportsBarIcon sx={{ fontSize: iconSize }} />,
					description:
						"To celebrate, unwind and spend time with close companions. Who rejects a nice cold pint with their favorite music and good company at the end of a long week?",
				},
			],
		},
		{
			tab: "Pictures",
			header: "While a picture speaks a thousand words, here are some of mine.",
			items: [
				{
					src: "vb.jpg",
					description:
						"A small group of people who prefer to spend their Sundays playing volleyball!",
				},
				{
					src: "aocc.jpg",
					description:
						"Having a couple drinks and catching up with fellow Armour cadets, always a good time with them.",
				},
				{
					src: "mt.jpg",
					description:
						"When I joined Muay Thai as a CCA in school last semester!",
				},
				{
					src: "orochi.jpg",
					description:
						"Participated in one of SMU SCIS camps for incoming freshmen",
				},
				{
					src: "chesscg.jpg",
					description: "A typical thursday night",
				},
				{
					src: "vietnam.jpg",
					description:
						"A few friends brought us around Ho Chi Minh for all the good food and drinks 🤤",
				},
				{
					src: "csp.jpg",
					description:
						"A small gesture of goodwill for SPC MINDS Car Wash with the boys during Christmas '22",
				},
			],
		},
		// {
		// 	tab: "Fun facts",
		// 	header: "Being too formal is scary, isn't it?",
		// 	items: [
		// 		{
		// 			title: "Work hard, play harder",
		// 			icon: <CelebrationIcon sx={{ fontSize: iconSize }} />,
		// 			description:
		// 				"I strongly believe in having fun while you work. Why would you not turn a gut-wrenching task into a fun and exciting process?",
		// 		},
		// 		{
		// 			title: "My favourite drink",
		// 			icon: <EmojiFoodBeverageIcon sx={{ fontSize: iconSize }} />,
		// 			description:
		// 				"Is hands down, Pokka's houjicha!! Or beer. Beer is good too.",
		// 		},
		// 		{
		// 			title: "By nature, I'm an introvert",
		// 			icon: (
		// 				<SentimentSatisfiedIcon sx={{ fontSize: iconSize }} />
		// 			),
		// 			description:
		// 				"Solving Daryl's algorithm turns that 180 degrees.",
		// 		},
		// 	],
		// },
	];

	return (
		<Container
			name="about"
			maxWidth="md"
			sx={{
				paddingTop: "150px",
				paddingLeft: 0,
				paddingRight: 0,
				paddingBottom: "150px",
			}}
			ref={ref}
		>
			<Typography variant="h2" sx={{ textAlign: "center" }} pb={2}>
				About
			</Typography>
			<Typography variant="body1" pb={5}>
				This section provides a glimpse into my personal interests and
				values, highlighting the hobbies I enjoy and the principles that
				guide me. It offers a more holistic understanding of who I am as
				a person beyond my professional achievements.
			</Typography>
			<Tabs
				value={activeIndex}
				onChange={handleTabChange}
				centered
				textColor="secondary"
				indicatorColor="secondary"
			>
				<Tab label="values" />
				<Tab label="hobbies" />
				<Tab label="Pictures" />
				{/* <Tab label="fun facts" /> */}
			</Tabs>
			<Swiper
				ref={swiperRef}
				onSlideChange={handleSlideChange}
				slidesPerView={1}
				rewind={true}
				centeredSlides={true}
				spaceBetween={20}
			>
				{about.map((about, i) => {
					return (
						<SwiperSlide key={i}>
							<Typography
								variant="h4"
								pt={5}
								pb={2}
								sx={{ textAlign: "center" }}
							>
								{about.header}
							</Typography>
							{about.tab == "Pictures" ? (
								<AboutPicsComponent about={about} />
							) : (
								about.items.map((item, j) => {
									return (
										<Box key={j}>
											<Typography
												variant="h6"
												sx={{ display: "flex" }}
											>
												{item.title}
												<Box
													style={{
														marginLeft: "8px",
														display: "flex",
														alignItems: "center",
													}}
												>
													{item.icon}
												</Box>
											</Typography>
											<Typography variant="body1" pb={5}>
												{item.quote ? (
													<>
														<blockquote
															style={{
																backgroundColor:
																	theme
																		.palette
																		.navbar
																		.footer,
																padding:
																	"15px 20px",
																borderRadius: 8,
															}}
														>
															<q>
																<i>
																	{item.quote}
																</i>
															</q>
															<Box
																sx={{
																	textAlign:
																		"right",
																	paddingTop:
																		"8px",
																}}
															>
																—{item.cite}
															</Box>
														</blockquote>

														{item.description}
													</>
												) : (
													<>{item.description}</>
												)}
											</Typography>
										</Box>
									);
								})
							)}
						</SwiperSlide>
					);
				})}
			</Swiper>
		</Container>
	);
});
export default About;
