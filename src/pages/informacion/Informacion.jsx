import "./Informacion.css"

import NavBar from "@components/navbar/NavBar.jsx"
import Presentacion from "@components/informacion/Presentacion.jsx"
import Contacto from "@components/footer/Footer.jsx"
import Fees from "@components/prices/Fees.jsx"
import Suplementacion from "@components/informacion/suplementacion/Suplementacion.jsx"
import CBImperial from "@components/informacion/CBImperial.jsx"

import drakkar from "@assets/drakkar.webp"
import salsa from "@assets/salsa.webp"
import {Image} from "@nextui-org/react";
import KravInfo from "../../components/informacion/krav_maga/KravInfo"
import Taekwondo from "../../components/informacion/taekwondo/Taekwondo"
import SalsaBachata from "../../components/informacion/salsa_bachata/SalsaBachata"

const Informacion = () => {

    return (
        <div className="w-full">
            <NavBar/>
            <div>
                <div className="presen-container">
                    <Presentacion/>
                </div>

                <Fees/>
                
                <KravInfo/>
                
                <Taekwondo />
                
                <SalsaBachata />
                
                <Suplementacion/>
            </div>
            <div id="contacto">
                <Contacto/>
            </div>
        </div>
    )
}

export default Informacion