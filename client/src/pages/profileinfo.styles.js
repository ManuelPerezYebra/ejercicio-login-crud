import styled from 'styled-components';

const ProfileInfoContainer = styled.div`
	text-align: center;
`;
const ProfilePhoto = styled.div`
	width: 70px;
	height: 70px;
	display: flex;
	justify-content: center;
	margin: 0 auto;
	align-items: center;
	background-color: ${color => color.$color};
	border-radius: 50%;
`;
const PreviewImage = styled.div`
	display: flex;
	justify-content: center;
	img {
		max-width: 80px;
	}
`;

export { ProfileInfoContainer, ProfilePhoto, PreviewImage };
