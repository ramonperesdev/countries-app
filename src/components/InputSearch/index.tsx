import { BoxInput, InputContainer } from '../../styles/components/inputSearch';
import { AiOutlineSearch } from 'react-icons/ai';

export default function InputSearch() {
  return (
    <InputContainer>
      <BoxInput>
        <AiOutlineSearch />
        <input name="test" />
      </BoxInput>
    </InputContainer>
  );
}
