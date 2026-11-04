import Card from "../../common/card/Card";
import InfoSection from "../../common/info-component/InfoSectionComponent";
import ImageCard from "../../common/image-card/ImageCard";
import nutrition from "@assets/informacion/nutrition.webp";

// Iconos
import { MdOutlineShield, MdOutlineSportsMartialArts, MdTimer } from "react-icons/md";
import { FaRegCalendarAlt, FaShieldAlt } from "react-icons/fa";
import { PiBowlFoodFill, PiHandFistLight } from "react-icons/pi";
import { GiStrong, GiKimono, GiBackup, GiMoebiusTriangle } from "react-icons/gi";
import { LiaHandPointRight } from "react-icons/lia";
import { IoStar } from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import { TbHealthRecognition } from "react-icons/tb";
import { IoMdPricetags } from "react-icons/io";
import { FaHeartCircleCheck } from "react-icons/fa6";
import Button from "../../common/button/Button";

export default function NutritionInfo() {
    return (
        <InfoSection
            iconTitle={<>🥦</>}
            title={
                <>
                    SERVICIO DE <span> NUTRICIÓN </span>
                </>
            }
            imgCard={
                <ImageCard
                    title={"María Pérez"}
                    subtitle={"Dietista y nutricionista"}
                    src={nutrition}
                >
                    <ul>
                        <li className="flex justify-start gap-4 items-center">
                            <FaHeartCircleCheck className="text-third text-[20px] shrink-0" />
                            <p>Salud y bienestar</p>
                        </li>
                        <li className="flex justify-start gap-4 items-center">
                            <PiBowlFoodFill className="text-third text-[20px] shrink-0" />
                            <p>Nutricionista</p>
                        </li>
                    </ul>
                </ImageCard>
            }
        >
            <>
                <div className="flex items-center gap-6">
                    <div className="flex h-full items-start">
                        <TbHealthRecognition className="flex items-start text-third text-[40px] sm:text-[50px]" />
                    </div>
                    <p>
                        Tu salud, tus objetivos, nuestro acompañamiento.
                    </p>
                </div>
                <Card
                    className="mt-2"
                    title={"Primera consulta de nutrición"}
                    // icon={<GiMoebiusTriangle className="text-third text-[75px]" />}
                >
                    <div className="flex flex-col gap-2">
                        <p className="!m-0 max-w-[750px]">
                            Hablamos de tus objetivos y hábitos, revisamos tu salud, hacemos un análisis corporal y 
                            diseñamos un plan personalizado con ejercicios adaptados a tí.
                        </p>
                        <div className="flex items-center gap-2">
                            {/* <MdTimer className="text-third" size={40} /> */}
                            <p className="!m-0">
                                <b className="text-white">Duración:</b> 1 hora
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* <IoMdPricetags className="text-third" size={40} /> */}
                            <p className="!m-0">
                                <b className="text-white">Precio:</b> 75 €
                            </p>
                        </div>
                    </div>
                </Card>
                <Card
                    className="mt-2"
                    title={"Revisiones"}
                    // icon={<GiMoebiusTriangle className="text-third text-[75px]" />}
                >
                    <div className="flex flex-col gap-2">
                        <p className="!m-0 max-w-[750px]">
                            Valoramos tu evolución, adaptamos el menú a tus necesidades y ajustamos el plan para
                            seguir avanzando hacia tus objetivos.
                        </p>
                        <div className="flex items-center gap-2">
                            {/* <MdTimer className="text-third" size={40} /> */}
                            <p className="!m-0">
                                <b className="text-white">Duración:</b> 20/30 min
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* <IoMdPricetags className="text-third" size={40} /> */}
                            <p className="!m-0">
                                <b className="text-white">Precio:</b> 35 €
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
                <Button href={`https://mariapereznutricion.es/`} target={'blank'}>
                    Enlace Web
                </Button>
            </>
        </InfoSection>
    );
}