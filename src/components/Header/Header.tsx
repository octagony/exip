import { AppBar, Box, Toolbar, Typography } from "@suid/material";
import { AiFillGithub } from "solid-icons/ai";

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ borderRadius: "1rem" }}>
				<Toolbar>
					<Typography
						variant="h1"
						alignItems="center"
						component="h1"
						fontSize={"3rem"}
						flexGrow={1}
					>
						Exip
					</Typography>
					<AiFillGithub size={24} />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
