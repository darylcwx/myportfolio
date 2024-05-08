import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Project from "./Project";
import skillsets from "../constants/skillsets";
import projects from "../constants/projects";
export default function ProjectsContent({ scrollTo }) {
  return (
    <>
      <Box>
        <Typography component="span" variant="body1">
          As a highly motivated and enthusiastic individual, I thrive on taking
          on new challenges and collaborating with others. Below are some of the
          projects I have completed since I have learnt how to code. I believe
          that no matter how big or small the project, there are always lessons
          to learn and room for improvement.
          <br></br>
          <br></br>If you are looking for a quick summary of frameworks I'm most
          familiar with, here it is:
          <Stack
            direction="row"
            spacing={4}
            flexWrap="wrap"
            justifyContent="center"
            sx={{
              paddingTop: 2,
              paddingBottom: 2,
            }}
          >
            {skillsets[5].skills.map((skill, key) => (
              <Box
                key={key}
                sx={{
                  width: "45px",
                  height: "45px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={require(`../../public/images/software/${skill.src}`)}
                  alt={skill.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </Box>
            ))}
          </Stack>
        </Typography>
        <Box>
          {projects.map((project, key) => (
            <Accordion>
              <AccordionSummary id={key} expandIcon={<ExpandMoreIcon />}>
                {project.title}
              </AccordionSummary>
              <AccordionDetails>
                <Project key={key} {...project} />
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </>
  );
}
