import { Box, Stack, Typography } from "@suid/material";
import {
	FaSolidEarthEurope,
	FaRegularMap,
	FaSolidMountainCity
} from "solid-icons/fa";
import { WiTime3 } from "solid-icons/wi";
import { TbZip } from "solid-icons/tb";

export default function ExtraLocation() {
	const [continent, country, city, time, zip_code] = [
		"EU",
		"Belarus",
		"Minsk City",
		"21:53:52",
		"223052"
	];
	return (
		<Box
			backgroundColor="info.main"
			borderRadius={2}
			color="#fff"
			px={2}
			py={4}
			sx={{
				display: "flex",
				justifyContent: "space-evenly",
				alignItems: "center"
			}}
		>
			<Stack alignItems="center">
				<FaSolidEarthEurope size={25} />
				<Typography>{continent}</Typography>
			</Stack>
			<Stack alignItems="center">
				<FaRegularMap size={25} />
				<Typography>{country}</Typography>
			</Stack>
			<Stack alignItems="center">
				<FaSolidMountainCity size={25} />
				<Typography>{city}</Typography>
			</Stack>
			<Stack alignItems="center">
				<WiTime3 size={25} />
				<Typography>{time}</Typography>
			</Stack>
			<Stack alignItems="center">
				<TbZip size={25} />
				<Typography>{zip_code}</Typography>
			</Stack>
		</Box>
	);
}
