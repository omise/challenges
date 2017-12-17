import styled, {injectGlobal} from 'styled-components';

export default injectGlobal`
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
    }
`;