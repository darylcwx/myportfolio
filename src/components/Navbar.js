import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { scroller } from "react-scroll";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { GetThemeAndXSBP } from "../utils/getThemeAndXSBP.js";
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
export default function Navbar(props) {
	const { theme, xs } = GetThemeAndXSBP();
	const trigger = useScrollTrigger({ threshold: 5 });
	const styles = {
		sec: {
			color: theme.palette.secondary.main,
		},
	};
	const [isOpen, setIsOpen] = useState(false);
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
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		setScrollPosition(window.scrollY);
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, []);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Slide appear={false} direction="down" in={!trigger}>
				<AppBar
					elevation={props.trigger ? 24 : 0}
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
														scrollTo("experience");
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
														scrollTo("skillset");
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
														scrollTo("education");
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
								<Box sx={{ flexGrow: 1 }} />
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
							</>
						)}
					</Toolbar>
				</AppBar>
			</Slide>
		</Box>
	);
}
