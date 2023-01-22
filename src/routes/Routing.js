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
import BuyerOrders from '../pages/buyer/BuyerOrders';
import BuyerProtected from './BuyerProtect';
import Orders from '../pages/admin/Orders';
import Category from '../pages/admin/Category'
import Products from '../pages/admin/Products'
import Biding from '../pages/admin/Biding'
import Sellers from '../pages/admin/Sellers'
import Buyers from '../pages/admin/Buyers'
import AdminDashboard from '../pages/admin/AdminDashboard';
import Page404 from '../components/Page404'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element= {<Page404/> }/>
        <Route path='/' element= {<Layout><Home /></Layout> }/>
        <Route path='/products' element={<Layout><Product /></Layout>} />
        <Route path='/products/:id' element={<Layout><Detail /></Layout>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route element={<SellerProtected/>}>
        <Route path='/seller/add-product' element={<Sidebar><AddProduct /></Sidebar>} />
        <Route path='/seller/products' element={<Sidebar><SellerProducts /></Sidebar>} />
        </Route>
        <Route path='/admin/orders' element={<AdminDashboard><Orders/></AdminDashboard>} />
        <Route path='/admin/category' element={<AdminDashboard><Category/></AdminDashboard>} />
        <Route path='/admin/products' element={<AdminDashboard><Products/></AdminDashboard>} />
        <Route path='/admin/bidding' element={<AdminDashboard><Biding/></AdminDashboard>} />
        <Route path='/admin/sellers' element={<AdminDashboard><Sellers/></AdminDashboard>} />
        <Route path='/admin/buyers' element={<AdminDashboard><Buyers/></AdminDashboard>} />
        <Route path='/register' element={<Registeration />} />
        <Route element={<BuyerProtected/>}>
        <Route path='/buyer/orders' element={<BuyerOrders />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/bid' element={<Layout><Bid /></Layout>} />
      </Routes>
    </BrowserRouter>
  );  
};

export default Routing;
