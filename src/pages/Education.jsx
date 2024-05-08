import React from "react";
import { forwardRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Parallax } from "react-scroll-parallax";
import EducationComponent from "../components/EducationComponent";
import educations from "../constants/education";
const Education = forwardRef((props, ref) => {
  return (
    <Box
      name="education"
      sx={{
        paddingTop: "150px",
        paddingLeft: "0px",
        paddingRight: "0px",
        paddingBottom: "300px",
      }}
      ref={ref}
    >
      <Typography variant="h2" pb={5} sx={{ textAlign: "center" }}>
        My Education
      </Typography>
      <Parallax easing="easeInOut">
        {educations.map((education, key) => (
          <EducationComponent key={key} {...education} />
        ))}
      </Parallax>
    </Box>
  );
});
export default Education;
