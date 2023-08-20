import * as React from "react";
import { forwardRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SkillsGrid from "../components/SkillGrid";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import TimerIcon from "@mui/icons-material/Timer";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import skillsets from "../constants/skillsets";
SwiperCore.use([Navigation]);

const Skillset = forwardRef((props, ref) => {
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
						if (skillset.name === "Familiar Tech Stack") {
							return null;
						}
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
