import suple from "@assets/Suple.jpg"
import {Image} from "@nextui-org/react";

import "./Suplementacion.css"

const Suplementacion = () => {
    return (
        <>
        <h1 className="sec-tit">
            SUPLEMENTACIÓN <br/>
            <span> DEPORTIVA </span>
        </h1>
        <div className="suple-container">
            <p className="suple">  
                Contamos con una selección de suplementación deportiva 
                para potenciar tu rendimiento y recuperación. <br/> <br/>
                Podrás encontrar exactamente lo que necesitas para
                complementar tu entrenamiento. <br/><br/>
                ¡No dudes en acercarte y preguntarnos!
            </p>
            <div className="suple-im-container">
                <Image 
                    className="suple-im" 
                    src={suple}
                    isBlurred
                    isZoomed/>
            </div>
        </div>
        <br/>
        </>
    )
}

export default Suplementacion