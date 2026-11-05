import "./Informacion.css"

import NavBar from "@components/navbar/NavBar.jsx"
import Presentacion from "@components/informacion/Presentacion.jsx"
import Footer from "@components/footer/Footer.jsx"
import Fees from "@components/prices/Fees.jsx"
import Suplementacion from "@components/informacion/suplementacion/Suplementacion.jsx"

import drakkar from "@assets/drakkar.webp"
import salsa from "@assets/salsa.webp"
import {Image} from "@nextui-org/react";
import KravInfo from "../../components/informacion/krav_maga/KravInfo"
import Taekwondo from "../../components/informacion/taekwondo/Taekwondo"
import NutritionInfo from "../../components/informacion/nutrition/NutritionInfo"
import PsychologyInfo from "../../components/informacion/psychology/PsychologyInfo"
import Services from "../../components/informacion/services/Services"

const Informacion = () => {

    return (
        <div className="w-full">
            <NavBar/>
            <div className="mb-10">
                <div className="presen-container">
                    <Presentacion/>
                </div>

                <Fees/>
                
                <Services />
            </div>
            <Footer/>
        </div>
    )
}

export default Informacion