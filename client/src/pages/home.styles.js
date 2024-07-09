import styled from 'styled-components';

const MainContainer = styled.div`
	margin: 20px auto;
`;

const StyledUserContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 90%;
	margin: 10px auto;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
	position: relative;
	padding-right: 30px;
	@media only screen and (max-width: 425px) {
		padding-right: 60px;
	}
`;
const StyledActionIconsContainer = styled.div`
	display: flex;
	gap: 20px;
	justify-content: space-around;
	img {
		max-width: 16px;
	}
	position: absolute;
	right: 60px;
	top: 50%;
	transform: translateY(-50%);
	@media only screen and (max-width: 425px) {
		position: absolute;
		right: 35px;
		top: 50%;
		transform: translateY(-50%);
	}
`;

export { StyledUserContainer, StyledActionIconsContainer, MainContainer };
