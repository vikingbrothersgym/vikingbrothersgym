import { GiChestArmor, GiTwoHandedSword, GiBattleAxe, GiVikingHead } from "react-icons/gi";

import "../CSS/Tarifas.css"

const Cuota = ({meses}) => {
    return (
        <>
            {meses === 1 && (
                <div className="cuota">
                    <div className="tiempo">
                        <GiTwoHandedSword/>
                        <h1> 1 Mes </h1>
                    </div>
                    <div className="precio">
                        <div className="oferta">
                            <h2> 35 € </h2>
                        </div>
                    </div>
                </div>
            )}

            {meses === 3 && (
                <div className="cuota">
                    <div className="tiempo">
                        <GiBattleAxe/>
                        <h1> 3 Meses </h1>
                    </div>
                    <div className="precio">
                        <div className="oferta">
                            <h2> 99 € </h2>
                            <p> 33 €/mes </p>
                        </div>
                    </div>
                </div>
            )}

            {meses === 6 && (
                <div className="cuota">
                    <div className="tiempo">
                        <GiChestArmor/>
                        <h1> 6 Meses </h1>
                    </div>
                    <div className="precio">
                        <div className="oferta">
                            <h2> 180 € </h2>
                            <p> 30 €/mes </p>
                        </div>
                    </div>
                </div>
            )}

            {meses === 12 && (
                <div className="cuota">
                    <div className="tiempo">
                        <GiVikingHead/>
                        <h1> 1 Año </h1>
                    </div>
                    <div className="precio">
                        <div className="oferta">
                            <h2> <s> 330 € </s> </h2>
                            <p> <s> 27.5 €/mes </s> </p>
                        </div>
                        <div className="oferta">
                            <h2> 300 € </h2>
                            <p> 25 €/mes </p>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

const Tarifas = () => {
    return (
        <div className="tarifas-container">
            <h1 className="sec-tit"> 
                ÚNETE A LA <br/> 
                <span> OLD SCHOOL </span>
            </h1>
            <div className="cuotas">
                <Cuota meses={1}/>
                <Cuota meses={3}/>
                <Cuota meses={6}/>
                <Cuota meses={12}/>
            </div>
        </div>
    )
}

export default Tarifas