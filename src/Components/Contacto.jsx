import React from "react";
import logo from "../assets/logo_navidad.webp"
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import "../CSS/Contacto.css"


const Contacto = () => {
    return (
        <div className="contacto">
            <div className="texto">
                <div className="con-logo-container">
                    <img src={logo} className="con-logo"/>
                </div>
                <p className="siguenos"> Tfno.: 876 65 08 41 </p>
                <p className="siguenos"> Email: vbrothersgym@gmail.com </p>
                <h3 className="siguenos"> Horarios: </h3>
                <p className="siguenos"> Lunes a Viernes: <br/> 7:00-22:00 </p>
                <p className="siguenos"> Sábados, Domingos y festivos: <br/> 9:00-14:00 </p>
                <h3 className="siguenos"> Abiertos los 365 días del año </h3>
                <hr/>
                <p className="siguenos"> Síguenos en nuestras redes sociales </p>
            </div>
            <nav >
                <ul className="redes">
                    <li className="red"> 
                        <a className="red-a" href="https://www.instagram.com/vikingbrothersgym/" >
                            <FaInstagram />                        
                        </a>                        
                    </li>
                    <li className="red"> 
                        <a className="red-a" href="https://www.youtube.com/@VikingBrothersGym">
                            <FaYoutube />
                        </a>
                    </li>
                    <li className="red"> 
                        <a className="red-a" href="https://www.tiktok.com/@vikingbrothersgym">
                            <FaTiktok /> 
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Contacto