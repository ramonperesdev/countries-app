export interface ICountryData {
  id: string;
  name: string;
  population: number;
  region: string;
  capital?: string;
  flag: string;
}
export interface ICountriesData {
  countries: Array<ICountryData>;
}
