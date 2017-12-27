import styled from 'styled-components';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formAmountValueUpdated, formCharityIdUpdated, newPaymentReceived } from '../actions';
import Payments from 'static/Payments';
import Button from 'static/Button';
import Image from 'static/Image';
import { text, palette } from 'config/cssVars';

const RadioInput  = styled.div`
    display: table;
    width: 100%;
    margin: 0;
    position: relative;
    z-index: 9;

    input[type=radio] {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        opacity: 0;
        cursor: pointer;
    }
    label {
        display: block;
        padding: 0;
        width: 100%;
        height: 100%;
        position: relative;
        margin-bottom: 0;
        cursor: pointer;

        & .label-text {
            display: inline-block;
            vertical-align: middle;
            width: calc(100% - 100px);
            padding: 27px;

            @media (max-width: 1012px) {
                min-height: 96px;
            }

            @media (max-width: 768px) {
                min-height: 118px;
                font-size: 15px;
            }

            @media (max-width: 568px) {
                min-height: 96px;
                font-size: 16px;
            }
        }
    }

    input[type=radio]:hover + label:after,
    input[type=radio]:checked + label:after {
        background: ${palette.blue};
        color: ${palette.white};
    }

    label:after {
        
        content: '${text.ctaDonate}';
        line-height: 0.75;
        border: 2px solid ${palette.blueDark};
        border-radius: 3px;
        padding: 8px 12px;
        text-align: center;
        color: ${palette.blueDark};
        transition: background 0.1s ease-in-out;
        font-size: 16px;
    }

    label:before {
        display: none;
    }

`;

const Wrapper = styled.article`
    position: relative;
    width: 49%;
    display: inline-block;
    &:nth-child(odd) {
        margin: 0 1% 2% 0;
    }
    &:nth-child(even) {
        margin: 0 0 2% 1%;
    }
    background: white;
    
    @media (max-width: 568px) {
        width: 90%;
        display: block;
        margin: 20px auto!important;
    }

`;

class Charity extends Component {

    render() {

        const {
            id, image, caption, optid, name, value, label, charityId, ...props
            } = this.props;
            console.log(this.props.charityId)
            console.log(this.props.charityForm.charitiesId)
        return (
            <Wrapper 
                className={'charity-item'}
                >
                <RadioInput
                    className={'input-radio'}>
                    <input
                        type={'radio'}
                        id={optid}
                        name={name}
                        value={value}
                        
                        onChange={this.props.handleOnCharityChange}
                    />
                    <label
                        htmlFor={optid}
                    >
                        <Image
                            src={`images/${image}`}
                            alt={caption}
                            title={caption}
                        />
                        <span className={'label-text'}>{label}</span>
                    </label>
                </RadioInput>
                {
                    +(this.props.charityForm.charitiesId) === charityId &&
                    <div>
                        <Payments
                            onChange={this.props.handleOnAmountChange} 
                        />
                        
                        <Button
                            type={'submit'}
                            //disabled={charities.isloading}
                            className={'submit-payment'}
                            onSubmit={this.props.handleOnSubmit}
                        >
                            Pay Donation
                        </Button> 
                    </div>    
                }
            </Wrapper>
        )
    }
}

const MapStateToProps = state => {
    return state;
}

const MapDispatchToProps = (dispatch, ownProps) => ({
    handleOnCharityChange: (e) => {
        const charitiesId = +(e.target.value);
        dispatch(formCharityIdUpdated(charitiesId))
    },
    handleOnAmountChange: (e) => {
        e.stopPropagation();
        const amount = +(e.target.value);
        dispatch(formAmountValueUpdated(amount))
    },
    handleOnSubmit: (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        dispatch(newPaymentReceived(1, 500));
    }
})


export default connect(MapStateToProps, MapDispatchToProps)(Charity);

