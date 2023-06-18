import * as React from "react";
import { useState, useEffect, useRef, forwardRef } from "react";
//import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { GetThemeAndBP } from "../utils/getThemeAndBP.js";
import Avatar from "@mui/material/Avatar";
import { motion } from "framer-motion";
import SouthIcon from "@mui/icons-material/South";
const Home = forwardRef((props, ref) => {
	const { xs } = GetThemeAndBP();
	return (
		<Container
			name="home"
			sx={{
				height: "calc(100vh - 48px)",
				width: "80%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				paddingLeft: 0,
				paddingRight: 0,
				marginBottom: "500px",
			}}
			ref={ref}
		>
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
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
					>
						<div variant="h3" my={2}>
							Hello!
						</div>
					</motion.div>
					<Typography variant="h5">I'm Daryl.</Typography>
					<Typography variant="h5">Welcome to my website.</Typography>
				</>
			) : (
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Stack
						sx={{
							display: "flex",
							justifyContent: "end",
						}}
					>
						<motion.div
							animate={{
								opacity: [0, 1.2, 1.2, 1, 1],
								scale: [0, 1.2, 1.2, 1, 1],
								x: [325, 325, 325, 0, 0],
								y: [100, 100, 100, 0, 0],
							}}
							transition={{
								duration: 6,
								times: [0, 0.1, 0.5, 0.6, 1],
								delay: 0.75,
							}}
						>
							<Typography variant="h3" my={2}>
								Hello!
							</Typography>
						</motion.div>
						<motion.div
							animate={{
								opacity: [0, 0, 1, 1, 1, 1],
								scale: [0, 0, 1, 1, 1, 1],
								x: [325, 325, 325, 325, 0, 0],
								y: [100, 100, 100, 100, 0, 0],
							}}
							transition={{
								duration: 6,
								times: [0, 0.15, 0.2, 0.55, 0.65, 1],
								delay: 0.75,
							}}
						>
							<Typography variant="h5">I'm Daryl.</Typography>
						</motion.div>
						<motion.div
							animate={{
								opacity: [0, 0, 1, 1, 1, 1],
								scale: [0, 0, 1, 1, 1, 1],
								x: [325, 325, 325, 325, 0, 0],
								y: [100, 100, 100, 100, 0, 0],
							}}
							transition={{
								duration: 6,
								times: [0, 0.25, 0.3, 0.6, 0.7, 1],
								delay: 0.75,
							}}
						>
							<Typography variant="h5">
								Welcome to my website.
							</Typography>
						</motion.div>
					</Stack>
					<motion.div
						animate={{
							opacity: [0, 1, 1, 1, 1],
							scale: [0, 1, 1, 1, 1],
							x: [-200, -200, -200, 0, 0],
							y: [-50, -50, -50, 0, 0],
						}}
						transition={{
							duration: 6,
							times: [0, 0.1, 0.7, 0.8, 1],
							delay: 0.75,
						}}
					>
						<Avatar
							src="/images/me.jpeg"
							alt="Me"
							style={{
								width: 200,
								height: 200,
							}}
						/>
					</motion.div>
				</Box>
			)}
			<motion.div
				initial={{ opacity: 0, y: 500 }}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 1,
					delay: 5.5,
				}}
			>
				<Typography variant="body2" my={2}>
					Here, you can find the highlights of my career, education,
					and skill sets, and perhaps even get to know me a little
					better.
				</Typography>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 500 }}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 1,
					delay: 8,
				}}
			>
				<Typography variant="body2" my={2}>
					Enjoy your stay!
				</Typography>
			</motion.div>

			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					position: "absolute",
					bottom: "50px",
					left: "50%",
				}}
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
					}}
					transition={{
						duration: 0.75,
						delay: 9,
					}}
				>
					<motion.div
						animate={{
							y: [0, 15, 0],
						}}
						transition={{
							duration: 1,
							delay: 9,
							times: [0, 0.5, 1],
							repeat: Infinity,
							repeatDelay: 1,
						}}
					>
						<SouthIcon sx={{ fontSize: "32px" }} />
					</motion.div>
				</motion.div>
			</Box>
		</Container>
	);
});
export default Home;
