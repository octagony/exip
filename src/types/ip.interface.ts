export interface IpAddress {
  ip: string;
}

export interface IpInfo {
  ip: string;
  ip_type: string;
  continent_code: string;
  continent_name: string;
  country_code: string;
  country_name: string;
  region_code: string;
  region_name: string;
  city: string;
  zip: string;
  latitude: number;
  longitude: number;
  location: Location;
}

export interface Location {
  is_eu: boolean;
  capital: string;
  languages: Language[];
  geoname_id: number;
  calling_code: string;
  country_flag: string;
  country_flag_emoji: string;
  country_flag_emoji_unicode: string;
}

export interface Language {
  code: string;
  name: string;
  native: string;
}
