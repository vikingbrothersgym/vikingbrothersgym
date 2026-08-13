import "./Blog.css";
import NavBar from "../../components/navbar/NavBar";
import BlogHero from "../../components/blog/blog_hero/BlogHero";
import Tabs from "../../components/common/tabs/Tabs";
import Tab from "../../components/common/tabs/Tab";
import constants from "@constants/Constants";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaRegNewspaper } from "react-icons/fa6";
import { PiBowlFood } from "react-icons/pi";
import { LuBicepsFlexed } from "react-icons/lu";
import BlogArticle from "../../components/blog/blog_article/BlogArticle";
import news from "../../Noticias/News.jsx";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { GiVikingHelmet } from "react-icons/gi";

export default function Blog() {
    const { category } = useParams();
    const hrStyle = "w-[20px] md:w-[25px]";

    return (
        <div className="w-full">
            <NavBar/>

            <BlogHero>
                <h1 
                    className={`
                        text-white m-0 shrink-1 text-[60px] md:text-[90px] lg:text-[110px]
                    `}
                >
                    BLOG
                </h1>
                <div className="blog-viking-icon">
                    <hr className={hrStyle} />
                    <hr className={hrStyle} />
                    <GiVikingHelmet className="text-third"/>
                    <hr className={hrStyle} />
                    <hr className={hrStyle} />
                </div>
                <p className="text-[10px] md:text-[18px] font-bold text-white max-w-[500px]">
                    Consejos, noticias y recursos para ayudarte a 
                    alcanzar tus objetivos dentro y fuera del gimnasio.
                </p>
            </BlogHero>

            <Tabs>
                <Tab to={constants.root + "/blog"} end>
                    <HiOutlineSquares2X2 />
                    Todos
                </Tab>

                <Tab to={constants.root + "/blog/noticias"}>
                    <FaRegNewspaper />
                    Noticias
                </Tab>

                <Tab to={constants.root + "/blog/nutricion"}>
                    <PiBowlFood />
                    Nutrición
                </Tab>

                <Tab to={constants.root + "/blog/entrenamiento"}>
                    <LuBicepsFlexed />
                    Entrenamiento
                </Tab>
            </Tabs>

            <div 
                key={category ?? "all"}
                className="blog-news grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-7 gap-7 my-7">
                {news
                    .filter((newItem) => !category || newItem.category == category)
                    .map((newItem, idx) => (
                    <BlogArticle
                        key={newItem.id}
                        id={newItem.id}
                        category={newItem.category}
                        date={newItem.date}
                        img={newItem.image}
                        title={newItem.title}
                        description={newItem.text}
                    />
                ))}
            </div>

            <Footer />
        </div>
    )
}