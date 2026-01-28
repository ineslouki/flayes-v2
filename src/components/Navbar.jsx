import logo from "../assets/Logo.webp"
import logo1 from "../assets/flayes.webp"
import { Link } from 'react-router-dom'
import "../styles/Navbar.css";
import { HashLink } from "react-router-hash-link";



function Navbar() {

 


  return (
    <>
    <div className='navbar'>
      
        <div >
            <img src={logo} className='logo'></img></div>
            
        <div className='hashlink'>
        <HashLink smooth to="/#home">Home</HashLink>
        <HashLink smooth to="/#services">
          Services
        </HashLink>
        <HashLink smooth to ="/#mission">Mission</HashLink>
        <HashLink smooth to="/#about">
          About
        </HashLink>
        </div>
        <div><img src={logo1} className='logo1  '/>
        </div>
    </div>
    </>
  )
}

export default Navbar