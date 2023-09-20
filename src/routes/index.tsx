import { ThemeProvider } from "@suid/material";
import App from "~/components/App";
import { theme } from "~/utils/material.theme";

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	);
}
