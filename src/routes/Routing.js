import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bid from '../components/Bid';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Login from '../components/Login';
import Product from '../components/Product';
import Registeration from '../components/Registeration';
import Detail from '../components/Detail';
import Layout from './Layout';
import Sidebar from '../pages/seller/Sidebar';
import AddProduct from '../pages/seller/AddProduct';
import SellerProducts from '../pages/seller/SellerProducts';
import SellerProtected from './SellerProtected';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Layout><Home /></Layout> }/>
        <Route path='/products' element={<Layout><Product /></Layout>} />
        <Route path='/products/:id' element={<Layout><Detail /></Layout>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route element={<SellerProtected/>}>
        <Route path='/seller/dashboard' element={<Sidebar />} />
        <Route path='/seller/add-product' element={<Sidebar><AddProduct /></Sidebar>} />
        <Route path='/seller/products' element={<Sidebar><SellerProducts /></Sidebar>} />
        </Route>
        <Route path='/register' element={<Registeration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/bid' element={<Layout><Bid /></Layout>} />
      </Routes>
    </BrowserRouter>
  );  
};

export default Routing;
