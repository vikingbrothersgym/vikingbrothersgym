import "./Home.css";

import NavBar from "@components/navbar/NavBar";
import Contacto from "@components/footer/Footer";
import Carrusel from "@components/carrusel/Carrusel";
import Video from "@components/video/Video";
import Ubicacion from "@components/ubicacion/Ubicacion";
import Servicios from "@components/informacion/Servicios";
import UltimasNoticias from "@components/noticias/UltimasNoticias";
import Competidores from "@components/competidores/Competidores"
import Profesores from "@components/profesores/Profesores"
import TextSlider from "@components/poemas/TextSlider"
import PromoJefes from "@components/promo-jefes/PromoJefes"

import Gym1 from "@assets/Gym/Gym_1.webp";
import Gym2 from "@assets/Gym/Gym_2.webp"
import Gym3 from "@assets/Gym/Gym_3.webp"
import Gym4 from "@assets/Gym/Gym_4.webp"
import Gym5 from "@assets/Gym/Gym_5.webp"
import Gym6 from "@assets/Gym/Gym_6.webp"
import Gym7 from "@assets/Gym/Gym_7.webp"
import Gym8 from "@assets/Gym/Gym_8.webp"
import Gym9 from "@assets/Gym/Gym_9.webp"
import Gym10 from "@assets/Gym/Gym_10.webp"

import poema from "@assets/vikingo_mamado.webp"
import hiper_video from "@assets/HiperVideo.mp4";
import krav_maga from "/news/new15.webp"

import { FaArrowCircleDown, FaInstagram } from "react-icons/fa";
import { Button, Image } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import constants from "../../constants/Constants"
import HiperVideo from "../../components/video/HiperVideo";

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
                <HiperVideo video={hiper_video} />
                <PromoJefes/>
                <Carrusel images={images}/>
                <hr/>
                {/* <div className="flex flex-col items-center w-[100%]">
                    <h1 className="sec-tit"> 
                        🥋 SEMINARIO <br/> 
                        <span> KRAV MAGÁ </span>
                    </h1>
                    <div className="xl:flex items-center">
                        <p className="text-[#fff] text-[25px] text-center xl:ml-[20px] xl:mr-[20px]"> 
                            🥋 Seminario de Krav Maga en Viking Brother Gym – 18 de Octubre <br/><br/>
                            🕒 Horario: De 10:00 h a 13:00 h <br/><br/>
                            📍 Lugar: Viking Brother Gym, C/ Miraflores 12-14, Zaragoza <br/><br/>
                            💶 Precio: 30 € <br/><br/>
                            📋 Inscripciones: En la recepción del gimnasio. <br/><br/>
                        </p>
                        <div className="flex justify-center">
                            <Image
                                className="suple-im" 
                                src={krav_maga}
                                isBlurred
                                isZoomed/>
                        </div>
                    </div>
                </div> */}
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
                    <img className="w-full mt-[20px]" src={poema}/>
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