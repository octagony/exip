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
      `${RequestAddresses.IPGURU}/?access_key=${
        import.meta.env.VITE_API_KEY
      }&ip_address=${ipAddress.ip}`,
    );
    return ipInfo.data;
  }
}

export default new IPSerivce();
