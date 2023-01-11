import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bid from '../components/Bid';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Login from '../components/Login';
import Product from '../components/Product';
import Registeration from '../components/Registeration';
import Detail from '../components/Detail';
import Layout from './Layout';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Layout><Home /></Layout> }/>
        <Route path='/products' element={<Layout><Product /></Layout>} />
        <Route path='/products/:id' element={<Layout><Detail /></Layout>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<Registeration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/bid' element={<Layout><Bid /></Layout>} />
      </Routes>
    </BrowserRouter>
  );  
};

export default Routing;
