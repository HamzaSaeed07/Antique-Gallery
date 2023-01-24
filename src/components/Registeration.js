import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../api';
import '../Style/Registeration.css';
function Registeration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [img, setImg] = useState('');
  const [role, setRole] = useState('Buyer');
  const [password, setPasswrod] = useState('');

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [registerUser, response] = useRegisterMutation();
  const onSubmit = e => {
    e.preventDefault();
    // const data = new FormData();
    // data.append('name', name);
    // data.append('email', email);
    // data.append('img', img);
    // data.append('password', password);
    // data.append('Roll', capitalizeFirstLetter(role));
    // data.append('Address', address);
    // registerUser(data);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (response?.data?.error) {
      toast.error(response?.data?.error);
    } else if (response?.data) {
      toast.success('User Registration Success');
      navigate('/login');
    }
  }, [response]);
  console.log(response);
  return (
    <div className='regs'>
      <div className='background'>
        <div className='shape'></div>
        <div className='shape'></div>
      </div>
      {}
      <form className='form-container' onSubmit={onSubmit}>
        <h5>Welcome to Antique Gallery</h5>
        <label className='reg-form-label' htmlFor='username'>
          Name
        </label>
        <input className='reg-form-input' type='text' pattern='^[^\d]+$' title='Name should not contain numbers' placeholder='Enter Name' id='username' required onChange={e => setName(e.target.value)} />
        <label className='reg-form-label' htmlFor='username'>
          Email
        </label>
        <input className='reg-form-input' type='email' placeholder='Enter Email' id='useremail' required onChange={e => setEmail(e.target.value)} />
        <label className='reg-form-label' htmlFor='role'>
          Select your role:
        </label>
        <select className='reg-form-select' name='role' value={role} id='role' onChange={e => setRole(e.target.value)}>
          <option value='Buyer'>Buyer</option>
          <option value='Seller'>Seller</option>
        </select>
        <label className='reg-form-label' htmlFor='adress'>
          Adress
        </label>
        <input className='reg-form-input' required type='adress' placeholder='Adress' id='adress' onChange={e => setAddress(e.target.value)} />
        <label className='reg-form-label' htmlFor='password'>
          Password
        </label>
        <input className='reg-form-input' type='password' placeholder='Password' pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}' title='Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters' id='password' required onChange={e => setPasswrod(e.target.value)} />
        <label className='reg-form-label' htmlFor='image'>
          Image
        </label>
        <input className='reg-form-input' type='file' id='image' accept='image/*' onChange={e => setImg(e.target.files[0])} />
        <button className='register-button' type='submit'>
          {response.isLoading ? <Spinner animation='border' variant='warning' /> : 'Sign Up'}
        </button>
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
