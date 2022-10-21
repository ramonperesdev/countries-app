// LIBS
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { BsArrowLeft } from 'react-icons/bs';

// HOOKS
import { useAppDispatch, useAppSelector } from '../../hooks';

// STORE
import {
  loadCountryDetails,
  restoreAllStates,
} from '../../store/reducers/countryDetails';

// ASSETS
import Image from 'next/image';

// COMPONENTS
import { Loading } from '../../components/Loading';

// STYLES
import {
  BorderCountries,
  BoxBorderCountries,
  BoxCountryDetails,
  BoxFlag,
  BoxTextDetails,
  ButtonBack,
  HeaderDetails,
  Info,
  InfoBC,
  InfoCountry,
  ItemBDCountries,
  LeftSection,
  RightSection,
  TextHeader,
  TitleDetails,
  WrapperDetails,
} from '../../styles/pages/countryDetails';

export default function CountryDetails() {
  const {
    query: { name },
    back,
  } = useRouter();

  const dispatch = useAppDispatch();
  const { countryDetails, loadingDetails } = useAppSelector(
    (state) => state.countryDetails
  );

  useEffect(() => {
    dispatch(loadCountryDetails(name));

    return () => {
      dispatch(restoreAllStates());
    };
  }, [dispatch, name]);

  return (
    <WrapperDetails>
      {loadingDetails ? (
        <Loading h="60vh" />
      ) : (
        <>
          <HeaderDetails>
            <ButtonBack type="button" onClick={() => back()}>
              <BsArrowLeft />
              <TextHeader>Back</TextHeader>
            </ButtonBack>
          </HeaderDetails>

          <BoxCountryDetails responsive={{ '@bp2': 'desk' }}>
            <BoxFlag responsive={{ '@bp2': 'desk' }}>
              <Image
                src={countryDetails?.flag}
                alt=""
                layout="fill"
                objectFit="fill"
                quality={100}
                priority
              />
            </BoxFlag>

            <BoxTextDetails responsive={{ '@bp2': 'desk' }}>
              <TitleDetails>{countryDetails?.name}</TitleDetails>
              <InfoCountry responsive={{ '@bp2': 'desk' }}>
                <LeftSection>
                  <Info>
                    <strong>Native Name:</strong>{' '}
                    {countryDetails?.nativeName ?? countryDetails?.name}
                  </Info>
                  <Info>
                    <strong>Population:</strong> {countryDetails?.population}
                  </Info>
                  <Info>
                    <strong>Region:</strong> {countryDetails?.region}
                  </Info>
                  <Info>
                    <strong>Sub Region:</strong> {countryDetails?.subRegion}
                  </Info>
                  <Info>
                    <strong>Capital:</strong> {countryDetails?.capital}
                  </Info>
                </LeftSection>

                <RightSection>
                  <Info>
                    <strong>Level Domain:</strong> {countryDetails?.levelDomain}
                  </Info>
                  <Info>
                    <strong>Currencie:</strong>{' '}
                    {countryDetails?.currencie?.name}
                  </Info>
                  <Info>
                    <strong>Language:</strong> {countryDetails?.language}
                  </Info>
                </RightSection>
              </InfoCountry>

              {countryDetails?.borderCountries && (
                <BoxBorderCountries>
                  <InfoBC>Border Countries</InfoBC>
                  <BorderCountries>
                    {countryDetails?.borderCountries?.map((item) => (
                      <ItemBDCountries key={item}>{item}</ItemBDCountries>
                    ))}
                    {}
                  </BorderCountries>
                </BoxBorderCountries>
              )}
            </BoxTextDetails>
          </BoxCountryDetails>
        </>
      )}
    </WrapperDetails>
  );
}
