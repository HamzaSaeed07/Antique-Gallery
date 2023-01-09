import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSellerRegisterMutation } from '../api';
import '../Style/Registeration.css';
function Registeration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [password, setPasswrod] = useState('');

  const [registerSeller, response] = useSellerRegisterMutation();
  const onSubmit = e => {
    e.preventDefault();
    if (role === 'seller') {
      registerSeller({ name, email, role, password });
    }
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(response);

  return (
    <div className='regs'>
      <div className='background'>
        <div className='shape'></div>
        <div className='shape'></div>
      </div>
      {response.isError && toast.error('Something went wrong!')}
      {response.isSuccess && toast('Registration Success')}
      <form onSubmit={onSubmit}>
        <h5>Welcome to Antique Gallery</h5>
        <label htmlFor='username'>Name</label>
        <input type='text' placeholder='Enter Name' id='username' required onChange={e => setName(e.target.value)} />
        <label htmlFor='username'>Email</label>
        <input type='email' placeholder='Enter Email' id='useremail' required onChange={e => setEmail(e.target.value)} />
        <label htmlFor='role'>Select your role:</label>
        <select name='role' value={role} id='role' onChange={e => setRole(e.target.value)}>
          <option value='user'>User</option>
          <option value='seller'>Seller</option>
        </select>
        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='Password' id='password' required onChange={e => setPasswrod(e.target.value)} />
        <button type='submit'>Sign Up</button>
        <div className='social'>
          <span className='fb'>
            <p>
              Already have an account?{' '}
              <span className='login-link' onClick={() => navigate('/login')}>
                Login
              </span>
            </p>
          </span>
        </div>
      </form>
    </div>
  );
}
export default Registeration;
