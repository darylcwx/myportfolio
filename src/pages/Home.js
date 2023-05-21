import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Avatar from "@mui/material/Avatar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
export default function Home() {
	const theme = useTheme();
	const styles = {
		overlay: {
			backgroundColor: "rgba(0, 0, 0, 0)",
		},
	};
	const xs = useMediaQuery(theme.breakpoints.down("sm"));
	const [mouse, setMouse] = useState({ x: 0, y: 0 });
	const handleMouseMove = (e) => {
		setMouse({ x: e.clientX, y: e.clientY });
	};
	const inAppbar = mouse.y <= 48;
	const outOfScreen =
		mouse.x <= 5 ||
		mouse.y <= 5 ||
		mouse.x >= window.innerWidth - 5 ||
		mouse.y >= window.innerHeight - 5;
	const hoverEffect = {
		background:
			inAppbar || outOfScreen
				? "none"
				: `radial-gradient(600px circle at var(--mouse-x, ${mouse.x}px) var(--mouse-y, ${mouse.y}px), rgba(255, 255, 255, 0.065), transparent 40%)`,
	};

	return (
		<>
			<video
				loop
				muted
				playsInline
				autoPlay
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover",
					zIndex: "-1",
				}}
			>
				<source src="/images/space particles.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<Box
				sx={{
					height: "calc(100vh - 48px)",
					width: "100%",
					display: "flex",
					alignItems: "center",
				}}
				onMouseMove={handleMouseMove}
				style={hoverEffect}
			>
				<Container maxWidth="sm">
					<Box>
						{xs ? (
							<>
								<Box display="flex" justifyContent="center">
									<Avatar
										src="/images/me.jpeg"
										alt="Me"
										style={{
											width: 200,
											height: 200,
										}}
									/>
								</Box>
								<Typography variant="h3" my={2}>
									Hello!
								</Typography>
								<Typography variant="h5">I'm Daryl.</Typography>
								<Typography variant="h5">
									Welcome to my website.
								</Typography>
							</>
						) : (
							<>
								<Box>
									<Box
										sx={{
											display: " flex",
											justifyContent: "space-between",
										}}
									>
										<Stack
											sx={{
												display: "flex",
												justifyContent: "end",
											}}
										>
											<Typography variant="h3" my={2}>
												Hello!
											</Typography>
											<Typography variant="h5">
												I'm Daryl.
											</Typography>
											<Typography variant="h5">
												Welcome to my website.
											</Typography>
										</Stack>
										<Box>
											<Avatar
												src="/images/me.jpeg"
												alt="Me"
												style={{
													width: 200,
													height: 200,
												}}
											/>
										</Box>
									</Box>
								</Box>
							</>
						)}
					</Box>

					<Typography variant="body2" my={2}>
						Here, you can find the highlights of my career,
						education, and skill sets, and perhaps even get to know
						me a little better.
					</Typography>
					<Typography variant="body2" my={2}>
						Enjoy your visit!
					</Typography>
					<Stack
						direction={{ xs: "column", sm: "row" }}
						spacing={{ xs: 1, sm: 2 }}
					>
						<Button
							component={Link}
							to="/experience"
							variant="contained"
						>
							Experience
						</Button>
						<Button
							component={Link}
							to="/about"
							variant="contained"
							endIcon={<ChevronRightIcon />}
						>
							Read more
						</Button>
					</Stack>
				</Container>
			</Box>
		</>
	);
}
