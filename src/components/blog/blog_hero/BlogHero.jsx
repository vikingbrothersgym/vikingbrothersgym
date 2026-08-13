import "./BlogHero.css";
import { GiVikingHelmet } from "react-icons/gi";
import { category } from "../../../constants/news/news";

export default function BlogHero({
    children,
    section = ""
}) {
    return (
        <div className={`blog-hero blog-hero-${section} pl-[25px] lg:pl-[50px]`}>
            <div className="blog-hero-content w-[50%] lg:w-[30%]">
                {children}
            </div>
        </div>
    )
}