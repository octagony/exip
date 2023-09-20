export interface IpAddress {
	ip: string;
}

export interface IpInfo {
	ip: string;
	rir: string;
	is_bogon: boolean;
	is_mobile: boolean;
	is_datacenter: boolean;
	is_tor: boolean;
	is_proxy: boolean;
	is_vpn: boolean;
	is_abuser: boolean;
	company: Company;
	datacenter: Datacenter;
	asn: Asn;
	location: Location;
	elapsed_ms: number;
}

export interface Asn {
	asn: number;
	route: string;
	descr: string;
	country: string;
	active: boolean;
	org: string;
	domain: string;
	abuse: string;
	type: string;
	created: Date;
	updated: Date;
	rir: string;
	whois: string;
}

export interface Company {
	name: string;
	domain: string;
	type: string;
	network: string;
	whois: string;
}

export interface Datacenter {
	datacenter: string;
	domain: string;
	network: string;
}

export interface Location {
	continent: string;
	country: string;
	country_code: string;
	state: string;
	city: string;
	latitude: number;
	longitude: number;
	zip: string;
	timezone: string;
	local_time: Date;
	local_time_unix: number;
	is_dst: boolean;
}
