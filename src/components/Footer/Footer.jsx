
import './Footer.css';
import React, {useState, Link} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Footer() {
    const [scrollY, setScrollY] = useState(0);
    const handleButtonClick = (targetY) => {

        window.scrollTo({
          top: targetY,
          behavior: "smooth"
        });
    
        setScrollY(targetY);
      };
    return(
        <footer className="footer-background">
           
            <a href='https://github.com/valenMart1n' target="_blank"><FontAwesomeIcon className="brand" icon={faGithub}/></a>
            <a href='https://www.linkedin.com/in/valentino-martin-87320327b/' target="_blank"><FontAwesomeIcon className="brand2" icon={faLinkedin}/></a>
        </footer>
    );
}

export default Footer;