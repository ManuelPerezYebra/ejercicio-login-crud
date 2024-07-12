import styled from 'styled-components';

const MainContainer = styled.div`
	margin: 20px auto;
`;

const StyledUserContainer = styled.div`
	display: flex;
	padding-top: 10px;
	padding-bottom: 10px;
	width: 90%;
	margin: 10px auto;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
	position: relative;
	padding-right: 30px;
	align-items: center;
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
const ProfilePhotoContainer = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	margin-right: 20px;
	margin-left: 20px;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: ${color => color.$color};
	border-radius: 50%;
	&::after {
		content: '';
		position: absolute;
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	h1 {
		align-items: center;
		position: absolute;
		color: white;
		margin: 0 auto;
		z-index: 1;
	}
	img {
		max-width: 70px;
	}
`;
const Username = styled.h1`
	width: 100px;
`;
const Email = styled.p`
	margin-left: 50px;
`;
export {
	StyledUserContainer,
	StyledActionIconsContainer,
	MainContainer,
	ProfilePhotoContainer,
	Username,
	Email
};
