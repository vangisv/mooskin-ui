import { createGlobalStyle } from 'styled-components';

import OutlinedIcons from '../../assets/mooskin-icons/outlined.woff2';
import RegularIcons from '../../assets/mooskin-icons/regular.woff2';
import RoundIcons from '../../assets/mooskin-icons/round.woff2';
import SharpIcons from '../../assets/mooskin-icons/sharp.woff2';
import TwoToneIcons from '../../assets/mooskin-icons/two-tone.woff2';

export const GlobalStyle = createGlobalStyle`
    /* Google Font Imports */
    @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&display=swap');

    /* Global Styles */
    * {
        box-sizing: border-box;
        outline: none;
        font-family: Arial, sans-serif;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        margin: 0;
        padding: 0;
        color: #2d2d2d;
    }

    /* Mooskin Icons */
    @font-face {
        font-family: 'Mooskin Icons';
        font-style: normal;
        font-weight: 400;
        src: url(${RegularIcons}) format('woff2');
    }
    @font-face {
        font-family: 'Mooskin Icons Outlined';
        font-style: normal;
        font-weight: 400;
        src: url(${OutlinedIcons}) format('woff2');
    }
    @font-face {
        font-family: 'Mooskin Icons Round';
        font-style: normal;
        font-weight: 400;
        src: url(${RoundIcons}) format('woff2');
    }
    @font-face {
        font-family: 'Mooskin Icons Sharp';
        font-style: normal;
        font-weight: 400;
        src: url(${SharpIcons}) format('woff2');
    }
    @font-face {
        font-family: 'Mooskin Icons Two Tone';
        font-style: normal;
        font-weight: 400;
        src: url(${TwoToneIcons}) format('woff2');
    }
`;

export default GlobalStyle;
