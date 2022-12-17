import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
// import NavBar from "./NavBar";

function App() {
  return (
    <>
<NavBar/>

<Product/>
<Footer/>
 
    </>


  );
}

export default App;
