import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
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
export default function Navbar() {
	const theme = useTheme();
	const styles = { link: { textTransform: "none", color: "white" } };
	const matches = useMediaQuery(theme.breakpoints.up("sm"));
	const [isOpen, setIsOpen] = useState(false);
	const toggleDrawer = (open) => () => {
		setIsOpen(open);
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar variant="dense">
					{matches ? (
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
					) : (
						<>
							<Box sx={{ flexGrow: 1 }}>
								<IconButton
									size="large"
									edge="start"
									color="inherit"
									onClick={
										isOpen
											? toggleDrawer(false)
											: toggleDrawer(true)
									}
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
									onClose={toggleDrawer(false)}
								>
									<Box sx={{ flexGrow: 1 }}>
										<List
											sx={{
												marginTop: "56px",
												padding: 0,
											}}
										>
											<ListItemButton
												component={Link}
												to="/experience"
												onClick={toggleDrawer(false)}
											>
												<ListItemIcon>
													<BadgeIcon />
												</ListItemIcon>
												<ListItemText primary="Experience" />
											</ListItemButton>

											<ListItemButton
												component={Link}
												to="/skillset"
												onClick={toggleDrawer(false)}
											>
												<ListItemIcon>
													<AutoGraphIcon />
												</ListItemIcon>
												<ListItemText primary="Skillset" />
											</ListItemButton>
											<ListItemButton
												component={Link}
												to="/Education"
												onClick={toggleDrawer(false)}
											>
												<ListItemIcon>
													<SchoolIcon />
												</ListItemIcon>
												<ListItemText primary="Education" />
											</ListItemButton>
											<ListItemButton
												component={Link}
												to="/about"
												onClick={toggleDrawer(false)}
											>
												<ListItemIcon>
													<EmojiPeopleIcon />
												</ListItemIcon>
												<ListItemText primary="About Me" />
											</ListItemButton>
										</List>
									</Box>
									<Box>
										<List
											sx={{
												padding: 0,
											}}
										>
											<ListItemButton
												component={Link}
												to="https://github.com/darylcwx"
												target="_blank"
											>
												<ListItemIcon>
													<GitHubIcon />
												</ListItemIcon>
												<ListItemText primary="Github" />
											</ListItemButton>
											<ListItemButton
												component={Link}
												to="http://www.linkedin.com/in/darylchuawx"
												target="_blank"
											>
												<ListItemIcon>
													<LinkedInIcon />
												</ListItemIcon>
												<ListItemText primary="LinkedIn" />
											</ListItemButton>
										</List>
									</Box>
								</Drawer>
							</Box>

							<Link to="/">
								<img
									src="/images/logo.png"
									alt="Logo"
									style={{ height: "30px" }}
								/>
							</Link>
						</>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
