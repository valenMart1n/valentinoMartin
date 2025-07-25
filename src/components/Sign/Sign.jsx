import React, {useState} from "react";
import './Sign.css';

import background from "./background.jpg";
import profile from "./perfil.png";
import { Icon } from "../Icons";
import { faArrowDown, faArrowRight} from "@fortawesome/free-solid-svg-icons";

function Sign() {
    const [scrollY, setScrollY] = useState(0);
    const handleButtonClick = (targetY) => {

        window.scrollTo({
          top: targetY,
          behavior: "smooth"
        });
    
        setScrollY(targetY);
      };
    return(
        <div className="fondo">
            <div className="flex">
                <div className="data">
                    <h1>Valentino Martin</h1>
                 </div>
            <div className="buttons">
                        <Icon css="arrow" icon={faArrowDown}/>
            </div>
        </div>
    </div>    
           
        
             
       
      
    )
}
export default Sign;