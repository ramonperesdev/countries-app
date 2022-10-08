import Image from 'next/image';
import {
  BoxImage,
  BoxInfo,
  ContainerCountry,
  Info,
  NameCountry,
  OthersInfo,
} from '../../styles/components/listCountries';
import { useRouter } from 'next/router';

interface ICountriesData {
  data: {
    name: string;
    population: number;
    region: string;
    flag: string;
    capital?: string;
  };
}

export default function ListCountries({ data }: ICountriesData) {
  const router = useRouter();

  return (
    <ContainerCountry
      role="button"
      onClick={() => router.push(`/country-details/${data?.name}`)}
    >
      <BoxImage>
        <Image
          src={data?.flag}
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </BoxImage>
      <BoxInfo>
        <NameCountry>{data?.name}</NameCountry>
        <OthersInfo>
          <Info>
            <strong>Population:</strong> {data?.population}
          </Info>
          <Info>
            <strong>Region:</strong> {data?.region}
          </Info>
          <Info>
            <strong>Capital:</strong> {data?.capital}
          </Info>
        </OthersInfo>
      </BoxInfo>
    </ContainerCountry>
  );
}
