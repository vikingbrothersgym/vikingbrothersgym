import Dia from "./Dia"
import horariosGym from "../../Clases/horarios"
import horariosBox from "../../Clases/boxeo"

import "../../CSS/Calendario/Semana.css"

const Semana = ({ gimnasio = true }) => {

    return (
        <div className="semana">
            {gimnasio && (
                <>
                    <Dia dia="Lun" clases={horariosGym.lunes}/>
                    <Dia dia="Mar" clases={horariosGym.martes}/>
                    <Dia dia="Mié" clases={horariosGym.miercoles}/>
                    <Dia dia="Jue" clases={horariosGym.jueves}/>
                    <Dia dia="Vie" clases={horariosGym.viernes}/>
                    <Dia dia="Sáb" clases={horariosGym.sabado}/>
                    <Dia dia="Dom" clases={horariosGym.domingo}/>
                </>
            )}

            {!gimnasio && (
                <>
                    <Dia dia="Lun" clases={horariosBox.lunes}/>
                    <Dia dia="Mar" clases={horariosBox.martes}/>
                    <Dia dia="Mié" clases={horariosBox.miercoles}/>
                    <Dia dia="Jue" clases={horariosBox.jueves}/>
                    <Dia dia="Vie" clases={horariosBox.viernes}/>
                    <Dia dia="Sáb" clases={horariosBox.sabado}/>
                    <Dia dia="Dom" clases={horariosBox.domingo}/>
                </>
            )}
        </div>
    )
}

export default Semana