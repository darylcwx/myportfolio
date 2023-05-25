import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Carousel from "react-material-ui-carousel";
import Typography from "@mui/material/Typography";
import { GetThemeAndXSBP } from "../utils/getThemeAndXSBP.js";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import WatchIcon from "@mui/icons-material/Watch";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import SportsBarIcon from "@mui/icons-material/SportsBar";
export default function About() {
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
	const [tab, setTab] = useState(0);

	const handleChange = (event, index) => {
		setTab(index);
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
				{
					title: "Embrace unfamiliarity",
					icon: "",
					description:
						"I have an appetite for exploring new activities and sports, it could be surfing in Bali, going on a solo backpacking trip, or maybe even attend a woodworking lesson. There's nothing quite like the adrenaline rush that comes with stepping outside of my comfort zone and immersing myself in novel experiences.",
				},
				{
					title: "Talk about ideas",
					icon: "",
					description:
						"The adage that 'Petty minds discuss people, while great minds discuss ideas.' resonates with me deeply, and I make a conscious effort to avoid engaging in gossip. Instead, I find delight in conversations that revolve around ideas, as they have the potential to spark inspiration and provide valuable insights.",
				},
				{
					title: "Crack a cold one with the boys",
					icon: "",
					description:
						"To celebrate, to unwind and to spend time with close companions. Who can reject a nice cold pint with their favorite music and good company at the end of a long week? All practiced in moderation, of course.",
				},
			],
		},
	];
	const pictures = {
		tab: "Pictures",
		header:
			"While a picture speaks a thousand words, here are some of mine.",
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
	};

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
			<Tabs value={tab} onChange={handleChange} centered>
				<Tab label="Item One" />
				<Tab label="Item Two" />
				<Tab label="Item Three" />
			</Tabs>
			<Swiper
				modules={[Autoplay]}
				slidesPerView={1}
				loop={true}
				autoplay={{ delay: 10000 }}
				centeredSlides={true}
				spaceBetween={20}
			>
				{about.map((about, i) => {
					return (
						<SwiperSlide virtualIndex={i}>
							<Typography
								variant="h4"
								pt={5}
								pb={2}
								sx={{ textAlign: "center" }}
							>
								{about.header}
							</Typography>
							{about.items.map((item, j) => {
								return (
									<Box key={j}>
										<Typography variant="h5">
											{item.title}
											<span
												style={{ marginLeft: "12px" }}
											/>
											{item.icon}
										</Typography>
										<Typography variant="body1" pb={5}>
											{item.description}
										</Typography>
									</Box>
								);
							})}
						</SwiperSlide>
					);
				})}

				{/*
					--swiper-pagination-color: var(--swiper-theme-color);
					--swiper-pagination-left: auto;
					--swiper-pagination-right: 8px;
					--swiper-pagination-bottom: 8px;
					--swiper-pagination-top: auto;
					--swiper-pagination-fraction-color: inherit;
					--swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);
					--swiper-pagination-progressbar-size: 4px;
					--swiper-pagination-bullet-size: 8px;
					--swiper-pagination-bullet-width: 8px;
					--swiper-pagination-bullet-height: 8px;
					--swiper-pagination-bullet-border-radius: 50%;
					--swiper-pagination-bullet-inactive-color: #000;
					--swiper-pagination-bullet-inactive-opacity: 0.2;
					--swiper-pagination-bullet-opacity: 1;
					--swiper-pagination-bullet-horizontal-gap: 4px;
					--swiper-pagination-bullet-vertical-gap: 6px;
				*/}

				<SwiperSlide>
					<Typography
						variant="h4"
						py={2}
						sx={{ textAlign: "center" }}
					>
						{pictures.header}
					</Typography>
					<Box style={{ width: "100%" }}>
						<Swiper
							effect={"coverflow"}
							loop={true}
							coverflowEffect={{
								rotate: 50,
								stretch: 0,
								depth: 100,
								modifier: 1,
								slideShadows: true,
							}}
							slidesPerView={"auto"}
							centeredSlides={true}
							pagination={{
								clickable: true,
							}}
							modules={[EffectCoverflow, Pagination, Autoplay]}
							autoplay={{ delay: 5000 }}
							style={{
								height: 550,
								"--swiper-pagination-color": "#f9ebe0",
								"--swiper-pagination-bullet-inactive-color":
									"#f9ebe0",
							}}
						>
							{pictures.items.map((item, i) => {
								return (
									<SwiperSlide style={{ width: "75%" }}>
										<img
											src={require(`../../public/images/personal/${item.src}`)}
											alt={item.src}
											style={{
												maxWidth: "100%",
												maxHeight: "100%",
											}}
										/>
										<Typography
											variant="body1"
											py={0}
											sx={{ textAlign: "center" }}
										>
											{item.description}
										</Typography>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</Box>
				</SwiperSlide>
			</Swiper>
		</Box>
	);
}
