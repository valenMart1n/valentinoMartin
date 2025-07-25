import React from "react";
import './Modal.css';
import { Icon } from "../../Icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Modal = ({children, showModal, changeModal}) => {

    const childrenArray = React.Children.toArray(children);
    return(
        <>
            {showModal && 
            <div className="overlay">
                <div className="modal">
                    
                    <div className="image"></div> 
                    
                    <div className="modal-header">
                    <h3 className="project-title">{childrenArray[0].props.children}</h3>   
                    <div onClick={() => changeModal(false)}><Icon css="close-button" icon={faXmark}/></div>
                    </div>
                    <div className="modal-details">
                    <p className="project-details">{childrenArray[1].props.children}</p>
                        <a style={{textDecoration: "none"}} href={childrenArray[2].props.children} target="_blank"><div className="visit-button" >Ver Sitio</div></a>    
                        <a style={{textDecoration: "none"}} href="https://github.com/valenMart1n/pedidos" target="_blank"><div className="code-button" >Ver Código</div></a>  
                        <a style={{textDecoration: "none"}} href="https://github.com/valenMart1n/pedidosApi" target="_blank"><div className="code-button2" >Ver Api</div></a>  
                    </div>  
                </div>
            </div>
            }
        </>
    )
   
 }

 export default Modal;

