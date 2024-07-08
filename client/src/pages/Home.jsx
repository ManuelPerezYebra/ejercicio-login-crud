import { useEffect, useState } from 'react';
import { URLS } from '../constants/urls';
import { getData } from '../../src/utils/api';

const Home = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers(setUsers);
	}, []);
	console.log(users);
	if (users.length === 0) return <h1>Loading...</h1>;
	return (
		<>
			<section>
				{users.map(user => (
					<div key={user._id}>
						<div>
							<p>{user.username}</p>
						</div>
					</div>
				))}
			</section>
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
