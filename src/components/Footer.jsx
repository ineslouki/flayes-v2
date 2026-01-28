import React from 'react'
import "../styles/Footer.css";
import Instagram from "@mui/icons-material/Instagram"
import Facebook from "@mui/icons-material/Facebook"
import Linkedin from "@mui/icons-material/LinkedIn"



function Footer() {
  return (
    <div className='footer'>
        <p >Flayes</p>
        
        <h2>Terms and Conditions Privacy Policy FAQ</h2>
        <h3>© 2024 Copyright, All right Reserved</h3>
        
        <div className='contact'>
        <a href="https://www.instagram.com/flayes.app/">
        <Instagram /></a>
        <a href="https://www.facebook.com/flayesapp/followers">
        <Facebook /></a>
        <a href="https://www.linkedin.com/company/flayes/posts/?feedView=all">
        <Linkedin /></a>
        </div>
    </div>
  )
}

export default Footer