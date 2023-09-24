import { Box, Typography } from "@suid/material";

export default function IpAddress() {
	return (
		<Box
			sx={{ display: "flex", maxWidth: "30%", bgcolor: "primary.main" }}
			justifyContent="center"
			flexDirection="column"
			alignItems="center"
			mt={4}
			marginInline={"auto"}
			borderRadius={3}
			px={8}
			py={2}
		>
			<Typography variant="h5" color="common.white">
				Your API Address:
			</Typography>
			<Typography variant="h1" color="common.white">
				46.216.172.38
			</Typography>
		</Box>
	);
}
