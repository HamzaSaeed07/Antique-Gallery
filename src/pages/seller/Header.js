import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BoxArrowRight } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/reducers/auth';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  const { activeUser } = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
    navigate('/login');
  };
  return (
    <>
      <Navbar bg='light'>
        <Container>
          <Navbar.Brand>
            <Link to='/' style={{ color: 'black' }}>
              Home
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto justify-content-center align-items-center' style={{ gap: '1rem' }}>
              <div>{activeUser?.name}</div>
              <div>
                <img src={activeUser?.img} alt='profile-pic' width={35} height={35} style={{ borderRadius: '50%' }} />
              </div>
              <div onClick={handleLogOut} style={{ cursor: 'pointer' }}>
                <BoxArrowRight size='20px' />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
