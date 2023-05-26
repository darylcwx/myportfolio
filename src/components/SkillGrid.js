import React from "react";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { GetThemeAndXSBP } from "../utils/getThemeAndXSBP.js";
import { IconButton, Typography } from "@mui/material";
import SkillDetails from "./SkillDetails.js";
import { useSpring, useTransition, animated } from "@react-spring/web";
export default function SkillGrid({ skills }) {
	const { theme, xs } = GetThemeAndXSBP();
	const styles = {
		glow: {
			maxWidth: "100%",
			maxHeight: "100%",
		},
		onHover: {
			transform: "scale(1.2)",
			transition: "transform 0.3s ease-in-out",
			filter: `drop-shadow(0px 0px 7px ${theme.palette.secondary.main})`,
		},
		onUnhover: {
			transition: "transform 0.3s ease-in-out",
		},
	};

	const [image, setImage] = useState(null);
	const handleMouseEnter = (image) => {
		setImage(image);
	};
	const handleMouseLeave = () => {
		setImage(null);
	};

	// handles animation
	const [animateIn, setAnimateIn] = useState(false);
	const [selectedSkill, setSelectedSkill] = useState(null);
	const [mouse, setMouse] = useState({ x: 0, y: -500 });
	// paper still there (selectedSkill != null), just animated away
	const handleClose = () => {
		setAnimateIn(false);
	};

	// handles click outside of paper
	const paperRef = useRef(null);
	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (paperRef.current && !paperRef.current.contains(event.target)) {
				handleClose();
			}
		};
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	const [height, setHeight] = useState(0);
	const boxRef = useRef(null);
	useEffect(() => {
		if (boxRef) {
			const height = boxRef.current.clientHeight;
			if (height != 0) {
				setHeight(height);
			}
		}
	}, []);

	// animation from image to position
	const transitions = useSpring({
		opacity: animateIn ? 1 : 0,
		scale: animateIn ? 1 : 0,
		x: animateIn ? 0 : mouse.x,
		y: animateIn ? -height : mouse.y,
	});

	const handleClick = (skill, e) => {
		setAnimateIn(true);
		setSelectedSkill(skill);
	};
	useEffect(() => {
		const updateMouse = (e) => {
			if (paperRef.current != null) {
				const paper = paperRef.current.getBoundingClientRect();
				const offsetY = -paper.y + e.clientY;
				const width = window.innerWidth / 2;
				const offsetX = e.clientX - width;
				setMouse({ x: offsetX, y: offsetY });
			}
		};

		window.addEventListener("mousemove", updateMouse);

		return () => {
			window.removeEventListener("mousemove", updateMouse);
		};
	}, []);

	// to fix clickAway, can ignore for now
	return (
		<>
			<Box
				ref={boxRef}
				sx={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "absolute",
				}}
			>
				<Grid container spacing={2}>
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
									<IconButton
										onMouseEnter={() =>
											handleMouseEnter(
												skill.src.type.type.render
													.displayName
											)
										}
										onMouseLeave={handleMouseLeave}
										onClick={(e) => handleClick(skill, e)}
										objectFit="contain"
										style={{
											maxWidth: "100%",
											maxHeight: "100%",
											...styles.onUnhover,
											...(image ===
												skill.src.type.type.render
													.displayName &&
												styles.onHover),
										}}
									>
										{React.cloneElement(skill.src, {
											sx: {
												fontSize: "100px",
												color: theme.palette.secondary
													.main,
											},
										})}
									</IconButton>
								) : (
									<img
										src={require(`../../public/images/software/${skill.src}`)}
										alt={skill.name}
										loading="lazy"
										style={{
											maxWidth: "100%",
											maxHeight: "100%",
											...styles.onUnhover,
											...(image === skill.src &&
												styles.onHover),
										}}
										onMouseEnter={() =>
											handleMouseEnter(skill.src)
										}
										onMouseLeave={handleMouseLeave}
										onClick={(e) => handleClick(skill, e)}
										objectFit="contain"
									/>
								)}
							</Box>
						</Grid>
					))}
				</Grid>
				{selectedSkill && (
					<Box
						ref={paperRef}
						sx={{
							width: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							position: "absolute",
							bottom: -200,
						}}
					>
						<animated.div style={transitions}>
							<SkillDetails
								skill={selectedSkill}
								onClose={handleClose}
							/>
						</animated.div>
					</Box>
				)}
			</Box>
		</>
	);
}
