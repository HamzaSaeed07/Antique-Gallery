import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import NotAuth from '../components/NotAuth';

const AdminProtected = () => {
  const { activeUser } = useSelector(state => state.authReducer);
  if (activeUser && activeUser.Roll === 'Admin') {
    return <Outlet />;
  } else {
    return <NotAuth />;
  }
};
export default AdminProtected;
