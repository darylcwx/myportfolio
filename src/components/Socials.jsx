import * as React from "react";
import Box from "@mui/material/Box";
import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useTheme } from "@mui/material/styles";
export default function Socials() {
	const theme = useTheme();
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
		<Box sx={{ position: "fixed", bottom: 0, right: 0, zIndex: 3 }}>
			<SpeedDial
				ariaLabel="Quick Actions Button"
				tooltipTitle="Contact me? :)"
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
