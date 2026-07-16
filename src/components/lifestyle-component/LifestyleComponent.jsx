import {
    GiVikingHelmet,
    GiBattleAxe,
    GiCrossedAxes,
    GiAxeInLog,
    GiHuntingHorn
} from "react-icons/gi";

import "./LifestyleComponent.css";

export default function Lifestyle() {
    const items = [
        {
            icon: GiHuntingHorn,
            title: "ENTRENA",
            subtitle: "TU CUERPO"
        },
        {
            icon: GiVikingHelmet,
            title: "FORTALECE",
            subtitle: "TU MENTE"
        },
        {
            icon: GiCrossedAxes,
            title: "SUPERA",
            subtitle: "TUS LÍMITES"
        },
        {
            icon: GiBattleAxe,
            title: "CONVIÉRTETE",
            subtitle: "EN TU MEJOR VERSIÓN"
        },
        {
            icon: GiAxeInLog,
            title: "ÚNETE A LA TRIBU",
            subtitle: "VIKING BROTHERS"
        }
    ];

    return (
        <section className="lifestyle">
            <div className="lifestyle-grid">
                {items.map(({ icon: Icon, title, subtitle }) => (
                    <div className="lifestyle-item" key={title}>
                        <Icon className="lifestyle-icon"/>

                        <p>{title}</p>
                        <p>{subtitle}</p>
                    </div>
                ))}
            </div>

            <div className="lifestyle-message">
                <span></span>

                <h2>NO ES SOLO UN GYM, ES UN ESTILO DE VIDA</h2>

                <span></span>
            </div>

            <p className="instagram">
                @VIKING_BROTHERS_GYM
            </p>

        </section>
    );
}