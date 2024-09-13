import "../CSS/Informacion.css"

import NavBar from "../Components/NavBar.jsx"
import Presentacion from "../Components/Presentacion"
import Contacto from "../Components/Contacto"
import Tarifas from "../Components/Tarifas.jsx"
import Suplementacion from "../Components/Suplementacion.jsx"
import CBImperial from "../Components/CBImperial.jsx"

const Informacion = () => {

    return (
        <div className="info-page">
            <header className="header-navbar">
                <NavBar/>
            </header>
            <div>
                <div className="presen-container">
                    <Presentacion/>
                </div>
                <hr/>
                <Tarifas/>
                <hr/>
                <Suplementacion/>
                <hr/>
                <CBImperial/>
            </div>
            <div id="contacto">
                <Contacto/>
            </div>
        </div>
    )
}

export default Informacion