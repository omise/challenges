import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import {Container, Row, Col} from 'react-grid-system';
import { UpdateTotalDonate, UpdateMessage } from './actions'
import DonateCard from './components/DonateCard'
import { summaryDonations } from './helpers';

const style = {
  color: 'red',
  margin: '1em 0',
  fontWeight: 'bold',
  fontSize: '16px',
  textAlign: 'center',
};

class App extends Component {
    constructor(props) {
      super();
      this.state = {
        charities: [],
        selectedAmount: 10,
      };
      this.handlePay = this.handlePay.bind(this);
    }

    handlePay(id, amount, currency) {
      const self = this;
      fetch('http://localhost:3001/payments', {
        method: 'POST',
        body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
      })
      .then(function(resp) { return resp.json(); })
      .then(function() {
        self.props.dispatch(UpdateTotalDonate(amount));
        self.props.dispatch(UpdateMessage(`Thanks for donate ${amount}!`,amount));

        setTimeout(function() {
          self.props.dispatch(UpdateMessage('', amount));
        }, 2000);
      });
    }

    componentDidMount() {
      const self = this;
      let amount = 0;
      fetch('http://localhost:3001/charities')
        .then(function(resp) { return resp.json(); })
        .then(function(data) {
          self.setState({ charities: data }) });

      fetch('http://localhost:3001/payments')
        .then(function(resp) { return resp.json() })
        .then(function(data) {
          amount = summaryDonations(data.map((item) => (item.amount && item.amount>0) ? item.amount : 0)),
          self.props.dispatch(UpdateTotalDonate(amount));
        })
    }

    render() {
      const self = this;
      const cards = this.state.charities.map(function(item, i) {
        return (
            <Col md={6} sm={12} key={i}>
              <DonateCard key={i} id={item.id} onPayClick={self.handlePay} name={item.name} image={item.image} currency={item.currency} />
            </Col>
        );
      });

      const donate = this.props.donate;
      const message = this.props.message;

      return (
        <div>
          <h1>Tamboon React</h1>
          <p>All donations: {donate}</p>
          <p style={style}>{message}</p>
          <Container>
            <Row>
              {cards}
            </Row>
          </Container>
        </div>
      );
    }
  }


export default connect((state) => state)(App);
