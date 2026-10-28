import clases from "@assets/servicios/clases.webp"
import exterior from "@assets/servicios/gimnasio_exterior.webp"
import "./Presentacion.css"

const Presentacion = () => {
    return (
        <div className="presentacion-container">
            <p className="presentacion">  
                ¡Bienvenid@ a The Viking Brothers Gym!<br/> <br/>
                En este templo 
                <span className="font-semibold text-third"> no importa tu edad, tu sexo, tu aspecto físico ni tu condición.</span>
                <br/><br/>
                No importa cuánto peso levantes ni cuánta experiencia 
                tengas.<br/> <br/>
                ¡Únete a nuestra comunidad y 
                <span className="font-semibold text-third"> libera al viking@ </span> 
                que llevas dentro!<br/> <br/> 
                Te esperamos en el TEMPLO.
            </p>
            <div className="jefes-container">
                <img className="w-[600px] rounded-xl border border-third" src={exterior} />
            </div>
        </div>
    )
}

export default Presentacion