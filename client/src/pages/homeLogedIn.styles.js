import styled from 'styled-components';

const LogedInContainerInfo = styled.div`
	margin: 5px auto;
	width: 90vw;
	background-color: #fff;
	padding: 20px 0px;
	box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.08);
	border-radius: 10px;
	margin-bottom: 20px;
	h1 {
		font-size: 18px;
		text-align: center;
	}
`;
const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
	gap: 10px;
`;

const StyledButton = styled.button`
	background-color: white;
	border: none;
	background-color: orange;
	border-radius: 10px;
	color: white;
	width: 90%;
	padding: 15px 0px;
	font-size: 20px;
	font-weight: 700;
	box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.08);
	margin: 0px 20px 0px 20px;
`;

export { LogedInContainerInfo, StyledButton, ButtonContainer };
