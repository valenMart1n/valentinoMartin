import React, {useState, useRef, useEffect} from "react";
import './Portfolio.css';

import Modal from "./Modal/Modal";
import Title from "../Title/Title";



function Portfolio() {
  
   
  
    
    const [showModal1, changeModal1] = useState(false); 
    const [showModal2, changeModal2] = useState(false); 

    const [projects, setProjects] = useState("");
    const divRef = useRef();
    useEffect(() => {
        const handleScroll = () => {
            const div = divRef.current;
            const { y } = div.getBoundingClientRect();
            console.log("Coordenadas project: " + y);
            if(y <= 474 && projects != "active"){
              setProjects("active");  
                   
            }
            
            
        }
        window.addEventListener("scroll", handleScroll);
    
        return () =>{
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
   
return(

    
    <div ref={divRef} className={`projects-background ${projects}`}>
            <Title title="PROYECTOS"/> 
            
           
          
           <div className="projects-content-mobile">
    
            <div className={`projects ${projects}`}><div className="images" id="imagen1" onClick={() => changeModal1(!showModal1)}></div></div>
        </div>
          
           <div className="projects-content">
    
           <div className={`projects ${projects}`}><div className="images" id="imagen1"></div><span className="text">Pedidos Online</span><div onClick={() => changeModal1(!showModal1)} className="botton">Ver Más</div></div>
           </div>

           
             
         
            <Modal
                showModal={showModal1}
                changeModal={changeModal1}>
            
              <h3>Pedidos Online</h3>
              <p>Web para negocios permite a clientes ver productos, seleccionarlos y añadir al carrito, enviando su pedido al negocio mediante WhatsApp, facilitando la compra</p>
              <p>https://pedidosweb-zo00.onrender.com/</p>
            </Modal>
    </div>
    
);
}

export default Portfolio;