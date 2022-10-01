import React, { useCallback, useEffect, useState } from 'react';
import Dropdown from '../components/Dropdown';
import InputSearch from '../components/InputSearch';
import ListCountries from '../components/ListCountries';
import { getCountries } from '../services';
import {
  BoxCountries,
  BoxInputFilter,
  HomeContainer,
} from '../styles/pages/home';

export default function Home() {
  console.log('entrou home');
  const [data, setData] = useState([]);

  const handleGetCountries = useCallback(async () => {
    const { apiCall } = getCountries();

    try {
      const { data } = await apiCall();
      console.log(
        'response',
        data.map((item) => ({
          name: item?.name?.common,
          population: item?.population,
          region: item?.region,
          capital: item?.capital?.[0],
          flag: item?.flags?.png,
        }))
      );
      setData(
        data.map((item) => ({
          name: item?.name?.common,
          population: item?.population,
          region: item?.region,
          capital: item?.capital?.[0],
          flag: item?.flags?.png,
        }))
      );
    } catch (err) {
      console.log('err', err);
    }
  }, []);

  useEffect(() => {
    handleGetCountries();
  }, [handleGetCountries]);

  useEffect(() => {
    console.log('data ueh', data);
  }, [data]);

  return (
    <main>
      <HomeContainer>
        <BoxInputFilter display={{ '@bp2': 'row' }}>
          <InputSearch />
          <Dropdown />
        </BoxInputFilter>
        <BoxCountries>
          {data.map((country) => (
            <ListCountries data={country} />
          ))}
        </BoxCountries>
      </HomeContainer>
    </main>
  );
}
