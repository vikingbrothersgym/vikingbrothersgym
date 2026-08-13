import { FaRegNewspaper } from "react-icons/fa6";
import "./BlogArticle.css";
import { PiBowlFood } from "react-icons/pi";
import { LuBicepsFlexed } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { category as CATEGORY } from "../../../constants/news/news";
import { useNavigate } from "react-router-dom";
import constants from "../../../constants/Constants";

export default function BlogArticle({
    id,
    category,
    title,
    description,
    date,
    img
}) {
    const navigate = useNavigate();

    const categoryName = 
        category == CATEGORY.news ? (<><FaRegNewspaper /> Noticias</>)
        : category == CATEGORY.nutrition ? (<><PiBowlFood /> Nutrición</>)
        : category == CATEGORY.training ? (<><LuBicepsFlexed /> Entrenamiento</>)
        : <></>;

    const categoryLink = `${constants.root}/blog/${category == CATEGORY.nutrition ? "nutricion" : category == CATEGORY.training ? "entrenamiento" : "noticias"}/${id}`;

    return (
        <div className="new" onClick={() => navigate(categoryLink)}>
            <div className="new-img-container">
                <div className="new-category">
                    {categoryName}
                </div>
                <img src={img} />
            </div>

            <div className="px-4">
                <p className="new-date">
                    <FaRegCalendarAlt className="text-third" />
                    {date}
                </p>
                <h1 className="new-title">{title}</h1>
                <p className="new-description">{description}</p>
            </div>
            
        </div>
    )
}