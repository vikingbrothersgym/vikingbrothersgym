import React from "react"
import "../../CSS/Calendario/Clase.css"
import { useNavigate } from "react-router-dom"
import constants from "../../constants/Constants"

const Clase = ({nombre, inicio, final = "", trainer}) => {
    const navigate = useNavigate()

    const colorNumber = 
        nombre === "Abdominales"                    ? 1 :
        nombre === "Zumba"                          ? 2 :
        nombre === "Modelaje"                       ? 3 :
        nombre === "Yoga"                           ? 4 :
        nombre === "Salsa + Bachata Fusión"         ? 5 :
        nombre === "Pilates + Espalda sana"         ? 6 :
        nombre === "Espalda sana"                   ? 7 :
        nombre === "Pilates"                        ? 8 :
        nombre === "F-Interval"                     ? 9 :
        nombre === "Funcional"                      ? 10 :
        nombre === "HIT + Avanzado 45 min"          ? 11 :
        nombre === "Viking Box"                     ? 12 :
        nombre === "Hit + Flexibilidad"             ? 13 :
        nombre === "Viking Box + Flexibilidad"      ? 14 :
        nombre === "Body Pump"                      ? 15 :
        nombre === "Espalda sana + core"            ? 16 :
        nombre === "HIT"                            ? 11 :
        nombre === "Boxeo"                          ? 1 :
        nombre === "King Boxing / Defensa Personal" ? 2 :
        nombre === "Kick boxing infantil" ? 3 :
        19

    return (
        <>
        {nombre === "" ? (
            <div className="clase">
                <p className="link-clase-vacio" href="">
                    Hora <br/>
                    <span className="nombre-clase">
                        Nombre
                    </span>
                </p>
            </div>

        ) : (
            <>
                {final !== "" && (
                    <div className="clase"
                        onClick={() => navigate(constants.root + "infoclase/" + trainer)}>       
                    <p className={`link-clase-${colorNumber}`} href="">
                        {inicio} - {final}
                        <br/>
                        <span className="nombre-clase">
                            {nombre}
                        </span>
                    </p>   
                    </div>                 
                )}
                {final === "" && (
                    <div className="clase"
                            onClick={() => navigate(constants.root + "infoclase/" + nombre)}>
                
                    <p className={`link-clase-${colorNumber}`} href="">
                        {inicio}
                        <br/>
                        <span className="nombre-clase">
                            {nombre}
                        </span>
                    </p>
                    </div>
                )}
            </>
        )}
    </>
    )
}

export default Clase