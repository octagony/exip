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
		fontSize: 16
	}
});
