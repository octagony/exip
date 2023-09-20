import { Grid, Skeleton } from "@suid/material";

export default function Loader() {
	return (
		<Grid my={4} mx={4}>
			<Grid container justifyContent="center">
				<Skeleton variant="rectangular" width={"80%"} height={490} />
			</Grid>
			<Grid container my={4} justifyContent="space-evenly" gap={4}>
				<Grid item xs={12} md={4}>
					<Skeleton variant="rectangular" width={"100%"} height={300} />
				</Grid>
				<Grid item xs={12} md={4}>
					<Skeleton variant="rectangular" width={"100%"} height={300} />
				</Grid>
				<Grid item xs={12}>
					<Skeleton
						variant="rectangular"
						width={"80%"}
						height={300}
						sx={{ marginInline: "auto" }}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}
