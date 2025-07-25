import React from "react";
import './Burger.css';
import { Icon } from "../../Icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function BurgerButton(props) {
    return(
        <div>
            <div onClick={props.handleClick}  
            className={`button ${props.clicked ? "open" : ""}`}>
            <Icon css="icon" icon={props.clicked ? faXmark : faBars}/>
            </div>
        </div>
    )
}

export default BurgerButton;