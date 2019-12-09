import { keyframes, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';


export const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');

  * {
    box-sizing: border-box;
    color: #292e33;
  }

  :root {
    --yellow: #FECD1A;
    --red: #D40131;
    --white: #ffffff;
    --grey: #d7dde8;
    --status-inactive: #B8C3CC;
    --status-active: #41B809;
    --label: #95a1ac;
    --bg-green: #41b809;
    --text: #292e33;
    --border: #f5f5f5;
    --silver: #c3c3c3;
    --bg-icon: #BCBFC8;
  }

  body, html {
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    font-smoothing: antialiased;
    background: #fafafa;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: NunitoSans, sans-serif;
  }
  p, label, span, li {
    font-family: Roboto, sans-serif;
    font-weight: 300;
  }
`;

/**
 * FadeIn Animation
 */
export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
