// Libraries
import { createEffect, createSignal, Show } from "solid-js";
// Services
import IPSerivce from "~/services/ip.service";
// Interfaces
import { IpInfo } from "~/types/ip.interface";
//Components
import Loader from "./Loader/Loader";
import Header from "./Header/Header";
import { Button } from "@suid/material";

export default function App() {
  const [ipInfo, setIpInfo] = createSignal<IpInfo>();

  createEffect(async () => {
    const ip = await IPSerivce.getIPInfo().then((data) => data);
    // setIpInfo(ip);
  }, []);

  return (
    <>
      <Header />
      <Show when={ipInfo()} fallback={() => <Loader />}>
        <p>{ipInfo()?.ip}</p>
        <p>{ipInfo()?.location.continent}</p>
      </Show>
      <Button variant="contained">Hello test</Button>
    </>
  );
}
