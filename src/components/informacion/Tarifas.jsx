import {Tabs, Tab} from "@nextui-org/react";
import { GiBoxingGlove, GiChestArmor, GiTwoHandedSword, GiBattleAxe, GiShieldBash, GiVikingHead, GiAxeInLog } from "react-icons/gi";
import "./Tarifas.css"
import Cuota from "./precios/Cuota.jsx";
import { icon } from "leaflet";

export default function Tarifas() {
    const gym = [
        {
            icon: <GiChestArmor/>,
            title: "1 MES",
            color: 'third',
            price: 37,
            originalPrice: 39,
            monthPrice: null,
            originalMonthPrice: null,
            extraInfo: "+ 20 € el primer mes",
            included: [
                "Sala de musculación",
                "Todas las clases"
            ],
            notIncluded: [
                "Boxeo",
            ]
        },
        {
            icon: <GiBattleAxe/>,
            title: "3 MESES",
            color: 'third',
            price: 105,
            originalPrice: 108,
            monthPrice: 35,
            originalMonthPrice: 36,
            extraInfo: null,
            included: [
                "Sala de musculación",
                "Todas las clases"
            ],
            notIncluded: [
                "Boxeo",
            ]
        },
        {
            icon: <GiShieldBash/>,
            title: "6 MESES",
            color: 'third',
            price: 192,
            originalPrice: 210,
            monthPrice: 32,
            originalMonthPrice: 35,
            extraInfo: null,
            tag: "POPULAR",
            included: [
                "Sala de musculación",
                "Todas las clases"
            ],
            notIncluded: [
                "Boxeo",
            ]
        },
        {
            icon: <GiVikingHead/>,
            title: "1 AÑO",
            color: 'third',
            price: 330,
            originalPrice: 360,
            monthPrice: 27.5,
            originalMonthPrice: 30,
            extraInfo: null,
            tag: "ECONÓMICO",
            included: [
                "Sala de musculación",
                "Todas las clases"
            ],
            notIncluded: [
                "Boxeo",
            ]
        },
        {
            icon: <GiBoxingGlove/>,
            title: "1 MES",
            color: 'secondary',
            price: 50,
            originalPrice: null,
            monthPrice: null,
            originalMonthPrice: null,
            extraInfo: "Clases de Boxeo",
            tag: "",
            notIncluded: [
                "Sala de musculación",
                "Todas las clases",
            ],
            included: [
                "Boxeo",
            ]
        },
        {
            icon: <GiBoxingGlove/>,
            title: "1 MES",
            color: 'secondary',
            price: 25,
            originalPrice: null,
            monthPrice: null,
            originalMonthPrice: null,
            extraInfo: "Boxeo Infantil (Miércoles 17:30 - 18:30)",
            notIncluded: [
                "Sala de musculación",
                "Todas las clases",
            ],
            included: [
                "Boxeo",
            ]
        },
        {
            icon: <GiBoxingGlove/>,
            title: "1 MES",
            color: 'success',
            price: 80,
            originalPrice: 87,
            monthPrice: null,
            originalMonthPrice: null,
            extraInfo: "Gimnasio + Boxeo",
            tag: "COMPLETO",
            notIncluded: [
            ],
            included: [
                "Sala de musculación",
                "Todas las clases",
                "Boxeo",
            ]
        },
    ]

    return (
        <section className="pricing">
            <div className="pricing-container">
                <h2 className="pricing-title">
                    ELIGE TU PLAN <br />
                    <span>TARIFAS</span>
                </h2>

                <div className="pricing-grid">
                    {gym.map((cuota, idx) => <Cuota key={idx} {...cuota} />)}
                </div>
            </div>
        </section>
    )
}
