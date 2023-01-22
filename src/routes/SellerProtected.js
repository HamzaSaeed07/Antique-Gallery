import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import NotAuth from '../components/NotAuth';

const SellerProtected = () => {
  const { activeUser } = useSelector(state => state.authReducer);
  if (activeUser && activeUser.Roll === 'Seller') {
    return <Outlet />;
  } else {
    return <NotAuth />;
  }
};
export default SellerProtected;
