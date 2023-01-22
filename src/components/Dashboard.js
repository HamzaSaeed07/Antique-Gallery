import '../Style/Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dashboard() {
  return (
    <div class='wrapper d-flex align-items-stretch'>
      <nav id='sidebar' class='active'>
        {/* <h1><a href="index.html" class="logo">M.</a></h1> */}
        <ul class='list-unstyled components mb-5'>
          <li class='active'>
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
        <div class="footer">
        	<p>
					  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
					</p>
        </div> */}
      </nav>

      <div id='content' class='p-4 p-md-5'>
        <nav class='navbar navbar-expand-lg navbar-light bg-light'>
          <div class='container-fluid'>
            <button type='button' id='sidebarCollapse' class='btn btn-primary'>
              <i class='fa fa-bars'></i>
              <span class='sr-only'>Toggle Menu</span>
            </button>
            <button class='btn btn-dark d-inline-block d-lg-none ml-auto' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
              <i class='fa fa-bars'></i>
            </button>

            <div class='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul class='nav navbar-nav ml-auto'>
                <li class='nav-item active'>
                  <a class='nav-link' href='#'>
                    Order
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Category
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Products
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Bigging
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Seller
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    User
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* 
        <h2 class="mb-4">Sidebar #07</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
      </div>
    </div>
  );
}
export default Dashboard;
