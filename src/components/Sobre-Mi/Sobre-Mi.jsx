import React, {useState, useRef, useEffect} from "react";
import './Sobre-Mi.css';

import Title from '../Title/Title';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
function SobreMi() {
   
        const [about, setAbout] = useState("");
        const divRef = useRef();
        useEffect(() => {
            const handleScroll = () => {
                const div = divRef.current;
                const { y } = div.getBoundingClientRect();
                console.log("Coordenadas about: " + y);
                if(y <= 574 && about != "active"){
                  setAbout("active");  
                       
                }
                
                
            }
            window.addEventListener("scroll", handleScroll);
        
            return () =>{
                window.removeEventListener("scroll", handleScroll);
            }
        }, []);
return(
    <div ref={divRef} className={`about-background ${about}`}>
           <Title title="SOBRE MI"/> 
           
           <div className="about-content">
               
                <div className="information">
                   
                    <div className="about">Estudiante universitario con conocimientos en tecnologías y herramientas relacionadas tanto al desarrollo web frontend y backend, como así también al desarrollo de aplicaciones móviles y de escritorio. </div>
                </div>
               
                <div className={`skills-background ${about}`}>
                   
                
                   <div className="skills-content">
                           <div className="skills-cards">
                                <div className="skills-icons"><FontAwesomeIcon className="icons" icon={faReact}/></div>
                                <div className="skills-title">React</div>
                           </div>
                           <div className="skills-cards">
                                <div className="skills-icons" style={{animationDelay: '0.4s'}}><FontAwesomeIcon className="icons" icon={faJs}/></div>
                                <div className="skills-title">JavaScript</div>
                           </div>
                           <div className="skills-cards">
                                <div className="skills-icons" style={{animationDelay: '0.6s'}}><FontAwesomeIcon className="icons" icon={faNodeJs}/></div>
                                <div className="skills-title">Node</div>
                           </div>
                           <div className="skills-cards">
                                <div className="skills-icons" style={{animationDelay: '0.8s'}}><FontAwesomeIcon className="icons" icon={faJava}/></div>
                                <div className="skills-title">Java</div>
                           </div>
                           <div className="skills-cards">
                                <div className="skills-icons" style={{animationDelay: '1s'}}><FontAwesomeIcon className="icons" icon={faDatabase}/></div>
                                <div className="skills-title">SQL</div>
                           </div>
                              
                       </div>
                   </div>      
            </div>
          
                
        </div>
);
}

export default SobreMi;