import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import ClearIcon from "@mui/icons-material/Clear";
import { useSpring, animated } from "@react-spring/web";
import { useTheme } from "@mui/material/styles";
export default function Socials() {
	const theme = useTheme();
	const [isOpen, setIsOpen] = useState(false);

	const toggleStack = () => {
		setIsOpen(!isOpen);
	};
	const handleClickAway = () => {
		if (isOpen) {
			toggleStack();
		}
	};
	const springs = useSpring({
		from: { x: isOpen ? 215 : 0 },
		to: {
			x: isOpen ? 0 : 215,
		},
	});
	return (
		<Box sx={{ position: "fixed", bottom: "5px", right: "15px" }}>
			<ClickAwayListener onClickAway={handleClickAway}>
				<animated.div style={springs}>
					<Stack direction="row" spacing={1}>
						<Tooltip
							title="Connect with me!"
							placement="left"
							arrow
						>
							<Fab
								size="medium"
								color="secondary"
								onClick={toggleStack}
								sx={{
									marginRight: "8px",
									transform: isOpen
										? "rotate(90deg)"
										: "rotate(0)",
									transition: "transform 0.5s ease-in-out",
								}}
							>
								{isOpen ? <ClearIcon /> : <LinkIcon />}
							</Fab>
						</Tooltip>
						<Tooltip title="LinkedIn" placement="top" arrow>
							<a
								href="https://www.linkedin.com/in/darylchuawx/"
								target="_blank"
								rel="noopener noreferrer"
								style={{ marginLeft: "0" }}
							>
								<IconButton
									color="secondary"
									onClick={toggleStack}
								>
									<LinkedInIcon fontSize="large" />
								</IconButton>
							</a>
						</Tooltip>
						<Tooltip title="GitHub" placement="top" arrow>
							<a
								href="https://github.com/darylcwx"
								target="_blank"
								rel="noopener noreferrer"
								style={{ marginLeft: "0" }}
							>
								<IconButton
									color="secondary"
									onClick={toggleStack}
								>
									<GitHubIcon fontSize="large" />
								</IconButton>
							</a>
						</Tooltip>
						<Tooltip title="Telegram" placement="top" arrow>
							<a
								href="https://t.me/damnsope"
								target="_blank"
								rel="noopener noreferrer"
								style={{ marginLeft: "0" }}
							>
								<IconButton
									color="secondary"
									onClick={toggleStack}
								>
									<TelegramIcon fontSize="large" />
								</IconButton>
							</a>
						</Tooltip>
						<Tooltip title="Email" placement="top" arrow>
							<a
								href="mailto:darylchua@hotmail.sg"
								target="_blank"
								rel="noopener noreferrer"
								style={{ marginLeft: "0" }}
							>
								<IconButton
									color="secondary"
									onClick={toggleStack}
								>
									<EmailIcon fontSize="large" />
								</IconButton>
							</a>
						</Tooltip>
					</Stack>
				</animated.div>
			</ClickAwayListener>
		</Box>
	);
}
