import React from 'react'
import "../styles/Partner.css"

function Partner() {
  return (
    <div className='partner'>
        <h1>Become a Partner</h1>
        <div >
            <form className='becomepartner' method='post' id='sign'>
                <label >First & Last Name </label>
                <input placeholder='Flen Ben Flen'></input>
                <label >Business Name </label>
                <input placeholder='i.e flayes ICGT'></input>
                <label >Full Business Adress </label>
                <input placeholder="Business's Full Adress"></input>
                <label >Phone Number </label>
                <input placeholder='********'></input>
                <label >Business Type  </label>
                <input placeholder='Business Type (restaurant,coffe,....)'></input>
                <button type='submit' >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Partner