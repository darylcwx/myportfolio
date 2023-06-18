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
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import ClearIcon from "@mui/icons-material/Clear";
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
	const socials = [
		{
			icon: <EmailIcon sx={{ fontSize: "24px" }} />,
			name: "Email",
			link: "mailto:darylchua@hotmail.sg",
		},
		{
			icon: <TelegramIcon sx={{ fontSize: "24px" }} />,
			name: "Telegram",
			link: "https://t.me/damnsope",
		},
		{
			icon: <GitHubIcon sx={{ fontSize: "24px" }} />,
			name: "Github",
			link: "https://github.com/darylcwx",
		},
		{
			icon: <LinkedInIcon sx={{ fontSize: "24px" }} />,
			name: "LinkedIn",
			link: "https://www.linkedin.com/in/darylchuawx/",
		},
	];
	return (
		<Box sx={{ position: "fixed", bottom: 0, right: 0 }}>
			<SpeedDial
				ariaLabel="Quick Actions Button"
				sx={{
					position: "absolute",
					bottom: 16,
					right: 16,
				}}
				FabProps={{
					style: {
						backgroundColor: theme.palette.secondary.main,
						color: theme.palette.primary.main,
					},
				}}
				icon={<LinkIcon sx={{ fontSize: "24px" }} />}
				transitionDuration={{ appear: 300, enter: 300, exit: 300 }}
			>
				{socials.map((social) => (
					<SpeedDialAction
						key={social.name}
						icon={social.icon}
						tooltipTitle={social.name}
						arrow
						FabProps={{
							style: {
								backgroundColor: theme.palette.secondary.main,
								color: theme.palette.primary.main,
							},
						}}
						onClick={() => window.open(social.link, "_blank")}
					/>
				))}
			</SpeedDial>
		</Box>
	);
}
