import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
