import { BoxInput, InputContainer } from '../../styles/components/inputSearch';
import { AiOutlineSearch } from 'react-icons/ai';
import { useCallback, useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { loadCountriesBySearch } from '../../store/countries';

export default function InputSearch() {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useAppDispatch();

  const handleSearchCountry = useCallback(({ target }) => {
    console.log('func', target);
    setSearchValue(target.value);
    dispatch(loadCountriesBySearch(target.value));
  }, []);

  return (
    <InputContainer>
      <BoxInput width={{ '@bp2': 'desk' }}>
        <AiOutlineSearch />
        <input
          id="nameCountry"
          name="nameCountry"
          type="text"
          placeholder="Search for a country..."
          onChange={handleSearchCountry}
          value={searchValue}
        />
      </BoxInput>
    </InputContainer>
  );
}
