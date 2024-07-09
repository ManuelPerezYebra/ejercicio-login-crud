import { useNavigate } from 'react-router-dom';
import { registerRequest } from '../utils/auth/auth.api';
import {
	StyledForm,
	StyledInputContainer,
	StyledSubmitInput
} from './login.styles';
import { StyledButton } from './homeLogedIn.styles';

const Register = () => {
	const navigate = useNavigate();
	return (
		<>
			<StyledForm onSubmit={event => handleSubmit(event, navigate)}>
				<StyledInputContainer>
					<label htmlFor='username'>Username</label>
					<input type='text' name='username' id='username' />
				</StyledInputContainer>
				<StyledInputContainer>
					<label htmlFor='username'>Email</label>
					<input type='text' name='email' id='email' />
				</StyledInputContainer>
				<StyledInputContainer>
					<label htmlFor='username'>Password</label>
					<input type='text' name='password' id='password' />
				</StyledInputContainer>
				<StyledSubmitInput type='submit' value='Register User' />
			</StyledForm>
			<StyledButton onClick={() => navigate('/')}>Go back</StyledButton>
		</>
	);
};

const handleSubmit = async (event, navigate) => {
	event.preventDefault();
	const { username, email, password } = event.target;
	const newUser = {
		username: username.value,
		email: email.value,
		password: password.value
	};
	const serveMessage = await registerRequest(newUser);
	console.log(serveMessage);
	navigate('/login');
};
export default Register;
