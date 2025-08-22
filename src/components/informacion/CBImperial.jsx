import cbimperial from "@assets/cbimperial/vikingos_imperial.webp"
import vbg_cbi from "@assets/cbimperial/vbg_cbi.png"
import {Image} from "@nextui-org/react";

import "./CBImperial.css"

const CBImperial = () => {
    
    return (
        <>
        <h1 className="sec-tit">
            VIKING BROTHERS GYM <br/>
            <span> CB IMPERIAL ZARAGOZA </span>
        </h1>
        <div className="imperial-container">
            <div className="imperial-im-container">
                <div className="espaciador">
                    <Image 
                        className="imperial-im" 
                        src={cbimperial}
                        isBlurred
                        isZoomed/>
                </div>
                <div className="espaciador">
                    <Image 
                        className="imperial-im" 
                        src={vbg_cbi}
                        isBlurred
                        isZoomed/>
                </div>
            </div>
            <p className="imperial">  
                En Viking Brothers Gym nos enorgullece ser colaboradores 
                oficiales del equipo de baloncesto CB Imperial Zaragoza. <br/><br/>
                
                CB Imperial Zaragoza: <br/> <br/>
                <i>
                Estamos muy contentos de anunciar nuestro acuerdo de colaboración 
                con Viking Brothers Gym que nos ayudará a alcanzar nuestro máximo 
                potencial la próxima temporada 💪🏼😎. <br/> <br/>

                Viking Brothers Gym es más que un gimnasio. Es una comunidad 
                donde podrás forjar tu cuerpo y mente con entrenamientos épicos 
                y junto a un apoyo inquebrantable. <br/> <br/>

                💥 Vamos a liberar al vikingx que llevamos dentro 💥 <br/> <br/>
                </i>
                ¡Vamos equipo!
            </p>
        </div>
        <br/>
        </>
    )
}

export default CBImperial