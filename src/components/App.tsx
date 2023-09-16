import { createEffect, createSignal, Show } from "solid-js";
import IPSerivce from "~/services/ip.service";
import { IpInfo } from "~/types/ip.interface";
export default function App() {
  const [ipInfo, setIpInfo] = createSignal<IpInfo>();
  createEffect(async () => {
    const ip = await IPSerivce.getIPInfo().then((data) => data);
    console.log(ip);
  }, []);
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}
