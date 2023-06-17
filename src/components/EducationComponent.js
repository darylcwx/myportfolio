import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { GetThemeAndXSBP } from "../utils/getThemeAndXSBP.js";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
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
	const { theme, xs, sm } = GetThemeAndXSBP();
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
			background: `linear-gradient(to right, rgba(0, 0, 0, 0.0) 95%, black 100%), 
                linear-gradient(to left, rgba(0, 0, 0, 0.0) 95%, black 100%)`,
		},
		first: {
			width: "100%",
			height: "100%",
			position: "absolute",
			top: 0,
			left: 0,

			background: `linear-gradient(to top, rgba(0, 0, 0, 0.0) 85%, black 100%), 
                linear-gradient(to right, rgba(0, 0, 0, 0.0) 95%, black 100%), 
                linear-gradient(to left, rgba(0, 0, 0, 0.0) 95%, black 100%)`,
		},
		last: {
			width: "100%",
			height: "100%",
			position: "absolute",
			top: 0,
			left: 0,
			background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 85%, black 100%), 
                linear-gradient(to right, rgba(0, 0, 0, 0.0) 90%, black 100%), 
                linear-gradient(to left, rgba(0, 0, 0, 0.0) 90%, black 100%)`,
		},
	};
	return (
		<ParallaxBanner
			style={{
				height: "100vh",
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
					<Typography variant={xs ? "caption" : "body1"}>
						{gpa}
					</Typography>
				</Container>
			</ParallaxBannerLayer>
		</ParallaxBanner>
	);
}
