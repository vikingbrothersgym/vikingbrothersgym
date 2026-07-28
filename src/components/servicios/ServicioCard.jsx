import "./ServicioCard.css";

const ServicioCard = ({title, description, image}) => {
    return (
        <div className="service-card">
            <img src={image} alt={title} />
            <div className="service-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ServicioCard;