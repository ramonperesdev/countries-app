import { BoxInput, InputContainer } from '../../styles/components/inputSearch';
import { AiOutlineSearch } from 'react-icons/ai';

export default function InputSearch() {
  return (
    <InputContainer>
      <BoxInput width={{ '@bp2': 'desk' }}>
        <AiOutlineSearch />
        <input name="test" placeholder="Search for a country..." />
      </BoxInput>
    </InputContainer>
  );
}
