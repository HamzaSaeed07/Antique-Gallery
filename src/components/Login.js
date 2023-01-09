import { useNavigate } from 'react-router-dom';
import '../Style/Login.css';
function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <div class='login-background'>
        <div class='login-shape'></div>
        <div class='login-shape'></div>
      </div>
      <form class='login-form'>
        <h3>Login</h3>

        <label class='login-label' for='usermail'>
          Email
        </label>
        <input class='login-input' type='email' placeholder='Enter your Email' id='usermail' />

        <label class='login-label' for='password'>
          Password
        </label>
        <input class='login-input' type='password' placeholder='Password' id='password' />

        <button>Log In</button>
        <div class='login-social'>
          <span class='login-social'>
            {' '}
            <p>
              Don't have an account?
              <span className='register-link' onClick={() => navigate('/register')}>
                Sign Up
              </span>
            </p>
          </span>
        </div>
      </form>
    </div>
  );
}
export default Login;
