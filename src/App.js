import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'

import Nav from './Components/Nav'
import index from './index'
import Home from './Components/Home'
import Member from './Components/Member'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import Amitabh from './Pages/Amitabh'
import Abhinav from './Pages/Abhinav'
import Navneet from './Pages/Navneet'
import Rajkamal from './Pages/Rajkamal'
import Manish from './Pages/Manish'
import Anurag from './Pages/Anurag'
import Ashutosh from './Pages/Ashutosh'
import Join from './Pages/Join'
function App() {
  return (
    <div>
      <BrowserRouter>
       <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/member' element={<Member/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/amitabh' element={<Amitabh/>}></Route>
          <Route path='/abhinav' element={<Abhinav/>}></Route>
          <Route path='/navneet' element={<Navneet/>}></Route>
          <Route path='/rajkamal' element={<Rajkamal/>}></Route>
          <Route path='/manish' element={<Manish/>}></Route>
          <Route path='/anurag' element={<Anurag/>}></Route>
          <Route path='/ashutosh' element={<Ashutosh/>}></Route>
          <Route path='/join' element={<Join/>}></Route>
        </Routes>
        
        <Footer/>
      </BrowserRouter>
      
     
      
      
     
    </div>
  )
}

export default App
