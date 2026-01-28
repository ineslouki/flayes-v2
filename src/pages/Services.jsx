import React from 'react'
import Logoflayes from "../assets/card_logo.webp"
import "../styles/Services.css"




function Services() {
  return (
    
    <div className='services' id="services" >
     <h1 className='titre'>Our Services </h1>
     <h2 className='soustitre'>Welcome to Flayes Services – where innovation meets convenience, bridging the gap between businesses and customers seamlessly.Explore the myriad of ways we enhance your experience and empower businesses to foster lasting connections with their loyal clientele.</h2>
      <div className='container1'> 
        <img src={Logoflayes} className='logoflayes'></img><br /><br /><br />
        <br />
        <h1>Building a Strong Connection</h1>
        <h2>Meaningful connections between businesses and customers, prioritised customer satisfaction and loyalty, and a seamless bridge fostering trust and appreciation.</h2>
      </div>
      <div className='container2'>
        <img src={Logoflayes} className='logoflayes'></img><br /><br /><br />
        <br />
        <h1>Customer Loyalty</h1>
        <h2>Tailored web interface for efficient management, insights into customer preferences for optimization, and personalised rewards and promotions for loyalty building..</h2>
      </div>
      <div className='container3'>
        <img src={Logoflayes} className='logoflayes'></img><br /><br /><br />
        <br />
        <h1>Enjoy Seamless Rewards</h1>
        <h2>Intuitive mobile app with effortless earning
and redeeming, user-friendly interface for
easy reward tracking, and hassle-free
redemption at partnered businesses.</h2>
      </div>
    </div>
    
    
    
  )
}

export default Services