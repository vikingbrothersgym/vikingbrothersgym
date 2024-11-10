import { BsPersonArmsUp } from "react-icons/bs";
import { GiVikingHead, GiVikingLonghouse, 
    GiWeightLiftingUp, GiVikingHelmet, GiVikingShield, GiBoxingGlove } from "react-icons/gi";
import "../CSS/Servicios.css"

const Servicio = ({index = 1}) => {
    return (
        <>
            {index === 1 && (
                <div className="servicio">
                    <div className="icon-service">
                        <GiWeightLiftingUp/>
                    </div>
                    <h2> Clases Dirigidas </h2>
                    <hr/>
                    <p> Todas ellas están incluidas en la cuota. 
                        Consulta los horarios en esta web y ¡entrena! 
                    </p>
                </div>
            )}

            {index === 2 && (
                <div className="servicio">
                    <div className="icon-service">
                        <GiVikingHead />
                    </div>
                    <h2> Asesoría Vikinga </h2>
                    <hr/>
                    <p> Nuestro personal estará siempre dispuesto a ayudarte a
                        lograr tus objetivos 
                    </p>
                </div>
            )}

            {index === 3 && (
                <div className="servicio">
                    <div className="icon-service">
                        <GiVikingLonghouse />
                    </div>
                    <h2> El Templo </h2>
                    <hr/>
                    <p> Ven y descubre nuestra sala de clases y musculación 
                        al puro estilo Old School
                    </p>
                </div>
            )}

            {index === 4 && (
                <div className="servicio">
                    <div className="icon-service">
                        <GiBoxingGlove/>
                    </div>
                    <h2> Boxeo </h2>
                    <hr/>
                    <p> Próximamente en Viking Brothers Gym. Síguenos en redes
                        para estar al tanto
                    </p>
                </div>
            )}

            {index === 5 && (
                <div className="servicio">
                    <div className="icon-service">
                        <GiVikingHelmet />
                    </div>
                    <h2> Familia </h2>
                    <hr/>
                    <p> Somos un gimnasio de barrio familiar. El buen rollo es 
                        un sello distintivo
                    </p>
                </div>
            )}

            {index === 6 && (
                <div className="servicio">
                    <div className="icon-service">
                        <GiVikingShield />
                    </div>
                    <h2> Para todos </h2>
                    <hr/>
                    <p> Diseñado para personas de todas las edades y niveles de 
                        condición física
                    </p>
                </div>
            )}
        </>
    )
}

const Servicios = () => {
    return (
        <div className="servicios-back">
            <h1 className="sec-tit"> 
                NUESTRA OFERTA <br/> 
                <span> VIKINGA </span>  
            </h1>
            <div className="servicios-container">
                <Servicio index={1}/>
                <Servicio index={3}/>
                <Servicio index={4}/>
                <Servicio index={2}/>
                <Servicio index={5}/>
                <Servicio index={6}/>
            </div>
        </div>
    )
}

export default Servicios