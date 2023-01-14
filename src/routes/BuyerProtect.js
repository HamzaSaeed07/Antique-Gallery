import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import NotAuth from '../components/NotAuth';

const BuyerProtected = () => {
  const { activeUser } = useSelector(state => state.authReducer);
  if (activeUser && activeUser.Roll === 'User') {
    return <Outlet />;
  } else {
    return <NotAuth />;
  }
};
export default BuyerProtected;
