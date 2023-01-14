import './App.css';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Routing from './routes/Routing';

library.add(faFacebook, faInstagram, faGithub, faLinkedin);
function App() {
  return (
    <>
      <Toaster position='top-center' />
      <Routing />
    </>
  );
}

export default App;
