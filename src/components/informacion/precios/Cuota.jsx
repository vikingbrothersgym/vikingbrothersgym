import "./Cuota.css"
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
    const colorClasses = {
        third: {
            border: "border-third",
            bg: "bg-third",
            text: "text-third",
        },
        secondary: {
            border: "border-secondary",
            bg: "bg-secondary",
            text: "text-secondary",
        },
        success: {
            border: "border-success",
            bg: "bg-success",
            text: "text-success",
        },

    }

    const selectedColor = colorClasses[color] ?? colorClasses.third;

    return (
        <div className={`price-card ${color}`}>
            {tag &&
                <div className="badge">{tag}</div>        
            }

            <icon className="icon">{icon}</icon>
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
                    <li className="ok">
                        <FiCheckCircle
                            className="mr-2" 
                            color="green"
                        /> 
                        {text} 
                        {idx !== (included.length + notIncluded.length - 1) && <br/>}
                    </li>
                ))}
                {notIncluded.map((text, idx) => (
                    <li className="no">
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

        // <div
        //     style={{gridArea: `${id}`}}
        //     className={`bg-primary border-solid border-2 ${selectedColor.border}`}
        // >
        //     <div className={`${selectedColor.bg} p-2 text-4xl text-start font-bold flex justify-center items-center gap-4`}>
        //         {icon} {title}
        //     </div>
        //     <div className='text-white flex justify-around'>
        //         {originalPrice &&
        //             <div className='opacity-50'>
        //                 <h2 className="text-4xl"> <s> {originalPrice} € </s> </h2>
        //                 {originalMonthPrice && <p className="text-xl mb-0"> <s> {originalMonthPrice} €/mes </s> </p>}
        //             </div>
        //         }
        //         <div className=''>
        //             <h2 className="text-4xl">{price} €</h2>
        //             {monthPrice && <p className="text-xl mb-0"> {monthPrice} €/mes </p>}
        //         </div>
        //     </div>
        //     {extraInfo && <p className=' m-0 text-white text-center text-lg px-4'> {extraInfo} </p>}

        //     <div className="incluido-container">
        //         <p className="text-white text-start px-6">
        //             {included.map((text, idx) => (
        //                 <>
        //                     ✅ {text} {idx !== (included.length + notIncluded - 1) && <br/>}
        //                 </>
        //             ))}
        //             {notIncluded.map((text, idx) => (
        //                 <>
        //                     ❌ {text} {idx !== (included.length + notIncluded - 1) - 1 && <br/>}
        //                 </>
        //             ))}
        //         </p>
        //     </div>
        // </div>
    )
}
