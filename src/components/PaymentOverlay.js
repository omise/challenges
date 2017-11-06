import React from 'react';
import Button from './Button'
import styled from 'styled-components';

const PaymentOverlayContainer = styled.div`
    position: absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    opacity:0.95;
    background: #fff;
    z-index:1;
    text-align: center;
`;

class PaymentOverlay extends React.Component {
	constructor() {
		super();
		this.state = {
	      selectedAmount: 0,
	      id:0,
	      currency:null
	    }
	}

	handleOnPay() {
		const { id, selectedAmount, currency } = this.state;
		this.props.onPayClick(id, selectedAmount, currency);
	}

	render() {
		const { id, currency, onPayClick, onCloseClick } = this.props;
		let self = this;
		const payments = [10, 20, 50, 100, 500].map((amount, j) => (
	      <label key={j}>
	        <input
	          type="radio"
	          name="payment"
	          onClick={function() {
	            self.setState({ 
	            	selectedAmount: amount,
	            	id: id,
	            	currency: currency
	            })
	          }} /> {amount}
	      </label>          
	    ));
	    return (
	    	<PaymentOverlayContainer>
	    		<Button label="X" onclick={onCloseClick} />
	    		<div>
			    	{payments}
			    	<div>
			    		<Button label="Pay" onclick={this.handleOnPay.bind(this)} />
			    	</div>
			    </div>
		    </PaymentOverlayContainer>
	    )
	}
}

export default PaymentOverlay