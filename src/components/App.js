import React from 'react';
import DonationForm from 'components/Form'

export default () => <DonationForm />




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