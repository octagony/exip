import { createEffect, createSignal, Show } from "solid-js";
import IPSerivce from "~/services/ip.service";
import { IpAddress } from "~/types/ip.interface";
export default function App() {
  const [ip, setIp] = createSignal<IpAddress>();
  createEffect(() => {
    IPSerivce.getIPAddress()
      .then((resp) => setIp(resp))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h1>Header</h1>
      {ip()?.ip}
    </div>
  );
}
