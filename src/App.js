import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Catagories from './components/Catagories';
import Bid from './components/Bid';
import Dashboard from './components/Dashboard';
// import NavBar from "./NavBar";
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faHome, faMessage, faPager, faGears, faSquareRss, faIdBadge, faBagShopping, faSort, faIndent, faSitemap, faRankingStar} from '@fortawesome/free-solid-svg-icons'
import Login from './components/Login';
import Registeration from './components/Registeration';


library.add( faUser, faHome, faMessage, faPager, faGears, faSquareRss, faIdBadge, faBagShopping, faSort, faIndent, faSitemap, faRankingStar)
function App() {
  return (
    <>
 <NavBar/>

  <Bid/>
<Footer/>
 {/* <Dashboard/> */}
 {/* <Login/> */}
 {/* <Registeration/> */}
    </>


  );
}

export default App;
