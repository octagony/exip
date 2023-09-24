import { Box, Stack, Typography } from "@suid/material";
import { CgSmartphone, CgLaptop } from "solid-icons/cg";
import { SiTorbrowser } from "solid-icons/si";
import { TbBrowserOff, TbBrandOpenvpn } from "solid-icons/tb";
import { FaSolidLockOpen } from "solid-icons/fa";
import { Show } from "solid-js";

export default function ExtraMobile() {
	const isMobile = true;
	const isTor = false;
	const isVpn = true;
	return (
		<Box
			sx={{ display: "flex", justifyContent: "space-evenly" }}
			px={1}
			py={2}
			backgroundColor="info.main"
			borderRadius={2}
			color="#fff"
		>
			<Stack alignItems="center">
				<Show when={isMobile} fallback={() => <CgLaptop size={25} />}>
					<CgSmartphone size={25} />
				</Show>
				<Show when={isMobile} fallback={() => <Typography>Laptop</Typography>}>
					<Typography>
						<Typography>Mobile Device</Typography>
					</Typography>
				</Show>
			</Stack>
			<Stack alignItems="center">
				<Show when={isTor} fallback={() => <TbBrowserOff size={25} />}>
					<SiTorbrowser size={25} />
				</Show>
				<Show when={isTor} fallback={() => <Typography>No Tor</Typography>}>
					<Typography>
						<Typography>Tor Used</Typography>
					</Typography>
				</Show>
			</Stack>
			<Stack alignItems="center">
				<Show when={isVpn} fallback={() => <FaSolidLockOpen size={25} />}>
					<TbBrandOpenvpn size={25} />
				</Show>
				<Show when={isVpn} fallback={() => <Typography>VPN Off</Typography>}>
					<Typography>
						<Typography>VPN On</Typography>
					</Typography>
				</Show>
			</Stack>
		</Box>
	);
}
