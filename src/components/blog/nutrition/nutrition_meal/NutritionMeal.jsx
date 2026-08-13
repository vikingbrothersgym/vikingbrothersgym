import "./NutritionMeal.css"

export default function NutritionMeal({
    number,
    icon: Icon,
    title,
    subtitle,
    foods,
    image,
    visual = false,
}) {
    return (
        <article
            className={`nutrition-meal ${
                visual && image ? "nutrition-meal-visual" : ""
            }`}
        >
            <div className="nutrition-meal-icon">
                <Icon />
            </div>

            <div className="nutrition-meal-content">
                <div className="nutrition-meal-heading">
                    <span className="nutrition-meal-number">
                        {number}
                    </span>

                    <div>
                        <h2>{title}</h2>

                        {subtitle && (
                            <span className="nutrition-meal-subtitle">
                                {subtitle}
                            </span>
                        )}
                    </div>
                </div>

                <ul className="pl-4 marker:text-third flex flex-col gap-2">
                    {foods.map((food) => (
                        <li key={food}>
                            {food}
                        </li>
                    ))}
                </ul>
            </div>

            {visual && image && (
                <div className="nutrition-meal-image">
                    <img
                        src={image}
                        alt=""
                        loading="lazy"
                    />
                </div>
            )}
        </article>
    );
}