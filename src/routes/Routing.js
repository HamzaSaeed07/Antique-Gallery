import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bid from '../components/Bid';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Login from '../components/Login';
import Product from '../components/Product';
import Registeration from '../components/Registeration';
import Detail from '../components/Detail';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<Detail />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<Registeration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/bid' element={<Bid />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
