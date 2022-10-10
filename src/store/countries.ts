import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICountriesData, ICountryData, ICountryDetails } from '../@types/types';
import {
  getCountries,
  getCountriesByRegion,
  getCountryDetails,
} from '../services';
import { uniqueId } from 'lodash';

interface IStateSlice {
  countries: Array<ICountryData>;
  countriesBackup: Array<ICountryData>;
  countryDetails?: ICountryDetails;
  loading: boolean;
  error: boolean;
  loadingDetails?: boolean;
}

const initialState: IStateSlice = {
  countries: [],
  countriesBackup: [],
  loading: true,
  error: false,

  countryDetails: null,
  loadingDetails: true,
};

const slice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    loadCountriesRequest: (state: IStateSlice) => {
      state.loading = true;
    },
    loadCountriesSuccess: (
      state: IStateSlice,
      action: PayloadAction<Array<ICountryData>>
    ) => {
      const { payload } = action;
      state.countries = payload;
      state.countriesBackup = payload;
      state.loading = false;
    },
    loadCountriesFailure: (state: IStateSlice) => {
      state.error = true;
      state.loading = false;
    },

    loadCountriesByRegionSuccess: (
      state: IStateSlice,
      action: PayloadAction<Array<ICountryData>>
    ) => {
      const { payload } = action;
      state.countries = payload;
    },
    loadCountriesByRegionFailure: (state: IStateSlice) => {
      state.error = true;
    },

    loadCountriesBySearchSuccess: (
      state: IStateSlice,
      action: PayloadAction<string>
    ) => {
      const { payload } = action;
      state.countries = state.countriesBackup.filter((country) =>
        country?.name.toLowerCase().includes(payload.toLowerCase())
      );
    },

    loadCountryDetailsRequest: (state: IStateSlice) => {
      state.loadingDetails = true;
    },
    loadCountryDetailsSuccess: (
      state: IStateSlice,
      action: PayloadAction<ICountryDetails>
    ) => {
      const { payload } = action;
      console.log('payload', payload);
      state.loadingDetails = false;
      state.countryDetails = payload;
    },
    loadCountryDetailsFailure: (state: IStateSlice) => {
      state.loadingDetails = false;
    },
  },
});

export default slice.reducer;

const {
  loadCountriesRequest,
  loadCountriesSuccess,
  loadCountriesFailure,

  loadCountriesByRegionSuccess,
  loadCountriesByRegionFailure,

  loadCountriesBySearchSuccess,

  loadCountryDetailsRequest,
  loadCountryDetailsSuccess,
  loadCountryDetailsFailure,
} = slice.actions;

export const loadCountries = () => async (dispatch) => {
  const { apiCall } = getCountries();

  dispatch(loadCountriesRequest());
  try {
    const { data } = await apiCall();

    dispatch(
      loadCountriesSuccess(
        data.map((item) => ({
          id: uniqueId(),
          name: item?.name?.common,
          population: (
            Math.round(item?.population * 100) / 100
          ).toLocaleString(),
          region: item?.region,
          capital: item?.capital?.[0],
          flag: item?.flags?.png,
        }))
      )
    );
  } catch (err) {
    dispatch(loadCountriesFailure());
  }
};

export const loadCountriesByRegion = (region) => async (dispatch) => {
  const { apiCall } = getCountriesByRegion();

  try {
    const { data } = await apiCall({ region });

    dispatch(
      loadCountriesByRegionSuccess(
        data.map((item) => ({
          id: uniqueId(),
          name: item?.name?.common,
          population: (
            Math.round(item?.population * 100) / 100
          ).toLocaleString(),
          region: item?.region,
          capital: item?.capital?.[0],
          flag: item?.flags?.png,
        }))
      )
    );
  } catch (err) {
    dispatch(loadCountriesByRegionFailure());
  }
};

export const loadCountriesBySearch = (nameCountry) => (dispatch) => {
  dispatch(loadCountriesBySearchSuccess(nameCountry));
};

export const loadCountryDetails = (nameCountry) => async (dispatch) => {
  const { apiCall } = getCountryDetails();
  dispatch(loadCountryDetailsRequest());
  console.log('nameCountry', nameCountry);
  try {
    const { data } = await apiCall({ nameCountry });
    console.log(
      'data from loadCountryDetails >>',
      Object.values(data[0].languages)[0]
    );

    dispatch(
      loadCountryDetailsSuccess({
        id: uniqueId(),
        name: data[0].name?.common,
        nativeName: data[0].name?.nativeName?.spa?.common,
        population: (
          Math.round(data[0].population * 100) / 100
        ).toLocaleString(),
        region: data[0].region,
        subRegion: data[0].subregion,
        capital: data[0].capital?.[0],
        flag: data[0].flags?.png,
        levelDomain: data[0].tld[0],
        currencie: Object.values(data[0].currencies)[0],
        language: Object.values(data[0].languages)[0] as string,
        borderCountries: data[0].borders,
      })
    );
  } catch (err) {
    dispatch(loadCountryDetailsFailure());
  }
};

/* 
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
*/
