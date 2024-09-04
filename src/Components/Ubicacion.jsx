import React from "react";
import MapView from "../Components/MapView";
import "../CSS/Ubicacion.css"


const Ubicacion = () => {
    return (
        <div className="ubi">
        <h1 className="sec-ti"> UBICACIÓN </h1>
        <MapView/>
        <div className="dir-info">
            <p className="text"> 
                C. de Miraflores, 12-14, Zaragoza, España, 50008
            </p>
            <p className="como-llegar"> 
                <a className="link-como-llegar" href="https://www.google.es/maps/dir//Viking+brothers+gym,+C.+de+Miraflores,+12,+50008+Zaragoza/@41.644112,-0.8725002,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0xd591532c8224c67:0x36c938c0477bbbf3!2m2!1d-0.8739733!2d41.6443709!3e0?hl=es&entry=ttu"> 
                    Cómo llegar
                </a>                                
            </p>
        </div>
    </div>
)
}

export default Ubicacion