import React from 'react';
import styled from 'styled-components';
//import Button from './Button';
import StyledButton from './StyledButton';
import PaymentOverlay from './PaymentOverlay';
import PaymentOption from './PaymentOption';

const Card = styled.div`
	margin: 10px;
    border-radius: 3px;
    box-shadow: 0px 5px 10px #ccc;
    color: #5B657C;
    position: relative;
`;

const CharityImage = styled.div`
	height: 200px;
    width: 100%;
    background: center no-repeat url(${props => props.imagePath ? props.imagePath : 'none'});
`;

const CardFooter = styled.div`
	padding: 10px 20px;
`;


class DonateCard extends React.Component {
	constructor() {
		super();
		this.state = {
	      showPayment: false
	    }
	}
	handlePay() {
		alert('pay')
	}

	showPaymentOverlay() {
    	this.setState({showPayment: !this.state.showPayment})
	}

	render() {
		const { id, name, image, currency, onPayClick } = this.props;
		let imageURL = `/images/${image}`;
		return(
			<Card id={id}>
				<div>
					<CharityImage imagePath={imageURL}/>
				 	<CardFooter>
				 		<span>{name}</span>
				 		<StyledButton onClick={this.showPaymentOverlay.bind(this)} alignRight>Donate</StyledButton>
				 		
				 	</CardFooter>
				</div>
				 {
          			this.state.showPayment ? 		
						<PaymentOverlay id={id} currency={currency} onCloseClick={this.showPaymentOverlay.bind(this)} onPayClick={onPayClick}/>
					: null
				 }
			</Card>
		)
	}
}



export default DonateCard