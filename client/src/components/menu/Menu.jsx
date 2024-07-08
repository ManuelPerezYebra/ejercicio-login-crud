import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { StyledMenu } from './menu.styles';

const Menu = () => {
	const { userData, loading } = useContext(AuthContext);
	return (
		<StyledMenu>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				{userData && !loading && (
					<li>
						<Link to='/profile'>Profile</Link>
					</li>
				)}
				{!userData && !loading && (
					<>
						<li>
							<Link to='/login'>Login</Link>
						</li>
						<li>
							<Link to='/register'>Register</Link>
						</li>
					</>
				)}
			</ul>
		</StyledMenu>
	);
};
export default Menu;
