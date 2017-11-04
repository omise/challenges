import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { UpdateTotalDonate, UpdateMessage } from './actions'
import { fetchCharities, fetchDonate, postDonate, popMessage } from './actions/middleware'
import DonateCard from './components/DonateCard'
import PopMessage from './components/PopMessage'

const DonateMessage = styled.p`
  color: #5B657C;
  margin: 1em 0;
  font-size: 1.1em;
  text-align: center;
`;


const AppTitle = styled.h1`
  color: #5B657C;
  text-align:center;
`;

class App extends Component {
    constructor(props) {
      super();
      this.state = {
        charities: [],
        selectedAmount: 0,
        popMessage: false
      };
      this.handlePay = this.handlePay.bind(this);
    }

    handlePay(id, amount, currency) {
      if(amount>0) {
        this.props.dispatch(postDonate.call(this, id, amount, currency));
      } else {
        this.props.dispatch(popMessage.call(this, `Please select amount to Donate!`));
      }
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
          <AppTitle>Tamboon React</AppTitle>
          <DonateMessage>All donations: <strong ref="donate-amount">{donate}</strong></DonateMessage>
          {
            this.state.popMessage ?
              <PopMessage message={message}/>
            : null
          }
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
