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

import poema from "../assets/poema_vikingo_web.webp"

import { FaArrowCircleDown, FaInstagram } from "react-icons/fa";
import Profesores from "../Components/Profesores"

const Home = () => {
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
                <hr id="profesores"/>
                <Profesores/>
                <hr className="mb-0"/>
                <Servicios/>
                {/* <hr className="mt-0"/> */}
                {/* <div className="video">
                    <Video url={"https://www.youtube.com/watch?v=1OiH3hK8ihc"}/>
                </div> */}
                {/* <hr className="mb-0"/> */}
                <div className="ubi-con mb-0">
                    <Ubicacion />
                </div>
                <div className="poema">
                    <a href="https://www.instagram.com/vikingbrothersgym/"> 
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