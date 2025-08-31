import { enum_clases } from "./clases"

const horarios = {
    lunes: [
        // {clase: enum_clases.BOXEO_CHAMON, inicio: "18:00", final: "19:00", profesor: "Chamón"},
        {clase: enum_clases.BOXEO_MARQUINO, inicio: "19:00", final: "20:00", profesor: "Marquino"},
        // {clase: enum_clases.KICK_PANEDAS, inicio: "19:00", final: "20:00", profesor: "Panedas"},
    ],
    martes: [
        // {clase: enum_clases.NULL, inicio: ""},
        {clase: enum_clases.BOXEO_MARQUINO, inicio: "19:00", final: "20:00", profesor: "Marquino"},
        {clase: enum_clases.BOXEO_MARQUINO, inicio: "20:30", final: "21:30", profesor: "Marquino"},
    ],
    miercoles: [
        // {clase: enum_clases.BOXEO_CHAMON, inicio: "18:00", final: "19:00", profesor: "Chamón"},
        {clase: enum_clases.BOXEO_MARQUINO, inicio: "19:00", final: "20:00", profesor: "Marquino"},
        // {clase: enum_clases.KICK_PANEDAS, inicio: "19:00", final: "20:00", profesor: "Panedas"},
    ],
    jueves: [
        // {clase: enum_clases.NULL, inicio: ""},
        {clase: enum_clases.BOXEO_MARQUINO, inicio: "19:00", final: "20:00", profesor: "Marquino"},
        {clase: enum_clases.BOXEO_MARQUINO, inicio: "20:30", final: "21:30", profesor: "Marquino"},
    ],
    viernes: [
        // {clase: enum_clases.NULL, inicio: ""},
        // {clase: enum_clases.KICK_INFANTIL, inicio: "19:00", final: "20:00", profesor: "Álex Clandestino"},
        // {clase: enum_clases.KICK_INFANTIL, inicio: "20:15", final: "21:15", profesor: "Álex Clandestino"},
    ],
    sabado: [
    ],
    domingo: [
    ]
}

export default horarios