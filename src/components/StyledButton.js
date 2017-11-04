import styled from 'styled-components';

const StyledButton = styled.button`
	background: #fff;
	border: 1px solid #5781F6;
	border-radius: 2px;
	color: #5781F6;
	float: ${props => props.alignRight ? 'right' : 'none'};
`;

export default StyledButton;