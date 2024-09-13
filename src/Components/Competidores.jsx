import C1 from "../assets/campeones/Tatiana.jpg"
import C2 from "../assets/campeones/Camelia.png"
import C3 from "../assets/campeones/Alex.jpg"
import C4 from "../assets/campeones/Lucia.jpg"
import "../CSS/Competidores.css"

const Competidores = () => {
    const comp = [
        {
            image: C1,
            name: "TATIANA REY",
            text: "Campeona de WORLD CHAMPIONSHIP 2022 Wabba international, Olimpia Wabba 2022 Copa España IFBB 2019 y Cataluña IFBB 2019"
        }, 
        {
            image: C2,
            name: "CAMELIA ARIÑO",
            text: "Otra de nuestras campeonas que entrena con nosotros"
        },
        {
            image: C3,
            name: "ALEX AROZ",
            text: "Campeón Mens Physique IFBB ELITE PRO Malta PRO CARD, European"
        },
        {
            image: C4,
            name: "LUCÍA CASTELLS",
            text: "Competidora Natural"
        }

    ]
    
    return (
        <div className="competidores-container">
            <h1 className="sec-tit"> 
                NUESTROS <br/>
                <span> COMPETIDORES </span> 
            </h1>
            <div className="competidores">
                {comp.map((c, index) => (
                    <div key={index}>
                        <div className="competidor">
                            <img src={c.image}
                                 className="im-competidor"/>
                            <div className="text-competidor">
                                <h1> {c.name} </h1>
                                <hr/>
                                <p > {c.text} </p>
                            </div>
                        </div>
                        <div className="competidor-little" >
                            <div className="im-little-container">
                                <img src={c.image}
                                     className="im-competidor-little"/>
                            </div>
                            <div className="text-competidor-little">
                                <h1> {c.name} </h1>
                                <hr/>
                                <p > {c.text} </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Competidores