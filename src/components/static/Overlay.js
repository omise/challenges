import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {palette} from 'config/variables';

const Wrapper = styled.div`
    display: table;
    width: calc(100% + 2px);
    min-height: 380px;
    height: 100%;
    padding: 27px;
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    z-index: 9;

    text-align: center;
    background: ${palette.white};
    opacity: 0.96;
    
    & > div.inner-wrap {
        display: table-cell;
        vertical-align: middle;
    }
`;

const Overlay = props => (
    <Wrapper className={'overlay'}>
        <div className={'inner-wrap'}>
            {props.children}
        </div>    
    </Wrapper>
);

Overlay.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default Overlay;