import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import Logout from '../components/logout/Logout';
import { AuthContext } from '../contexts/AuthContext';
import { deleteData, getData, patchData } from '../../src/utils/api';
import { URLS } from '../constants/urls';
import Cookies from 'js-cookie';

import {
	MainContainer,
	StyledActionIconsContainer,
	StyledUserContainer
} from './home.styles';
import {
	ButtonContainer,
	LogedInContainerInfo,
	StyledButton
} from './homeLogedIn.styles';
import {
	StyledForm,
	StyledInputContainer,
	StyledSubmitInput
} from './login.styles';

const Profile = () => {
	const { setUserData } = useContext(AuthContext);
	const [users, setUsers] = useState([]);
	const { userData, loading } = useContext(AuthContext);
	const navigate = useNavigate();
	const [visible, setVisible] = useState(false);
	const [newUsername, setNewUsername] = useState('');

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const data = await getData(URLS.API_USERS);
				setUsers(data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchUsers();
	}, [userData]);

	if (loading) return <h1>Loading...</h1>;
	if (users.length === 0) return <h1>No users found.</h1>;
	return (
		<>
			<LogedInContainerInfo>
				<h1>Has iniciado sesión como {userData.username}</h1>
			</LogedInContainerInfo>
			<ButtonContainer>
				<StyledButton onClick={() => navigate('/Profile')}>
					Profile
				</StyledButton>
				<Logout />
			</ButtonContainer>

			<MainContainer>
				{users.map(user => (
					<div key={user._id}>
						<StyledUserContainer>
							<p>{user.username}</p>
							<p>{user.email}</p>
							{user.username === userData.username && (
								<StyledActionIconsContainer>
									<img
										onClick={() => {
											visibleEditForm(visible, setVisible);
										}}
										src='../../public/edit-icon.svg'
										alt='Edit'
									/>
									<img
										onClick={() =>
											handleDelete(user._id, setUsers, navigate, setUserData)
										}
										src='../../public/trush-icon.svg'
										alt='Delete'
									/>
								</StyledActionIconsContainer>
							)}
						</StyledUserContainer>
					</div>
				))}
			</MainContainer>
			{visible && (
				<StyledForm
					onSubmit={e => {
						handleEdit(
							e,
							userData.id,
							newUsername,
							setUsers,
							setVisible,
							setUserData,
							userData
						);
					}}
				>
					<StyledInputContainer>
						<label htmlFor='newUsername'>New Username</label>
						<input
							type='text'
							name='newUsername'
							id='newUsername'
							value={newUsername}
							onChange={e => setNewUsername(e.target.value)}
						/>
					</StyledInputContainer>

					<StyledSubmitInput type='submit' value='Change Username' />
				</StyledForm>
			)}
		</>
	);
};

const visibleEditForm = (visible, setVisible) => {
	setVisible(!visible);
	console.log(visible);
};
const handleDelete = async (id, setUsers, navigate, setUserData) => {
	try {
		await deleteData(`${URLS.API_USERS}/${id}`);
		setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
	} catch (err) {
		console.error(err);
	}
	Cookies.remove('token');
	setUserData(null);
	navigate('/');
};

const handleEdit = async (
	event,
	id,
	newUsername,
	setUsers,
	setVisible,
	setUserData,
	userData
) => {
	event.preventDefault();
	console.log(id);
	try {
		const updatedUser = await patchData(`${URLS.API_USERS}/${id}`, {
			username: newUsername
		});
		setUsers(updatedUser);
		console.log(updatedUser);
	} catch (error) {
		console.error(error);
	}
	console.log(userData.id);
	console.log(userData.username);
	console.log(id);

	setUserData({
		email: userData.email,
		id: userData.id,
		username: newUsername
	});
	console.log(userData.username);
	setVisible(false);
	// window.location.replace('');
};

export default Profile;
