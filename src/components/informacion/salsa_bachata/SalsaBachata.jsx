import InfoSection from "../../common/info-component/InfoSectionComponent";
import ImageCard from "../../common/image-card/ImageCard";
import Card from "../../common/card/Card";
import salsa_bachata from "@assets/informacion/salsa_bachata.webp";

// Iconos
import { MdOutlineShield, MdOutlineSportsMartialArts, MdQueueMusic, MdSelfImprovement } from "react-icons/md";
import { FaCheck, FaChevronRight, FaChild, FaRegCalendarAlt, FaShieldAlt, FaTrophy } from "react-icons/fa";
import { PiHandFistLight } from "react-icons/pi";
import { GiStrong, GiKimono, GiBackup, GiMusicalNotes } from "react-icons/gi";
import { LiaHandPointRight } from "react-icons/lia";
import { IoCalendar, IoMusicalNotes, IoStar } from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import { FaFaceSmileBeam, FaMedal, FaPeopleGroup } from "react-icons/fa6";
import { RiMentalHealthFill } from "react-icons/ri";
import { TbKarate } from "react-icons/tb";
import Button from "../../common/button/Button";
import constants from "../../../constants/Constants";
import { BsFillHeartPulseFill, BsLightningChargeFill } from "react-icons/bs";

export default function SalsaBachata() {
    return (
        <InfoSection
            iconTitle={<>💃🏻</>}
            title={
                <>
                    Salsa y Bachata <span>con Elpidio Cobley</span>
                </>
            }
            imgCard={
                <>
                    <ImageCard
                        title={"Elpidio Cobley"}
                        subtitle={"Profesor"}
                        src={salsa_bachata}
                    >
                        <ul>
                            <li className="flex justify-start gap-4 items-center">
                                <MdQueueMusic className="text-third text-[20px] shrink-0" />
                                <p>Años de experiencia</p>
                            </li>
                            <li className="flex justify-start gap-4 items-center">
                                <BsLightningChargeFill className="text-third text-[20px] shrink-0" />
                                <p>Ritmo y energía</p>
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
                <div className="flex items-center gap-6 mt-3">
                    <div className="border-solid border-1 border-third rounded-[10px] border-opacity-70 p-4">
                        <GiMusicalNotes className="text-third text-[50px]" />
                    </div>
                    <p>
                        ¿Listo para moverte con ritmo? En nuestro gimnasio ofrecemos clases de salsa 
                        y bachata dirigidas por el gran <b>Elpidio Cobley</b>, un profesor con 
                        amplia experiencia que hará que aprendas mientras te diviertes.
                    </p>
                </div>
                <Card
                    className="mt-2"
                    title={"⭐ Beneficios de nuestras clases"}
                >
                    <ul className="list-none p-0 m-0 ml-10">
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-third" />
                            Mejora tu coordinación y condición física
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-third" />
                            Comparte la experiencia con más personas
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-third" />
                            Aprende los pasos básicos y técnicas avanzadas
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-third" />
                            Reduce el estrés y diviértete
                        </li>

                    </ul>
                </Card>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-around gap-3 w-full mt-4">
                    <Card
                        icon={<BsFillHeartPulseFill className="text-third text-[75px]"/>}
                        title={"Mejora tu salud"}
                        vertical
                    >
                        <p className="opacity-85">
                            Baila, quema calorías y mejora tu resistencia
                        </p>
                    </Card>
                    <Card
                        icon={<FaPeopleGroup className="text-third text-[75px]"/>}
                        title={"Conoce gente"}
                        vertical
                    >
                        <p className="opacity-85">
                            Disfruta en un ambiente divertido y amigable
                        </p>
                    </Card>
                    <Card
                        icon={<IoMusicalNotes className="text-third text-[75px]"/>}
                        title={"Aprende y progresa"}
                        vertical
                    >
                        <p className="opacity-85">
                            Desde pasos básicos hasta coreos avanzadas
                        </p>
                    </Card>
                    <Card
                        icon={<FaFaceSmileBeam className="text-third text-[75px]"/>}
                        title={"Disfruta y desconecta"}
                        vertical
                    >
                        <p className="opacity-85">
                            Libera el estrés y mejora el ánimo mientras bailas
                        </p>
                    </Card>
                </div>
            </>
        </InfoSection>
    )
}