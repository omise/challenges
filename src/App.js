import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { UpdateTotalDonate, UpdateMessage } from './actions'
import { fetchCharities, fetchDonate, postDonate } from './actions/middleware'
import DonateCard from './components/DonateCard'

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
      this.props.dispatch(postDonate.call(this, id, amount, currency));
    }

    componentDidMount() {
      this.props.dispatch(fetchCharities.call(this));
      this.props.dispatch(fetchDonate());
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
