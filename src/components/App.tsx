// Libraries
import { createEffect, createSignal, Show } from "solid-js";
// Services
import IPSerivce from "~/services/ip.service";
// Interfaces
import { IpInfo } from "~/types/ip.interface";
//Components
import Header from "./Header/Header";
import IpAddress from "./IpAddress/IpAddress";
import Loader from "./Loader/Loader";
import ExtraInfo from "./ExtraInfo/ExtraInfo";
import { Container } from "@suid/material";

export default function App() {
	const [ipInfo, setIpInfo] = createSignal<IpInfo>();
	const test = true;
	createEffect(async () => {
		// const ip = await IPSerivce.getIPInfo().then(data => data);
		// setIpInfo(ip);
	}, []);

	return (
		<>
			<Header />
			<Container>
				<Show when={test} fallback={() => <Loader />}>
					<IpAddress />
					<ExtraInfo />
				</Show>
			</Container>
		</>
	);
}
