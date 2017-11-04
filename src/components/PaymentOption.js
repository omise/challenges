import React from 'react';
import styled from 'styled-components';

const RadioButton = styled.input`
	position: absolute;
	visibility: hidden;
	
	&:checked ~ div {
	  background: #5781F6;
	  	&::before{
		  background: #fff;
		}
	}
`;

const PsuedoRadio = styled.div`
	display: block;
	position: absolute;
	border: 1px solid #ccc;
	border-radius: 100%;
	height: 15px;
	width: 15px;
	top: 0;
	left: 5px;
	z-index: 5;
	transition: border .25s linear;
	-webkit-transition: border .25s linear;
	&::before {
		display: block;
		position: absolute;
		content: '';
		border-radius: 100%;
		height: 5px;
		width: 5px;
		top: 5px;
		left: 5px;
		margin: auto;
		transition: background 0.25s linear;
		-webkit-transition: background 0.25s linear;
	}
`;

const RadioWrapper = styled.label`
	color: #ccc;
	position: relative;
	display: inline-block;
	width: 52px;
	height: 20px;
	&:hover div {
	  border: 1px solid #5781F6;
	}
`;

const AmountContainer = styled.span`
    position: absolute;
    right: 0px;
    color:#1c3284;
`;

const PaymentLabel = styled.div`
	font-size: 1.2em;
	margin-bottom: 5px;
	color:#1c3284;
`;

const PaymentOption = (props) => {
	const {id, amount, currency, onclick } = props;
	return(
		<RadioWrapper>
	        <RadioButton
	          type="radio"
	          name="payment"
	          onClick={onclick.bind(this, id, amount, currency)} />
	        <PsuedoRadio/>
        	<AmountContainer>{amount}</AmountContainer>	         
    	</RadioWrapper>
	)
}

export default PaymentOption;