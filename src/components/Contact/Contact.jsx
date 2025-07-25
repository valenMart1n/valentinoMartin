import React, {useState, useRef, useEffect} from "react";
import './Contact.css';

import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Title from "../Title/Title";
function Contact() {
    const [contacts, setContacts] = useState("");

    const [success, setSuccess] = useState("");
    const refForm = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = "service_rfnnz5c";
        const templateId = "template_q4uh9rt";
        const apiKey = "1uK8msWrWMAvGk0DA";

        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
        .then(result => setSuccess("Correo enviado con éxito"))
        .catch(error => setSuccess("Correo no enviado"));
    } 
    
    const positionRef = useRef();
    useEffect(() => {
        const handleScroll = () => {
            const div = positionRef.current;
            const { y } = div.getBoundingClientRect();
            if(y <= 545 && contacts != "active"){
              setContacts("active");  
                   
            }
            
            
        }
        window.addEventListener("scroll", handleScroll);
    
        return () =>{
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
    return(
        <div ref={positionRef} className={`contact-background ${contacts}`}>
           <Title title="CONTACTAME"/>
      
            
            <form ref= {refForm} onSubmit={handleSubmit} className="contacts-container">
                <input required type="text" name="name" className="field-name" placeholder="Nombre"></input>
                <input required type="email" name="email" className="field-email" placeholder="Email"></input>
                <textarea required name="message" className="field-message" placeholder="Mensaje"></textarea>
                
                <div className="result">
                <button className="email-send">ENVIAR</button>
                <p>{success}</p></div>
            </form>
           
        </div>
    );
}

export default Contact;