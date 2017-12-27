import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'config/cssVars';
import { getClosest } from '../helpers';
import { charityIsSelected } from '../actions';

import AppHeader from 'static/AppHeader';
import Charities from 'components/Charities';
import Main from 'static/Main';
import Button from 'static/Button';
import Message from 'components/static/Message';

class App extends Component {

    render() {
        const donate = this.props.donate;
        const message = this.props.message;
        return (
            <Main>
              <AppHeader />
              <Charities />
            </Main>
        )
    }
}

export default App;

/* const handlePay = (id, amount, currency) => (
    fetch('http://localhost:3001/payments', 
    {
      method: 'POST',
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": ${currency} }`,
    })
    .then(resp => resp.json())
    .then(data => (
      this.props.dispatch({
        type: 'UPDATE_TOTAL_DONATE',
        amount,
      }),
      this.props.dispatch({
        type: 'UPDATE_MESSAGE',
        message: `Thanks for donating ${amount}!`,
      }),
      this.props.dispatch({
        type: 'UPDATE_MESSAGE',
        message: '',
      })
    ))
  );
 */