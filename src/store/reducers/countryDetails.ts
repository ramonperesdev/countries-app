import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

// SERVICES
import { getCountryDetails } from '../../services';

// TYPES
import { ICountryDetails } from '../../@types/types';
interface IStateCDSlice {
  countryDetails?: ICountryDetails;
  loadingDetails?: boolean;
  error: boolean;
}

const initialState: IStateCDSlice = {
  countryDetails: null,
  loadingDetails: true,
  error: false,
};

const slice = createSlice({
  name: 'countryDetails',
  initialState,
  reducers: {
    loadCountryDetailsRequest: (state: IStateCDSlice) => {
      state.loadingDetails = true;
    },
    loadCountryDetailsSuccess: (
      state: IStateCDSlice,
      action: PayloadAction<ICountryDetails>
    ) => {
      const { payload } = action;

      state.loadingDetails = false;
      state.countryDetails = payload;
    },
    loadCountryDetailsFailure: (state: IStateCDSlice) => {
      state.loadingDetails = false;
    },

    restoreStates: (state: IStateCDSlice) => {
      state.countryDetails = null;
      state.loadingDetails = true;
      state.error = false;
    },
  },
});

export default slice.reducer;

const {
  loadCountryDetailsRequest,
  loadCountryDetailsSuccess,
  loadCountryDetailsFailure,

  restoreStates,
} = slice.actions;

export const loadCountryDetails = (nameCountry) => async (dispatch) => {
  const { apiCall } = getCountryDetails();
  dispatch(loadCountryDetailsRequest());
  try {
    const { data } = await apiCall({ nameCountry });

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

export const restoreAllStates = () => (dispatch) => {
  dispatch(restoreStates());
};
