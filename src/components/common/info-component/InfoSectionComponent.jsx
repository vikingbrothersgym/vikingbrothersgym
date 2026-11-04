import ImageCard from "../image-card/ImageCard";
import "./InfoSectionComponent.css";

export default function InfoSection({iconTitle, title, imgCard, left = false, children}) {
    return (
        <section className="info-section">
            <div className="info-content">
                {children}
            </div>

            <div className="info-container">
                {imgCard}
            </div>
        </section>
    )
}