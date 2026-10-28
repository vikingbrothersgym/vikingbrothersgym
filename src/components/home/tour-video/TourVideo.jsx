import Video from "@components/video/Video";
import SectionTitle from "../../common/section-title/SectionTitle";

export default function TourVideo() {
    return (
        <section className="">
            <SectionTitle 
                pretitle={"Recorre el gimnasio"}
                title={"Así es Viking Brothers Gym"}
                subtitle={"Dani te enseña la historia y cada rincón del gimnasio"}
            />
            {/* <h2 className="sec-tit mb-2">
                ASÍ ES <span>VIKING BROTHERS GYM</span>
            </h2> */}
            <div className="flex flex-col md:flex-row items-center gap-10 px-10">
                <Video 
                    className="w-full md:w-7/12 border-2 border-solid border-third" 
                    url={"https://www.youtube.com/watch?v=GNsp74QBxzo"}
                />

                <div className="w-full md:w-1/2 max-w-[600px]">
                    <h3 className="text-2xl text-third my-1">
                        Daniel Val Naval 
                        <span className="text-white font-normal"> · Fundador</span>
                    </h3>
                    <h3 className="text-white italic my-0">Una historia, un gimnasio</h3>

                    <p className="text-lg text-third font-bold">
                        Quise crear el lugar que un día yo mismo necesité.
                    </p>
                    <p className="text-lg text-white">
                        Hubo circunstancias de mi vida que me llevaron a encontrar en el hierro, 
                        en el entrenamiento y en la disciplina una forma de cuidar de mi salud 
                        física y mental.
                    </p>
                    
                    <p className="text-lg text-third font-bold">
                        Por eso Viking Brothers Gym no es solo un gimnasio es una familia.
                    </p>
                    <p className="text-lg text-white">
                        Un lugar diferente, de la vieja escuela, con espíritu vikingo y con
                        <b> corazón</b>.<br/>
                        Donde el más fuerte ayude al que empieza y el respeto esté por encima de cualquier peso levantado.
                    </p>
                    <p className="text-lg text-white">
                        Bienvenido a nuestra familia,<br/>
                        <i className="font-viking text-4xl">DVN</i>
                    </p>
                </div>
            </div>
            
        </section>
    );
}