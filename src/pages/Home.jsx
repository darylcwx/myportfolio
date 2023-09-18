import * as React from "react";
import { forwardRef } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { GetThemeAndBP } from "../utils/getThemeAndBP";
import Avatar from "@mui/material/Avatar";
import { motion } from "framer-motion";
import SouthIcon from "@mui/icons-material/South";
const Home = forwardRef((props, ref) => {
	const { sm } = GetThemeAndBP();
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
				marginBottom: "0px",
			}}
			ref={ref}
		>
			{sm ? (
				<>
					<motion.div
						animate={{
							opacity: [0, 1.2, 1.2, 1, 1],
							scale: [0, 1.2, 1.2, 1, 1],
							y: [-50, -50, -50, 0, 0],
						}}
						transition={{
							duration: 6,
							times: [0, 0.1, 0.5, 0.6, 1],
							delay: 0.75,
						}}
					>
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
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 300 }}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.75,
							delay: 1,
						}}
					>
						<Typography variant="h3" my={2}>
							Hello!
						</Typography>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 300 }}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.75,
							delay: 1.75,
						}}
					>
						<Typography variant="h5">I'm Daryl.</Typography>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 300 }}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.75,
							delay: 2.75,
						}}
					>
						<Typography variant="h5">
							Welcome to my website.
						</Typography>
					</motion.div>
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
								x: [300, 300, 300, 0, 0],
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
								scale: [0, 0, 1.2, 1.2, 1, 1],
								x: [300, 300, 300, 300, 0, 0],
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
								scale: [0, 0, 1.2, 1.2, 1, 1],
								x: [220, 220, 220, 220, 0, 0],
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
			<Box>
				<motion.div
					key={sm}
					initial={{ opacity: 0, y: 500 }}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 1,
						delay: sm ? 4 : 5.5,
					}}
				>
					<Typography variant="body2" pt={4}>
						I'm a penultimate student in Singapore Management
						University (SMU) specializing in Cloud Solutions and
						Business Analytics. My skills lean towards that of a
						frontend developer but I'd love to keep my options open!
					</Typography>
				</motion.div>
			</Box>
			{/* Enjoy your stay */}
			<Box>
				<motion.div
					key={sm}
					initial={{ opacity: 0, y: 500 }}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 1,
						delay: sm ? 8 : 8.5,
					}}
				>
					<Typography variant="body2" pt={2}>
						Enjoy your visit!
					</Typography>
				</motion.div>
			</Box>
			{/* Arrow down */}
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
					key={sm}
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
					}}
					transition={{
						duration: 0.75,
						delay: 9.5,
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
