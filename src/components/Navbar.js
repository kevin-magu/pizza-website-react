import { Link } from "react-router-dom"
import '../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar= () =>{
    setOpenLinks(!openLinks)
  }

  return (
    <div className="navbar">
        <div className="leftside" >
          <p className={openLinks? "logo-hidden" : "logo-show"}>Logo</p>
            <div className="hidden-links" id={openLinks ? "open" : "close"}>
            <Link className="li" to="/">Home</Link>
            <Link className="li" to="/menu">Menu</Link>
            <Link className="li" to="/about">About</Link>
            <Link className="li" to="/contact">Contact</Link>
            </div>
          </div>
        <div className="rightside">
            <Link className="li" to="/">Home</Link>
            <Link className="li" to="/menu">Menu</Link>
            <Link className="li" to="/about">About</Link>
            <Link className="li" to="/contact">Contact</Link>
            <button onClick={toggleNavbar}><MenuIcon className="menu-bar"/></button>
        </div>
    </div>

  )
}

export default Navbar