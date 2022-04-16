interface AirtableThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface AirtableImage extends AirtableThumbnail {
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

export interface CitiesAirtableResponse {
  id: string;
  fields: {
    city_name: string;
    description: string;
    teleport_x_coords: number;
    teleport_y_coords: number;
    teleport_z_coords: number;
    screenshots: AirtableImage[];
    zone_type: string;
    shops: string[];
    open_shop_names: string[];
    shop_statuses: string[];
  }
}

export interface ContactAirtableResponse {
  id: string;
  fields: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
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

export interface NewsAirtableResponse {
  id: string;
  fields: {
    title: string;
    contents: string;
    category: string;
    images: AirtableImage[];
    publish_date: string;
  }
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

