import { styled } from '..';

export const InputContainer = styled('div', {});
export const BoxInput = styled('div', {
  display: 'flex',
  height: '2.8rem',
  alignItems: 'center',
  padding: '0 5px 0 15px',
  backgroundColor: '$white',
  boxShadow: '0px 0px 20px -5px rgba(0,0,0,0.25)',
  borderRadius: 5,

  svg: {
    width: '25px',
    height: '25px',
    color: '$gray300',
  },

  input: {
    border: 'none',
    marginLeft: '15px',
    height: '100%',
    outline: 0,
    width: '100%',
    minWidth: '20rem',
  },
});
