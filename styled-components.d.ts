import theme from './src/styles/theme'

type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export type DefaultTheme = Theme
}
