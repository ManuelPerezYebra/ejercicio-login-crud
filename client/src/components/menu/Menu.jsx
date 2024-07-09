import { useContext } from 'react';
import { StyledMenu } from './menu.styles';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Menu = ({ $active }) => {
	const { userData, loading } = useContext(AuthContext);
	return (
		<StyledMenu>
			<ul>
				<li>
					<NavLink to='/' $activestyle={$active}>
						Home
					</NavLink>
				</li>
				{userData && !loading && (
					<li>
						<NavLink to='/profile' $activestyle={$active}>
							Profile
						</NavLink>
					</li>
				)}
				{!userData && !loading && (
					<>
						<li>
							<NavLink to='/login' $activestyle={$active}>
								Login
							</NavLink>
						</li>
						<li>
							<NavLink to='/register' $activestyle={$active}>
								Register
							</NavLink>
						</li>
					</>
				)}
			</ul>
		</StyledMenu>
	);
};
export default Menu;
