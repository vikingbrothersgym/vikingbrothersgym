import Card from "../../common/card/Card";
import InfoSection from "../../common/info-component/InfoSectionComponent";
import ImageCard from "../../common/image-card/ImageCard";
import psychology from "@assets/informacion/psychology.webp";

// Iconos
import { MdOutlineShield, MdOutlineSportsMartialArts, MdTimer } from "react-icons/md";
import { FaBookOpen, FaRegCalendarAlt, FaShieldAlt } from "react-icons/fa";
import { PiBowlFoodFill, PiHandFistLight } from "react-icons/pi";
import { GiStrong, GiKimono, GiBackup, GiMoebiusTriangle } from "react-icons/gi";
import { LiaHandPointRight } from "react-icons/lia";
import { IoStar } from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import { TbHealthRecognition } from "react-icons/tb";
import { IoMdPricetags } from "react-icons/io";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { RiMentalHealthFill } from "react-icons/ri";
import Button from "../../common/button/Button";

export default function PsychologyInfo() {
    return (
        <InfoSection
            iconTitle={<>❤️‍🩹</>}
            title={
                <>
                    SERVICIO DE <span> PSICOLOGÍA </span>
                </>
            }
            imgCard={
                <ImageCard
                    title={"Paloma Gutiérrez"}
                    subtitle={"Psicóloga"}
                    src={psychology}
                >
                    <ul>
                        <li className="flex justify-start gap-4 items-center">
                            <FaHeartCircleCheck className="text-third text-[20px] shrink-0" />
                            <p>Salud y bienestar</p>
                        </li>
                        <li className="flex justify-start gap-4 items-center">
                            <FaBookOpen className="text-third text-[20px] shrink-0" />
                            <p>Psicóloga</p>
                        </li>
                    </ul>
                </ImageCard>
            }
        >
            <>
                <div className="flex items-center gap-6 mt-3">
                    <div className="flex h-full items-start">
                        <RiMentalHealthFill className="flex items-start text-third text-[40px] sm:text-[50px]" />
                    </div>
                    <p>
                        Tu bienestar emocional, tu espacio, nuestro acompañamiento.
                    </p>
                </div>
                <Card
                    className="mt-2"
                    title={"Sesión de Psicología"}
                    // icon={<GiMoebiusTriangle className="text-third text-[75px]" />}
                >
                    <div className="flex flex-col gap-2">
                        <p className="!m-0 max-w-[750px]">
                            Un espacio de escucha y acompañamiento para trabajar tu bienestar emocional,
                            gestionar lo que te preocupa y avanzar con herramientas adaptadas a tí.
                        </p>
                        <div className="flex items-center gap-2">
                            {/* <MdTimer className="text-third" size={40} /> */}
                            <p className="!m-0">
                                <b className="text-white">Duración:</b> 50 min
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="!m-0">
                                <b className="text-white">Precio:</b> 60 €
                            </p>
                        </div>
                    </div>
                </Card>
                <p>
                    Para más información, no dudes en consultarnos. ¡Estamos encantados de atenderte!
                </p>
                <p>
                    Si quieres conocer más sobre mí, puedes consultar mi página web pinchando en el siguiente enlace:
                </p>
                <Button href={`https://palomagutierrezpsicologia.es/`} target={'blank'}>
                    Enlace Web
                </Button>
            </>
        </InfoSection>
    );
}