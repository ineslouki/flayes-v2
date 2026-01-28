import React from 'react'
import picture from "../assets/AboutBanner.png"
import "../styles/About.css"

function About() {
  return (
    <div className='about' id='about'><div className='bottom'>
            <h1 className='aboutus'>ABOUT US</h1>
            <h2 className='quote1'>Transform your
daily choices into
exciting rewards.</h2>
            <p className='def'>Flayes elevates your everyday by rewarding you for the choices you already make. <br />
                From your morning latte to your weekend shopping spree, every purchase earns you points that unlock a world of exciting rewards.</p>
        </div>
        <img src={picture} className='top'/>
        





    </div>
  )
}

export default About