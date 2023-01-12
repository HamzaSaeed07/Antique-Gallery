import { useEffect, useState } from 'react';
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
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('img', img);
    data.append('password', password);
    data.append('Roll', capitalizeFirstLetter(role));
    data.append('Address', address);
    registerUser(data);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (response.isSuccess) {
      toast.success('Registration Success');
      navigate('/login');
    } else if (response.isError) {
      toast.error('Something went wrong!');
    }
  }, [response.isSuccess]);
  return (
    <div className='regs'>
      <div className='background'>
        <div className='shape'></div>
        <div className='shape'></div>
      </div>
      {}
      <form className='form-container' onSubmit={onSubmit}>
        <h5>Welcome to Antique Gallery</h5>
        <label className='form-label' htmlFor='username'>
          Name
        </label>
        <input type='text' placeholder='Enter Name' id='username' required onChange={e => setName(e.target.value)} />
        <label className='form-label' htmlFor='username'>
          Email
        </label>
        <input type='email' placeholder='Enter Email' id='useremail' required onChange={e => setEmail(e.target.value)} />
        <label className='form-label' htmlFor='role'>
          Select your role:
        </label>
        <select className='form-select' name='role' value={role} id='role' onChange={e => setRole(e.target.value)}>
          <option value='Buyer'>Buyer</option>
          <option value='Seller'>Seller</option>
        </select>
        <label className='form-label' htmlFor='adress'>
          Adress
        </label>
        <input type='adress' placeholder='Adress' id='adress' onChange={e => setAddress(e.target.value)} />
        <label className='form-label' htmlFor='password'>
          Password
        </label>
        <input type='password' placeholder='Password' id='password' required onChange={e => setPasswrod(e.target.value)} />
        <label className='form-label' htmlFor='image'>
          Image
        </label>
        <input type='file' id='image' accept='image/*' onChange={e => setImg(e.target.files[0])} />
        <button className='register-button' type='submit'>
          Sign Up
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
