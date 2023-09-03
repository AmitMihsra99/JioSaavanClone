import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./pagecss.css";
import logo2 from "../img/logo2.PNG";
import GoproPopup from "./GoproPopup";
import addfree from "../img/addfree.PNG"
import excontent from "../img/excontent.PNG"
import hifi from "../img/hifi.PNG"
import udown from "../img/udown.PNG"
import big2 from "../img/big2.PNG"
import big3 from "../img/big3.PNG"
import flogo from "../img/flogo.jpg"
import Goproradio from "./Gorproradio";




const Gopro = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="gopro-navbar">
        <div className="gopro-navbar-logo">
          <Link to="/" className="logo">
            <img src={logo2} alt="Logo" />
          </Link>
        </div>
        <div className={`gopro-navbar-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="gopro-navbar-link RedeemLink">
            Redeem
          </Link>
          <Link to="/" className="gopro-navbar-link ">
            My Account
          </Link>
        </div>
        <div
          className={`gopro-navbar-hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="gopro-bar"></div>
          <div className="gopro-bar"></div>
          <div className="gopro-bar"></div>
        </div>
      </nav>

      <div className="container">
        <div class="textcontainer">
          <p className="textcontainer-para">
            All your music and JioTunes,
            <sapn className="textcontainer-p">plus...</sapn>
          </p>
          <h1 className="textcontainer-head">
            Ad-free Music, Unlimited Downloads,
          </h1>
          <h1 className="textcontainer-head">
            Exclusive Original Content and{" "}
            <span className="textcontainer-h1">More.</span>
          </h1>
        </div>
        <div className="gorpo-card-section">
          <div className="gorpo-card cardd-1 ">
            <div className="gorpo-text">Jio Saavn</div>
            <h1 className="head-content">1 Year</h1>
            <h3 className="sed-head-content">₹746*/Year</h3>
             <br/>
            <span className="therd-head-content">*Limited Period Offer</span>
            
            <Goproradio/>
            
            <button className="gpcardbtn">Get the Deal</button>
          </div>
          <div className="gorpo-card cardd-2">
            <div className="gorpo-text">Jio Saavn</div>
            <h1 className="head-content">1 Month</h1>
            <h3 className="sed-head-content">₹999*/Year</h3>
            <span className="therd-head-content">₹ 99/Month</span>
            <Goproradio/>
            <br></br> 
            <button className="gpcardbtn">Buy Now</button>
          </div>
        </div>
        
      </div>
      <div className="back-color">
      <nav className="mini-navbar">
      <div className="mini-navbar-left">Why go Pro? Learn More👇</div>
      <div className="mini-navbar-right">
        <GoproPopup text="Your payments are processed using secure SSL encryption, 
        ensuring your payment information can not be intercepted. JioSaavn does not 
        store your credit card information."/>
        <span>Amazon Pay</span>
        <sapn> Paytam </sapn>
      </div>
   </nav>
   </div>

      <div className="box-container">
        <div className="background-box">
          <div className="box-cards">
            <div className="box-card">
              <img src={ addfree } alt="Card 1" />
              <h2>Ad-Free Music</h2>
              <p>No interruptions. Just you and your music.</p>
            </div>
            <div className="box-card">
              <img src={excontent} alt="Card 2" />
              <h2>Exclusive Content</h2>
              <p>Original shows, podcasts, and content only on JioSaavn.</p>
            </div>
            <div className="box-card">
              <img src={hifi}alt="Card 3" />
              <h2>Hi-Fi Audio</h2>
              <p>The highest quality music, plus Sonos and smart speakers.</p>
            </div>
            <div className="box-card">
              <img src={udown} alt="Card 4" />
              <h2>Unlimited Downloads</h2>
              <p>Save data and listen offline, no internet required.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
      <img src={big2} alt="Image" />
    </div>

    <div className="image-container">
      <img src={big3} alt="Image"/>
      
      <button className="image-container-btn">Pick a plan</button>
    </div>

 

 
    <footer className="footer">
      <div className="fotter-logo">
        <img src={flogo} alt="Logo" />
      </div>
      <div className="footer-section">
        <h4>JioSaavn</h4>
        <ul>
          <li><Link to="/link1">About</Link></li>
          <li><Link to="/link2">Carrers</Link></li>
          <li><Link to="/link2">News</Link></li>
          <li><Link to="/link2">Logs & Guidelines</Link></li>

          </ul>
      </div>
      <div className="footer-section">
        <h4>Products</h4>
        <ul>
          <li><Link to="/link3">IOS</Link></li>
          <li><Link to="/link4">Andriod</Link></li>
          <li><Link to="/link2">Windows</Link></li>
          <li><Link to="/link2">Web Player</Link></li>
          <li><Link to="/link2">Sonos</Link></li>
          </ul>
      </div>
      <div className="footer-section">
        <h4>Brands & Advertiser</h4>
        <ul>
          <li><Link to="/link5">JioSaavn for Brands</Link></li>
          
        </ul>
      </div>
      <div className="footer-section">
        <h4>Gifts & Promotions</h4>
        <ul>
          <li><Link to="/link7">Redeem Pro</Link></li>
        </ul>
      </div>
      <div className="footer-section">
      <h4>Connect</h4>
      <ul>
        <li><Link to="/link7">Help</Link></li>
        <li><Link to="/link7">Artists & Labels</Link></li>
        <li><Link to="/link7">Terms & privacy</Link></li>
        <li><Link to="/link7">Contact</Link></li>

        </ul>
    </div>
      <div className="social-icons">
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-snapchat-ghost"></i></a>
      </div>
      
      <div className="footer-text">
        
        <p>© 2023 Saavn Media Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
 


  

    </>
  );
};

export default Gopro;
