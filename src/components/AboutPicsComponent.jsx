import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function AboutPicsComponent({ about }) {
  const swiper = useSwiper();
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
          navigation
          modules={[EffectCoverflow, Pagination, Navigation]}
          style={{
            height: 400,
            "--swiper-pagination-color": "#f9ebe0",
            "--swiper-pagination-bullet-inactive-color": "#f9ebe0",
            "--swiper-navigation-color": "#f9ebe0",
            "--swiper-navigation-size": "32px",
            "--swiper-navigation-top-offset": "50%",
            "--swiper-navigation-sides-offset": "8px",
          }}>
          {about.items.map((item, i) => {
            return (
              <>
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
                    sx={{ textAlign: "center" }}>
                    {item.description}
                  </Typography>
                </SwiperSlide>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
}
