import "./Informacion.css"

import NavBar from "@components/navbar/NavBar.jsx"
import Presentacion from "@components/informacion/Presentacion.jsx"
import Contacto from "@components/footer/Footer.jsx"
import Tarifas from "@components/informacion/Tarifas.jsx"
import Suplementacion from "@components/informacion/Suplementacion.jsx"
import CBImperial from "@components/informacion/CBImperial.jsx"

import drakkar from "@assets/drakkar.webp"
import salsa from "@assets/salsa.webp"
import jose_krav_maga from "@assets/jose_krav_maga.webp"
import {Image} from "@nextui-org/react";

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
                <img className="w-[100vw] mt-[20px]" src={drakkar} />
                <hr/>
                <h1 className="sec-tit"> 
                    🥋 KRAV MAGÁ Y <br/> 
                    <span> DEFENSA PERSONAL </span>
                </h1>
                <div className="suple-container">
                    <p className="suple">  
                    En Viking Brothers Gym contamos con clases de Krav Magá y Defensa Personal, impartidas por José Ramos, profesor federado con amplia experiencia en estas disciplinas.
                    <br/> <br/>
                    El Krav Magá es un sistema de defensa personal de origen israelí, reconocido mundialmente por su eficacia y simplicidad. Está diseñado para que cualquier persona, sin importar su edad o condición física, pueda aprender técnicas útiles para desenvolverse en situaciones de riesgo real.
                    <br/> <br/>
                    📅 Consulta nuestros horarios en esta misma web y apúntate hoy mismo.
                    <br/> <br/>
                    👊 Beneficios de practicar Krav Magá
                    <br/>
                    - Mejorar tu seguridad y confianza personal.
                    <br/>
                    - Desarrollar fuerza, agilidad y reflejos.
                    <br/>
                    - Aprender técnicas efectivas de defensa.
                    <br/>
                    - Entrenar en un ambiente motivador y seguro.
                    <br/> <br/>
                    👉 Inscripciones abiertas. Ven a entrenar con nosotros y aprende a defenderte mientras mejoras tu forma física.
                    <br/> <br/>
                    </p>
                    <div className="suple-im-container">
                        <Image 
                            className="suple-im" 
                            src={jose_krav_maga}
                            isBlurred
                            isZoomed/>
                    </div>
                </div>
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