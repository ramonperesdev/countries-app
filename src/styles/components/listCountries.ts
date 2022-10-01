import { styled } from '@stitches/react';

export const ContainerCountry = styled('div', {
  height: '20rem',
  boxShadow: '0px 0px 20px -5px rgba(0,0,0,0.25)',
  borderRadius: 10,
});
export const BoxImage = styled('div', {
  position: 'relative',
  height: '60%',
});
export const BoxInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  height: '40%',
  padding: '0 1rem',
});
export const NameCountry = styled('h2', {
  marginTop: '1rem',
  fontSize: '0.875rem',
});
export const OthersInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
});
export const Info = styled('span', {
  fontSize: '0.75rem',
});
