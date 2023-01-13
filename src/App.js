import './App.css';
import Home from './components/Home';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Catagories from './components/Catagories';
import Bid from './components/Bid';
import Dashboard from './components/Dashboard';
// import NavBar from "./NavBar";
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Login from './components/Login';
import Registeration from './components/Registeration';
import Detail from './components/Detail';
import Routing from './routes/Routing';

library.add(faFacebook, faInstagram, faGithub, faLinkedin);
function App() {
  return (
    <>
      <Toaster position='bottom-center' />
      {/* <Dashboard /> */}
      {/* <Home />
      <Bid />
      <Footer />
      <Login/>
      <Registeration />
      <Detail/> */}

      <Routing />
    </>
  );
}

export default App;
