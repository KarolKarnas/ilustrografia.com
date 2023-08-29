import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
// import { UserInfo } from '../types/User';

const PrivateRoute = () => {
	const { userInfo } = useSelector((state: RootState) => state.auth);

	return userInfo && userInfo.isAdmin ? (
		<Outlet />
	) : (
		<Navigate to='/login' replace />
	);
};
export default PrivateRoute;
