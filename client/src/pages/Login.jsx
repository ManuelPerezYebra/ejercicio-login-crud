import { useContext, useEffect } from 'react';
import { loginRequest } from '../utils/auth/auth.api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import {
	ButtonsContainer,
	StyledForm,
	StyledInputContainer,
	StyledSubmitInput
} from './login.styles';
import { StyledButton } from './homeLogedIn.styles';

const Login = () => {
	const { userData, setUserData, loading } = useContext(AuthContext);

	useEffect(() => {
		if (!userData) return;
		navigate('/homelogedin');
	}, [userData]);
	if (loading) return <h1>Loading...</h1>;
	const navigate = useNavigate();
	return (
		<>
			<StyledForm onSubmit={event => handleSubmit(event, setUserData)}>
				<StyledInputContainer>
					<label htmlFor='username'>Email</label>
					<input
						type='text'
						name='email'
						id='email'
						placeholder='Indroduce tu email'
					/>
				</StyledInputContainer>
				<StyledInputContainer>
					<label htmlFor='username'>Password</label>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='Indroduce tu contraseña'
					/>
				</StyledInputContainer>
				<ButtonsContainer>
					<StyledSubmitInput type='submit' value='Login User' />
				</ButtonsContainer>
			</StyledForm>
			<StyledButton onClick={() => navigate('/')}>Go back</StyledButton>
		</>
	);
};

const handleSubmit = async (event, setUserData) => {
	event.preventDefault();
	const { email, password } = event.target;
	const loginData = {
		email: email.value,
		password: password.value
	};
	const serveMessage = await loginRequest(loginData, setUserData);
	console.log(serveMessage);
};
export default Login;
