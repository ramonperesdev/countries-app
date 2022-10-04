import React, { useCallback, useEffect, useState } from 'react';
import Dropdown from '../components/Dropdown';
import InputSearch from '../components/InputSearch';
import ListCountries from '../components/ListCountries';
import { useAppDispatch, useAppSelector } from '../hooks';
import { loadCountries } from '../store/countries';
import {
  BoxCountries,
  BoxInputFilter,
  HomeContainer,
} from '../styles/pages/home';
import { ICountriesData } from '../@types/types';

interface ICountriesState {
  countries: ICountriesData;
}

export default function Home() {
  const dispatch = useAppDispatch();
  const { countries } = useAppSelector(
    (state: ICountriesState) => state.countries
  );
  // const [data, setData] = useState([]);

  console.log('state countries', countries);

  // const handleGetCountries = useCallback(async () => {
  //   const { apiCall } = getCountries();

  //   try {
  //     const { data } = await apiCall();

  //     setData(
  //       data.map((item) => ({
  //         id: uniqueId(),
  //         name: item?.name?.common,
  //         population: item?.population,
  //         region: item?.region,
  //         capital: item?.capital?.[0],
  //         flag: item?.flags?.png,
  //       }))
  //     );
  //   } catch (err) {
  //     console.log('err', err);
  //   }
  // }, []);

  // useEffect(() => {
  //   handleGetCountries();
  // }, [handleGetCountries]);

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
        <BoxCountries>
          {countries.map((country) => (
            <ListCountries key={country?.id} data={country} />
          ))}
        </BoxCountries>
      </HomeContainer>
    </main>
  );
}
