import React,{useState} from "react";
import "./style.css";
import login2 from "../img/login2.PNG";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import Login  from "./Login";
//import { Navigate } from "react-router-dom";


const Signup = () => {

  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  //const [page,setpage]=useState(false)

  let headersList={
      projectid:"nwi12vygvqne",
      "content-type": "application/json"
  };

  let bodyContent= JSON.stringify({
      name:username,
      email:email,
      password:password,
      appType:"music"
  })
   
  const apiDataFetch =  async()=>{
     const data= await 
     fetch(
      "https://academics.newtonschool.co/api/v1/user/signup"
     ,{
      method: 'POST',
      body:bodyContent,
      headers:headersList
     }
     );
     const json= await data.json();
     console.log(json);
    setEmail("");
    setPassword("");
    setUsername("");
  };

  function handleFromData(){
    apiDataFetch();
  }


  return (
   
  
    <div className="ls-component-container">
      <div className="ls-navbar">
      <Link to="/"className="ls-navbar-title">
          <img src={logo} alt="ogo" className="ls-imglogo" />
        </Link>
        <div className="ls-navbar-links">
        <sapn className="sgiupline">Don't have a JioSaavn account yet?</sapn>
        <Link className="s-Link" to="/login"> 
         <h2 className="ls-sgiupLink">Login</h2>
         </Link>
        </div>

      </div>
      <div className="ls-container">
        <div className="ls-image-container">
          <img src={login2} alt="Big Image" />
        </div>
        <div   className="ls-form-container">
          <div>
            <h1 className="formheading">Welcome to JioSaavn.</h1>
            <sapn  className="formheading-smaill-text" >Log in or sign up with your mobile number.</sapn>
          </div>
          
          <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input-box" placeholder="UserName" />
           
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="input-box" placeholder="Email Address" />
          
          <input type="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input-box" placeholder="Password" />
          
         
          <button  onClick={()=>{ handleFromData();
           //  alert("User created ,go to login page");
          
          }} className="input-button">Continue</button>
         
          <sapn  className="formheading-smaill-text">Forgot Password?</sapn>
          <div className="formpara">
            <p className="ls-text-container">
            By selecting ‘Continue’, you agree to JioSaavn’s Terms of Service and Privacy Policy.
            </p>
          </div>

          <div className="button-container">
            <button className="button-email">Mobile</button>
            <button className="button-facebook">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup ;
