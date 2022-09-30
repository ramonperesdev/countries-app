import { createStitches } from '@stitches/react';

/*
  - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
  - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
  - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
  - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
  - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
  - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
*/

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
});
