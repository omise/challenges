import RadioGroup from 'static/RadioGroup';
import Button from 'static/Button';
import { connect } from 'react-redux';
import styled from 'styled-components';
import React, { Component } from 'react';
import { palette } from 'config/cssVars';

const Wrapper = styled.div`
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    text-align: center;
    padding: 27px;
    background: ${palette.white};
    opacity: 0.96;
    display: table;
    
    
    width: calc(100% + 1px);
    min-height: 376px;

    .donation-opts {
        display: block;
    }

    h2 {
        color: ${palette.grayDark};
    }

    button {
        margin: 18px auto 0;
        padding: 10px 18px;
    }
`;

const InnerWrap = styled.div`
    display: table-cell;
    vertical-align: middle;
`;

class Payments extends Component {

    handleOnPaymentChange(e){
        console.log(+(e.target.value));
    }


    render() {
        console.log(this.props);
        const { charities } = this.props;
        console.log(charities);
        return (
            <Wrapper>
                <InnerWrap>
                    <h2>Select the amount you would like to donate</h2>
                    <RadioGroup
                        className={'donation-opts'}
                        options={[10, 20, 50, 100, 500, 1000]}
                        name={'payment'}
                        {...this.props}
                    />
                    
                </InnerWrap>
            </Wrapper>
        )
    }
}

const MapStateToProps = state => {
    return state;
}

export default connect(MapStateToProps, null)(Payments);
