import "./Fee.css"
import { FiCheckCircle } from "react-icons/fi";
import { MdDoNotDisturb } from "react-icons/md";

export default function Cuota({
    id,
    icon,
    title,
    price,
    originalPrice,
    monthPrice,
    originalMonthPrice,
    tag,
    extraInfo,
    included,
    notIncluded,
    color = 'third'
}) {
    return (
        <div className={`price-card ${color}`}>
            {tag &&
                <div className="badge">{tag}</div>        
            }

            <i className="icon">{icon}</i>
            <h3 className="title">{title}</h3>

            <div className="price">
                {originalPrice &&
                    <span className="old">{originalPrice}€</span>
                }
                <span className="new">{price}€</span>
            </div>

            {extraInfo && 
                <p className="extra">{extraInfo}</p>
            }

            {monthPrice && 
                <p className="extra"> {monthPrice} €/mes </p>
            }

            <ul>
                {included.map((text, idx) => (
                    <li className="ok" key={idx}>
                        <FiCheckCircle
                            className="mr-2" 
                            color="green"
                        /> 
                        {text} 
                        {idx !== (included.length + notIncluded.length - 1) && <br/>}
                    </li>
                ))}
                {notIncluded.map((text, idx) => (
                    <li className="no" key={idx}>
                        <MdDoNotDisturb 
                            className="mr-2" 
                            color="red"
                        />
                        {text} 
                        {idx !== (included.length + notIncluded.length - 1) - 1 && <br/>}
                    </li>
                ))}
            </ul>
        </div>
    )
}
