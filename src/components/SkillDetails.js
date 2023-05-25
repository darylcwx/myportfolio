import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { GetThemeAndXSBP } from "../utils/getThemeAndXSBP.js";

export default function SkillDetails({ skill, onClose }) {
	const { theme, xs } = GetThemeAndXSBP();
	const styles = {
		sec: {
			color: theme.palette.secondary.main,
		},
	};
	return (
		<Box>
			<Paper
				sx={{
					padding: "24px",
				}}
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography variant="h5">{skill.name}</Typography>
					<IconButton aria-label="close" onClick={onClose}>
						<CloseIcon
							fontSize="small"
							sx={{
								fontSize: "24px",
								color: theme.palette.secondary.main,
							}}
						/>
					</IconButton>
				</Stack>
				<Slider
					disabled
					value={skill.level}
					sx={{ ...styles.sec }}
					components={{ Thumb: "false" }}
					componentsProps={{ Track: { ...styles.sec } }}
				/>
				{/* <Typography variant="body1">{skill.level}</Typography> */}
			</Paper>
		</Box>
	);
}
