import Dia from "./Dia"
import horarios from "../../Clases/horarios"

import "../../CSS/Calendario/Semana.css"

const Semana = () => {

    return (
        <div className="semana">
            <Dia dia="Lun" clases={horarios.lunes}/>
            <Dia dia="Mar" clases={horarios.martes}/>
            <Dia dia="Mié" clases={horarios.miercoles}/>
            <Dia dia="Jue" clases={horarios.jueves}/>
            <Dia dia="Vie" clases={horarios.viernes}/>
            <Dia dia="Sáb" clases={horarios.sabado}/>
            <Dia dia="Dom" clases={horarios.domingo}/>
        </div>
    )
}

export default Semana