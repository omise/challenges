import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';

import { summaryDonations } from './helpers';

import Card from 'components/static/Card';
import InputRadio from 'components/static/InputRadio';
import Message from 'components/static/Message';

export default connect((state) => state)(
  class App extends Component {
    constructor(props) {
      super();

      this.state = {
        charities: [],
        selectedAmount: 10,
      };
    }

    componentDidMount() {
      const self = this;
      fetch('http://localhost:3001/charities')
        .then(function(resp) { return resp.json(); })
        .then(function(data) {
          self.setState({ charities: data }) });

      fetch('http://localhost:3001/payments')
        .then(function(resp) { return resp.json() })
        .then(function(data) {
          self.props.dispatch({
            type: 'UPDATE_TOTAL_DONATE',
            amount: summaryDonations(data.map((item) => (item.amount))),
          });
        })
    }

    handleOnChange(event) {
      this.setState({
        selectedAmount: event.target.value,
      })
    }

    render() {
      const cards = this.state.charities.map((item, i) => {
        const payments = [10, 20, 50, 100, 500].map((amount, j) => (
          <InputRadio
            key={j}
            type="radio"
            name="payment"
            id={`option-${amount}-${i}`}
            label={amount}
            value={amount}
            onChange={this.handleOnChange.bind(this)}
          />  
        ));

        return (
          <Card key={i}>
            <img src={`images/${item.image}`} />
            <p>{item.name}</p>
            {payments}
            <button onClick={handlePay.call(this, item.id, this.state.selectedAmount, item.currency).bind(this)}>Pay</button>
          </Card>
        );
      });

      const donate = this.props.donate;
      const message = this.props.message;

      return (
        <div>
          <h1>Tamboon React</h1>
          <p>All donations: {donate}</p>
          <Message>{message}</Message>
          {cards}
        </div>
      );
    }
  }
);

function handlePay(id, amount, currency) {
  const self = this;
  return function() {
    fetch('http://localhost:3001/payments', {
      method: 'POST',
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
      .then(function(resp) { return resp.json(); })
      .then(function() {
        self.props.dispatch({
          type: 'UPDATE_TOTAL_DONATE',
          amount,
        });
        self.props.dispatch({
          type: 'UPDATE_MESSAGE',
          message: `Thanks for donate ${amount}!`,
        });

        setTimeout(function() {
          self.props.dispatch({
            type: 'UPDATE_MESSAGE',
            message: '',
          });
        }, 2000);
      });
  }
}
