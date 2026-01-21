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
    )
}
