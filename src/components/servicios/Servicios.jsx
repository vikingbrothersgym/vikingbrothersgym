import "./Servicios.css"
import clases from "@assets/servicios/clases.webp"
import asesoria from "@assets/presentacion/jefes.jpg"
import boxeo from "@assets/servicios/boxeo.webp"
import familia from "@assets/servicios/familia.webp"
import todos from "@assets/servicios/todos.webp"
import exterior from "@assets/servicios/gimnasio_exterior.webp";
import ServicioCard from "./ServicioCard"

const Servicios = () => {
    const servicios = [
        {
            title: "Clases dirigidas",
            description: "Todas ellas están incluidas en la cuota. Consulta los horarios en esta web y ¡entrena!",
            image: clases
        },
        {
            title: "Templo Old School",
            description: "Ven y descubre nuestra sala de clases y musculación al puro estilo Old School",
            image: exterior
        },
        {
            title: "Asesoría Vikinga",
            description: "Nuestros entrenadores personales del Templo te llevarán a alcanzar tus objetivos. Ven y pregúntanos sin ningún compromiso. ¡Estamos para ayudarte!",
            image: asesoria
        },
        {
            title: "Boxeo y Krav Magá",
            description: "Clases de Boxeo, Krav Magá y Defensa Personal. ¡Consulta horarios en esta web o ven a preguntarnos!",
            image: boxeo
        },
        {
            title: "Familia",
            description: "Somos un gimnasio de barrio familiar. El buen rollo es un sello distintivo",
            image: familia
        },
        {
            title: "Para todos",
            description: "Diseñado para personas de todas las edades y niveles de condición física. ¡Estaremos encantados de recibirte!",
            image: todos
        },
    ];
    
    return (
        <section id="servicios" className="flex flex-col items-center justify-center box-border mb-[50px] w-full px-7">
            <h1 className="sec-tit"> 
                TRANSFORMA  
                <span> TU RUTINA </span>  
            </h1>
            <div className="grid w-full gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {servicios.map((s ,idx) => (
                    <ServicioCard
                        title={s.title}
                        description={s.description}
                        image={s.image}
                    />
                ))}
            </div>
        </section>
    )
}

export default Servicios