import "../CSS/Home.css"

import NavBar from "../Components/NavBar"
import Contacto from "../Components/Contacto"
import Carrusel from "../Components/Carrusel"
import Video from "../Components/Video"
import Texto from "../Components/Texto"
import Servicios from "../Components/Servicios"
import UltimasNoticias from "../Components/UltimasNoticias"
import Competidores from "../Components/Competidores"

import Gym1 from "../assets/Gym/Gym_1.jpg"
import Gym2 from "../assets/Gym/Gym_2.jpg"
import Gym3 from "../assets/Gym/Gym_3.jpg"
import Gym4 from "../assets/Gym/Gym_4.jpg"
import Gym5 from "../assets/Gym/Gym_5.jpg"
import Gym6 from "../assets/Gym/Gym_6.jpg"
import Gym7 from "../assets/Gym/Gym_7.jpg"
import Gym8 from "../assets/Gym/Gym_8.jpg"
import Gym9 from "../assets/Gym/Gym_9.jpg"
import Gym10 from "../assets/Gym/Gym_10.jpg"

import { FaArrowCircleDown } from "react-icons/fa";
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
            <header className="header-navbar" id="inicio">
                <NavBar/>
            </header>
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
                <div>
                    <Servicios/>
                </div>
                <hr className="mt-0"/>
                <div className="video">
                    <Video url={"https://www.youtube.com/watch?v=1OiH3hK8ihc"}/>
                </div>
                {/* <hr className="mb-0"/> */}
                <div className="ubi-con mb-0">
                    <Texto texto={"ubicacion"}/>
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