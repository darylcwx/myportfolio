import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Avatar from "@mui/material/Avatar";

export default function Home() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("sm"));
	return (
		<>
			<Box
				sx={{
					backgroundImage: 'url("/images/bg2.png")',
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					height: "calc(100vh - 48px)",
				}}
			>
				<Container maxWidth="sm">
					<Avatar
						src="/images/me.jpeg"
						alt="Me"
						style={{ width: 200, height: 200 }}
					/>
					<Typography variant="h3">Hello!</Typography>
					<Typography variant="h5">I'm Daryl.</Typography>
					<Typography variant="h5">Welcome to my website.</Typography>
					<Typography variant="body2">
						Here, you can find the highlights of my career,
						education, and skill sets, and perhaps even get to know
						me a little better.
					</Typography>
					<Typography variant="body2">Enjoy your visit!</Typography>
				</Container>
			</Box>
		</>
	);
}
