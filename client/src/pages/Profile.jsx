import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Logout from '../components/logout/Logout';
import { AuthContext } from '../contexts/AuthContext';
import { ButtonContainer, StyledButton } from './homeLogedIn.styles';
import { ProfileInfoContainer } from './profileinfo.styles';
const Profile = () => {
	const navigate = useNavigate();
	const { userData } = useContext(AuthContext);
	return (
		<>
			<ProfileInfoContainer>
				<h1>{userData.username}</h1>
				<p>{userData.email}</p>
			</ProfileInfoContainer>

			<ButtonContainer>
				<StyledButton onClick={() => navigate('/homelogedin')}>
					Go Back
				</StyledButton>
				<Logout />
			</ButtonContainer>
		</>
	);
};
export default Profile;
