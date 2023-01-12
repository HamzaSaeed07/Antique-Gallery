import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BoxArrowRight } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
function Header() {
  const { activeUser } = useSelector(state => state.authReducer);
  console.log(activeUser);
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Welcome</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto justify-content-center align-items-center' style={{ gap: '1rem' }}>
              <div>{activeUser.name}</div>
              <div>
                <img src={activeUser.img} alt='profile-pic' width={35} height={35} style={{ borderRadius: '50%' }} />
              </div>
              <BoxArrowRight size='20px' style={{ cursor: 'pointer' }} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
