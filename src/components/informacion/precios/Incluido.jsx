import './Incluido.css';

export default function Incluido({included}) {
    return (
        <>
            <hr className="sin-margen"/>
            <div className="incluido-container">
                <p className="incluido">
                    {included.map((text, idx) => (
                        <>
                            ✅ {text} {idx !== included.length - 1 && <br/>}
                        </>
                    ))}
                </p>
            </div>
        </>
        // <>
        //     { normal === false && boxeo === false && (
        //         <>
        //             <hr className="sin-margen"/>
        //             <div className="incluido-container">
        //                 <p className="incluido">
        //                     - Sala de musculación <br/>
        //                     - Todas las clases (excepto Boxeo, King Boxing y
        //                     Defensa Personal)
        //                 </p>
        //             </div>
        //         </>
        //     )}

        //     { boxeo === true && normal === false && (
        //         <>
        //             <hr className="sin-margen"/>
        //             <div className="incluido-container">
        //                 <p className="incluido">
        //                     - Clases en nuestra sala de Boxeo, King Boxing y
        //                     Defensa Personal
        //                 </p>
        //             </div>
        //         </>
        //     )}

        //     { boxeo === true && normal === true && (
        //         <>
        //             <hr className="sin-margen"/>
        //             <div className="incluido-container">
        //                 <p className="incluido">
        //                     - Acceso a todos los servicios del gimnasio:
        //                     clases y sala de musculación <br/>
        //                     - Clases en nuestra sala de Boxeo
        //                 </p>
        //             </div>
        //         </>
            
        //     )}
        // </>
    )
}
