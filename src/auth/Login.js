import React,{useState, useEffect}from "react";
import "./style.css";
import login1 from"../img/login1.PNG";
import logo from"../img/logo.png";
import {Link, useNavigate} from "react-router-dom";
import { getUser } from "../store/userSlice";
import { useDispatch } from 'react-redux';

const Login = () => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [data,setData]=useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()


  let headersList={
    projectid:"nwi12vygvqne",
    "content-type": "application/json"
};

let bodyContent= JSON.stringify({
    email:email,
    password:password,
    appType:"music"
})

  const fetchloginData = async()=>{
    try{
        const data =await fetch("https://academics.newtonschool.co/api/v1/user/login",{
           
         method:"POST",
         body:bodyContent,
         headers:headersList
        
        }
        );
        const json= await data.json();
        console.log(json);
        if(json?.data?.name){
          navigate('/')
        }
        setData(json);
     }
     catch(error){
      console.log(error);
     }
  }

   function handleloginfrom(){
      fetchloginData();
   }

   useEffect(() => {
    // set user details
    dispatch(getUser(data));

}, [data]);


  return (
    <div className="ls-component-container">
      <div className="ls-navbar">
        <Link to="/"className="ls-navbar-title">
       <img src={logo} alt="ogo" className="ls-imglogo" />
        </Link>
        
        <div className="ls-navbar-links">
        <sapn className="sgiupline">Don't have a JioSaavn account yet?</sapn>
        <Link className="s-Link"  to="/signup"> 
        <h2 className="ls-sgiupLink">
            Sign Up
          </h2>
          </Link>
        
        </div>
      </div>
      <div  className="ls-container"  >
        <div className="ls-image-container">
           <img src={login1} alt="Big Image"/>
        </div>
        <div className="ls-form-container" onClick={(e)=> e.preventDefault()}>
          <div>
            <h1 className="formheading">Welcome to JioSaavn.</h1>
            <sapn  className="formheading-smaill-text" >Log in or sign up with your mobile number.</sapn>
          </div>

          
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="input-box" placeholder="Email"/>
          <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} className="input-box" placeholder="Password"/>
          <button onClick={()=>{ handleloginfrom();
            // alert("User create");
         }} type="submit" className="input-button">Continue</button>

          <div className="formpara">
            <p className="ls-text-container">
              Select ‘Continue’ to give consent to JioSaavn’s Terms of Service
              and acknowledge that you have read and understood the Privacy
              Policy. An SMS may be sent to authenticate your account, and
              message and data rates may apply.
            </p>
          </div>

          <div className="ls-button-container">
            <button className="button-email">Email</button>
            <button className="button-facebook">Facebook</button>
          </div>
           <p>Use " ankit10111@gmail.com " for email and Password</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
