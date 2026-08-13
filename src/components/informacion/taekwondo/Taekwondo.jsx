import InfoSection from "../../common/info-component/InfoSectionComponent";
import ImageCard from "../../common/image-card/ImageCard";
import Card from "../../common/card/Card";
import taekwondo from "@assets/informacion/taekwondo.webp";

// Iconos
import { MdOutlineShield, MdOutlineSportsMartialArts, MdSelfImprovement } from "react-icons/md";
import { FaChevronRight, FaChild, FaRegCalendarAlt, FaShieldAlt, FaTrophy } from "react-icons/fa";
import { PiHandFistLight } from "react-icons/pi";
import { GiStrong, GiKimono, GiBackup } from "react-icons/gi";
import { LiaHandPointRight } from "react-icons/lia";
import { IoStar } from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import { FaMedal } from "react-icons/fa6";
import { RiMentalHealthFill } from "react-icons/ri";
import { TbKarate } from "react-icons/tb";
import Button from "../../common/button/Button";
import constants from "../../../constants/Constants";

export default function Taekwondo() {
    return (
        <InfoSection
            iconTitle={<>🥋</>}
            title={
                <>
                    Taekwondo
                </>
            }
            imgCard={
                <>
                    <ImageCard
                        title={"Ismael Arriazu"}
                        subtitle={"Profesor Federado"}
                        src={taekwondo}
                    >
                        <ul>
                            <li className="flex justify-start gap-4 items-center">
                                <FaMedal className="text-third text-[20px] shrink-0" />
                                <p>Más de <b>40 años</b> de experiencia</p>
                            </li>
                            <li className="flex justify-start gap-4 items-center">
                                <FaTrophy className="text-third text-[20px] shrink-0" />
                                <p>
                                    20 años de competición en campeonatos regionales, 
                                    nacionales e internacionales
                                </p>
                            </li>
                            <li className="flex justify-start gap-4 items-center">
                                <GiKimono className="text-third text-[20px] shrink-0" />
                                <p>
                                    Maestro desde los
                                    <b className="text-third"> 16 años</b>
                                </p>
                            </li>
                            <li className="flex justify-start gap-4 items-center">
                                <GiBackup className="text-third text-[20px] shrink-0" />
                                <p>
                                    Especialista en todas las <b>edades </b> 
                                    y <b>niveles</b>
                                </p>
                            </li>
                        </ul>
                    </ImageCard>
                    <Button href={`${constants.root}/clases`} className="mt-3">
                        Consulta horarios <FaChevronRight />
                    </Button>
                </>
            }
        >
            <>
                <div className="flex gap-6 mt-3">
                    <p>
                        En Viking Brothers Gym contamos con clases de Taekwondo impartidas
                        por <b>Ismael Arriazu</b>, Maestro <b>5º Dan</b> y 
                        <b> Árbitro Nacional</b>, con <b> más de 40 años de experiencia </b> 
                        en la enseñanza y práctica en este deporte.
                    </p>
                </div>
                <Card
                    className="mt-2"
                    icon={<MdOutlineSportsMartialArts className="text-third text-[75px]"/>}
                    title={"Nuestro maestro"}
                >
                    <p className="max-w-[750px]">
                        "Comencé a practicar taekwondo a los <b>5 años</b> y empecé a impartir clases
                        con <b>16 años</b>, labor que continúo desempeñando con la misma ilusión y 
                        compromiso. He competido durante <b>20 años</b>, obteniendo títulos y medallas 
                        en campeonatos regionales, nacionales e internacionales.
                    </p>
                    <p className="!mb-0 max-w-[750px]">
                        Mi experiencia me permite trabajar con niños, jóvenes y adultos, adaptando las
                        clases a cada nivel y objetivo, ya sea iniciación, perfeccionamiento, competición
                        o defensa personal."
                    </p>
                </Card>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-around gap-3 w-full mt-4">
                    <Card
                        icon={<MdSelfImprovement className="text-third text-[75px]"/>}
                        title={"Disciplina y respeto"}
                        vertical
                    >
                        <p className="opacity-85">
                            Desarrolla la constancia, la concentración y el respeto.
                        </p>
                    </Card>
                    <Card
                        icon={<RiMentalHealthFill className="text-third text-[75px]"/>}
                        title={"Mejora física y mental"}
                        vertical
                    >
                        <p className="opacity-85">
                            Aumenta tu fuerza, flexibilidad, coordinación y agilidad.
                        </p>
                    </Card>
                    <Card
                        icon={<FaChild className="text-third text-[75px]"/>}
                        title={
                            <>
                                Confianza y seguridad
                            </>
                        }
                        vertical
                    >
                        <p className="opacity-85">
                            Gana seguridad en ti mismo y aprende técnicas de defensa personal.
                        </p>
                    </Card>
                    <Card
                        icon={<GiBackup className="text-third text-[75px]"/>}
                        title={"Ambiente motivador y seguro"}
                        vertical
                    >
                        <p className="opacity-85">
                            Entrena en un entorno de respeto, apoyo y superación personal.
                        </p>
                    </Card>
                </div>
            </>
        </InfoSection>
    )
}