import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

// SERVICES
import { getCountries, getCountriesByRegion } from '../../services';

// TYPES
import { ICountryData } from '../../@types/types';
interface IStateCountriesSlice {
  countries: Array<ICountryData>;
  countriesBackup: Array<ICountryData>;
  loading: boolean;
  error: boolean;
}

const initialState: IStateCountriesSlice = {
  countries: [],
  countriesBackup: [],
  loading: true,
  error: false,
};

const slice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    loadCountriesRequest: (state: IStateCountriesSlice) => {
      state.loading = true;
    },
    loadCountriesSuccess: (
      state: IStateCountriesSlice,
      action: PayloadAction<Array<ICountryData>>
    ) => {
      const { payload } = action;
      state.countries = payload;
      state.countriesBackup = payload;
      state.loading = false;
    },
    loadCountriesFailure: (state: IStateCountriesSlice) => {
      state.error = true;
      state.loading = false;
    },

    loadCountriesByRegionRequest: (state: IStateCountriesSlice) => {
      state.loading = true;
    },
    loadCountriesByRegionSuccess: (
      state: IStateCountriesSlice,
      action: PayloadAction<Array<ICountryData>>
    ) => {
      const { payload } = action;
      state.loading = false;
      state.countries = payload;
    },
    loadCountriesByRegionFailure: (state: IStateCountriesSlice) => {
      state.loading = false;
      state.error = true;
    },

    loadCountriesBySearchSuccess: (
      state: IStateCountriesSlice,
      action: PayloadAction<string>
    ) => {
      const { payload } = action;
      state.countries = state.countriesBackup.filter((country) =>
        country?.name.toLowerCase().includes(payload.toLowerCase())
      );
    },

    restoreStates: (state: IStateCountriesSlice) => {
      state.countries = [];
      state.countriesBackup = [];
      state.loading = true;
      state.error = false;
    },
  },
});

export default slice.reducer;

const {
  loadCountriesRequest,
  loadCountriesSuccess,
  loadCountriesFailure,

  loadCountriesByRegionRequest,
  loadCountriesByRegionSuccess,
  loadCountriesByRegionFailure,

  loadCountriesBySearchSuccess,

  restoreStates,
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

  dispatch(loadCountriesByRegionRequest());
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

export const restoreAllStates = () => (dispatch) => {
  dispatch(restoreStates());
};
