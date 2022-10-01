import { styled } from '..';

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  marginTop: '2rem',
});

export const BoxInputFilter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  gap: '1rem',
  padding: '0 1rem',

  variants: {
    display: {
      row: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 0,
        padding: 0,
      },
    },
  },
});

export const BoxCountries = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1rem',
  marginTop: '2rem !important',
  maxWidth: 1180,
  margin: '0 auto',
});
