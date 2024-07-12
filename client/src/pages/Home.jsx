import { useEffect, useState, useContext } from 'react';
import { URLS } from '../constants/urls';
import { getData } from '../../src/utils/api';
import {
	Email,
	MainContainer,
	ProfilePhotoContainer,
	StyledActionIconsContainer,
	StyledUserContainer,
	Username
} from './home.styles';
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {
	const [users, setUsers] = useState([]);
	const { userData: loggedInUser, loading } = useContext(AuthContext);

	useEffect(() => {
		getUsers(setUsers);
	}, []);
	if (users.length === 0 && !loading) return <h1>Loading...</h1>;

	return (
		<>
			<MainContainer>
				{users.map(user => (
					<div key={user._id}>
						<StyledUserContainer>
							<ProfilePhotoContainer $color={user.color}>
								{!user.image && (
									<h1>{user.username.charAt(0).toUpperCase()}</h1>
								)}
								{user.image && <img src={user.image} alt='' />}
							</ProfilePhotoContainer>

							<Username>
								{user.username.charAt(0).toUpperCase() +
									user.username.slice(1).toLowerCase()}
							</Username>
							<Email>{user.email}</Email>
							{loggedInUser && user._id === loggedInUser._id && (
								<StyledActionIconsContainer>
									<img src='../../public/edit-icon.svg' alt='Edit' />
									<img src='../../public/trash-icon.svg' alt='Delete' />
								</StyledActionIconsContainer>
							)}
						</StyledUserContainer>
					</div>
				))}
			</MainContainer>
		</>
	);
};
const getUsers = async setUsers => {
	try {
		const data = await getData(URLS.API_USERS);
		setUsers(data);
	} catch (err) {
		console.error(err);
	}
};

export default Home;
