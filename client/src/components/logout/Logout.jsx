import Cookies from 'js-cookie';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { StyledButton } from '../../pages/homeLogedIn.styles';

const Logout = () => {
	const { setUserData } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<StyledButton onClick={() => logout(setUserData, navigate)}>
			Logout
		</StyledButton>
	);
};

const logout = (setUserData, navigate) => {
	Cookies.remove('token');
	setUserData(null);
	navigate('/');
};
export default Logout;
