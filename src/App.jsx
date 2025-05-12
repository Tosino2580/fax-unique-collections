import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Home from './component/pages/Home';
import NavBar from './component/NavBar';
import Collections from './component/pages/NavPages/Collections';
import Kids from './component/pages/NavPages/Kids';
import Section from './component/Section';
import Agbada from './component/pages/NavPages/Mens/Agbada';
import Jalabiya from './component/pages/NavPages/Mens/Jalabiya';
import JalabiyaDetails from './MenDetails/JalabiyaDetails';
import AgbadaDetails from './MenDetails/AgbadaDetails';
import Footer from './component/Footer';
import Kaftan from './component/pages/NavPages/Mens/Kaftan';
import KaftanDetails from './MenDetails/KaftanDetails';
import CartDrawer from './component/CartDrawer';

import { CartProvider } from './context/CartContext'; 

function App() {

  

  return (
    <CartProvider>
      <div className='bg-black overflow-hidden'>
        <Router>
        <Toaster position="top-center" reverseOrder={false} />
          <NavBar/>
          <CartDrawer />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collections' element={<Collections />} />
            <Route path='/kids' element={<Kids />} />
            <Route path='/agbada' element={<Agbada />} />
            <Route path='/kafans-shirts' element={<Kaftan />} />
            <Route path='/jalabiya' element={<Jalabiya />} />
            <Route path='/jalabiya/:id' element={<JalabiyaDetails/>} />
            <Route path='/agbada/:id' element={<AgbadaDetails/>} />
            <Route path='/kafans-shirts/:id' element={<KaftanDetails/>} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
