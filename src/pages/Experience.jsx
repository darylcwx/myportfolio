import * as React from "react";
import { useState, forwardRef } from "react";
import ProjectsContent from "../components/ProjectsContent";
import ExperienceContent from "../components/ExperienceContent";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GetThemeAndBP } from "../utils/getThemeAndBP";
import TerminalIcon from "@mui/icons-material/Terminal";
import Diversity3Icon from "@mui/icons-material/Diversity3";
const Experience = forwardRef((props, ref) => {
	const { theme, xs } = GetThemeAndBP();
	const [isProjects, setIsProjects] = useState(true);
	const handleSwap = () => {
		setIsProjects(!isProjects);
	};
	const scrollTo = (element) => {
		element.current.scrollIntoView({ behavior: "smooth" });
	};
	const styles = {
		overlay: {
			backgroundColor: "rgba(0, 0, 0, 0.85)",
			minHeight: "calc(100vh - 48px)",
		},
	};
	return (
		<Container
			name="experience"
			maxWidth="md"
			sx={{
				paddingTop: "150px",
				paddingLeft: 0,
				paddingRight: 0,
				paddingBottom: "300px",
			}}
			ref={ref}
		>
			<Typography variant="h2" sx={{ textAlign: "center" }} pb={5}>
				Experience and Projects
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: xs ? "column" : "row",
					justifyContent: xs ? "center" : "space-between",
					paddingBottom: xs ? 0 : "16px",
				}}
			>
				{xs ? (
					<>
						<Button
							variant="contained"
							onClick={handleSwap}
							startIcon={
								isProjects ? (
									<Diversity3Icon />
								) : (
									<TerminalIcon />
								)
							}
						>
							{isProjects ? "Part-Time Experience" : "Projects"}
						</Button>
						<Typography
							variant="h4"
							sx={{
								textAlign: xs ? "center" : "left",
							}}
							py={2}
						>
							{isProjects ? "Projects" : "Part-Time Experience"}
						</Typography>
					</>
				) : (
					<>
						<Typography
							variant="h4"
							sx={{
								textAlign: xs ? "center" : "left",
							}}
						>
							{isProjects ? "Projects" : "Part-Time Experience"}
						</Typography>
						<Button
							variant="contained"
							onClick={handleSwap}
							startIcon={
								isProjects ? (
									<Diversity3Icon />
								) : (
									<TerminalIcon />
								)
							}
						>
							{isProjects ? "Part-Time Experience" : "Projects"}
						</Button>
					</>
				)}
			</Box>

			<Box>
				{isProjects ? (
					<ProjectsContent scrollTo={scrollTo} />
				) : (
					<ExperienceContent />
				)}
			</Box>
		</Container>
	);
});
export default Experience;
