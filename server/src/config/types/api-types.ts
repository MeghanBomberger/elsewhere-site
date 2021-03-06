import Airtable from "airtable";

export interface CityShop {
  id: string;
  name: string;
}

export interface CityShops {
  availableShopSpaces: number;
  openShops: CityShop[];
}

export interface CitiesAPIResponse {
  id: string;
  description: string;
  name: string;
  coords: string;
  images: string[];
  zone_type: string;
  shops: CityShops;
}

export interface ContactUsPostBody {
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'NEW!'
}

export interface ModsAPIResponse {
  description?: string;
  id: string;
  modDBID?: string;
  modDBTags?: string[];
  modDBURL?: string;
  modDBVersionNumber?: string;
  modDBVersionReleaseDate?: string;
  modName?: string;
  status?: string;
  versionNumberInUse?: string;
}

export interface NewsAPIResponse {
  id: string;
  title: string;
  contents: string;
  category: string;
  images: string[];
  publish_date: string;
}

export interface RoleAPIResponse {
  available: boolean;
  id: string;
  image: string;
  perks: string[];
  price: number;
  title: string;
  venue: string;
}

export interface ShopAPIResponse {
  id: string;
  city: string;
  description: string;
  images: string[];
  shopName: string;
  shopCoords: string;
  status: string;
  owner: string;
}

export interface RulesAPIResponse {
  id: string;
  subject: string;
  contents: string;
  images: string[];
  category: string;
}

interface RoleSummary {
  id: string;
  title: string;
  image: string;
}

export interface SupporterAPIResponse {
  id: string;
  username: string;
  roles: RoleSummary[];
}
