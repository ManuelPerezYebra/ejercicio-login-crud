import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Logout from '../components/logout/Logout';
import { AuthContext } from '../contexts/AuthContext';
import { ButtonContainer, StyledButton } from './homeLogedIn.styles';
import {
	PreviewImage,
	ProfileInfoContainer,
	ProfilePhoto
} from './profileinfo.styles';
import { fileReaderPromise } from '../../../server/src/utils/file-reader';
import { patchData } from '../utils/api';
import { URLS } from '../constants/urls';

const Profile = () => {
	const navigate = useNavigate();
	const { userData } = useContext(AuthContext);
	const [preview, setPreview] = useState(null);
	const [file, setFile] = useState(null);
	const [visible, setVisible] = useState(false);
	const [url, setUrl] = useState('');
	const { setUserData } = useContext(AuthContext);
	const [users, setUsers] = useState([]);

	return (
		<>
			<ProfileInfoContainer>
				<h1>{userData.username}</h1>
				<ProfilePhoto $color={userData.color}>
					{!userData.image && (
						<h1>{userData.username.charAt(0).toUpperCase()}</h1>
					)}
					{userData.image && <img src={userData.image} alt='' />}
				</ProfilePhoto>
				<button onClick={() => hideForm(visible, setVisible)}>
					Edit Image
				</button>
				{visible && (
					<form
						onSubmit={event =>
							handleSubmit(
								event,
								file,
								userData.id,
								setUsers,
								setUserData,
								userData
							)
						}
					>
						<input
							type='file'
							name='image'
							id=''
							onChange={event => handleFileChange(event, setFile, setPreview)}
						/>
						<input type='submit' value='Upload' disabled={!file} />
					</form>
				)}
				{!userData.image && (
					<PreviewImage>
						{preview && <img src={preview} alt='preview' />}
					</PreviewImage>
				)}

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
const hideForm = (visible, setVisible) => {
	setVisible(!visible);
};
const handleFileChange = async (event, setFile, setPreview) => {
	const file = event.target.files[0];
	if (!file) return;
	setFile(file);
	try {
		const result = await fileReaderPromise(file);
		setPreview(result);
	} catch (error) {
		console.log(error);
	}
};

const handleSubmit = async (event, file, id) => {
	event.preventDefault();
	if (!file) {
		console.error('No file selected');
	}
	const formData = new FormData();
	formData.append('image', file);
	try {
		const response = await fetch(`http://localhost:3000/api/upload/${id}`, {
			method: 'PATCH',
			body: formData
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const result = await response.json();
		console.log(result);
	} catch (error) {
		console.error('Error uploading file:', error);
	}
};

export default Profile;
