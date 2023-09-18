import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Project from "./Project";
import skillsets from "../constants/skillsets";
import projects from "../constants/projects";
export default function ProjectsContent({ scrollTo }) {
	return (
		<>
			<Box>
				<Typography variant="body1">
					As a highly motivated and enthusiastic individual, I thrive
					on taking on new challenges and collaborating with others to
					accomplish shared goals. Below are some of the projects I
					have completed since I have learnt how to code, which
					highlights my passion for learning and my determination to
					deliver quality work.
					<br></br>
					<br></br>I believe that no matter how big or small the
					project, there are always lesson to learn and room for
					improvement. Therefore, I am always excited to take on new
					projects and will put in the effort necessary to see them
					through to completion.
					<br></br>
					<br></br>If you are looking for a quick summary of the tech
					stack I am familiar with, here it is:
					<Stack
						direction="row"
						spacing={4}
						flexWrap="wrap"
						sx={{ paddingTop: 2, paddingBottom: 2 }}
					>
						{skillsets[4].skills.map((skill) => (
							<Box
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
					{projects.map((project) => (
						<Project key={project.title} {...project} />
					))}
				</Box>
			</Box>
		</>
	);
}
