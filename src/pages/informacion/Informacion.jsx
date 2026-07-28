import "./Informacion.css"

import NavBar from "@components/navbar/NavBar.jsx"
import Presentacion from "@components/informacion/Presentacion.jsx"
import Contacto from "@components/footer/Footer.jsx"
import Fees from "@components/prices/Fees.jsx"
import Suplementacion from "@components/informacion/Suplementacion.jsx"
import CBImperial from "@components/informacion/CBImperial.jsx"

import drakkar from "@assets/drakkar.webp"
import salsa from "@assets/salsa.webp"
import {Image} from "@nextui-org/react";
import KravInfo from "../../components/informacion/krav_maga/KravInfo"

const Informacion = () => {

    return (
        <div className="w-full">
            <NavBar/>
            <div>
                <div className="presen-container">
                    <Presentacion/>
                </div>
                <Fees/>
                {/* <img className="w-full mt-[20px]" src={drakkar} /> */}
                {/* <hr/> */}
                <KravInfo/>
                <hr/>
                <h1 className="sec-tit"> 
                    SALSA Y BACHATA <br/> 
                    <span> CON ELPIDIO COBLEY </span>
                </h1>
                <div className="suple-container">
                    <p className="suple">  
                        ¿Listo para moverte con ritmo? En nuestro gimnasio ofrecemos clases de salsa y bachata dirigidas por el gran Elpidio Cobley, un profesor con amplia experiencia que hará que aprendas mientras te diviertes.
                        <br/> <br/>
                        Clases adaptadas para todos los niveles, desde principiantes hasta avanzados. Ven solo o en pareja, ¡todos son bienvenidos!
                        <br/> <br/>
                        🎶 Beneficios de nuestras clases:
                        <br/>
                        - Mejora tu coordinación y condición física.
                        <br/>
                        - Comparte la experiencia con más personas.
                        <br/>
                        - Aprende los pasos básicos y técnicas avanzadas.
                        <br/> <br/>
                        ¡No pierdas la oportunidad de transformar tus tardes en una experiencia llena de ritmo y energía!
                        <br/> <br/>
                        📅 Consulta nuestros horarios en esta misma web y apúntate hoy mismo.
                    </p>
                    <div className="suple-im-container">
                        <Image 
                            className="suple-im" 
                            src={salsa}
                            isBlurred
                            isZoomed/>
                    </div>
                </div>
                <hr/>
                <Suplementacion/>
                {/* <hr/> */}
                {/* <CBImperial/> */}
            </div>
            <div id="contacto">
                <Contacto/>
            </div>
        </div>
    )
}

export default Informacion