import styled from 'styled-components';

const StyledForm = styled.form`
	margin: 40px auto;
	width: 70%;
	box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.08);
	padding: 10px;
	border-radius: 10px;
`;
const StyledInputContainer = styled.div`
	margin: 10px auto;
	display: flex;
	flex-direction: column;
	padding: 10px;
	input {
		margin: 10px 0;
		padding: 5px 10px;
	}
`;
const StyledSubmitInput = styled.input`
	background-color: white;
	border: none;
	background-color: orange;
	border-radius: 10px;
	color: white;
	width: 100%;

	padding: 15px 0px;
	font-size: 20px;
	font-weight: 700;
	box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.08);
`;

const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export {
	StyledForm,
	StyledInputContainer,
	StyledSubmitInput,
	ButtonsContainer
};
