import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function AboutPicsComponent({ about }) {
	return (
		<Box>
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
						"--swiper-pagination-bullet-inactive-color": "#f9ebe0",
					}}
				>
					{about.items.map((item, i) => {
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
		</Box>
	);
}
