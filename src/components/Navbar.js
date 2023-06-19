import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { scroller } from "react-scroll";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { GetThemeAndBP } from "../utils/getThemeAndBP.js";
import { Link, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import BadgeIcon from "@mui/icons-material/Badge";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SchoolIcon from "@mui/icons-material/School";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
export default function Navbar({ location }) {
	const { theme, xs, sm, md } = GetThemeAndBP();
	const [isOpen, setIsOpen] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const toggleDrawer = () => {
		setIsOpen(!isOpen);
	};
	const scrollTo = (element) => {
		scroller.scrollTo(element, {
			duration: 700,
			delay: 50,
			smooth: "easeInOut",
		});
	};
	const styles = {
		sec: {
			color: theme.palette.secondary.main,
		},
	};
	const sideNav = {
		open: (height = 1000) => ({
			clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
			transition: {
				type: "spring",
				stiffness: 20,
				restDelta: 2,
			},
			backgroundColor: "rgba(29, 36, 53, 0.9)",
			backdropFilter: "blur(3px)",
		}),
		closed: {
			//clipPath: "circle(20px at 28px 28px)",
			transition: {
				delay: 0.5,
				type: "spring",
				stiffness: 400,
				damping: 40,
			},
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
					zIndex: 5,
					backdropFilter: md ? "blur(3px)" : "",
					backgroundColor: md ? "rgba(29, 36, 53, 0.9)" : "",
				}}
				color={"navbarStart"}
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
							zIndex: 11,
						}}
					>
						<Hamburger size={20} rounded onToggle={toggleDrawer} />
					</div>
					<motion.div
						initial={false}
						animate={isOpen ? "open" : "closed"}
						variants={sideNav}
						style={{
							left: 0,
							top: "56px",
							width: "300px",
							height: "calc(100vh - 56px)",
							position: "fixed",
							zIndex: 10,
							backgroundColor: "rgba(29, 36, 53, 0.85)",
							opacity: isOpen ? "100%" : "",
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
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
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
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
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
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
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
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
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
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
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
											Copyright © Daryl Chua 2023.{" "}
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
										marginBottom: "40px",
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
			{/* <motion.div
				style={{
					position: "fixed",
					width: "100vw",
					height: "100vh",
					backgroundColor: "rgba(0,0,0, 0.8)",
					backdropFilter: "blur(3px)",
					zIndex: 5,
					display: isOpen ? "block" : "none",
				}}
			></motion.div> */}
		</>
	);
}
