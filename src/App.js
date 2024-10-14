import './App.css';
import Navbar from "./Components/Navbar";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/pages/home.js';
import Experience from './Components/pages/Experience.js';

function App(){
    return(
      <Router>

        <Navbar/>
        <Routes>
          <Route path='/experience' Component={Experience} />
          <Route path='/' Component={Home} />
          <Route path='/IL_Web_Resume' Component={Home} />
          <Route path="*" Component={Home}/>
        </Routes>
      </Router>
    )
}
export default App;