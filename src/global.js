import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    // align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.15s linear;
  }
  `