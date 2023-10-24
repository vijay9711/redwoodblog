import type { Theme } from 'theme-ui'

export const theme: Theme = {
  fonts: {
    body: 'Roboto',
    color: 'red',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  config: {
    initialColorModeName: 'light',
    printColorModeName: 'light',
  },
  colors: {
    logoColor: '#bf4622',
    text: 'red',
    background: '#fff',
    primary: '#33e',
    teal: 'teal',
    modes: {
      dark: {
        text: 'blue',
      },
      // light: {
      //   text: '#000',
      // },
    },
  },
}
