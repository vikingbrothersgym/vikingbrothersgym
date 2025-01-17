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