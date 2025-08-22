import { useParams } from "react-router-dom"
import NavBar from "@components/navbar/NavBar.jsx"
import Contacto from "@components/footer/Footer.jsx"
import news from "../../Noticias/news.js"
import { useEffect, useState } from "react"
import Carrusel from "@components/carrusel/Carrusel.jsx"
import "./Noticia.css"

const Noticia = () => {
    const {id} = useParams()
    const [noticia, setNoticia] = useState(null)

    useEffect(() => {
        const noticiaFound = news.find(not => not.id == id)
        setNoticia(noticiaFound)
    }, [id])

    // Verificación de que la noticia está cargada
    if (!noticia) {
        return (
            <div> Cargando noticia... </div>
        )
    } else {
        return (
            <div>
                <header className="header-navbar">
                    <NavBar/>
                </header>
                <div className="noticia">
                    <h1 className="titulo-noticia"> {noticia.title} </h1>
                    <p className="fecha-noticia"> {noticia.date} </p>
                    <div className="im-noticia-container">
                        <img className="im-noticia"
                             src={noticia.image}
                             alt={noticia.title} />
                    </div>
                    <hr/>
                    {noticia.text.map((text, index) => (
                        <p key={index} className="noticia-text"> {text} </p>
                    ))}

                    <div>
                        {noticia.carrusel && (
                            <Carrusel images={noticia.carrusel}/> 
                        )}
                        {noticia.video && (
                            <div>
                                {/* REPRODUCTOR YOUTUBE */}
                            </div>
                        )}
                    </div>
                </div>
                <div id="contacto">
                    <Contacto/>
                </div>
            </div>
        )
    
    }

}

export default Noticia