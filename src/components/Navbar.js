import { useState } from "react";
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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ClearIcon from "@mui/icons-material/Clear";
import BadgeIcon from "@mui/icons-material/Badge";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SchoolIcon from "@mui/icons-material/School";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Navbar(props) {
	const theme = useTheme();
	const styles = { link: { textTransform: "none" } };
	const xs = useMediaQuery(theme.breakpoints.down("sm"));
	const [isOpen, setIsOpen] = useState(false);
	const toggleDrawer = () => {
		setIsOpen(!isOpen);
	};
	const scrollTo = (element) => {
		scroller.scrollTo(element, {
			duration: 1000,
			delay: 100,
			smooth: true,
		});
	};
	const home = useLocation().pathname === "/";
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
				color={home ? "homepageNavbar" : "primary"}
				elevation={home ? "4" : "4"}
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
									{isOpen ? <ClearIcon /> : <MenuIcon />}
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
												// component={Link}
												// to="/experience"
												onClick={() => {
													toggleDrawer();
													scrollTo("experience");
												}}
											>
												<ListItemIcon>
													<BadgeIcon />
												</ListItemIcon>
												<ListItemText primary="Experience" />
											</ListItemButton>

											<ListItemButton
												// component={Link}
												// to="/skillset"
												onClick={() => {
													toggleDrawer();
													scrollTo("skillset");
												}}
											>
												<ListItemIcon>
													<AutoGraphIcon />
												</ListItemIcon>
												<ListItemText primary="Skillset" />
											</ListItemButton>
											<ListItemButton
												onClick={() => {
													toggleDrawer();
													scrollTo("education");
												}}
											>
												<ListItemIcon>
													<SchoolIcon />
												</ListItemIcon>
												<ListItemText primary="Education" />
											</ListItemButton>
											<ListItemButton
												onClick={() => {
													toggleDrawer();
													scrollTo("about");
												}}
											>
												<ListItemIcon>
													<EmojiPeopleIcon />
												</ListItemIcon>
												<ListItemText primary="About Me" />
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
								component={Link}
								to="/experience"
								style={styles.link}
							>
								Experience
							</Button>
							<Button
								component={Link}
								to="/skillset"
								style={styles.link}
							>
								Skillset
							</Button>
							<Button
								component={Link}
								to="/education"
								style={styles.link}
							>
								Education
							</Button>
							<Button
								component={Link}
								to="/about"
								style={styles.link}
							>
								About Me
							</Button>
						</>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
