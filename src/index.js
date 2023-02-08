import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar';
import Newsind from './Pages/Newsind';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Tesla from './Pages/Tesla';
import Home from './Pages/Home';
import Sports from './Pages/Sports';
import Technology from './Pages/Technology';
import General from './Pages/General';
import Science from './Pages/Science'
import Health from './Pages/Health'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
 <BrowserRouter>
 <Navbar/>
 <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/Health' element={<Health/>}/>

  <Route path='/tesla' element={<Tesla/>}/>
  <Route path='/business' element={<Newsind/>}/>
  <Route path='/general' element={<General/>}/>
  <Route path='/sports' element={<Sports/>}/>
  <Route path='/science' element={<Science/>}/>

  <Route path='/Technology' element={<Technology/>}/>





 </Routes>
 </BrowserRouter>
  </>


);

