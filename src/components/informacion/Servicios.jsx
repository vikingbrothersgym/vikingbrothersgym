import "./Servicios.css"
import clases from "@assets/servicios/clases.webp"
import templo from "@assets/servicios/templo.webp"
import asesoria from "@assets/servicios/asesoria.webp"
import boxeo from "@assets/servicios/boxeo.webp"
import familia from "@assets/servicios/familia.webp"
import todos from "@assets/servicios/todos.webp"

const Servicio = ({index = 1}) => {
    return (
        <>
            {index === 1 && (
                <div className="clases">
                    <img className="img-clases" src={clases}/>
                    <div className="servi-text">
                        <h1> Clases dirigidas </h1>
                        <p className="servi-description"> 
                            Todas ellas están incluidas en la cuota. 
                            Consulta los horarios en esta web y ¡entrena! 
                        </p>
                    </div>
                </div>
            )}

            {index === 2 && (
                <div className="clases">
                    <img className="img-clases" src={templo}/>
                    <div className="servi-text">
                        <h1> El Templo </h1>
                        <p className="servi-description"> 
                            Ven y descubre nuestra sala de clases y musculación 
                            al puro estilo Old School
                        </p>
                    </div>
                </div>
            )}

            {index === 3 && (
                <div className="clases">
                    <img className="img-clases" src={asesoria}/>
                    <div className="servi-text">
                        <h1> Asesoría Vikinga </h1>
                        <p className="servi-description"> 
                            Nuestros entrenadores personales del Templo te llevarán
                            a alcanzar tus objetivos. Ven y pregúntanos sin ningún
                            compromiso. ¡Estamos para ayudarte!
                        </p>
                    </div>
                </div>            
            )}

            {index === 4 && (
                <div className="clases">
                    <img className="img-clases" src={boxeo}/>
                    <div className="servi-text">
                        <h1> Boxeo y Kick Boxing </h1>
                        <p className="servi-description"> 
                            Clases de Boxeo, Kick Boxing, Kick Boxing infantil
                            y defensa personal. ¡Consulta horarios en esta web
                            o ven a preguntarnos!
                        </p>
                    </div>
                </div>                        
            )}

            {index === 5 && (
                <div className="clases">
                    <img className="img-clases" src={familia}/>
                    <div className="servi-text">
                        <h1> Familia </h1>
                        <p className="servi-description"> 
                            Somos un gimnasio de barrio familiar. El buen rollo es 
                            un sello distintivo
                        </p>
                    </div>
                </div>                        
            )}

            {index === 6 && (
                <div className="clases">
                    <img className="img-clases" src={todos}/>
                    <div className="servi-text">
                        <h1> Para todos </h1>
                        <p className="servi-description"> 
                            Diseñado para personas de todas las edades y niveles de 
                            condición física. ¡Estaremos encantados de recibirte!
                        </p>
                    </div>
                </div>                        
            )}
        </>
    )
}

const Servicios = () => {
    return (
        <div className="flex flex-col items-center justify-center mb-[50px]">
            <h1 className="sec-tit"> 
                TRANSFORMA <br/> 
                <span> TU RUTINA </span>  
            </h1>
            <div className="servicios-container">
                <Servicio index={1}/>
                <Servicio index={2}/>
                <Servicio index={3}/>
                <Servicio index={4}/>
                <Servicio index={5}/>
                <Servicio index={6}/>
            </div>
        </div>
    )
}

export default Servicios