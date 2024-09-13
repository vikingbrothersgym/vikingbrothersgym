import cbimperial from "../assets/cbimperial.jpg"
import {Image} from "@nextui-org/react";

import "../CSS/CBImperial.css"

const CBImperial = () => {
    return (
        <>
        <h1 className="sec-tit">
            VIKING BROTHERS GYM <br/>
            <span> CB IMPERIAL ZARAGOZA </span>
        </h1>
        <div className="imperial-container">
            <div className="imperial-im-container">
                <Image 
                    className="imperial-im" 
                    src={cbimperial}
                    isBlurred
                    isZoomed/>
            </div>
            <p className="imperial">  
                En Viking Brothers Gym nos enorgullece ser colaboradores 
                oficiales del equipo de baloncesto CB Imperial Zaragoza. <br/><br/>
                
                En nuestro templo disponemos de unas instalaciones de primer 
                nivel que impulsan a los jugadores de CB Imperial a alcanzar 
                éxitos deportivos. <br/> <br/>

                ¡Vamos equipo!
            </p>
        </div>
        <br/>
        </>
    )
}

export default CBImperial