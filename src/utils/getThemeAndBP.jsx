import { useTheme, useMediaQuery } from "@mui/material";
export const GetThemeAndBP = () => {
	const theme = useTheme();
	const xs = useMediaQuery(theme.breakpoints.down("sm"));
	const sm = useMediaQuery(theme.breakpoints.down("md"));
	const md = useMediaQuery(theme.breakpoints.down("lg"));
	return { theme, xs, sm, md };
};
