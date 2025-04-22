import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import { UserLayout } from './components/layout/UserLayout';
import { Home } from './components/pages/home';
import { About } from './components/pages/about';


function App() {


  return (
   <Router>
   
     <Routes>
         
        <Route path='/' element={<UserLayout/>}>
        
         <Route index element={<Home/>}/>
         <Route path='/about' element={<About/>}/>

        </Route>

     </Routes>
   </Router>
  )
}

export default App
