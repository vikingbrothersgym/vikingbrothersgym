import Card from "../../common/card/Card";
import InfoSection from "../../common/info-component/InfoSectionComponent";
import ImageCard from "../../common/image-card/ImageCard";
import jose_krav_maga from "@assets/informacion/jose_krav_maga.webp";

// Iconos
import { MdOutlineShield, MdOutlineSportsMartialArts } from "react-icons/md";
import { FaRegCalendarAlt, FaShieldAlt } from "react-icons/fa";
import { PiHandFistLight } from "react-icons/pi";
import { GiStrong, GiKimono, GiBackup } from "react-icons/gi";
import { LiaHandPointRight } from "react-icons/lia";
import { IoStar } from "react-icons/io5";
import { CgGym } from "react-icons/cg";

export default function KravInfo() {
    return (
        <InfoSection
            iconTitle={<>🥋</>}
            title={
                <>
                    KRAV MAGÁ Y <span> DEFENSA PERSONAL </span>
                </>
            }
            imgCard={
                <ImageCard
                    title={"José Ramos"}
                    subtitle={"Profesor Federado"}
                    src={jose_krav_maga}
                >
                    <ul>
                        <li className="flex justify-start gap-4 items-center">
                            <IoStar className="text-third text-[20px] shrink-0" />
                            <p>Más de 15 años de experiencia</p>
                        </li>
                        <li className="flex justify-start gap-4 items-center">
                            <MdOutlineSportsMartialArts className="text-third text-[20px] shrink-0" />
                            <p>Especialista en Krav Magá y Defensa Personal</p>
                        </li>
                        <li className="flex justify-start gap-4 items-center">
                            <LiaHandPointRight className="text-third text-[20px] shrink-0" />
                            <p>
                                Aprende a 
                                <b className="text-third"> defenderte </b> 
                                y mejora tu forma física.
                            </p>
                        </li>
                        <li className="flex justify-start gap-4 items-center">
                            <CgGym className="text-third text-[20px] shrink-0" />
                            <p>
                                ¡Acércate y pregunta para saber más!
                            </p>
                        </li>
                    </ul>
                </ImageCard>
            }
        >
            <>
                <div className="flex gap-6 mt-3">
                    <div className="flex h-full items-start mt-[19.2px]">
                        <FaRegCalendarAlt className="flex items-start text-third text-[50px] sm:text-[75px]" />
                    </div>
                    <p>
                        En Viking Brothers Gym ofrecemos <b>seminarios mensuales</b> de 
                        Krav Magá y Defensa Personal <b>para mujeres</b>, impartidos por 
                        José Ramos, profesor federado con amplia experiencia en estas 
                        disciplinas.
                    </p>
                </div>
                <Card
                    className="mt-2"
                    icon={<MdOutlineShield className="text-third text-[75px]"/>}
                    title={"¿Qué es el Krav Magá?"}
                >
                    <p className="!mb-0 max-w-[750px]">
                        El Krav Magá es un sistema de defensa personal de origen israelí, 
                        reconocido mundialmente por su <b>eficacia y simplicidad</b>. Está 
                        diseñado para que cualquier persona, sin importar su edad o 
                        condición física, pueda aprender técnicas útiles para desenvolverse 
                        en situaciones de riesgo real.
                    </p>
                </Card>
                <Card
                    className="mt-2"
                    title={
                        <>
                            <PiHandFistLight className="text-third text-[30px] mr-2" /> 
                            Beneficios de practicar Krav Magá
                        </>
                    }
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-around gap-3 w-full mt-4">
                        <Card
                            icon={<FaShieldAlt className="text-third text-[75px]"/>}
                            title={"Más seguridad y confianza"}
                            vertical
                        >
                            <p className="opacity-85">
                                Aprende a protegerte para ganar confianza y seguridad en ti mismo.
                            </p>
                        </Card>
                        <Card
                            icon={<GiStrong className="text-third text-[75px]"/>}
                            title={"Fuerza, agilidad y reflejos"}
                            vertical
                        >
                            <p className="opacity-85">
                                Mejora tu condición física, desarrolla tu cuerpo y tus reflejos.
                            </p>
                        </Card>
                        <Card
                            icon={<GiKimono className="text-third text-[75px]"/>}
                            title={
                                <>
                                   Técnicas <br/> efectivas
                                </>
                            }
                            vertical
                        >
                            <p className="opacity-85">
                                Métodos simples y realistas para situaciones de peligro real.
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
                </Card>
            </>
        </InfoSection>
    )
}