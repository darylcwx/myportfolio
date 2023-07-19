import React from "react";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { GetThemeAndBP } from "../utils/getThemeAndBP";
import { IconButton } from "@mui/material";
import SkillDetails from "./SkillDetails.jsx";
import { motion, AnimatePresence } from "framer-motion";
export default function SkillGrid({ skills }) {
	const { theme, xs } = GetThemeAndBP();

	const [selectedSkill, setSelectedSkill] = useState(null);
	const handleClick = (skill, e) => {
		setSelectedSkill(skill);
	};
	const handleClose = () => {
		setSelectedSkill(null);
	};

	// handles click outside of paper
	const paperRef = useRef(null);
	const containerRef = useRef(null);
	useEffect(() => {
		const handleOutsideClick = (event) => {
			console.log(event.target);
			//if (event.target.id === "paper") {
			handleClose();
			//}
		};
		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	// to fix clickAway, can ignore for now
	return (
		<>
			<Grid container spacing={2} sx={{ paddingBottom: "50px" }}>
				{skills.map((skill) => (
					<Grid
						key={skill.name}
						item
						xs={6}
						sm={4}
						md={3}
						sx={{ display: "flex", justifyContent: "center" }}
					>
						<Box
							sx={{
								width: "100px",
								height: "100px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							{typeof skill.src === "object" ? (
								<motion.div
									initial={false}
									whileHover={{
										scale: 1.2,
										filter: `drop-shadow(0px 0px 7px ${theme.palette.secondary.main})`,
									}}
									whileTap={{ scale: 1 }}
									style={{
										filter: `drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))`,
									}}
								>
									<IconButton
										onClick={(e) => handleClick(skill, e)}
									>
										{React.cloneElement(skill.src, {
											sx: {
												fontSize: "96px",
												color: theme.palette.secondary
													.main,
											},
										})}
									</IconButton>
								</motion.div>
							) : (
								<motion.div
									initial={false}
									whileHover={{
										scale: 1.2,
										transition:
											"transform 0.3s ease-in-out",
										filter: `drop-shadow(0px 0px 7px ${theme.palette.secondary.main})`,
									}}
									whileTap={{ scale: 1 }}
									style={{
										filter: `drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))`,
									}}
								>
									<img
										src={require(`../../public/images/software/${skill.src}`)}
										alt={skill.name}
										style={{
											maxWidth: "100%",
											maxHeight: "100%",
										}}
										onClick={(e) => handleClick(skill, e)}
									/>
								</motion.div>
							)}
						</Box>
					</Grid>
				))}
			</Grid>
			<AnimatePresence>
				{selectedSkill && (
					<Box
						id="paper"
						key="paper"
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
						}}
					>
						<motion.div
							initial={{ scale: 0, opacity: 0, y: -200 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0, opacity: 0, y: -200 }}
							transition={{ duration: 0.2 }}
						>
							<SkillDetails
								skill={selectedSkill}
								onClose={handleClose}
							/>
						</motion.div>
					</Box>
				)}
			</AnimatePresence>
		</>
	);
}
