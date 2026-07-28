import "./ImageCard.css"
import { IoStar } from "react-icons/io5";

export default function ImageCard({
    className, 
    children, 
    icon, 
    title,
    subtitle,
    src
}) {
    return (
        <div className={`image-card ${className}`}>
            <div className="image-card-image">
                <img className="image-card" src={src} alt="" />
                <div className="image-card-title">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
            </div>
            {children}
        </div>
    )
}