import React from "react";
import ReactDOM from "react-dom/client";
import "./utils/fonts.js";
import "./index.css";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ParallaxProvider } from "react-scroll-parallax";
const darkTheme = createTheme({
	breakpoints: {
		keys: ["xs", "sm", "md", "lg", "xl"],
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1530,
		},
	},
	palette: {
		primary: {
			main: "#1D2435",
		},
		//#1D2435
		//"#222b3e",
		secondary: {
			main: "#f9ebe0",
		},
		error: {
			main: "#FF715B",
		},
		// warning: {},
		// info: {},
		// success: {},
		text: {
			primary: "#fff",
			secondary: "rgba(255, 255, 255, 0.7)",
			disabled: "rgba(255, 255, 255, 0.5)",
			icon: "rgba(255,255,255,0.5)",
		},
		navbarStart: {
			main: "rgba(0, 0, 0, 0.0)",
		},
		navbar: {
			//main: "rgba(29, 36, 53, 0.7)",
			main: "rgba(29, 36, 53, 0.9)",
		},
		background: {
			paper: "#1D2435",
			default: "#121212",
		},
		white: {
			main: "#ffffff",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					color: "white",
					textDecoration: "none",
				},
			},
		},
		MuiLink: {
			styleOverrides: {
				root: {
					color: "white",
					textDecoration: "none",
				},
				visited: {
					color: "white",
					textDecoration: "none",
				},
			},
		},
		MuiSlider: {
			styleOverrides: {
				root: {
					"&.Mui-disabled": {
						color: "#f9ebe0",
					},
				},
			},
		},
	},
	shape: {
		borderRadius: 4,
	},
	typography: {
		fontSize: 12,
		fontFamily: [
			'"Open Sans"',
			"Roboto",
			"Helvetica",
			"Arial",
			"sans-serif",
		].join(","),
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		h1: {
			fontFamily: `"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif`,
			fontWeight: 300,
			fontSize: "6rem",
			lineHeight: 1.167,
			letterSpacing: "-0.01562em",
		},
		h2: {
			fontFamily: `"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif`,
			fontWeight: 300,
			fontSize: "3rem",
			lineHeight: 1,
			letterSpacing: "-0.00833em",
		},
		h3: {
			fontFamily: `"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif`,
			fontWeight: 300,
			fontSize: "2.5rem",
			lineHeight: 1.04,
			letterSpacing: "0em",
		},
		h4: {
			fontFamily: `"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif`,
			fontWeight: 300,
			fontSize: "2.125rem",
			lineHeight: 1.17,
			letterSpacing: "0.00735em",
		},
		h5: {
			fontFamily: `"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif`,
			fontWeight: 300,
			fontSize: "1.5rem",
			lineHeight: 1.33,
			letterSpacing: "0em",
		},
		h6: {
			fontFamily: `"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif`,
			fontWeight: 400,
			fontSize: "1.25rem",
			lineHeight: 1.6,
			letterSpacing: "0.0075em",
		},
		body1: {
			fontFamily: `"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif`,
			fontWeight: 400,
			fontSize: "1rem",
			lineHeight: 1.5,
			letterSpacing: "0.00938em",
		},
		body2: {
			fontFamily: `"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif`,
			fontWeight: 400,
			fontSize: "0.875rem",
			lineHeight: 1.5,
			letterSpacing: "0.01071em",
		},
		button: {
			fontFamily: `"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif`,
			fontWeight: 500,
			fontSize: "0.875rem",
			lineHeight: 1.75,
			letterSpacing: "0.02857em",
			textTransform: "uppercase",
		},
		caption: {
			fontFamily: `"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif`,
			fontWeight: 400,
			fontSize: "0.75rem",
			lineHeight: 1.66,
			letterSpacing: "0.03333em",
		},
	},
	shape: {
		borderRadius: 8,
	},
	transitions: {
		easing: {
			easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
			easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
			easeIn: "cubic-bezier(0.4, 0, 1, 1)",
			sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
		},
		duration: {
			shortest: 150,
			shorter: 200,
			short: 250,
			standard: 300,
			complex: 375,
			enteringScreen: 225,
			leavingScreen: 195,
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ParallaxProvider>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</ParallaxProvider>
	</React.StrictMode>
);
