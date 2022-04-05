interface AirtableThumbnail {
  url: string;
  width: number;
  height: number;
}

interface AirtableImage extends AirtableThumbnail {
  filename: string;
  id: string;
  size: number;
  thumbnails: {
    small: AirtableThumbnail;
    large: AirtableThumbnail;
    full: AirtableThumbnail;
  };
  type: string;
}

export interface RoleAirtableResponse {
  id: string;
  fields: {
    available: boolean;
    image: AirtableImage[];
    perks: string[];
    price: number;
    title: string;
    venue: string;
  }
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

export interface ModDBData {
  assetid: string
  currentVersion: string,
  lastUpdated: string,
  modDBID: string,
  name: string,
  tags: string[],
}

export interface ModsAirtableResponse {
  id: string;
  fields: {
    description?: string;
    mod_db_id?: string;
    mod_db_version_number?: string;
    mod_db_tags?: string[];
    mod_db_url?: string;
    mod_db_version_release_date?: string;
    mod_name?: string;
    status?: string;
    version_number_in_use?: string;
  }
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

export interface ShopsAirtableResponse {
  id: string;
  fields: {
    city_name: string;
    city_reference: string;
    description: string;
    images: AirtableImage[];
    shop_name: string;
    shop_x_coord: string;
    shop_y_coord: string;
    shop_z_coord: string;
    status: string;
  }
}

export interface ShopAPIResponse {
  id: string;
  city: string;
  description: string;
  images: string[];
  shopName: string;
  shopCoords: string;
  status: string;
}
