import * as React from "react";
import { useState, useRef, forwardRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { GetThemeAndBP } from "../utils/getThemeAndBP";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import AboutPicsComponent from "../components/AboutPicsComponent";
import AboutMusic from "../components/AboutMusic";
import about from "../constants/about";

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

  return (
    <Container
      name="about"
      maxWidth="md"
      sx={{
        paddingTop: "150px",
        paddingLeft: 0,
        paddingRight: 0,
      }}
      ref={ref}
    >
      <Typography variant="h2" sx={{ textAlign: "center" }} pb={2}>
        About
      </Typography>
      <Typography variant="body1" pb={5}>
        This section provides a glimpse into my personal interests and values,
        highlighting the hobbies I enjoy and the principles that guide me. It
        offers a more holistic understanding of who I am as a person beyond my
        professional achievements.
      </Typography>
      <Tabs
        value={activeIndex}
        onChange={handleTabChange}
        centered
        textColor="inherit"
        indicatorColor="secondary"
      >
        <Tab label="values" />
        <Tab label="hobbies" />
        <Tab label="Pictures" />
        <Tab label="Other" />
        {/* <Tab label="fun facts" /> */}
      </Tabs>
      <Swiper
        ref={swiperRef}
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        rewind={true}
        centeredSlides={true}
        spaceBetween={20}
        autoHeight={true}
      >
        {about.map((about, key) => {
          return (
            <SwiperSlide key={key}>
              <Typography
                variant="h5"
                pt={5}
                pb={5}
                sx={{ textAlign: "center" }}
              >
                {about.header}
              </Typography>
              {about.tab === "Pictures" ? (
                <Box sx={{ paddingBottom: "40px" }}>
                  <AboutPicsComponent about={about} />
                </Box>
              ) : (
                about.items.map((item, key) => (
                  <div key={key}>
                    <Box>
                      <Typography variant="h6" sx={{ display: "flex" }}>
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
                      <Box pb={5}>
                        {item.quote ? (
                          <div>
                            <blockquote
                              style={{
                                backgroundColor: theme.palette.navbar.footer,
                                padding: "15px 20px",
                                borderRadius: 8,
                              }}
                            >
                              <q>
                                <i>{item.quote}</i>
                              </q>
                              <Box
                                sx={{
                                  textAlign: "right",
                                  paddingTop: "8px",
                                }}
                              >
                                —{item.cite}
                              </Box>
                            </blockquote>

                            {item.description}
                          </div>
                        ) : item.link ? (
                          <>
                            {item.description}
                            <Button
                              variant="contained"
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ marginLeft: "4px", marginTop: "4px" }}
                            >
                              Can I see?
                            </Button>
                          </>
                        ) : (
                          <>{item.description}</>
                        )}
                      </Box>
                    </Box>
                  </div>
                ))
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
});
export default About;
