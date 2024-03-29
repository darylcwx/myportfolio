import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { scroller } from "react-scroll";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { GetThemeAndBP } from "../utils/getThemeAndBP";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
export default function Navbar({ location }) {
	const { theme, xs, md } = GetThemeAndBP();
	const [isOpen, setIsOpen] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const toggleDrawer = () => {
		setIsOpen(!isOpen);
	};
	const scrollTo = (element) => {
		scroller.scrollTo(element, {
			duration: 1000,
			delay: 100,
			smooth: "easeInOut",
		});
	};
	const sideNav = {
		open: (height = 1000) => ({
			clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
			transition: {
				type: "spring",
				stiffness: 20,
				restDelta: 2,
			},
			backdropFilter: "blur(3px)",
			backgroundColor: "rgba(29, 36, 53, 0.85)",
		}),
		closed: {
			clipPath: "circle(20px at -28px -28px)",
			transition: {
				delay: 0.5,
				type: "spring",
				stiffness: 400,
				damping: 40,
			},
			backdropFilter: "blur(3px)",
			backgroundColor: "rgba(29, 36, 53, 0.85)",
		},
	};
	const ul = {
		open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
		closed: {
			transition: {
				staggerChildren: 0.1,
				staggerDirection: -1,
			},
		},
	};
	const li = {
		open: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000 },
			},
		},
		closed: {
			y: 100,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 },
			},
		},
	};

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<AppBar
				elevation={md ? 3 : 0}
				position="fixed"
				sx={{
					zIndex: !xs && !md ? 0 : 3,
					backdropFilter: md ? "blur(3px)" : "",
					backgroundColor: md
						? theme.palette.navbar.main
						: theme.palette.navbar.large,
				}}
			>
				<Toolbar>
					{xs ? ( // mobile
						<>
							<Box sx={{ flexGrow: 1 }}></Box>
							<Box
								style={{
									display: "flex",
									alignItems: "center",
								}}
								onClick={() => {
									scrollTo("home");
								}}
							>
								<img
									src="/images/logo.png"
									alt="Logo"
									style={{ height: "30px" }}
								/>
							</Box>
						</>
					) : md ? ( // app bar normal
						<>
							<Box
								style={{
									display: "flex",
									alignItems: "center",
								}}
								onClick={() => {
									scrollTo("home");
								}}
							>
								<img
									src="/images/logo.png"
									alt="Logo"
									style={{ height: "30px" }}
								/>
							</Box>
							<Box sx={{ flexGrow: 1 }} />
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<motion.div
									initial={false}
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
									style={{ margin: "0 8px" }}
								>
									<Typography
										sx={{
											padding: "2px 2px",
											cursor: "pointer",
											fontSize: "0.875rem",
										}}
										onClick={() => {
											scrollTo("experience");
										}}
									>
										Experience
									</Typography>
								</motion.div>
								<motion.div
									initial={false}
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
									style={{ margin: "0 8px" }}
								>
									<Typography
										sx={{
											padding: "2px 2px",
											cursor: "pointer",
											fontSize: "0.875rem",
										}}
										onClick={() => {
											scrollTo("skillset");
										}}
									>
										Skillset
									</Typography>
								</motion.div>
								<motion.div
									initial={false}
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
									style={{ margin: "0 8px" }}
								>
									<Typography
										sx={{
											padding: "2px 2px",
											cursor: "pointer",
											fontSize: "0.875rem",
										}}
										onClick={() => {
											scrollTo("education");
										}}
									>
										Education
									</Typography>
								</motion.div>
								<motion.div
									initial={false}
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
									style={{ margin: "0 8px" }}
								>
									<Typography
										sx={{
											padding: "2px 2px",
											cursor: "pointer",
											fontSize: "0.875rem",
										}}
										onClick={() => {
											scrollTo("about");
										}}
									>
										About Me
									</Typography>
								</motion.div>
							</Box>
						</>
					) : (
						// appbar with logo only
						<>
							<Box
								style={{
									display: "flex",
									alignItems: "center",
								}}
								onClick={() => {
									scrollTo("home");
								}}
							>
								<img
									src="/images/logo.png"
									alt="Logo"
									style={{ height: "30px" }}
								/>
							</Box>
						</>
					)}
				</Toolbar>
			</AppBar>
			{xs ? (
				<>
					<div
						style={{
							position: "fixed",
							top: 0,
							left: 0,
							padding: "4px",
							zIndex: 3,
						}}
					>
						<Hamburger size={20} rounded onToggle={toggleDrawer} />
						<motion.div
							initial={false}
							animate={isOpen ? "open" : "closed"}
							variants={sideNav}
							style={{
								left: 0,
								top: "56px",
								width: "300px",
								height: "calc(100vh)",
								position: "fixed",
							}}
						>
							<motion.div
								style={{
									height: "90%",
									display: "flex",
									flexDirection: "column",
								}}
								variants={ul}
							>
								<Box
									style={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										cursor: "pointer",
										padding: "10px 15px",
									}}
								>
									<motion.div
										initial={false}
										animate={
											location == "home"
												? {
														scale: 1.2,
														filter: `drop-shadow(0px 0px 3px ${theme.palette.secondary.main})`,
												  }
												: { scale: 1, filter: "" }
										}
										variants={li}
									>
										<Typography
											variant="body1"
											onClick={() => {
												toggleDrawer();
												scrollTo("home");
											}}
											sx={{ paddingLeft: "10px" }}
										>
											Home
										</Typography>
									</motion.div>
								</Box>
								<motion.div
									style={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										cursor: "pointer",
										padding: "10px 15px",
									}}
								>
									<motion.div
										initial={false}
										animate={
											location == "experience"
												? {
														scale: 1.2,
														filter: `drop-shadow(0px 0px 3px ${theme.palette.secondary.main})`,
												  }
												: { scale: 1, filter: "" }
										}
										variants={li}
									>
										<Typography
											variant="body1"
											onClick={() => {
												toggleDrawer();
												scrollTo("experience");
											}}
											sx={{ paddingLeft: "10px" }}
										>
											Experience
										</Typography>
									</motion.div>
								</motion.div>
								<Box
									style={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										cursor: "pointer",
										padding: "10px 15px",
									}}
								>
									<motion.div
										initial={false}
										animate={
											location == "skillset"
												? {
														scale: 1.2,
														filter: `drop-shadow(0px 0px 3px ${theme.palette.secondary.main})`,
												  }
												: { scale: 1, filter: "" }
										}
										variants={li}
									>
										<Typography
											variant="body1"
											onClick={() => {
												toggleDrawer();
												scrollTo("skillset");
											}}
											sx={{ paddingLeft: "10px" }}
										>
											Skillset
										</Typography>
									</motion.div>
								</Box>
								<Box
									style={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										cursor: "pointer",
										padding: "10px 15px",
									}}
								>
									<motion.div
										initial={false}
										animate={
											location == "education"
												? {
														scale: 1.2,
														filter: `drop-shadow(0px 0px 3px ${theme.palette.secondary.main})`,
												  }
												: { scale: 1, filter: "" }
										}
										variants={li}
									>
										<Typography
											variant="body1"
											onClick={() => {
												toggleDrawer();
												scrollTo("education");
											}}
											sx={{ paddingLeft: "10px" }}
										>
											Education
										</Typography>
									</motion.div>
								</Box>
								<Box
									style={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										cursor: "pointer",
										padding: "10px 15px",
									}}
								>
									<motion.div
										initial={false}
										animate={
											location == "about"
												? {
														scale: 1.2,
														filter: `drop-shadow(0px 0px 3px ${theme.palette.secondary.main})`,
												  }
												: { scale: 1, filter: "" }
										}
										variants={li}
									>
										<Typography
											variant="body1"
											onClick={() => {
												toggleDrawer();
												scrollTo("about");
											}}
											sx={{ paddingLeft: "10px" }}
										>
											About
										</Typography>
									</motion.div>
								</Box>
								<Box sx={{ marginTop: "auto" }}>
									<Box
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											cursor: "default",
											padding: "0px 15px",
											marginTop: "auto",
										}}
									>
										<motion.div variants={li}>
											<Typography
												variant="caption"
												sx={{ paddingLeft: "10px" }}
											>
												Copyright © 2023 Daryl Chua{" "}
											</Typography>
										</motion.div>
									</Box>
									<Box
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											cursor: "default",
											padding: "0px 15px",
										}}
									>
										<motion.div variants={li}>
											<Typography
												variant="caption"
												sx={{ paddingLeft: "10px" }}
											>
												All rights reserved
											</Typography>
										</motion.div>
									</Box>
								</Box>
							</motion.div>
						</motion.div>
					</div>
				</>
			) : md ? (
				<></>
			) : (
				<Box
					sx={{
						position: "fixed",
						left: "5px",
						top: "40%",
						display: "flex",
						flexDirection: "column",
						zIndex: 3,
					}}
				>
					<motion.div
						initial={false}
						animate={
							location == "home"
								? {
										scale: 1.2,
										x: "20px",
										filter: `drop-shadow(0px 0px 3px ${theme.palette.secondary.main})`,
								  }
								: { scale: 1, x: 0, filter: "" }
						}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							cursor: "pointer",
							padding: "10px 15px",
						}}
					>
						<Typography
							variant="body1"
							onClick={() => {
								scrollTo("home");
							}}
						>
							Home
						</Typography>
					</motion.div>
					<motion.div
						initial={false}
						animate={
							location == "experience"
								? {
										scale: 1.2,
										x: "20px",
										filter: `drop-shadow(0px 0px 3px ${theme.palette.secondary.main})`,
								  }
								: { scale: 1, x: 0, filter: "" }
						}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							cursor: "pointer",
							padding: "10px 15px",
						}}
					>
						<Typography
							variant="body1"
							onClick={() => {
								scrollTo("experience");
							}}
						>
							Experience
						</Typography>
					</motion.div>
					<motion.div
						initial={false}
						animate={
							location == "skillset"
								? {
										scale: 1.2,
										x: "20px",
										filter: `drop-shadow(0px 0px 3px ${theme.palette.secondary.main})`,
								  }
								: { scale: 1, x: 0, filter: "" }
						}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							cursor: "pointer",
							padding: "10px 15px",
						}}
					>
						<Typography
							variant="body1"
							onClick={() => {
								scrollTo("skillset");
							}}
						>
							Skillset
						</Typography>
					</motion.div>
					<motion.div
						initial={false}
						animate={
							location == "education"
								? {
										scale: 1.2,
										x: "20px",
										filter: `drop-shadow(0px 0px 3px ${theme.palette.secondary.main})`,
								  }
								: { scale: 1, x: 0, filter: "" }
						}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							cursor: "pointer",
							padding: "10px 15px",
						}}
					>
						<Typography
							variant="body1"
							onClick={() => {
								scrollTo("education");
							}}
						>
							Education
						</Typography>
					</motion.div>
					<motion.div
						initial={false}
						animate={
							location == "about"
								? {
										scale: 1.2,
										x: "20px",
										filter: `drop-shadow(0px 0px 3px ${theme.palette.secondary.main})`,
								  }
								: { scale: 1, x: 0, filter: "" }
						}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							cursor: "pointer",
							padding: "10px 15px",
						}}
					>
						<Box
							onClick={() => {
								scrollTo("about");
							}}
						>
							About Me
						</Box>
					</motion.div>
				</Box>
			)}
		</>
	);
}
