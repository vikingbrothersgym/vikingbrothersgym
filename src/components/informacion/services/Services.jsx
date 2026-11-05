import Button from "../../common/button/Button";
import Card from "../../common/card/Card";
import SectionTitle from "../../common/section-title/SectionTitle";
import constants from "../../../constants/Constants";
import { services } from "../../../constants/services/services";

export default function Services() {
    return (
        <section className="flex flex-col items-center my-4 px-4">
            <SectionTitle
                pretitle={"Más que un gimnasio"}
                title={"Servicios"}
                subtitle={"Pincha para más información"}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                {services.map((service, idx) => (
                    <div 
                        key={idx}
                        className={`
                            bg-[linear-gradient(rgba(10,10,10,0.5),rgba(10,10,10,1))] backdrop-blur 
                            w-full p-4 rounded-2xl max-w-[300px] overflow-hidden box-border
                            border border-solid border-white/30 hover:border-third 
                            transition-colors ease-in-out
                        `}
                    >
                        <img className="rounded-xl w-full aspect-[1/1] object-cover object-top" src={service.image} />
                        <h2 className="text-third flex items-center gap-2 mb-2 min-w-0">
                            <span className="flex items-center shrink-0">
                                {service.icon}
                            </span>
                            <span className="min-w-0 line-clamp-1 break-all">
                                {service.title}
                            </span>
                        </h2>
                        <p className="text-white mt-0 mb-5 leading-6 min-h-12 line-clamp-2">
                            {service.description}
                        </p>
                        <Button href={`${service.path}`}>
                            Más información
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
}