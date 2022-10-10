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
  nativeName: string;
  population: string;
  region: string;
  subRegion?: string;
  capital?: string;
  flag: string;
  levelDomain?: string;
  // currencie?: string;
  currencie?: { name?: string; symbol?: string };
  language?: string;
  borderCountries?: string[];
}
export interface ICountriesData {
  countries: Array<ICountryData>;
  countriesBackup: Array<ICountryData>;
  loading: boolean;
  error: boolean;
}
