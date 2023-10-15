// Navbar.js
import React, { useState, useContext } from "react";
import { Link,  } from "react-router-dom";    // useNavigate
import "./comp.css";
import logo from "../img/logo.png";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import CheckIcon from "@mui/icons-material/Check";
import UserContext from "./UserContext";
import getUser from "../store/userSlice";

const Navbar = () => {
 
//  const [showSearch, setShowSearch] = useState(false);

  const options = [
    'Hindi', 'English', 'Punjabi', 'Tamil', 'Telue',
    'Marathi', 'Gujarati', 'Bengali', 'Bhojpuri', 'Haryanvi'
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
  };



  
  // const toggleSearch = () => {
  //   setShowSearch(!showSearch);
  // };


 //const navegate= useNavigate();
// onMouseEnter={()=>navegate(`/music`)} onMouseLeave={()=>navegate(-1)}
 


const [isExpanded, setIsExpanded] = useState(false);
const [Searchtext,setSearchtext]=useState("");
const handleSearchBarClick = () => {
  setIsExpanded(!isExpanded);
};

const {setSearchItem } = useContext(UserContext);


const handleSearch=()=>{
  setSearchItem(Searchtext)
}

  return (
    <nav className="navbar">
      <div className="left-side">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo"/>
        </Link>
        <div classNamea="links">
          
          <Link to="/Podcast" className="navbar-link">
            Podcst
          </Link>
          <Link to="/gopro" className="navbar-link">
            GoPro
          </Link>
        </div>
      </div>
      <div className="right-side">
         <div className="search-box">
         <div className={`search-bar ${isExpanded ? 'expanded' : ''}`} onClick={handleSearchBarClick}>
      <input className="search-bar-input" type="text" placeholder="Search..." onChange={(e)=>setSearchtext(e.target.value)} value={Searchtext} />
     
      </div>
      <button className="search-btn" onClick={handleSearch}>Search</button>
      
        </div>
      
       
        <div className="dropdown-button">
        
      <Select 
        value="Language"
        onChange={handleOptionSelect}
        displayEmpty
        renderValue={(value) => (value ? value : "Select an Option")}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
            {selectedOption === option && <CheckIcon className="check-icon" />}
          </MenuItem>
        ))}
      </Select>
    </div>
        
        
      {
        !getUser ?(
          <Link to="/login" className="navbar-link">
          Login
        </Link> 
        ):      <Link to="/login" className="navbar-link">
        LogOut
      </Link>   
      }
        
        <Link to="/signup" className="navbar-link">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
          // <input onClick={toggleSearch} className={styles["search-bar"]} placeholder={"search"}/>
