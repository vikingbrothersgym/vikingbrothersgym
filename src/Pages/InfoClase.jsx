import { useParams } from "react-router-dom"
import NavBar from "../Components/NavBar"
import Contacto from "../Components/Contacto"
import panedas from "../assets/info/Panedas.jpg"
import bueno from "../assets/info/Bueno.jpg"
import marquino from "../assets/info/Marquino.png"
import chamon from "../assets/info/Chamon.jpg"
import alex from "../assets/info/Alex.jpeg"
import {Image} from "@nextui-org/react";
import "../CSS/InfoClase.css"
import Video from "../Components/Video"

const InfoClase = () => {
    const { nombre } = useParams()
    return (
        <div className="info-clase">
            <header className="header-navbar">
                <NavBar/>
            </header>
            {nombre === "Abdominales" ? (
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
            ) 
            : nombre === "Boxeo" ? (
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
            ) 
            : nombre === "Panedas" ? (
                <div className="infoclase-container">
                    <h1 className="infoclase-titulo"> 
                        King Boxing / Defensa Personal </h1>
                    <hr className="hr-infoclase"/>
                    <div className="text-clase">
                        <div className="profe-container">
                            <h2 className="descripcion"> Felipe Panedas </h2>
                            <div className="im-profe-container">
                                <Image 
                                    className="im-profe" 
                                    src={panedas}
                                    isBlurred
                                    isZoomed />
                            </div>
                        </div>
                        <div className="descripcion-container">
                            <h2 className="descripcion"> Descripción </h2>
                            <p className="descripcion-text"> 
                                Diseñada tanto para principiantes como para avanzados, 
                                esta sesión te enseñará a dominar los fundamentos del 
                                boxeo combinado con técnicas efectivas de defensa 
                                personal, útiles para la vida cotidiana. <br/> <br/> <br/>

                                ¿Qué puedes esperar? <br/> <br/> <br/>

                                - Mejora tu resistencia física a través de intensas 
                                rutinas de boxeo y entrenamiento de fuerza. <br/> <br/>
                                - Desarrolla habilidades defensivas con técnicas rápidas 
                                y efectivas, perfeccionadas para situaciones reales. <br/> <br/>
                                - Trabajo de coordinación y reflejos, donde aprenderás a 
                                moverte estratégicamente, mejorar tus reflejos y 
                                precisión en los golpes. <br/> <br/>
                                - Entrenamiento mental, fomentando la autoconfianza y 
                                disciplina mientras te preparas para defenderte en 
                                cualquier situación.
                            </p>
                        </div>
                    </div>
                    {/* <div className="video">
                        <Video url={"https://youtu.be/2O1SAhAx7mI?si=AwKEa9_WhjFjLiyo"} />
                    </div> */}
                </div>
            ) 
            : nombre === "Chamón" ? (
                <div className="infoclase-container">
                    <h1 className="infoclase-titulo"> 
                        Boxeo </h1>
                    <hr className="hr-infoclase"/>
                    <div className="text-clase">
                        <div className="profe-container">
                            <h2 className="descripcion"> Chema Gómez Chamón </h2>
                            <div className="im-profe-container">
                                <Image 
                                    className="im-profe" 
                                    src={chamon}
                                    isBlurred
                                    isZoomed />
                            </div>
                        </div>
                        <div className="descripcion-container">
                            <h2 className="descripcion"> Descripción </h2>
                            <p className="descripcion-text"> 
                                Transforma tu cuerpo y libera tu energía con 
                                nuestras clases de boxeo, diseñadas para todos 
                                los niveles. Ya sea que estés buscando mejorar 
                                tu condición física, aprender defensa personal 
                                o simplemente desestresarte, te guiaruemos en 
                                un ambiente divertido y motivador. <br/> <br/>

                                Experimenta los beneficios del boxeo, desde un 
                                aumento en la fuerza y resistencia hasta una 
                                mejor coordinación y agilidad. Te ayudaremos a 
                                alcanzar tus metas, ya sea que seas principiante 
                                o tengas experiencia previa. <br/>
                                ¡Prepárate para sudar, golpear con confianza y 
                                sentirte más fuerte que nunca! <br/><br/>

                                ¿Listo para empezar? Únete a nuestras clases de 
                                boxeo y dale un giro a tu entrenamiento.                            </p>
                        </div>
                    </div>
                    {/* <div className="video">
                        <Video url={"https://youtu.be/2O1SAhAx7mI?si=AwKEa9_WhjFjLiyo"} />
                    </div> */}
                </div>
            ) 
            : nombre === "Marquino" ? (
                <div className="infoclase-container">
                    <h1 className="infoclase-titulo"> 
                        Boxeo </h1>
                    <hr className="hr-infoclase"/>
                    <div className="text-clase">
                        <div className="profe-container">
                            <h2 className="descripcion"> Fran y Andrea Marquino </h2>
                            <div className="im-profe-container">
                                <Image 
                                    className="im-profe" 
                                    src={marquino}
                                    isBlurred
                                    isZoomed />
                            </div>
                        </div>
                        <div className="descripcion-container">
                            <h2 className="descripcion"> Descripción </h2>
                            <p className="descripcion-text"> 
                                Transforma tu cuerpo y libera tu energía con 
                                nuestras clases de boxeo, diseñadas para todos 
                                los niveles. Ya sea que estés buscando mejorar 
                                tu condición física, aprender defensa personal 
                                o simplemente desestresarte, te guiaruemos en 
                                un ambiente divertido y motivador. <br/> <br/>

                                Experimenta los beneficios del boxeo, desde un 
                                aumento en la fuerza y resistencia hasta una 
                                mejor coordinación y agilidad. Te ayudaremos a 
                                alcanzar tus metas, ya sea que seas principiante 
                                o tengas experiencia previa. <br/>
                                ¡Prepárate para sudar, golpear con confianza y 
                                sentirte más fuerte que nunca! <br/><br/>

                                ¿Listo para empezar? Únete a nuestras clases de 
                                boxeo y dale un giro a tu entrenamiento.                            </p>
                        </div>
                    </div>
                    {/* <div className="video">
                        <Video url={"https://youtu.be/2O1SAhAx7mI?si=AwKEa9_WhjFjLiyo"} />
                    </div> */}
                </div>
            )
            : nombre === "Bueno" ? (
                <div className="infoclase-container">
                    <h1 className="infoclase-titulo"> 
                        Boxeo </h1>
                    <hr className="hr-infoclase"/>
                    <div className="text-clase">
                        <div className="profe-container">
                            <h2 className="descripcion"> José Antonio López Bueno </h2>
                            <div className="im-profe-container">
                                <Image 
                                    className="im-profe" 
                                    src={bueno}
                                    isBlurred
                                    isZoomed />
                            </div>
                        </div>
                        <div className="descripcion-container">
                            <h2 className="descripcion"> Descripción </h2>
                            <p className="descripcion-text"> 
                                Transforma tu cuerpo y libera tu energía con 
                                nuestras clases de boxeo, diseñadas para todos 
                                los niveles. Ya sea que estés buscando mejorar 
                                tu condición física, aprender defensa personal 
                                o simplemente desestresarte, te guiaruemos en 
                                un ambiente divertido y motivador. <br/> <br/>

                                Experimenta los beneficios del boxeo, desde un 
                                aumento en la fuerza y resistencia hasta una 
                                mejor coordinación y agilidad. Te ayudaremos a 
                                alcanzar tus metas, ya sea que seas principiante 
                                o tengas experiencia previa. <br/>
                                ¡Prepárate para sudar, golpear con confianza y 
                                sentirte más fuerte que nunca! <br/><br/>

                                ¿Listo para empezar? Únete a nuestras clases de 
                                boxeo y dale un giro a tu entrenamiento.                            </p>
                        </div>
                    </div>
                    {/* <div className="video">
                        <Video url={"https://youtu.be/2O1SAhAx7mI?si=AwKEa9_WhjFjLiyo"} />
                    </div> */}
                </div>
            )
            : nombre === "Álex Clandestino" ? (
                <div className="infoclase-container">
                    <h1 className="infoclase-titulo"> 
                        Boxeo infantil (6 a 14 años) </h1>
                    <hr className="hr-infoclase"/>
                    <div className="text-clase">
                        <div className="profe-container">
                            <h2 className="descripcion"> Álex Clandestino </h2>
                            <div className="im-profe-container">
                                <Image 
                                    className="im-profe" 
                                    src={alex}
                                    isBlurred
                                    isZoomed />
                            </div>
                        </div>
                        <div className="descripcion-container">
                            <h2 className="descripcion"> Descripción </h2>
                            <p className="descripcion-text"> 
                            Las clases de defensa personal para niños están 
                            diseñadas para enseñar habilidades básicas de 
                            defensa, mejorar su confianza, disciplina y 
                            conciencia de seguridad. <br/> <br/>
                            Con un enfoque en técnicas no violentas y de 
                            control, nuestros instructores capacitan a los niños 
                            para protegerse de una manera segura y respetuosa, 
                            mientras desarrollan habilidades físicas y mentales 
                            valiosas. <br/> <br/>
                            Estaremos encantados de recibir a nuestros 
                            mini-vikingos de 6 a 14 años.
                            </p>
                        </div>
                    </div>
                    {/* <div className="video">
                        <Video url={"https://youtu.be/2O1SAhAx7mI?si=AwKEa9_WhjFjLiyo"} />
                    </div> */}
                </div>
            )
            : (
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