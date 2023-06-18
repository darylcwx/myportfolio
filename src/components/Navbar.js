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
export default function Navbar({ location }) {
	const { theme, xs, sm, md } = GetThemeAndBP();
	const trigger = useScrollTrigger({ threshold: 5 });
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
			<Box sx={{ flexGrow: 1 }}>
				<Slide appear={false} direction="down" in={!trigger}>
					<AppBar
						position="fixed"
						sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
						color={scrollPosition < 100 ? "navbarStart" : "navbar"}
					>
						<Toolbar variant="dense">
							{xs ? (
								<>
									<Box sx={{ flexGrow: 1 }}>
										<IconButton
											size="large"
											edge="start"
											color="inherit"
											onClick={toggleDrawer}
											sx={{
												transform: isOpen
													? "rotate(90deg)"
													: "rotate(0)",
												transition:
													"transform 0.3s ease-in-out",
											}}
										>
											{isOpen ? (
												<CloseIcon sx={styles.sec} />
											) : (
												<MenuIcon />
											)}
										</IconButton>
										<Drawer
											anchor="left"
											open={isOpen}
											onClose={toggleDrawer}
										>
											<Box sx={{ flexGrow: 1 }}>
												<List
													sx={{
														marginTop: "56px",
														padding: 0,
													}}
												>
													<ListItemButton
														onClick={() => {
															toggleDrawer();
															scrollTo(
																"experience"
															);
														}}
													>
														<ListItemIcon>
															<BadgeIcon
																sx={styles.sec}
															/>
														</ListItemIcon>
														<ListItemText
															primary="Experience"
															sx={styles.sec}
														/>
													</ListItemButton>

													<ListItemButton
														onClick={() => {
															toggleDrawer();
															scrollTo(
																"skillset"
															);
														}}
													>
														<ListItemIcon>
															<AutoGraphIcon
																sx={styles.sec}
															/>
														</ListItemIcon>
														<ListItemText
															primary="Skillset"
															sx={styles.sec}
														/>
													</ListItemButton>
													<ListItemButton
														onClick={() => {
															toggleDrawer();
															scrollTo(
																"education"
															);
														}}
													>
														<ListItemIcon>
															<SchoolIcon
																sx={styles.sec}
															/>
														</ListItemIcon>
														<ListItemText
															primary="Education"
															sx={styles.sec}
														/>
													</ListItemButton>
													<ListItemButton
														onClick={() => {
															toggleDrawer();
															scrollTo("about");
														}}
													>
														<ListItemIcon>
															<EmojiPeopleIcon
																sx={styles.sec}
															/>
														</ListItemIcon>
														<ListItemText
															primary="About Me"
															sx={styles.sec}
														/>
													</ListItemButton>
												</List>
											</Box>
											<Box p={1}>
												<Typography variant="caption">
													Copyright © Daryl Chua 2023.{" "}
												</Typography>
												<br></br>
												<Typography variant="caption">
													All rights reserved
												</Typography>
											</Box>
										</Drawer>
									</Box>

									<Link
										to="/"
										style={{
											display: "flex",
											alignItems: "center",
										}}
									>
										<img
											src="/images/logo.png"
											alt="Logo"
											style={{ height: "30px" }}
										/>
									</Link>
								</>
							) : sm || md ? (
								<>
									<Box>
										<Link
											to="/"
											style={{
												display: "flex",
												alignItems: "center",
											}}
										>
											<img
												src="/images/logo.png"
												alt="Logo"
												style={{ height: "30px" }}
											/>
										</Link>
									</Box>
									<Box sx={{ flexGrow: 1 }} />
									<Box>
										<Button
											onClick={() => {
												scrollTo("experience");
											}}
											style={styles.link}
										>
											Experience
										</Button>
										<Button
											onClick={() => {
												scrollTo("skillset");
											}}
											style={styles.link}
										>
											Skillset
										</Button>
										<Button
											onClick={() => {
												scrollTo("education");
											}}
											style={styles.link}
										>
											Education
										</Button>
										<Button
											onClick={() => {
												scrollTo("about");
											}}
											style={styles.link}
										>
											About Me
										</Button>
									</Box>
								</>
							) : (
								<>
									<Box>
										<Link
											to="/"
											style={{
												display: "flex",
												alignItems: "center",
											}}
										>
											<img
												src="/images/logo.png"
												alt="Logo"
												style={{ height: "30px" }}
											/>
										</Link>
									</Box>
								</>
							)}
						</Toolbar>
					</AppBar>
				</Slide>
			</Box>
			{md ? (
				<></>
			) : (
				<Box
					sx={{
						position: "fixed",
						left: "5px",
						top: "45%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							cursor: "pointer",
							padding: "5px 5px",
						}}
					>
						<HorizontalRuleIcon
							sx={
								location == "home"
									? {
											filter: `drop-shadow(0px 0px 7px ${theme.palette.secondary.main})`,
									  }
									: {}
							}
						/>
						<motion.div
							initial={false}
							animate={
								location == "home"
									? {
											scale: 1.5,
											x: 8,
											filter: `drop-shadow(0px 0px 7px ${theme.palette.secondary.main})`,
									  }
									: { scale: 1, x: 0, filter: "" }
							}
						>
							<Typography
								variant="body1"
								onClick={() => {
									scrollTo("home");
								}}
								sx={{ paddingLeft: "10px" }}
							>
								Home
							</Typography>
						</motion.div>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							cursor: "pointer",
							padding: "5px 5px",
						}}
					>
						<HorizontalRuleIcon
							sx={
								location == "experience"
									? {
											filter: `drop-shadow(0px 0px 7px ${theme.palette.secondary.main})`,
									  }
									: {}
							}
						/>
						<motion.div
							initial={false}
							animate={
								location == "experience"
									? {
											scale: 1.5,
											x: 17,
											filter: `drop-shadow(0px 0px 7px ${theme.palette.secondary.main})`,
									  }
									: { scale: 1, x: 0, filter: "" }
							}
						>
							<Typography
								variant="body1"
								onClick={() => {
									scrollTo("experience");
								}}
								sx={{ paddingLeft: "10px" }}
							>
								Experience
							</Typography>
						</motion.div>
					</Box>

					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							cursor: "pointer",
							padding: "5px 5px",
						}}
					>
						<HorizontalRuleIcon
							sx={
								location == "skillset"
									? {
											filter: `drop-shadow(0px 0px 7px ${theme.palette.secondary.main})`,
									  }
									: {}
							}
						/>
						<motion.div
							initial={false}
							animate={
								location == "skillset"
									? {
											scale: 1.5,
											x: 10,
											filter: `drop-shadow(0px 0px 7px ${theme.palette.secondary.main})`,
									  }
									: { scale: 1, x: 0, filter: "" }
							}
						>
							<Typography
								variant="body1"
								onClick={() => {
									scrollTo("skillset");
								}}
								sx={{ paddingLeft: "10px" }}
							>
								Skillset
							</Typography>
						</motion.div>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							cursor: "pointer",
							padding: "5px 5px",
						}}
					>
						<HorizontalRuleIcon
							sx={
								location == "education"
									? {
											filter: `drop-shadow(0px 0px 7px ${theme.palette.secondary.main})`,
									  }
									: {}
							}
						/>
						<motion.div
							initial={false}
							animate={
								location == "education"
									? {
											scale: 1.5,
											x: 15,
											filter: `drop-shadow(0px 0px 7px ${theme.palette.secondary.main})`,
									  }
									: { scale: 1, x: 0, filter: "" }
							}
						>
							<Typography
								variant="body1"
								onClick={() => {
									scrollTo("education");
								}}
								sx={{ paddingLeft: "10px" }}
							>
								Education
							</Typography>
						</motion.div>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							cursor: "pointer",
							padding: "5px 5px",
						}}
					>
						<HorizontalRuleIcon
							sx={
								location == "about"
									? {
											filter: `drop-shadow(0px 0px 7px ${theme.palette.secondary.main})`,
									  }
									: {}
							}
						/>
						<motion.div
							initial={false}
							animate={
								location == "about"
									? {
											scale: 1.5,
											x: 15,
											filter: `drop-shadow(0px 0px 7px ${theme.palette.secondary.main})`,
									  }
									: { scale: 1, x: 0, filter: "" }
							}
						>
							<Box
								onClick={() => {
									scrollTo("about");
								}}
								sx={{ paddingLeft: "10px" }}
							>
								About Me
							</Box>
						</motion.div>
					</Box>
				</Box>
			)}
		</>
	);
}
