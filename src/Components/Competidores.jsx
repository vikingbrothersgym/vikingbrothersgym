import C1 from "../assets/campeones/Andrea.webp"
import C2 from "../assets/campeones/Lucia.webp"
import C3 from "../assets/campeones/Tatiana.webp"
import C4 from "../assets/campeones/Alex.webp"
import C5 from "../assets/campeones/Camelia.webp"
import "../CSS/Competidores.css"

const Competidores = () => {
    const comp = [
        {
            image: C1,
            name: "ANDREA MARQUINO",
            text: "Boxeadora selección autonómica de Aragón"
        }, 
        {
            image: C2,
            name: "LUCÍA CASTELLS",
            text: "Competidora Natural"
        },
        {
            image: C3,
            name: "TATIANA REY",
            text: "WORLD CHAMPIONSHIP 2022 Wabba international, Olimpia Wabba 2022, Copa España IFBB 2019, Cataluña IFBB 2019"
        },
        {
            image: C4,
            name: "ÁLEX AROZ",
            text: "Mens Physique IFBB ELITE PRO"
        },
        {
            image: C5,
            name: "CAMELIA ARIÑO",
            text: "Competidora"
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
    );
}

export default Competidores;