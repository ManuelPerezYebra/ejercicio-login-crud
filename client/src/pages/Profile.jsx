import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Logout from '../components/logout/Logout';
import { AuthContext } from '../contexts/AuthContext';
const Profile = () => {
	const navigate = useNavigate();
	const { userData } = useContext(AuthContext);
	return (
		<>
			<h1>{userData.username}</h1>
			<span>{userData.email}</span>
			<button onClick={() => navigate('/')}>Go Back</button>
			<Logout />
		</>
	);
};
export default Profile;
