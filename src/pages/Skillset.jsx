import { forwardRef, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SkillsGrid from "../components/SkillGrid";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import skillsets from "../constants/skillsets";

const Skillset = forwardRef((props, ref) => {
  const [value, setValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
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
          paddingBottom: "300px",
        }}
        ref={ref}>
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
        <Box>
          <TabContext value={value}>
            <Tabs
              onChange={handleTabChange}
              textColor="white"
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile>
              {skillsets.map((skillset, i) => {
                return skillset.name === "Familiar Tech Stack" ? null : (
                  <Tab label={skillset.name} value={i} />
                );
              })}
            </Tabs>
            <Box>
              {skillsets.map((skillset, i) => {
                return skillset.name === "Familiar Tech Stack" ? null : (
                  <TabPanel value={i} sx={{ padding: "0", paddingTop: "24px" }}>
                    <SkillsGrid
                      category={skillset.name}
                      skills={skillset.skills}
                    />
                  </TabPanel>
                );
              })}
            </Box>
          </TabContext>
        </Box>
      </Container>
    </>
  );
});
export default Skillset;
