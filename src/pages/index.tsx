import React, { useCallback, useEffect, useState } from 'react';
import Dropdown from '../components/Dropdown';
import InputSearch from '../components/InputSearch';
import ListCountries from '../components/ListCountries';
import ReactLoading from 'react-loading';
import { useAppDispatch, useAppSelector } from '../hooks';
import { loadCountries } from '../store/countries';
import {
  BoxCountries,
  BoxInputFilter,
  HomeContainer,
} from '../styles/pages/home';
import { ICountriesData } from '../@types/types';
import { Loading } from '../components/Loading';

interface ICountriesState {
  countries: ICountriesData;
  loading: boolean;
}

export default function Home() {
  const dispatch = useAppDispatch();
  const { countries, loading } = useAppSelector(
    (state: ICountriesState) => state.countries
  );

  useEffect(() => {
    dispatch(loadCountries());
  }, []);

  return (
    <main>
      <HomeContainer>
        <BoxInputFilter display={{ '@bp2': 'row' }}>
          <InputSearch />
          <Dropdown />
        </BoxInputFilter>
        {loading ? (
          <Loading
            h="60vh"
            color="hsl(0, 0%, 75.29411764705883%)"
            type="bubbles"
          />
        ) : (
          <BoxCountries>
            {countries.map((country) => (
              <ListCountries key={country?.id} data={country} />
            ))}
          </BoxCountries>
        )}
      </HomeContainer>
    </main>
  );
}
