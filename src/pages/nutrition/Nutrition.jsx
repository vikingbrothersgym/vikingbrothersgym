import "./Nutrition.css";

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
import NutritionMeal from "../../components/blog/nutrition/nutrition_meal/NutritionMeal";
import Footer from "../../components/footer/Footer";

const rules = [
    "Proteína en cada comida",
    "Mucha agua",
    "Verduras a diario",
    "Azúcar: desterrado del reino",
    "Alcohol: enemigo del guerrero",
    "Dormir 7-9 horas",
];

export default function Nutrition() {
    const { id } = useParams();

    const [newArticle, setNewArticle] = useState(null)

    useEffect(() => {
        const newFound = news.find(newItem => newItem.id == id);
        setNewArticle(newFound);

        newFound.meals.map((meal, idx) => console.log(meal));
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
                    <BlogHero section={category.nutrition}>
                        <h1 className="m-0 text-[length:clamp(1.5rem,_5vw,_3.5rem)]">
                            {newArticle.title}
                        </h1>

                        <div className="nutrition-meta">
                            <span>⚔ Viking Brothers Gym</span>
                            <span>12 Mayo 2025</span>
                        </div>
                    </BlogHero>

                    <div className="px-6">
                        <Breadcrumbs
                            className={"mt-6"}
                            path={[
                                { label: "Blog", to: "/blog" },
                                { label: "Nutrición", to: "/blog/nutricion" },
                                { label: "Dieta del Guerrero Vikingo" },
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

                    {/* DIETA */}
                    <section className="nutrition-meals">
                        {newArticle.meals.map((meal) => (
                            <NutritionMeal
                                key={meal.number}
                                {...meal}
                                visual={true}
                            />
                        ))}
                    </section>

                    {/* NORMAS + OBJETIVO */}
                    <section className="nutrition-bottom flex flex-col md:flex-row">
                        <article className="nutrition-rules w-[100%] md:w-[50%]">
                            <h2>Normas del Clan</h2>

                            <div>
                                {rules.map((rule) => (
                                    <p key={rule}>
                                        <LuCircleCheck />
                                        {rule}
                                    </p>
                                ))}
                            </div>
                        </article>

                        <article className="nutrition-goal w-[100%] md:w-[50%]">
                            <span>Objetivo:</span>

                            <h2>
                                FORJAR MÚSCULO.
                                <br />
                                QUEMAR GRASA.
                            </h2>

                            <p>
                                Construir un cuerpo digno del Valhalla.
                            </p>
                        </article>
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

                            <a href="/blog/nutricion">
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