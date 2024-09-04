import MapView from "../Components/MapView";

import "../CSS/Texto.css"

const Texto = ({ texto }) => {
    return (
        <>
            {texto === "servicios" && (
                <div className="centered-container">
                    <h1 className="centered-title"> ¿QUÉ OFRECEMOS? </h1>
                    <p className="text">
                        En nuestro TEMPLO encontrarás una amplia oferta de servicios. <br /><br />
                        {/* <span className="resaltar"> Sala de Musculación </span> <br /><br />
                        <span className="resaltar"> Sala de Spinning </span> <br /><br />
                        <span className="resaltar"> Sala de Clases </span> <br /><br />
                        <span className="resaltar"> Clases y sesiones monitorizadas </span> <br /><br />
                        <span className="resaltar"> Apoyo en el entrenamiento </span> */}
                    </p>
                </div>
            )}

            {texto === "horarios" && (
                <div className="centered-container">
                    {/* Aquí puedes añadir el contenido para la sección de horarios */}
                    <h1 className="centered-title"> HORARIOS </h1>
                    <p className="text"> 
                        Lunes a Viernes: <br/> 
                        <span className="resaltar"> 7:00-22:00 </span> <br/> <br/>
                        Sábados, Domingos y festivos: <br/> 
                        <span className="resaltar"> 9:00-14:00 </span> <br/> <br/> <br/>
                        <span className="resaltar"> Abiertos los 365 días del año </span>
                    </p>
                </div>
            )}

            {texto === "ubicacion" && (
                <div className="centered-container">
                    <h1 className="sec-tit"> 
                        UBICACIÓN <br/>
                        <span> DEL TEMPLO </span> 
                    </h1>
                    <div className="dir-info">
                        <MapView/>
                        <p className="text"> 
                                C. de Miraflores, 12-14, <br/>
                                Zaragoza, España, 50008
                            </p>
                            <p className="como-llegar"> 
                                <a className="link-como-llegar" href="https://www.google.es/maps/dir//Viking+brothers+gym,+C.+de+Miraflores,+12,+50008+Zaragoza/@41.644112,-0.8725002,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0xd591532c8224c67:0x36c938c0477bbbf3!2m2!1d-0.8739733!2d41.6443709!3e0?hl=es&entry=ttu"> 
                                    Cómo llegar
                                </a>                                
                            </p>
                        </div>
                </div>
            )}

            {texto === "clases" && (
                <div className="centered-container">
                    <p className="text">
                        Pincha en cada clase para ver más detalles
                    </p>
                </div>
            )}
        </>
    );
}

export default Texto;