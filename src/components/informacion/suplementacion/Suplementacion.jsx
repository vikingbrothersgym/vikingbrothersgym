import InfoSection from "../../common/info-component/InfoSectionComponent";
import ImageCard from "../../common/image-card/ImageCard";
import Card from "../../common/card/Card";
import suple from "@assets/Suple.jpg"

// Iconos
import { IoMdFitness } from "react-icons/io";

export default function SalsaBachata() {
    return (
        <InfoSection
            iconTitle={<>💪🏼</>}
            title={
                <>
                    Suplementación <span>deportiva</span>
                </>
            }
            imgCard={
                <ImageCard
                    title={"Suplementación vikinga"}
                    subtitle={"A tu disposición"}
                    src={suple}
                >
                </ImageCard>
            }
        >
            <>
                <div className="flex items-center gap-6 mt-3">
                    <div className="border-solid border-1 border-third rounded-[10px] border-opacity-70 p-4">
                        <IoMdFitness className="text-third text-[50px]" />
                    </div>
                    <p>
                        Contamos con una selección de suplementación deportiva 
                        para potenciar tu rendimiento y recuperación.
                        Podrás encontrar exactamente lo que necesitas para
                        complementar tu entrenamiento. 
                        ¡No dudes en acercarte y preguntarnos!
                    </p>
                </div>
            </>
        </InfoSection>
    )
}