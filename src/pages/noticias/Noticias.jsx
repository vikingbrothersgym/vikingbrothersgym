import React from "react";
import NavBar from "@components/navbar/NavBar.jsx"
import Contacto from "@components/footer/Footer.jsx"
import news from "../../Noticias/news.js"
import "./Noticias.css"
import { useNavigate } from "react-router-dom";
import NoticiaPreview from "@components/noticias/NoticiaPreview.jsx"

const Noticias = () => {
    const navigate = useNavigate()

    return (
        <div className="w-[100vw]">
            <header className="header-navbar">
                <NavBar/>
            </header>
            <h1 className="sec-tit"> 
                NOTICIAS <br/> 
                <span> DEL VALHALLA </span> 
            </h1>
            <div className="box-border px-5 mb-5 w-[100vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5 items-start">
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