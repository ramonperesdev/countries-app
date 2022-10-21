// LIBS
import { useCallback, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

// HOOKS
import { useAppDispatch } from '../../hooks';

// STORE
import { loadCountriesBySearch } from '../../store/reducers/countries';

// COMPONENTS
import { BoxInput, InputContainer } from '../../styles/components/inputSearch';

export default function InputSearch() {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useAppDispatch();

  const handleSearchCountry = useCallback(
    ({ target }) => {
      setSearchValue(target.value);
      dispatch(loadCountriesBySearch(target.value));
    },
    [dispatch]
  );

  return (
    <InputContainer>
      <BoxInput width={{ '@bp3': 'desk' }}>
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
