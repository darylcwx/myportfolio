import * as React from "react";
import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Carousel from "react-material-ui-carousel";
import Typography from "@mui/material/Typography";
import { GetThemeAndXSBP } from "../utils/getThemeAndXSBP.js";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import WatchIcon from "@mui/icons-material/Watch";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import AboutPicsComponent from "../components/AboutPicsComponent.js";
export default function About() {
	const swiper = useSwiper();
	const { theme, xs } = GetThemeAndXSBP();
	const styles = {
		overlay: {
			backgroundColor: "rgba(0, 0, 0, 0.85)",
			minHeight: "calc(100vh - 48px)",
		},
		customPaginationBulletActive: {
			background: theme.palette.secondary.main,
		},
		customPaginationBullet: {
			background: theme.palette.secondary.main,
		},
	};

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

	const iconSize = "28px";
	const about = [
		{
			tab: "Values",
			header: "My guiding principles",
			items: [
				{
					title: "Discipline",
					icon: "",
					description:
						"The most important virtue of all. Discipline is about doing the things even when you do not want to do it at all. Discipline builds mental and physical strength, it is the root quality every man needs.",
				},
				{
					title: "Gratitude",
					icon: "",
					description:
						"Gratitude is looking at negative things in a positive light. It is understanding that suffering only causes growth if you're grateful.",
				},
				{
					title: "Humility",
					icon: "",
					description:
						"Having a student mindset, knowing that you don't know all that much. Humility kills pride and ego, yet allows you to continue learning, asking questions, and stay curious.",
				},
				{
					title: "Mindfulness",
					icon: "",
					description:
						"Mindfulness is the ability to bring back a wandering mind and the ability to stay focused and present, regardless of the task or activity at hand. It enables me to 'be in the zone' and prevents me from getting distracted.",
				},
				{
					title: "Leadership",
					icon: "",
					description:
						"Leadership goes beyond the workplace, and to me, it means taking responsibility of others. How I exude leadership is in the friendship and meaningful connections I build with the people I care about, where I help them to realize the greater meaning of life.",
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
						"I believe men have a duty to mould his physical body into the most capable and resilient version of itself as much as possible. By training a couple of times a week, I am able to maintain discipline, improve my physical appearance, and promote overall health and well-being.",
				},
				{
					title: "Build watches",
					icon: <WatchIcon sx={{ fontSize: iconSize }} />,
					description:
						"On a fine day, my friend and I found ourselves pondering the rationale regarding Rolex's exorbitant price point and the intricacies of their construction. This initial curiosity later developed into a hobby whereby we built our very own Seikos. This trained our patience, precision, and attention to detail, and ultimately allowing us to don a unique, personalized, and one-of-a-kind timepiece on our wrists.",
				},
				{
					title: "Embrace unfamiliarity",
					icon: <ParaglidingIcon sx={{ fontSize: iconSize }} />,
					description:
						"I have an appetite for exploring new activities and sports, it could be surfing in Bali, going on a solo backpacking trip, or maybe even attend a woodworking lesson. There's nothing quite like the adrenaline rush that comes with stepping outside of my comfort zone and immersing myself in novel experiences.",
				},
				{
					title: "Talk about ideas",
					icon: <TipsAndUpdatesIcon sx={{ fontSize: iconSize }} />,
					description:
						"The adage that 'Petty minds discuss people, while great minds discuss ideas.' resonates with me deeply, and I make a conscious effort to avoid engaging in gossip. Instead, I find delight in conversations that revolve around ideas, as they have the potential to spark inspiration and provide valuable insights.",
				},
				{
					title: "Crack a cold one with the boys",
					icon: <SportsBarIcon sx={{ fontSize: iconSize }} />,
					description:
						"To celebrate, to unwind and to spend time with close companions. Who can reject a nice cold pint with their favorite music and good company at the end of a long week? All practiced in moderation, of course.",
				},
			],
		},
		{
			tab: "Fun facts",
			header: "Some fun facts",
			items: [
				{
					title: "Do calisthenics",
					icon: "",
					description:
						"I believe men have a duty to mould his physical body into the most capable and resilient version of itself as much as possible. By training a couple of times a week, I am able to maintain discipline, improve my physical appearance, and promote overall health and well-being.",
				},
				{
					title: "Build watches",
					icon: "",
					description:
						"On a fine day, my friend and I found ourselves pondering the rationale regarding Rolex's exorbitant price point and the intricacies of their construction. This initial curiosity later developed into a hobby whereby we built our very own Seikos. This trained our patience, precision, and attention to detail, and ultimately allowing us to don a unique, personalized, and one-of-a-kind timepiece on our wrists.",
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
						"Having a couple drinks and catching up with fellow armour officers",
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
						"A friend brought us around Ho Chi Minh for all the good food and drinks 🤤",
				},
			],
		},
	];

	return (
		<Box>
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
				<Tab label="fun facts" />
				<Tab label="Pictures" />
			</Tabs>
			<Swiper
				ref={swiperRef}
				onSlideChange={handleSlideChange}
				modules={[Autoplay]}
				slidesPerView={1}
				rewind={true}
				autoplay={{ delay: 10000 }}
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
											<Typography variant="h5">
												{item.title}
												<span
													style={{
														marginLeft: "12px",
													}}
												/>
												{item.icon}
											</Typography>
											<Typography variant="body1" pb={5}>
												{item.description}
											</Typography>
										</Box>
									);
								})
							)}
						</SwiperSlide>
					);
				})}
			</Swiper>
		</Box>
	);
}
