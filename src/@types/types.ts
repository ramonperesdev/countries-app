export interface ICountryData {
  id: string;
  name: string;
  population: number;
  region: string;
  flag: string;
  capital?: string;
}

export interface ICountryDetails {
  id: string;
  name: string;
  population: number;
  region: string;
  flag: string;
  capital?: string;
  levelDomain?: string;
  currencies?: string;
  subRegion?: string;
  languages?: string;
  border?: string[];
}
export interface ICountriesData {
  countries: Array<ICountryData>;
  countriesBackup: Array<ICountryData>;
  loading: boolean;
  error: boolean;
}
