import { styled } from '..';

export const HomeContainer = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100%',
  maxWidth: 1180,
  margin: '2rem auto',
});

export const BoxInputFilter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
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
