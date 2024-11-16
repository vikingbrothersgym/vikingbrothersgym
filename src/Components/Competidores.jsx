import C1 from "../assets/campeones/Andrea.jpg"
import C2 from "../assets/campeones/Lucia.jpg"
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