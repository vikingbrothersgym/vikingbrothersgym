import NavBar from "../Components/NavBar.jsx"
import Presentacion from "../Components/Presentacion"
import Contacto from "../Components/Contacto"

import "../CSS/Informacion.css"
import Tarifas from "../Components/Tarifas.jsx"
import Video from "../Components/Video.jsx"
import Suplementacion from "../Components/Suplementacion.jsx"

const Informacion = () => {

    return (
        <div className="info-page">
            <header className="cabecera">
                <NavBar/>
            </header>
            <div>
                <div className="presen-container">
                    <Presentacion/>
                </div>
                <hr/>
                <Tarifas/>
                {/* <hr/>
                <div className="video-presentacion">
                    <Video url={"https://youtu.be/iq-Sc8D0Was?si=MQc-rtyoKImzHBvO"}/>
                </div> */}
                <hr/>
                <Suplementacion/>
            </div>
            <div id="contacto">
                <Contacto/>
            </div>
        </div>
    )
}

export default Informacion