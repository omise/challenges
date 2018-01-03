import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { text, palette, family } from 'config/variables';

const MessageWrapper = styled.div`
    padding: 36px;
`;

const H2 = styled.h2`
    font-size: 27px;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: ${palette.blueDark};
    font-family: ${family.book};

    & small {
        font-size: 14px;
        display: block;
        letter-spacing: 0;
        color: ${palette.gray};
    }
`;

const P = styled.p`
    font-size: 16px;
    color: ${palette.gray};
    font-family: ${family.book};
    font-smoothing: antialiased;

    &.charity-name {
        font-size: 14px;
        letter-spacing: 2px;
        color: ${palette.blue};
        text-transform: uppercase;
    }
`;

let Message = props => {
    const { form, charities } = props;
    
    const charityId = form.values.charitiesId;
    const charityItems = charities.items;
    
    const selectedCharity = charityItems.find(charityItem => charityItem.id === charityId);
    const charityName = selectedCharity.name;
    
    return (
        <MessageWrapper className={'message-wrapper'}>
            <H2>{text.donationSuccess}</H2>
            <P>Your <strong>{form.values.currency} {form.values.amount}</strong> donation is on its way to <strong>{charityName}</strong>. Your contribution is highly appreciated. </P>
            <P className={'charity-name'}>{charityName}</P>
        </MessageWrapper>    
    )
}

Message = connect(
    state => ({
        form: state.form.donationForm,
        charities: state.charities
    })
)(Message)

export default Message;

