import { Link } from "react-router-dom";
import '../styles/Footer.css';
import { Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { He } from "@mui/icons-material";


function Footer() {
  return (
    <div className="footer">
        <p className="social-links"> <Instagram /> <Facebook /> <Twitter /> <LinkedIn /> </p>
        <p className="copyright">&copy; 2023 All rights reserved</p>
        <p>Made with <span style={{ color:`red` }}>Love</span> by Kevin</p>
    </div>
  )
}

export default Footer