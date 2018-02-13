import {injectGlobal} from 'styled-components';
import {palette, family} from 'config/variables';

export default injectGlobal`

    
    @font-face {
        font-family:'CircularStd-Bold';
        src:url('fonts/circular-bold.woff2') format('woff2'),
            url('fonts/circular-bold.woff') format('woff'),
            url('circular-bold.otf') format('opentype');
        font-style:normal;
        font-weight:400;
        font-smoothing: antialiased;
    }


    @font-face {
        font-family:'CircularStd-Book';
        src:url('fonts/circular-book.woff2') format('woff2'),
            url('fonts/circular-book.woff') format('woff'),
            url('fonts/circular-book.otf') format('opentype');
        font-style:normal;
        font-weight:400;
        font-smoothing: antialiased;
    }


    @font-face {
        font-family:'CircularStd-Medium';
        src:url('fonts/circular-medium.woff2') format('woff2'),
            url('fonts/circular-medium.woff') format('woff'),
            url('fonts/circular-medium.otf') format('opentype');
        font-style:normal;
        font-weight:400;
        font-smoothing: antialiased;
    }

    * {
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
    }

    html,
    body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
    }

    body {
        padding-top: 1px;
        margin-top: -1px;
        background: ${palette.grayBg};
    }

    body {
        font-family: ${family.book};
        line-height: 1.333;
    }

    h1 {
        margin: 36px 0 0 0;
    }

    h1, h2, h3 {
        font-family: ${family.book};
        font-weight: normal;
    }

    h4, h5 {
        font-family: ${family.medium};
    }
    
    p, label, li {
        font-family: ${family.book};
        margin: 0 0 18px 0;
    }

    figure {
        margin: 0;
        padding: 0;
    }

    img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }

    button,
    input[type=submit] {
        box-shadow: none;
        border-radius: 3px;
        text-shadow: none;
        background: transparent;
        border: 2px solid currentColor;
        border-radius: 3px;
        font-size: 16px;
        padding: 9px 16px;
        cursor: pointer;

        &:focus,
        &:active {
            outline: none!important;
        }
        &:disabled {
            opacity: 0.5;
        }
    }

    fieldset {
        margin:0;
        padding: 0;
        border-color: transparent;
    }

    input[type='number'] {
        -moz-appearance:textfield;
    }
    
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
      

`;