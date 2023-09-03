import React from 'react'
import Navbar from '../component/Navbar'
import Sidebar from './Sidebar';
import logo from "../img/logo.png";
import {Link} from "react-router-dom";
const Podcast = () => {
  return (
    <>
    
    <Navbar/>
    <Sidebar/>
    <div className='App'>
    <Link to="/" className="logo">
    <img src={logo} alt="Logo"/>
  </Link>
    <h1>Comeing Soon My Dear User 😉 </h1>
    </div>
    </>

  )
}

export default Podcast
