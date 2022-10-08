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
    loadCountriesRequest: (state: ICountriesData) => {
      state.loading = true;
    },
    loadCountriesSuccess: (
      state: ICountriesData,
      action: PayloadAction<Array<ICountryData>>
    ) => {
      const { payload } = action;
      state.countries = payload;
      state.countriesBackup = payload;
      state.loading = false;
    },
    loadCountriesFailure: (state: ICountriesData) => {
      state.error = true;
      state.loading = false;
    },

    loadCountriesByRegionSuccess: (state: ICountriesData, action) => {
      const { payload } = action;
      state.countries = payload;
    },
    loadCountriesByRegionFailure: (state: ICountriesData) => {
      state.error = true;
    },

    loadCountriesBySearchSuccess: (state: ICountriesData, action) => {
      const { payload } = action;
      state.countries = state.countriesBackup.filter((country) =>
        country?.name.toLowerCase().includes(payload.toLowerCase())
      );
    },

    loadCountryDetailsRequest: (state) => {
      state.loadingDetails = true;
    },
    loadCountryDetailsSuccess: (state, action) => {
      const { payload } = action;
      state.loadingDetails = false;
      state.countryDetails = payload;
    },
    loadCountryDetailsFailure: (state) => {
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
  try {
    const { data } = await apiCall({ nameCountry });

    dispatch(
      loadCountryDetailsSuccess({
        id: uniqueId(),
        name: data[0].name.common,
        population: (
          Math.round(data[0].population * 100) / 100
        ).toLocaleString(),
        region: data[0].region,
        capital: data[0].capital?.[0],
        flag: data[0].flags?.png,
        levelDomain: data[0].tld[0],
        // currencies: Object.values(data[0].currencies)[0].name,
      })
    );
  } catch (err) {}
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
