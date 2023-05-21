import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
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
		},
		homepageNavbar: {
			main: "rgba(29, 36, 53, 0.7)",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					color: "white",
				},
			},
		},
	},
	typography: {
		fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
	},
	shape: {
		borderRadius: 8,
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
