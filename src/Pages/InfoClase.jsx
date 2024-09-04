import { useParams } from "react-router-dom"
import NavBar from "../Components/NavBar"
import Contacto from "../Components/Contacto"
import danihector from "../assets/danihector.jpeg"
import "../CSS/InfoClase.css"
import Video from "../Components/Video"

const InfoClase = () => {
    const { nombre } = useParams()
    return (
        <div className="info-clase">
            <header>
                <NavBar selected={"INFORMACION"}/>
            </header>
            {nombre === "Abdominales" && (
                <div className="infoclase-container">
                    <h1 className="infoclase-titulo"> ABDOMINALES </h1>
                    <hr className="hr-infoclase"/>
                    <h2 className="descripcion"> Descripción </h2>
                    <p className="descripcion-text"> 
                        ¡Fortalece tu núcleo en tiempo récord! Nuestra clase de 
                        abdominales está diseñada para ofrecerte un 
                        entrenamiento intenso y efectivo en solo 15 a 30 minutos. 
                        Ideal para quienes buscan <br/> maximizar su tiempo y obtener 
                        resultados visibles, esta clase se centra en trabajar 
                        todos los músculos del abdomen, desde los superiores e 
                        inferiores hasta los oblicuos y el core profundo. 
                    </p>
                    <div className="video">
                        <Video url={"https://youtu.be/2O1SAhAx7mI?si=AwKEa9_WhjFjLiyo"} />
                    </div>

                    <hr className="hr-infoclase"/>
                    <h2 className="descripcion"> Nuestr@ profe </h2>
                    <div className="profe-container">
                        <p className="descripcion-text">
                            Dani y Héctor son los entrenadores que llevarán tu 
                            entrenamiento abdominal al siguiente nivel. Con años de 
                            experiencia en fitness y una pasión por ayudar a otros a 
                            alcanzar sus metas, ambos se han ganado la reputación de 
                            ser los mejores cuando se trata de fortalecer el núcleo.
                        </p>
                        <img className="profes"
                             src={danihector}/>
                    </div>
                </div>
            )}
            
            <div id="contacto">
                <Contacto/>
            </div>
        </div>
    )
}

export default InfoClase