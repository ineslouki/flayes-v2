import React from 'react';
import { Link } from 'react-router-dom';
import Copie from "../assets/man.png";
import Element from "../assets/Element.png"
import "../styles/page1.css";
import Services from "./Services";
import About from './About';
import Mission from './Mission'

function Page1() {
  return (
    <>
    <div className='home' id='home'>
      <img src={Copie} alt="flayes Banner" className="img" />
       
      <div className='content'>
      
        <p className="titre">MAKE IT REWARDING WITH FLAYES —</p>
        <h1 className='quote' >Earn rewards for <br />the things 
          you love:</h1>
        <p className="text">meals, coffee, shopping, and more.</p>
        <img src={Element}  className="element" />
      </div>
      
      <Link to="/dash"> <button className='button1'>Access my dashboard</button>
      </Link>
      <Link to="/Become a partner"> <button className='button2'>Become a partner</button>
      </Link>
      
    </div> 
    <Services />
    
    <Mission />
    <About />
  </>
   
    
  )
}

export default Page1