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
                    {/* <div className="video">
                        <Video url={"https://youtu.be/2O1SAhAx7mI?si=AwKEa9_WhjFjLiyo"} />
                    </div> */}
                </div>
            )}

            {nombre !== "Abdominales" && (
                <div className="infoclase-container">
                    <p className="descripcion-text"> 
                        Muy pronto esta página poseerá una descripción sobre esta clase <br/> <br/>
                        ¡Disculpe las molestias!
                    </p>
                    {/* <div className="video">
                        <Video url={"https://youtu.be/2O1SAhAx7mI?si=AwKEa9_WhjFjLiyo"} />
                    </div> */}
                </div>

            )}
            
            <div id="contacto">
                <Contacto/>
            </div>
        </div>
    )
}

export default InfoClase