import axios from "axios";
import { RequestAddresses } from "~/types/addresses.enum";
import { IpAddress, IpInfo } from "~/types/ip.interface";

export class IPSerivce {
  private async getIPAddress() {
    const getIpAddress = await axios.get<IpAddress>(RequestAddresses.IPIFY);
    return getIpAddress.data;
  }

  async getIPInfo() {
    const ipAddress = await this.getIPAddress().then((data) => data);
    const ipInfo = await axios.get<IpInfo>(
      `${RequestAddresses.IPAPI}/?q=${ipAddress.ip}&key=${
        import.meta.env.VITE_API_KEY
      }`,
    );
    return ipInfo.data;
  }
}

export default new IPSerivce();
