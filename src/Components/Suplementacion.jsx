import suple from "../assets/Suple.jpg"
import "../CSS/Suplementacion.css"

const Suplementacion = () => {
    return (
        <>
        <h1 className="sec-tit">
            SUPLEMENTACIÓN <br/>
            <span> DEPORTIVA </span>
        </h1>
        <div className="suple-container">
            <p className="suple">  
                Contamos con una selección de suplementación deportiva <br/> 
                para potenciar tu rendimiento y recuperación. <br/> <br/>
                Podrás encontrar exactamente lo que necesitas para <br/>
                complementar tu entrenamiento. <br/><br/>
                ¡No dudes en acercarte y preguntarnos!
            </p>
            <div className="suple-im-container">
                <img className="suple-im" 
                     src={suple}
                     alt="Exterior del gimasio"
                     sizes=""/>
            </div>
        </div>
        <br/>
        </>
    )
}

export default Suplementacion