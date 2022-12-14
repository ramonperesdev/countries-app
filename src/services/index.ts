// SERVICES

import { api, CancelToken } from './api';

export function getCountries() {
  const source = CancelToken.source();

  function apiCall() {
    return api.get('/all', {
      cancelToken: source.token,
    });
  }

  return { apiCall, source };
}

export function getCountriesByRegion() {
  const source = CancelToken.source();

  function apiCall({ region }: { region: string }) {
    return api.get(`/region/${region}`, {
      cancelToken: source.token,
    });
  }

  return { apiCall, source };
}

export function getCountryDetails() {
  const source = CancelToken.source();

  function apiCall({ nameCountry }: { nameCountry: string }) {
    return api.get(`/name/${nameCountry}`);
  }

  return { apiCall, source };
}
