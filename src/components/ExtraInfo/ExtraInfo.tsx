import { Box, Grid, Typography } from "@suid/material";
import ExtraMobile from "../ExtraTopInfo/ExtraTopInfo";
import ExtraLocation from "../ExtraLocation/ExtraLocation";

export default function ExtraInfo() {
	return (
		<Grid container mt={8} spacing={4}>
			<Grid item xs={12} sm={6}>
				<ExtraMobile />
			</Grid>
			<Grid item xs={12} sm={6}>
				<ExtraMobile />
			</Grid>
			<Grid item xs={12}>
				<ExtraLocation />
			</Grid>
		</Grid>
	);
}
