import React from 'react'
import { useState } from 'react';
import '../styles/Mission.css'
import Phone from '../assets/Phone.png'
import Yellow from '../assets/yellowline.png'





function Mission() {
  const [active, setActive] = useState(1);

  const phrases = {
    1: <p>Strong Connections: <br />Forge lasting bonds between customers and your businesses</p>,
    
    2: <p>Empowered Loyalty :<br />Empower businesses to prioritize customer satisfaction and loyalty through personalized rewards</p>,
    3:<p> Celebrate Choices :<br />Value and appreciate every customer's decisions</p>,
    4: <p>Enhanced Experiences :<br />Elevate everyday experiences with rewards and personalized offers.</p>
  };
  return (
    <div id='mission' >
      <img src={Phone} className='phone'/>
      
      <h1 className='titre'>Our Mission </h1>
      <h2 className='soustitre'>Discover our commitment to building strong connections and enhancing experiences. Together, we shape a community built on trust and appreciation.</h2>
      <div className='buttons'>
      <button type='submit' onClick={() => setActive(1)} >1</button>
      <button type='submit' onClick={() => setActive(2)}>2</button>
      <button type='submit' onClick={() => setActive(3)}>3</button>
      <button type='submit'onClick={() => setActive(4)} >4</button>
      </div>
      <p className='phrase'>
        {phrases[active]}
      </p>

    </div>
  )
}

export default Mission