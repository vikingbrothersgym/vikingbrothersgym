import "./Training.css";

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

const rules = [
    "Proteína en cada comida",
    "Mucha agua",
    "Verduras a diario",
    "Azúcar: desterrado del reino",
    "Alcohol: enemigo del guerrero",
    "Dormir 7-9 horas",
];

export default function Training() {
    const { id } = useParams();

    const [newArticle, setNewArticle] = useState(null)

    useEffect(() => {
        const newFound = news.find(newItem => newItem.id == id);
        setNewArticle(newFound);
    }, [id])

    if (!newArticle) {
        return (
            <div> Cargando noticia... </div>
        )
    } else {
        return (
            <div className="nutrition-page">
                <NavBar />

                <main>
                    {/* HERO */}
                    <BlogHero section={category.training}>
                        <h1 className="m-0 text-[length:clamp(1.5rem,_5vw,_3.5rem)]">
                            {newArticle.title}
                        </h1>

                        <div className="nutrition-meta">
                            <span>⚔ Viking Brothers Gym</span>
                            <span>{newArticle.date}</span>
                        </div>
                    </BlogHero>

                    <div className="px-6">
                        <Breadcrumbs
                            className={"mt-6"}
                            path={[
                                { label: "Blog", to: "/blog" },
                                { label: "Entrenamiento", to: "/blog/entrenamiento" },
                                { label: newArticle.title },
                            ]}
                        />
                    </div>

                    {/* INTRODUCCIÓN */}
                    <section className="m-6 text-white text-[20px] opacity-90">
                        {newArticle.text.map((parragraph, idx) => (
                            <p key={idx}>
                                {parragraph}
                            </p>
                        ))}
                    </section>

                    {/* Ejercicios */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
                        {newArticle.training.map((muscle_group, idx) => (
                            <TrainingMuscleGroup
                                key={idx}
                                {...muscle_group}
                            />
                        ))}
                    </section>

                    {/* CTA */}
                    <section className="px-6 mb-6">
                        <div className="nutrition-cta flex flex-col md:flex-row">
                            <div>
                                <span>⚔</span>

                                <div>
                                    <h2>NO HAS NACIDO PARA SER DÉBIL</h2>
                                    <p>
                                        Levántate. Entrena. Come como un
                                        guerrero. Repite.
                                    </p>
                                </div>
                            </div>

                            <a href={constants.root + "/blog/entrenamiento"}>
                                Ver más artículos de nutrición
                            </a>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );

    }
}