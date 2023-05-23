import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { getNativeSelectUtilityClasses } from "@mui/material";
export default function SkillsComponent({ skills }) {
	const styles = {
		glow: {
			maxWidth: "100%",
			maxHeight: "100%",
		},
		glowHover: {
			filter: "drop-shadow(0px 0px 7px #ffffff)",
		},
	};
	const [image, setImage] = useState(null);

	const handleMouseEnter = (image) => {
		setImage(image);
	};

	const handleMouseLeave = (image) => {
		setImage(null);
	};
	return (
		<Box>
			<Grid container spacing={2}>
				{/* skills = software */}
				{skills.map((skill, i) => (
					<Grid
						item
						key={skill.name}
						xs={6}
						sm={4}
						md={3}
						sx={{ display: "flex", justifyContent: "center" }}
					>
						{skill.src.slice(-1) == "g" ? (
							<Box
								sx={{
									width: "100px",
									height: "100px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<img
									src={require(`../../public/images/software/${skill.src}`)}
									alt={skill.name}
									loading="lazy"
									style={{
										maxWidth: "100%",
										maxHeight: "100%",
										...(image === skill.src &&
											styles.glowHover),
									}}
									onMouseEnter={() =>
										handleMouseEnter(skill.src)
									}
									onMouseLeave={handleMouseLeave}
									objectFit="contain"
								/>
							</Box>
						) : (
							"test"
						)}
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
