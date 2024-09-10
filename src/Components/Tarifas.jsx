import { GiBoxingGlove, GiChestArmor, GiTwoHandedSword, GiBattleAxe, GiVikingHead } from "react-icons/gi";

import "../CSS/Tarifas.css"

const Incluido = ({boxeo = false, normal = false}) => {
    return (
        <>
            { normal === false && boxeo === false && (
                <>
                    <hr className="sin-margen"/>
                    <div className="incluido-container">
                        <p className="incluido">
                            - Sala de musculación <br/>
                            - Todas las clases (excepto Boxeo)
                        </p>
                    </div>
                </>
            )}

            { boxeo === true && normal === false && (
                <>
                    <hr className="sin-margen"/>
                    <div className="incluido-container">
                        <p className="incluido">
                            - Clases en nuestra sala de Boxeo
                        </p>
                    </div>
                </>
            )}

            { boxeo === true && normal === true && (
                <>
                    <hr className="sin-margen"/>
                    <div className="incluido-container">
                        <p className="incluido">
                            - Acceso a todos los servicios del gimnasio:
                            clases y sala de musculación <br/>
                            - Clases en nuestra sala de Boxeo
                        </p>
                    </div>
                </>
            
            )}
        </>
    )
}

const Precio = ({oferta, mesOferta, normal, mesNormal}) => {
    return (
        <>
            {oferta < 0 ? (
                <div className="precio">
                    <div className="oferta">
                        <h2> {normal} € </h2>
                        {mesNormal > 0 && (
                            <p> {mesNormal} €/mes </p>
                        )}
                    </div>
                </div>
            ) : (
                <div className="precio">
                    <div className="oferta">
                        <h2> <s> {normal} € </s> </h2>
                        {mesNormal > 0 && (
                            <p> <s> {mesNormal} €/mes </s> </p>
                        )}
                    </div>
                    <div className="oferta">
                        <h2> {oferta} € </h2>
                        {mesOferta > 0 && (
                            <p> {mesOferta} €/mes </p>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

const Cuota = ({meses, boxeo = false, normal = false}) => {
    return (
        <>
            {boxeo === true && normal === false && (
                <div className="cuota-boxeo">
                    <div className="tiempo-boxeo">
                        <GiBoxingGlove/>
                        <h1> 1 Mes </h1>
                    </div>
                    <Precio oferta={-1} normal={50} mesNormal={0} />
                    <Incluido boxeo={true} />
                </div>            
            )}

            {boxeo === true && normal === true && (
                <div className="cuota-entera">
                    <div className="tiempo-entera">
                        <GiBoxingGlove/>
                        <GiVikingHead/>

                        <h1> 1 Mes </h1>
                    </div>
                    <Precio oferta={75} normal={85} mesNormal={0} />
                    <Incluido boxeo={true} normal={true} />
                </div>            
        
            )}

            {meses === 1 && (
                <div className="cuota">
                    <div className="tiempo">
                        <GiTwoHandedSword/>
                        <h1> 1 Mes </h1>
                    </div>
                    <Precio oferta={-1} normal={35} mesNormal={0} />
                    <Incluido/>
                </div>
            )}

            {meses === 3 && (
                <div className="cuota">
                    <div className="tiempo">
                        <GiBattleAxe/>
                        <h1> 3 Meses </h1>
                    </div>
                    <Precio oferta={-1} normal={99} mesNormal={33} />
                    <Incluido/>
                </div>
            )}

            {meses === 6 && (
                <div className="cuota">
                    <div className="tiempo">
                        <GiChestArmor/>
                        <h1> 6 Meses </h1>
                    </div>
                    <Precio oferta={-1} normal={180} mesNormal={30} />
                    <Incluido/>
                </div>
            )}

            {meses === 12 && (
                <div className="cuota">
                    <div className="tiempo">
                        <GiVikingHead/>
                        <h1> 1 Año </h1>
                    </div>
                    <Precio oferta={300} mesOferta={25} 
                            normal={330} mesNormal={27.5}/>
                    <Incluido/>
                </div>
            )}

        </>
    )
}

const Tarifas = () => {
    return (
        <div className="tarifas-container">
            <h1 className="sec-tit"> 
                ÚNETE A LA <br/> 
                <span> OLD SCHOOL </span>
            </h1>
            <div className="cuotas">
                <Cuota meses={1}/>
                <Cuota meses={3}/>
                <Cuota meses={6}/>
                <Cuota meses={12}/>
                {/* <Cuota boxeo={true}/>
                <Cuota boxeo={true} normal={true}/> */}
            </div>
        </div>
    )
}

export default Tarifas