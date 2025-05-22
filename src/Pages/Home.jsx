import "../CSS/Home.css"

import NavBar from "../Components/NavBar"
import Contacto from "../Components/Footer"
import Carrusel from "../Components/Carrusel"
import Video from "../Components/Video"
import Ubicacion from "../Components/Ubicacion"
import Servicios from "../Components/Servicios"
import UltimasNoticias from "../Components/UltimasNoticias"
import Competidores from "../Components/Competidores"

import Gym1 from "../assets/Gym/Gym_1.webp"
import Gym2 from "../assets/Gym/Gym_2.webp"
import Gym3 from "../assets/Gym/Gym_3.webp"
import Gym4 from "../assets/Gym/Gym_4.webp"
import Gym5 from "../assets/Gym/Gym_5.webp"
import Gym6 from "../assets/Gym/Gym_6.webp"
import Gym7 from "../assets/Gym/Gym_7.webp"
import Gym8 from "../assets/Gym/Gym_8.webp"
import Gym9 from "../assets/Gym/Gym_9.webp"
import Gym10 from "../assets/Gym/Gym_10.webp"

import poema from "../assets/vikingo_mamado.webp"
import drakkar from "../assets/drakkar.webp"
import krav_maga from "../assets/krav_maga.webp"

import { FaArrowCircleDown, FaInstagram } from "react-icons/fa";
import Profesores from "../Components/Profesores"
import TextSlider from "../Components/TextSlider"
import { Button } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import constants from "../constants/Constants"

const Home = () => {
    const navigate = useNavigate();
    const images = [
        { original: Gym1 },
        { original: Gym2 }, 
        { original: Gym3 }, 
        { original: Gym4 }, 
        { original: Gym5 }, 
        { original: Gym6 }, 
        { original: Gym7 }, 
        { original: Gym8 }, 
        { original: Gym9 }, 
        { original: Gym10 }, 
    ]

    return (
        <div className="home-page">
            <NavBar/>
            <div className="home">
                <div className="carrusel-home">
                    <Carrusel images={images}/>
                    <a className="button-down" href="#profesores">
                        <FaArrowCircleDown />                    
                    </a>
                </div>
                <hr/>
                <div className="flex flex-col items-center w-[100vw]">
                    <h1 className="sec-tit"> 
                        <span>SEMINARIO</span> <br/>
                        KRAV MAGA 
                    </h1>
                    <img className="w-[50%]" src={krav_maga} />
                    <p className="text-[#fff] text-[20px] text-center ml-[20px] mr-[20px]"> 
                        🥋 Seminario de Krav Maga en Viking Brother Gym – 21 de Junio <br/>
                        🕒 Horario: De 10:00 h a 12:30 h <br/>
                        📍 Lugar: Viking Brother Gym, C/ Miraflores 12-14, Zaragoza <br/>
                        💶 Precio: 20 €
                        📋 Inscripciones: En la recepción del gimnasio. <br/>
                    </p>
                    <Button 
                        className="cursor-pointer bg-black border-0 text-third font-bold text-lg mt-2 mr-7 hover:bg-third hover:text-black"
                        onClick={() => navigate(constants.root + "noticia/11")}
                    >
                        Leer más
                    </Button>
                </div>
                <hr/>
                <img className="w-[100vw] mt-[20px]" src={drakkar} />
                <hr id="profesores"/>
                <Profesores/>
                <hr className="mb-0"/>
                <Servicios/>
                <hr className="mt-0"/>
                <div className="video">
                    <Video url={"https://www.youtube.com/watch?v=GNsp74QBxzo"}/>
                </div>
                <hr className="mb-0"/>
                <div className="ubi-con mb-0">
                    <Ubicacion />
                </div>
                <div className="poema">
                    <TextSlider/>
                    <a 
                     href="https://www.instagram.com/vikingbrothersgym/"
                     target="_blank" 
                     rel="noopener noreferrer"
                    > 
                        <FaInstagram  />
                        <p> &nbsp; ¡Síguenos en Instagram!</p>
                    </a>
                    <img className="w-[100vw] mt-[20px]" src={poema}/>
                </div>
                {/* <hr className="mt-0"/> */}
                <UltimasNoticias/>
                <hr/>
                <Competidores/>
                <div id="contacto">
                    <Contacto/>
                </div>                
            </div>
        </div>
    )
}

export default Home