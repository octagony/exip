import { Grid, Skeleton } from "@suid/material";

export default function Loader() {
	return (
		<Grid container justifyContent="center">
			<Skeleton variant="rectangular" width={"80%"} height={490} />
		</Grid>
	);
}
