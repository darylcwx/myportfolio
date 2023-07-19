import { GetThemeAndBP } from "../utils/getThemeAndBP";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function Copyright() {
	const { theme } = GetThemeAndBP();
	return (
		<Box
			sx={{
				textAlign: "center",
				paddingTop: "10px",
				paddingBottom: "10px",
				backgroundColor: theme.palette.navbar.footer,
			}}
		>
			<Typography variant="caption">
				Copyright © 2023 Daryl Chua. All Rights Reserved
			</Typography>
		</Box>
	);
}
