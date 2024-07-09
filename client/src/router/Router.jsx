import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Layout from '../layouts/Layouts';
import ProtectedRoutes from './ProtectedRoutes';
import Profile from '../pages/Profile';
import HomeLogedIn from '../pages//HomeLogedIn';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />

			<Route element={<ProtectedRoutes />}>
				<Route path='/profile' element={<Profile />} />
				<Route path='/homelogedin' element={<HomeLogedIn />} />
			</Route>
		</Routes>
	);
};

export default Router;
