import jefes from "@assets/presentacion/jefes.jpg"
import exterior from "@assets/presentacion/gimasio_exterior.jpg"
import {Image} from "@nextui-org/react";
import "./Presentacion.css"

const Presentacion = () => {
    return (
        <div className="presentacion-container">
            <p className="presentacion">  
                ¡Bienvenid@ a The Viking Brothers Gym! <br/> <br/>
                Somos más que un gimnasio, somos una hermandad de guerrer@s
                en busca de la excelencia física. <br/> <br/>
                Únete a nuestra comunidad y forja tu cuerpo y mente con
                entrenamientos épicos y apoyo inquebrantable. <br/> <br/>
                ¡Prepárate para liberar al viking@ que llevas dentro!
                Te esperamos en el TEMPLO.
            </p>
            <div className="jefes-container">
                <div className="im-jefes-container">
                    <Image 
                        className="im-jefes" 
                        src={exterior}
                        isBlurred
                        isZoomed />
                </div>
                <div className="im-jefes-container">
                    <Image 
                        className="im-jefes" 
                        src={jefes}
                        isBlurred
                        isZoomed />
                </div>
            </div>
        </div>
    )
}

export default Presentacion