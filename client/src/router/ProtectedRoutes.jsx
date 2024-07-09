import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoutes = () => {
	const { userData, loading } = useContext(AuthContext);
	if (loading) return <h1>Loading...</h1>;

	if (!userData) return <Navigate to='/login' />;

	return <Outlet />;
};

export default ProtectedRoutes;
