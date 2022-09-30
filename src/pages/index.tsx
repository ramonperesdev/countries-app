import Dropdown from '../components/Dropdown';
import InputSearch from '../components/InputSearch';
import { BoxInputFilter, HomeContainer } from '../styles/pages/home';

export default function Home() {
  return (
    <HomeContainer>
      <BoxInputFilter>
        <InputSearch />
        <Dropdown />
      </BoxInputFilter>
    </HomeContainer>
  );
}
