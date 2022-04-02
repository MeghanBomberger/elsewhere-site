export interface RolesAPIResponse {
  id: number;
  title: string;
  price: number;
  venue: string;
  image: string;
  available: boolean;
  perks: string[];
}

export interface ModDBData {
  modDBID: string,
  name: string,
  lastUpdated: string,
  currentVersion: string,
  tags: string[],
  assetid: string
}

export interface ModsAPIResponse {
  id: string;
  fields: {
    mod_name?: string;
    version_number_in_use?: string;
    mod_db_id?: string;
    mod_db_version_number?: string;
    mod_db_tags?: string[];
    mod_db_url?: string;
    mod_db_version_release_date?: string;
    status?: string;
    description?: string;
  }
}
