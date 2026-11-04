import NavBar from "../../components/navbar/NavBar";
import Breadcrumbs from "../../components/common/breadcrumbs/Breadcrumbs";

import {
    LuSun,
    LuSwords,
    LuShield,
    LuDrum,
    LuFlame,
    LuMoon,
    LuCircleCheck,
} from "react-icons/lu";

import warrior from "@assets/blog/blog_hero.webp";
import BlogHero from "../../components/blog/blog_hero/BlogHero";
import { category } from "../../constants/news/news";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import news from "../../Noticias/News";
import Footer from "../../components/footer/Footer";
import TrainingMuscleGroup from "../../components/blog/training/training_muscle_group/TrainingMuscleGroup";
import constants from "../../constants/Constants";
import { services } from "../../constants/services/services";
import KravInfo from "../../components/informacion/krav_maga/KravInfo";

export default function ServicioPage() {
    const { serviceSlug } = useParams();

    const [service, setService] = useState(null)

    useEffect(() => {
        const serviceFound = services.find(service => service.slug == serviceSlug);
        setService(serviceFound);
    }, [serviceSlug])


    if (!service) {
        return (
            <div>Cargando...</div>
        )
    } else {
        return (
            <div>
                <NavBar />

                <main className="mb-4">
                    {/* HERO */}
                    <BlogHero section={category.training}>
                        <h1 className="flex items-center gap-3 m-0 text-third text-[length:clamp(1.5rem,_5vw,_3.5rem)]">
                            {service.icon}
                            {service.title}
                        </h1>

                        <div className="text-[16px] text-[rgba(255,255,255,.65)]">
                            <span>⚔ Viking Brothers Gym</span>
                        </div>
                    </BlogHero>

                    <div className="px-6 mb-4">
                        <Breadcrumbs
                            className={"mt-6"}
                            path={[
                                { label: "Información", to: "/informacion" },
                                { label: service.title },
                            ]}
                        />
                    </div>

                    {service.component}
                </main>

                <Footer />
            </div>
        );
    }
}