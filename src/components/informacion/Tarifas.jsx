import {Tabs, Tab} from "@nextui-org/react";
import { GiBoxingGlove, GiChestArmor, GiTwoHandedSword, GiBattleAxe, GiShieldBash, GiVikingHead, GiAxeInLog } from "react-icons/gi";
import "./Tarifas.css"
import Cuota from "./precios/Cuota.jsx";
import { icon } from "leaflet";

export default function Tarifas() {
    const gym = [
        {
            id: 'a',
            icon: <GiChestArmor/>,
            title: "1 Mes",
            color: 'third',
            price: 37,
            originalPrice: 39,
            monthPrice: null,
            originalMonthPrice: null,
            extraInfo: "+ 20 € matrícula el primer mes",
            included: [
                "Sala de musculación",
                "Todas las clases"
            ],
            notIncluded: [
                "Boxeo",
                "King Boxing",
                "Defensa Personal",
                "Hit-Box"
            ]
        },
        {
            id: 'b',
            icon: <GiTwoHandedSword/>,
            title: "2 Meses",
            color: 'third',
            price: 76,
            originalPrice: null,
            monthPrice: 38,
            originalMonthPrice: null,
            extraInfo: null,
            included: [
                "Sala de musculación",
                "Todas las clases"
            ],
            notIncluded: [
                "Boxeo",
                "King Boxing",
                "Defensa Personal",
                "Hit-Box"
            ]
        },
        {
            id: 'c',
            icon: <GiBattleAxe/>,
            title: "3 Meses",
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
                "King Boxing",
                "Defensa Personal",
                "Hit-Box"
            ]
        },
        {
            id: 'd',
            icon: <GiShieldBash/>,
            title: "6 Meses",
            color: 'third',
            price: 192,
            originalPrice: 210,
            monthPrice: 32,
            originalMonthPrice: 35,
            extraInfo: null,
            included: [
                "Sala de musculación",
                "Todas las clases"
            ],
            notIncluded: [
                "Boxeo",
                "King Boxing",
                "Defensa Personal",
                "Hit-Box"
            ]
        },
        {
            id: 'e',
            icon: <GiVikingHead/>,
            title: "1 Año",
            color: 'third',
            price: 330,
            originalPrice: 360,
            monthPrice: 27.5,
            originalMonthPrice: 30,
            extraInfo: null,
            included: [
                "Sala de musculación",
                "Todas las clases"
            ],
            notIncluded: [
                "Boxeo",
                "King Boxing",
                "Defensa Personal",
                "Hit-Box"
            ]
        },
        {
            id: 'f',
            icon: <GiBoxingGlove/>,
            title: "1 Mes",
            color: 'secondary',
            price: 50,
            originalPrice: null,
            monthPrice: null,
            originalMonthPrice: null,
            extraInfo: "Clases de Boxeo, King Boxing o Defensa Personal",
            notIncluded: [
                "Sala de musculación",
                "Todas las clases",
                "Hit-Box"
            ],
            included: [
                "Boxeo",
                "King Boxing",
                "Defensa Personal",
            ]
        },
        {
            id: 'g',
            icon: <GiBoxingGlove/>,
            title: "1 Mes",
            color: 'secondary',
            price: 30,
            originalPrice: null,
            monthPrice: null,
            originalMonthPrice: null,
            extraInfo: "Kick Boxing Infantil",
            notIncluded: [
                "Sala de musculación",
                "Todas las clases",
                "Boxeo",
                "Defensa Personal",
                "Hit-Box"
            ],
            included: [
                "King Boxing",
            ]
        },
        {
            id: 'h',
            icon: <GiBoxingGlove/>,
            title: "1 Mes",
            color: 'success',
            price: 80,
            originalPrice: 87,
            monthPrice: null,
            originalMonthPrice: null,
            extraInfo: "Gimnasio + Boxeo, King Boxing o Defensa Personal",
            notIncluded: [
                "Hit-Box"
            ],
            included: [
                "Sala de musculación",
                "Todas las clases",
                "Boxeo",
                "King Boxing",
                "Defensa Personal",
            ]
        },
        {
            id: 'i',
            icon: <GiAxeInLog/>,
            title: "1 Mes",
            color: 'white',
            price: 40,
            originalPrice: null,
            monthPrice: null,
            originalMonthPrice: null,
            extraInfo: "Hit-Box (Lunes y Miércoles de 18:00 a 19:00 y 19:00 a 20:00)",
            notIncluded: [
                "Sala de musculación",
                "Todas las clases",
                "Boxeo",
                "Defensa Personal",
                "King Boxing",
            ],
            included: [
                "Hit-Box"
            ]
        },

    ]

    return (
        <div className="tarifas-container">
            <div className="cuotas">
                {gym.map((cuota, idx) => (
                    <Cuota
                        key={idx}
                        {...cuota}
                    />
                ))}
            </div>
        </div>
    )
}
