import React from 'react';
import "./App.css";

import {Route, Routes} from 'react-router-dom';
import Home from "../routes/Home";
import Contact from '../routes/Contact';
import Login from '../routes/Login';
import Newtrip from "../routes/Newtrip";
import Signup from "../routes/Signup";

 export default function App(){


  return(
    <div className="App">
     
  
   
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path ="/contact" element={<Contact/>} />
    <Route path ="/login" element={<Login/>} />
    <Route path="/newtrip" element ={<Newtrip/>} />
    <Route path= "/signup" element={<Signup/>} />
  </Routes>

  <Home/>
  <Newtrip/>
  <Login/>
  <Contact/>
  <Signup/>


</div>
  
  );

}


