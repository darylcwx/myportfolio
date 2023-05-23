import { useTheme, useMediaQuery } from "@mui/material";
export const GetThemeAndXSBP = () => {
	const theme = useTheme();
	const xs = useMediaQuery(theme.breakpoints.down("sm"));
	const sm = useMediaQuery(theme.breakpoints.down("md"));
	return { theme, xs, sm };
};
