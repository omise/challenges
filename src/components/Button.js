import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
	const { label, onclick } = props;
	return (
		<StyledButton onClick={onclick}>{label}</StyledButton>
	)
}

export const StyledButton = styled.button`
	background: #fff;
	border: 1px solid #5781F6;
	border-radius: 2px;
	color: #5781F6;
	float: ${props => props.right ? 'right' : 'none'};
`;

export default Button;