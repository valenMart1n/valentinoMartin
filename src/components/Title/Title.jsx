import React from "react";
import './Title.css';
function Title (props) {
   
    return(
        
        <div className="title-container">
        <h2 className="title">{props.title}</h2>
        <div className="horizontal-bar"></div>
       
        </div>
    );
}
export default Title;