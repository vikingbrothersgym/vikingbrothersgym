import React from "react"
import news from "../Noticias/news"
import "../CSS/UltimasNoticias.css"
import { useNavigate } from "react-router-dom"
import constants from "../constants/Constants"
import NoticiaPreview from "./NoticiaPreview"

const UltimasNoticias = () => {
    return (
        <div className="ult-container">
            <h1 className="sec-tit"> 
                ÚLTIMAS <br/> 
                <span> NOTICIAS </span>  
            </h1>
            <div className="ultnot-container">
                <NoticiaPreview ultimas={true} not={news[0]} />
                <NoticiaPreview ultimas={true} not={news[1]} />
            </div>
        </div>
    )
}

export default UltimasNoticias