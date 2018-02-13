import React from 'react';
import { connect } from 'react-redux';
import { FormSection, Field, reduxForm, reset } from 'redux-form';

import Container from 'static/Container';
import PaymentsOverlay from 'static/PaymentsOverlay';
import Spinner from 'static/Spinner';
import Image from 'static/Image';
import { FieldSet, OptionItem, InputWrapper, ImageLabel, LabelText } from './CharitiesList';

import { text, palette } from 'config/variables';

let CharitiesList = props => {
    const { charities, form, reset, input, parse } = props;
    charities.isLoading && <Spinner />
    return (
        <FieldSet className={'form-section charities-list'}>
            <Container className={'Container'}>
            {charities.items.map((item, i) => (
                <OptionItem
                    key={i}
                    className={'charity-item'}>
                    <Field
                        component={'input'}
                        type={'radio'}
                        id={`opt-id0${item.id}`}
                        className={'option-charity'}
                        name={'charitiesId'}
                        parse={parse}
                        value={item.id}
                        checked={form.values.charitiesId === item.id}
                        onChange={reset}
                        {...input}
                    />
                    <ImageLabel htmlFor={`opt-id0${item.id}`}>
                        <Image
                            src={`images/${item.image}`}
                            alt={item.name}
                            title={item.name}
                        />
                        <LabelText className={'label-text'}>{item.name}</LabelText>
                    </ImageLabel>
                    
                    {form.values.charitiesId === item.id &&
                        <FormSection name={'payments'}>
                            <PaymentsOverlay />
                        </FormSection>    
                    }
                </OptionItem>  
            ))}
            </Container>
        </FieldSet>  
    )
}

CharitiesList = connect(
    state => ({
        parse: value => +value,
        form: state.form.donationForm,
        charities: state.charities,
    })
)(CharitiesList);

CharitiesList = reduxForm({
    form: 'donationForm',
    destroyOnUnmount: false,
})(CharitiesList)


export default CharitiesList;
