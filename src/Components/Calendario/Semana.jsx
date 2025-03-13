import Dia from "./Dia"
import horariosGym from "../../Clases/horarios.js"
import horariosBox from "../../Clases/boxeo.js"

import "../../CSS/Calendario/Semana.css"

const Semana = ({ gimnasio = true }) => {
    return (
        <div className="semana">
            {gimnasio && (
                <>
                    <Dia dia="Lun" clasesDia={horariosGym.lunes}/>
                    <Dia dia="Mar" clasesDia={horariosGym.martes}/>
                    <Dia dia="Mié" clasesDia={horariosGym.miercoles}/>
                    <Dia dia="Jue" clasesDia={horariosGym.jueves}/>
                    <Dia dia="Vie" clasesDia={horariosGym.viernes}/>
                    <Dia dia="Sáb" clasesDia={horariosGym.sabado}/>
                    <Dia dia="Dom" clasesDia={horariosGym.domingo}/>
                </>
            )}

            {!gimnasio && (
                <>
                    <Dia dia="Lun" clasesDia={horariosBox.lunes}/>
                    <Dia dia="Mar" clasesDia={horariosBox.martes}/>
                    <Dia dia="Mié" clasesDia={horariosBox.miercoles}/>
                    <Dia dia="Jue" clasesDia={horariosBox.jueves}/>
                    <Dia dia="Vie" clasesDia={horariosBox.viernes}/>
                    <Dia dia="Sáb" clasesDia={horariosBox.sabado}/>
                    <Dia dia="Dom" clasesDia={horariosBox.domingo}/>
                </>
            )}
        </div>
    )
}

export default Semana