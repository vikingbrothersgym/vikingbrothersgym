import './Precio.css';

export default function Precio({
    price,
    originalPrice,
    monthPrice,
    originalMonthPrice,
    extraInfo
}) {
    return (
        <>
            <div className='precio'>
                {originalPrice &&
                    <div className='oferta'>
                        <h2> <s> {originalPrice} € </s> </h2>
                        {originalMonthPrice && <p> <s> {originalMonthPrice} €/mes </s> </p>}
                    </div>
                }
                <div className='oferta'>
                    <h2>{price} €</h2>
                    {monthPrice && <p> {monthPrice} €/mes </p>}
                </div>
            </div>
            {extraInfo && <p className='mb-5 m-0'> {extraInfo} </p>}
        </>

        // <>
        //     {originalPrice ? (
        //         <div className="precio">
        //             <div className="oferta">
        //                 <h2> {price} € </h2>
        //                 {monthPrice > 0 && (
        //                     <p> {monthPrice} €/mes </p>
        //                 )}
        //             </div>
        //         </div>
        //     ) : (
        //         <div className="precio">
        //             <div className="oferta">
        //                 <h2> <s> {originalPrice} € </s> </h2>
        //                 {originalMonthPrice && (
        //                     <p> <s> {originalMonthPrice} €/mes </s> </p>
        //                 )}
        //             </div>
        //             <div className="oferta">
        //                 <h2> {price} € </h2>
        //                 {monthPrice && (
        //                     <p> {monthPrice} €/mes </p>
        //                 )}
        //             </div>
        //         </div>
        //     )}
        // </>
    )
}
