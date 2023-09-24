import { Box, Typography } from "@suid/material";

export default function IpAddress() {
	return (
		<Box
			sx={{ display: "flex", width: "100%" }}
			justifyContent="center"
			flexDirection="column"
			alignItems="center"
		>
			<Typography variant="h1">Your API Address:</Typography>
			<Typography variant="h1">46.216.172.38</Typography>
		</Box>
	);
}
