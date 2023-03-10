import '../Style/Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dashboard() {
  return (
    <div className='wrapper d-flex align-items-stretch'>
      <nav id='sidebar' className='active'>
        {/* <h1><a href="index.html" className="logo">M.</a></h1> */}
        <ul className='list-unstyled components mb-5'>
          <li className='active'>
            <a href='#'>
              <span>
                <FontAwesomeIcon icon='fa-solid fa-faUser' />
              </span>{' '}
              Orders
            </a>
          </li>
          <li>
            <a href='#'>
              <span>
                <FontAwesomeIcon icon='fa-solid fa-indent' />
              </span>{' '}
              Category
            </a>
          </li>
          <li>
            <a href='#'>
              <span>
                <FontAwesomeIcon icon='fa-solid fa-ranking-star' />
              </span>{' '}
              Products
            </a>
          </li>
          <li>
            <a href='#'>
              <span>
                <FontAwesomeIcon icon='fa-solid fa-gears' />
              </span>{' '}
              Bidding
            </a>
          </li>
          <li>
            <a href='#'>
              <span>
                <FontAwesomeIcon icon='fa-solid fa-user' />
              </span>{' '}
              Seller
            </a>
          </li>
          <li>
            <a href='#'>
              <span>
                <FontAwesomeIcon icon='fa-solid fa-id-badge' />
              </span>{' '}
              User
            </a>
          </li>
        </ul>
        {/* 
        <div className="footer">
        	<p>
					  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
					</p>
        </div> */}
      </nav>

      <div id='content' className='p-4 p-md-5'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <button type='button' id='sidebarCollapse' className='btn btn-primary'>
              <i className='fa fa-bars'></i>
              <span className='sr-only'>Toggle Menu</span>
            </button>
            <button className='btn btn-dark d-inline-block d-lg-none ml-auto' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
              <i className='fa fa-bars'></i>
            </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='nav navbar-nav ml-auto'>
                <li className='nav-item active'>
                  <a className='nav-link' href='#'>
                    Order
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Category
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Products
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Bigging
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Seller
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    User
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* 
        <h2 className="mb-4">Sidebar #07</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
      </div>
    </div>
  );
}
export default Dashboard;
