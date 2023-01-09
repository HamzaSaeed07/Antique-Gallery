import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../api';
import '../Style/Login.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser, response] = useLoginMutation();

  const onSubmit = e => {
    e.preventDefault();
    loginUser({ email, password });
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className='login-background'>
        <div className='login-shape'></div>
        <div className='login-shape'></div>
      </div>
      <form className='login-form' onSubmit={onSubmit}>
        <h3>Login</h3>

        <label className='login-label' htmlFor='usermail'>
          Email
        </label>
        <input className='login-input' type='email' placeholder='Enter your Email' id='usermail' required onChange={e => setEmail(e.target.value)} />

        <label className='login-label' htmlFor='password'>
          Password
        </label>
        <input className='login-input' type='password' placeholder='Password' id='password' required onChange={e => setPassword(e.target.value)} />

        <button>Log In</button>
        <div className='login-social'>
          <span className='login-social'>
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
