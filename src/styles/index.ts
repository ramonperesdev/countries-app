import { createStitches } from '@stitches/react';

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      gray100: 'hsl(0, 0%, 98%)',
      gray300: 'hsl(0, 0%, 52%)',
      blue600: 'hsl(200, 15%, 8%)',
    },
  },

  media: {
    bp1: '(min-width: 375px)',
    bp2: '(min-width: 1200px)',
    bp3: '(min-width: 1440px)',
  },
});
