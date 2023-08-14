import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { GetThemeAndBP } from "../utils/getThemeAndBP";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { motion, AnimatePresence } from "framer-motion";
export default function EducationComponent({
	id,
	school,
	degree,
	tracks,
	awards,
	coCurricular,
	period,
	gpa,
	image,
	first,
	last,
}) {
	const { xs } = GetThemeAndBP();
	const styles = {
		bg: {
			backgroundSize: "cover",
		},
		center: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
		},
		blur: {
			width: "100%",
			height: "100%",
			filter: "blur(2px)",
			opacity: 0.6,
		},
		overlay: {
			width: "100%",
			height: "100%",
			position: "absolute",
			top: 0,
			left: 0,
			// background: `linear-gradient(to right, rgba(0, 0, 0, 0.0) 95%, black 100%),
			//     linear-gradient(to left, rgba(0, 0, 0, 0.0) 95%, black 100%)`,
		},
		first: {
			width: "100%",
			height: "100%",
			position: "absolute",
			top: 0,
			left: 0,

			background: `linear-gradient(to top, rgba(0, 0, 0, 0.0) 85%, black 100%)`,
			// linear-gradient(to right, rgba(0, 0, 0, 0.0) 95%, black 100%),
			// linear-gradient(to left, rgba(0, 0, 0, 0.0) 95%, black 100%)`,
		},
		last: {
			width: "100%",
			height: "100%",
			position: "absolute",
			top: 0,
			left: 0,
			background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 85%, black 100%)`,
			// linear-gradient(to right, rgba(0, 0, 0, 0.0) 90%, black 100%),
			// linear-gradient(to left, rgba(0, 0, 0, 0.0) 90%, black 100%),
		},
	};
	const hideButton = () => {
		setShowButton(false);
	};
	const [showButton, setShowButton] = useState(true);
	return (
		<ParallaxBanner
			style={{
				height: "100vh",
				zIndex: 5,
			}}
		>
			<Box sx={{ ...styles.blur }}>
				<ParallaxBannerLayer
					speed={-20}
					image={image}
					style={{
						...styles.bg,
					}}
				/>
			</Box>
			{first ? (
				<Box sx={{ ...styles.first }} />
			) : last ? (
				<Box sx={{ ...styles.last }} />
			) : (
				<Box sx={{ ...styles.overlay }} />
			)}
			<ParallaxBannerLayer style={{ ...styles.center }}>
				<Container maxWidth="md">
					<Container maxWidth="md">
						<Typography
							sx={{ paddingBottom: "0.5rem" }}
							variant={xs ? "h5" : "h2"}
						>
							{school}
						</Typography>
						<Typography
							sx={{ paddingBottom: "1.5rem" }}
							variant={xs ? "h6" : "h4"}
						>
							{degree}
						</Typography>
						<Box sx={{ paddingBottom: "1rem" }}>
							{tracks.map((track) => {
								return (
									<Typography
										key={track}
										variant={xs ? "h6" : "h5"}
									>
										{track}
									</Typography>
								);
							})}
						</Box>
						<Box sx={{ paddingBottom: "1rem" }}>
							{awards.map((award) => {
								return (
									<Typography
										key={award}
										variant={xs ? "body1" : "body1"}
									>
										{award}
									</Typography>
								);
							})}
						</Box>
						<Box sx={{ paddingBottom: "1rem" }}>
							{coCurricular.map((cca) => {
								return (
									<Typography
										key={cca}
										variant={xs ? "body2" : "body1"}
									>
										{cca}
									</Typography>
								);
							})}
						</Box>
						<Typography
							sx={{ paddingBottom: "0.5rem" }}
							variant={xs ? "body2" : "body1"}
						>
							{period}
						</Typography>
						{gpa && (
							<Typography variant={xs ? "caption" : "body1"}>
								<Box sx={{ display: "" }}>
									Cumulative GPA: {gpa}
									<AnimatePresence>
										{showButton && (
											<motion.div
												initial={false}
												animate={
													xs
														? { x: 38, y: -28 }
														: { x: 47, y: -28 }
												}
												exit={{ x: 500 }}
												transition={{
													duration: 0.2,
													ease: "easeInOut",
												}}
											>
												<Button
													sx={{
														position: "absolute",
														paddingTop: "0.125rem",
														paddingBottom:
															"0.125rem",
														paddingLeft: "0",
														paddingRight: "0",
														// transform:
														// 	"translate(-33px,-5px)",
													}}
													variant="contained"
													onClick={hideButton}
												>
													<Typography fontSize="20px">
														🙈
													</Typography>
												</Button>
											</motion.div>
										)}
									</AnimatePresence>
								</Box>
							</Typography>
						)}
					</Container>
				</Container>
			</ParallaxBannerLayer>
		</ParallaxBanner>
	);
}
