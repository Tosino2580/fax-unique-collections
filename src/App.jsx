import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './component/pages/Home'
import NavBar from './component/NavBar'
import Collections from './component/pages/NavPages/Collections'
import Kids from './component/pages/NavPages/Kids'
import Section from './component/Section'
import Agbada from './component/pages/NavPages/Mens/Agbada'
import Jalabiya from './component/pages/NavPages/Mens/Jalabiya'

function App() {

  return (
    <div className='bg-black'>
      <Router>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<Section/>}></Route>
        <Route path='/collections' element={<Collections/>}></Route>
        <Route path='/kids' element={<Kids/>}></Route>
        <Route path='/agbada' element={<Agbada/>}></Route>
        <Route path='/jalabiya' element={<Jalabiya/>}></Route>

      </Routes>
    </Router>
    </div>
    
  )
}

export default App
