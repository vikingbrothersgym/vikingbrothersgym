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
                    <div key={index}>
                        <NoticiaPreview ultimas={true} not={not}/>
                    </div>
                    // <>
                    // <div className="new" key={index}>
                    //     <img 
                    //         className="im-new"
                    //         src={not.image} 
                    //         alt={not.title} /> 
                    //     <p className="title-date-new">
                    //         <h1 > 
                    //             <a className="title-new" 
                    //                href=""
                    //                onClick={() => navigate(constants.root + "noticia/" + not.id)}>
                    //                 {not.title}
                    //             </a> 
                    //         </h1>
                    //         {not.date}
                    //     </p>            
                    // </div>
                    // <hr className="hr-noticias"/>
                    // </>
                ))}
            </div>
            <div id="contacto">
                <Contacto/>
            </div>
        </div>
    )
}

export default Noticias