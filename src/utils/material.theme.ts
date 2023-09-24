import "@fontsource/ubuntu";
import { createTheme } from "@suid/material";

export const theme = createTheme({
	typography: {
		fontFamily: [
			"Ubuntu",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(","),
		h1: {
			"@media (min-width:0px)": {
				fontSize: "2rem"
			},
			"@media (min-width:576px)": {
				fontSize: "3rem"
			},
			"@media (min-width:768px)": {
				fontSize: "3.5rem"
			},
			"@media (min-width:992px)": {
				fontSize: "4rem"
			}
		},
		h2: {
			"@media (min-width:0px)": {
				fontSize: "1rem"
			},
			"@media (min-width:576px)": {
				fontSize: "2rem"
			},
			"@media (min-width:768px)": {
				fontSize: "2.5rem"
			},
			"@media (min-width:992px)": {
				fontSize: "3rem"
			}
		}
	}
});
