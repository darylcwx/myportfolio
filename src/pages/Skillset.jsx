import { forwardRef, useState, useRef } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SkillsGrid from "../components/SkillGrid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import skillsets from "../constants/skillsets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";

const Skillset = forwardRef((props, ref) => {
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
    <>
      <Container
        name="skillset"
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
          Skillsets
        </Typography>
        <Typography variant="body1" pb={5}>
          Here are my skillsets, which I believe are above average compared to
          peers at my level. However, I recognize that there is always room for
          improvement and growth, which makes my self-rating highly subjective.
          Therefore, I am committed to expanding my skills and knowledge, and I
          welcome any feedback that can help me achieve my goals.
        </Typography>
        <Tabs
          value={activeIndex}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {skillsets.map((skillset, key) =>
            skillset.name === "Familiar Tech Stack" ? null : (
              <Tab key={key} label={skillset.name} value={key} />
            )
          )}
        </Tabs>
        <Swiper
          autoHeight={true}
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          slidesPerView={1}
          rewind={true}
          centeredSlides={true}
          spaceBetween={20}
          style={{ paddingTop: "24px" }}
        >
          {skillsets.map((skillset, key) => {
            return skillset.name === "Familiar Tech Stack" ? null : (
              <SwiperSlide key={key}>
                <SkillsGrid category={skillset.name} skills={skillset.skills} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
});
export default Skillset;
