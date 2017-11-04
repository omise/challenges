import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';
import PaymentOption from './PaymentOption';

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
    border-radius: 3px;
`;

const PaymentsOptions = styled.div`
    position: absolute;
    top: 0;
    height: 20%;
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0
`;

const CloseButton = styled(StyledButton)`
    border: none;
    color: #444;
    font-weight:bold;
    right: 10px;
    position: absolute;
    top: 10px;
`;

const PaymentButton = styled(StyledButton)`
    display: block;
    margin: 10px auto;
`;

const PaymentLabel = styled.div`
	font-size: 1.2em;
	margin-bottom: 5px;
	color:#1c3284;
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

	updateSelectedCharity(id, amount, currency) {
        this.setState({	 
        	selectedAmount: amount,
        	id: id,
        	currency: currency
        })
	}

	render() {
		const { id, currency, onPayClick, onCloseClick } = this.props;
		let self = this;
		const payments = [10, 20, 50, 100, 500].map((amount, j) => (
	      <PaymentOption key={j} amount={amount} id={id} currency={currency} onclick={self.updateSelectedCharity.bind(this)} />          
	    ));
	    return (
	    	<PaymentOverlayContainer>
	    		<CloseButton onClick={onCloseClick} absolute right top>X</CloseButton>	    		
	    		<PaymentsOptions>
	    			<PaymentLabel>Select the amount to Donate({currency})</PaymentLabel>
			    	{payments}	    
			    	<PaymentButton onClick={this.handleOnPay.bind(this)} block center>Pay</PaymentButton>	
			    </PaymentsOptions>
		    </PaymentOverlayContainer>
	    )
	}
}

export default PaymentOverlay