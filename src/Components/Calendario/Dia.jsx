import React from "react";
import "../../CSS/Calendario/Dia.css";
import Clase from "./Clase";

const Dia = ({ dia, clases = [] }) => {
    return (
        <div className="dia">
            <h1 className="dia-nombre"> {dia} </h1>
            <hr/>
            <ul className="lista">
                {clases.map((tupla, index) => (
                    <div className="clase-container" key={index}>
                        <div className="clase-dia" key={index}>
                            <Clase nombre={tupla[0]} 
                                   inicio={tupla[1]} />
                        </div>
                        <hr className={`hr-${tupla[0] === "" ? 'no' : 'si'}`}/>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Dia;
