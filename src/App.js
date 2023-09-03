import React, { useState } from "react";
import Gopro from "./pages/Gopro";
import Home from "./pages/Home";
import Login from"./auth/Login";
import Podcast from"./pages/Podcast";
import Sidebar from"./pages/Sidebar";
import Signup from "./auth/Signup";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import SongList from "./pages/SongList";
import UserContext from "./component/UserContext";



function App() {


  const { userDetails } = useSelector((state) => state?.user); 
 
  
   
  const navigate = useNavigate();

  useEffect(() => {
    if (!userDetails) {
      navigate('/login')
    }

}, [userDetails]);




const [Searchitem,setSearchItem]=useState(""); 

  
  return (
    
       <>
          <UserContext.Provider value={{userSearchText:Searchitem,setSearchItem}}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sidebar' element={<Sidebar/>}/>
            <Route path='/gopro' element={<Gopro/>}/>
            <Route path='/podcast' element={<Podcast/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path="/songList/:id" element={<SongList/>}/>
          </Routes>
          </UserContext.Provider>
        
        </>
      
  );
  
}


export default App;
