import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /* Colors */

    --White: #FFF;
    --DarkWhite: #FCFCFD;
    --DarkerWhite: #F5F4F6;
    --DarkestWhite: #EBEAED;
    --MostDarkestWhite: #DEDCE1;

    --Ink: #170C3A;
    --LightInk: #8F8A9B;
    --LighterInk: #B1ADB9;

    --Blue: #365DF0;
    --DarkBlue: #2F55CC;

    --Red: #F95E5A;
    --DarkRed: #CC4C4C;

    /* Typography */

    font-size: 10px;

    --Header1: normal normal 600 4.2rem/5rem 'Source Sans Pro', sans-serif;
    --Header2: normal normal 600 3.6rem/4rem 'Source Sans Pro', sans-serif;
    --Header3: normal normal 600 3rem/3.6rem 'Source Sans Pro', sans-serif;
    --Header4: normal normal 600 2.6rem/3.2rem 'Source Sans Pro', sans-serif;
    --Header5: normal normal 600 2.4rem/3rem 'Source Sans Pro', sans-serif;
    --Body: normal normal 400 2rem/2.6rem 'Source Sans Pro', sans-serif;
    --BodySmall: normal normal 600 1.8rem/2.4rem 'Source Sans Pro', sans-serif;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--DarkerWhite);
    
    font: var(--Body);
    letter-spacing: 0.02em; 
    color: var(--Ink)
  }
`;
