import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  'html, body, #root': {
    height: '100%',
  },

  body: {
    backgroundColor: '$gray100',
    color: '$blue600',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Nunito Sans',
    fontWeight: 400,
  },
});
