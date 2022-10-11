import { styled } from '..';

export const WrapperDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  maxWidth: 1200,
  margin: '2rem auto',
  padding: '0px 1rem',
});

export const HeaderDetails = styled('div', {});

export const ButtonBack = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100px',
  height: '30px',

  cursor: 'pointer',
  background: '$white',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  border: 0,
  marginBottom: '3rem',
});

export const TextHeader = styled('span', {
  fontWeight: 600,
});

export const BoxCountryDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  width: '100%',

  variants: {
    responsive: {
      desk: {
        flexDirection: 'row',
        gap: '2rem',
      },
    },
  },
});

export const BoxFlag = styled('div', {
  width: '100%',
  height: '21.875rem',
  position: 'relative',

  variants: {
    responsive: {
      desk: {
        width: '50%',
      },
    },
  },
});

export const BoxTextDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  width: '100%',

  variants: {
    responsive: {
      desk: {
        width: '50%',
      },
    },
  },
});

export const TitleDetails = styled('h2', {});

export const InfoCountry = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  variants: {
    responsive: {
      desk: {
        flexDirection: 'row',
        gap: 0,
        justifyContent: 'space-between',
      },
    },
  },
});

export const LeftSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const RightSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const Info = styled('span', {});

export const InfoBC = styled('strong', {});

export const BoxBorderCountries = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.875rem',
});

export const BorderCountries = styled('div', {
  display: 'flex',
  gap: '0.75rem',
});

export const ItemBDCountries = styled('div', {
  padding: '0.375rem 1.2rem',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
});
