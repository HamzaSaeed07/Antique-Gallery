import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../api';
import { setActiveUser } from '../redux/reducers/auth';
import '../Style/Login.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser, response] = useLoginMutation();

  const onSubmit = e => {
    e.preventDefault();
    loginUser({ email, password });
  };

  console.log(response);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResponse = () => {
      if (response.data && Array.isArray(response.data)) {
        toast.success('User Login Success');
        dispatch(setActiveUser(response.data[0]));
        localStorage.setItem('user', JSON.stringify(response.data[0]));
        if (response.data[0].Roll === 'Buyer') {
          navigate('/products');
        } else if (response.data[0].Roll === 'Seller') {
          navigate('/seller/products');
        } else if (response.data[0].Roll === 'Admin') {
          navigate('/dashboard');
        }
      } else if (response?.data === 'email or password is incorrect') {
        return toast.error('Invalid Email or Password');
      }
    };
    handleResponse();
  }, [response]);

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

        <button className='login-button'>{response.isLoading ? <Spinner animation='border' variant='warning' /> : 'Log In'}</button>
        <div className='login-social'>
          <span className='login-social'>
            <p>
              Don't have an account?{' '}
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
