import axios from "axios";
import { IpAddress } from "~/types/ip.interface";

export class IPSerivce {
  constructor() {}

  async getIPAddress() {
    const ipAddress = await axios.get<IpAddress>(
      "https://api.ipify.org/?format=json",
    );
    return ipAddress.data;
  }
}

export default new IPSerivce();
