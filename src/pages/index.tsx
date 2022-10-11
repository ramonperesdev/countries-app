// LIBS
import React, { useEffect } from 'react';

// HOOKS
import { useAppDispatch, useAppSelector } from '../hooks';

// STORE
import { loadCountries, restoreAllStates } from '../store/reducers/countries';

// TYPES
import { ICountriesData } from '../@types/types';

// COMPONENTS
import { Loading } from '../components/Loading';
import Dropdown from '../components/Dropdown';
import InputSearch from '../components/InputSearch';
import ListCountries from '../components/ListCountries';

// STYLES
import {
  BoxCountries,
  BoxInputFilter,
  ButtonFeedback,
  ContentFeedback,
  HomeContainer,
  TextFeedback,
  Title,
} from '../styles/pages/home';

interface ICountriesState {
  countries: ICountriesData;
}

export default function Home() {
  const dispatch = useAppDispatch();
  const { countries, loading, error } = useAppSelector(
    (state: ICountriesState) => state.countries
  );

  useEffect(() => {
    dispatch(loadCountries());

    return () => {
      dispatch(restoreAllStates());
    };
  }, []);

  return (
    <main>
      <HomeContainer>
        <BoxInputFilter display={{ '@bp3': 'row' }}>
          <InputSearch />
          <Dropdown />
        </BoxInputFilter>
        {loading && <Loading h="60vh" />}

        {!loading && !error && countries.length > 0 && (
          <BoxCountries>
            {countries.map((country) => (
              <ListCountries key={country?.id} data={country} />
            ))}
          </BoxCountries>
        )}

        {!loading && !error && countries.length === 0 && (
          <ContentFeedback>
            <Title>Oops!</Title>
            <TextFeedback>No country with this name was found</TextFeedback>
          </ContentFeedback>
        )}

        {!loading && error && (
          <ContentFeedback>
            <Title>Oops!</Title>
            <TextFeedback>
              An unexpected problem occurred, please try again...
            </TextFeedback>
            <ButtonFeedback
              type="button"
              onClick={() => dispatch(loadCountries())}
            >
              Try again
            </ButtonFeedback>
          </ContentFeedback>
        )}
      </HomeContainer>
    </main>
  );
}
