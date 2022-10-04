import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICountriesData, ICountryData } from '../@types/types';
import { getCountries, getCountriesByRegion } from '../services';
import { uniqueId } from 'lodash';

interface IStateSlice {
  countries: Array<ICountryData>;
  loading: boolean;
  error: boolean;
}

const initialState: IStateSlice = {
  countries: [],
  loading: false,
  error: false,
};

const slice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    loadCountriesSuccess: (
      state: ICountriesData,
      action: PayloadAction<Array<ICountryData>>
    ) => {
      const { payload } = action;
      state.countries = payload;
    },
    loadCountriesFailure: (state) => {
      state.error = true;
    },

    loadCountriesByRegionSuccess: (state, action) => {
      const { payload } = action;
      state.countries = payload;
    },
    loadCountriesByRegionFailure: (state) => {
      state.error = true;
    },
  },
});

export default slice.reducer;

const {
  loadCountriesSuccess,
  loadCountriesFailure,
  loadCountriesByRegionSuccess,
  loadCountriesByRegionFailure,
} = slice.actions;

export const loadCountries = () => async (dispatch) => {
  const { apiCall } = getCountries();
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
