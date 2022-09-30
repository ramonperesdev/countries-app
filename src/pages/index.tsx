import Dropdown from '../components/Dropdown';
import InputSearch from '../components/InputSearch';
import { BoxInputFilter, HomeContainer } from '../styles/pages/home';

export default function Home() {
  return (
    <main>
      <HomeContainer>
        <BoxInputFilter display={{ '@bp2': 'row' }}>
          <InputSearch />
          <Dropdown />
        </BoxInputFilter>
      </HomeContainer>
    </main>
  );
}
