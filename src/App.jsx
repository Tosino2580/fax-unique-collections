import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './component/pages/Home'
import NavBar from './component/NavBar'
import Collections from './component/pages/NavPages/Collections'
import Kids from './component/pages/NavPages/Kids'
import Section from './component/Section'
import Agbada from './component/pages/NavPages/Mens/Agbada'
import Jalabiya from './component/pages/NavPages/Mens/Jalabiya'
import JalabiyaDetails from './MenDetails/JalabiyaDetails'
import AgbadaDetails from './MenDetails/AgbadaDetails'
import Footer from './component/Footer'
import Kaftan from './component/pages/NavPages/Mens/Kaftan'
import KaftanDetails from './MenDetails/KaftanDetails'

function App() {

  return (
    <div className='bg-black overflow-hidden'>
      <Router>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<Section/>}></Route>
        <Route path='/collections' element={<Collections/>}></Route>
        <Route path='/kids' element={<Kids/>}></Route>
        <Route path='/agbada' element={<Agbada/>}></Route>
        <Route path='/kafans-shirts' element={<Kaftan/>}></Route>
        <Route path='/jalabiya' element={<Jalabiya/>}></Route>
        <Route path='/jalabiya/:id' element={<JalabiyaDetails/>}></Route>
        <Route path='/agbada/:id' element={<AgbadaDetails/>}></Route>
        <Route path='/kafans-shirts/:id' element={<KaftanDetails/>}></Route>

      </Routes>
      <Footer/>
    </Router>
    </div>
    
  )
}

export default App
