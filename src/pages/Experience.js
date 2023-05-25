import * as React from "react";
import { useState } from "react";
import ProjectsContent from "../components/ProjectsContent.js";
import ExperienceContent from "../components/ExperienceContent.js";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GetThemeAndXSBP } from "../utils/getThemeAndXSBP.js";
import TerminalIcon from "@mui/icons-material/Terminal";
import Diversity3Icon from "@mui/icons-material/Diversity3";
export default function Experience() {
	const { theme, xs } = GetThemeAndXSBP();
	const [isProjects, setIsProjects] = useState(true);
	const handleSwap = () => {
		setIsProjects(!isProjects);
	};
	const styles = {
		overlay: {
			backgroundColor: "rgba(0, 0, 0, 0.85)",
			minHeight: "calc(100vh - 48px)",
		},
	};
	return (
		<Container maxWidth="md">
			<Typography variant="h2" sx={{ textAlign: "center" }} pb={5}>
				Experience and Projects
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: xs ? "column" : "row",
					justifyContent: xs ? "center" : "space-between",
				}}
				pb={5}
			>
				<Typography
					variant="h4"
					sx={{
						textAlign: xs ? "center" : "left",
						paddingBottom: xs ? 2 : 0,
					}}
				>
					{isProjects ? "Projects" : "Part-Time Experience"}
				</Typography>
				<Button
					variant="contained"
					onClick={handleSwap}
					startIcon={
						isProjects ? <Diversity3Icon /> : <TerminalIcon />
					}
				>
					{isProjects ? "Part-Time Experience" : "Projects"}
				</Button>
			</Box>

			<Box>
				{isProjects ? <ProjectsContent /> : <ExperienceContent />}
			</Box>
		</Container>
	);
}
