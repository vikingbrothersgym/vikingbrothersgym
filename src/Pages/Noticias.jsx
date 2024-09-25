import React from "react";
import NavBar from "../Components/NavBar.jsx"
import Contacto from "../Components/Contacto"
import news from "../Noticias/news.js"
import "../CSS/Noticias.css"
import { useNavigate } from "react-router-dom";
import NoticiaPreview from "../Components/NoticiaPreview.jsx"
import constants from "../constants/Constants.jsx";


const Noticias = () => {
    const navigate = useNavigate()

    return (
        <div>
            <header className="header-navbar">
                <NavBar/>
            </header>
            <h1 className="sec-tit"> 
                NOTICIAS <br/> 
                <span> DEL VALHALLA </span> 
            </h1>
            <div className="news-container">
                {news.map((not, index) => (
                    <NoticiaPreview key={index} ultimas={true} not={not}/>
                ))}
            </div>
            <div id="contacto">
                <Contacto/>
            </div>
        </div>
    )
}

export default Noticias