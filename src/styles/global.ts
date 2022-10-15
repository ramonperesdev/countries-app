import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    '&::-webkit-scrollbar-track': {
      background: '#f5f5f5',
    },
    '&::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#00000029',
    },
  },

  'html, body, #root': {
    height: '100%',
    width: '100%',
  },

  main: {
    height: 'calc(100vh - 80px - 2rem)', // calc height from main with height of header and margin between header and main
    width: '100%',
  },

  ':root': {
    scrollBehavior: 'smooth !important',
  },

  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '$gray100',
    color: '$blue600',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Nunito Sans',
    fontWeight: 400,
  },

  button: {
    cursor: 'pointer',
  },

  img: {
    maxWidth: '100%',
  },
});
