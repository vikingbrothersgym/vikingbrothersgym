import ImageCard from "../image-card/ImageCard";
import "./InfoSectionComponent.css";

export default function InfoSection({iconTitle, title, imgCard, left = false, children}) {
    return (
        <section className="info-section">
            <div>
                <div className="title m-0">
                    {iconTitle &&
                        <h1 className="title-icon">{iconTitle}</h1>
                    }
                    <h1>{title}</h1>
                </div>

                <hr className="info-hr"/>

                {children}
            </div>

            <div className="info-container">
                {imgCard}
            </div>
        </section>
    )
}