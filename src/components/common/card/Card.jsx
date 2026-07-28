import "./Card.css"

export default function Card({
    className, 
    children, 
    icon, 
    title,
    vertical = false
}) {
    return (
        <div className="card-container">
            <div className={`card ${className} ${vertical && "card-vertical"}`}>
                {icon &&
                    <div className={`card-icon ${vertical && "!text-center"}`}>
                        {icon}
                    </div>
                }
                <div className={`w-full ${vertical && "!text-center"}`}>
                    {title &&
                        <h1>{title}</h1>
                    }
                    {children}
                </div>
            </div>
        </div>
    )
}