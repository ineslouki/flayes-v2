import React from 'react'
import "../styles/dash.css"
function Dash() {
  return (
    <div className='dash'>
      <h1 className='welcome'>Welcome Partner!</h1>
      <p className='partners'>This section is exclusive to Flayes partners. Please enter your login credentials to access your dashboard and manage your account.</p>
      <div className='sign'>
        <form id='signin' method='post'>
        <label  className="email">Email</label>
        <input type="email" placeholder='flenlfouleni@..'/>
        <label className='pass'>Password</label>
        <input type="text" placeholder='*******' />
        <input className='button 'type='button'value='submit'/>
        
        
        </form>
      </div>

    </div>
  )
}

export default Dash