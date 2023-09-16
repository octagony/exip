import axios from "axios";
import { IpAddress, IpInfo } from "~/types/ip.interface";

export class IPSerivce {
  async getIPAddress() {
    const getIpAddress = await axios.get<IpAddress>(
      "https://api.ipify.org/?format=json",
    );
    return getIpAddress.data;
  }

  async getIPInfo() {
    const ipAddress = await this.getIPAddress().then((data) => data);
    const ipInfo = await axios.get<IpInfo>(
      `https://ipguru.io/api/ping/?access_key=${
        import.meta.env.VITE_API_KEY
      }&ip_address=${ipAddress.ip}`,
    );
    return ipInfo.data;
  }
}

export default new IPSerivce();
