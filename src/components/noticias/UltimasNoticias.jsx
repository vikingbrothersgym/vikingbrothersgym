import React from "react"
import news from "@noticias/news"
import "./UltimasNoticias.css"
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