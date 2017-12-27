import React from 'react';
import { connect } from 'react-redux';
import InputNumber from 'static/InputNumber';
import Spinner from 'static/Spinner';

import { text } from 'config/cssVars';

const Counter = props => {
    const { donations } = props;
    donations.isLoading && <Spinner />
    return (
        <InputNumber
            label={text.totalDonations}
            value={donations.amounts}
            isReadOnly={true}
            lang={'en-150'}
        />    
    )
}

const MapStateToProps = state => {
    return state
}

export default connect(MapStateToProps, null)(Counter);

