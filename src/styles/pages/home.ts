import { styled } from '..';

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  maxWidth: 1300,
  margin: '2rem auto',
  padding: '0 1rem',
});

export const BoxInputFilter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '1rem',

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
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '1rem',
  margin: '2rem 0',
  padding: '0 15px',
  height: '100%',
  overflowY: 'auto',
});

export const ContentFeedback = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '60vh',
});

export const Title = styled('h2', {
  marginBottom: '0.375rem',
});

export const TextFeedback = styled('span', {
  fontWeight: 600,
  marginBottom: '1.5rem',
});

export const ButtonFeedback = styled('button', {
  borderRadius: 5,
  border: 0,
  background: '$gray300',
  padding: '0.575rem 2rem',
  cursor: 'pointer',
  color: '$white',
});
