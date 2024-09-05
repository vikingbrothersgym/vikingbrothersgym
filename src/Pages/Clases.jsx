import Semana from "../Components/Calendario/Semana"
import Contacto from "../Components/Contacto"
import NavBar from "../Components/NavBar"
import Texto from "../Components/Texto"
import "../CSS/Clases.css"

const Clases = () => {
    return (
        <div className="clases-page">
            <header className="header-navbar">
                <NavBar/>
            </header>
            <div>
                <Texto texto="clases"/>
                <Semana/>
            </div>
            <div id="contacto">
                <Contacto/>
            </div>
        </div>
    )
}

export default Clases