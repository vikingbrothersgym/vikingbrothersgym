import { enum_clases } from "./clases";

export const days = [
    { key: "lunes", label: "Lunes" },
    { key: "martes", label: "Martes" },
    { key: "miercoles", label: "Miércoles" },
    { key: "jueves", label: "Jueves" },
    { key: "viernes", label: "Viernes" },
    { key: "sabado", label: "Sábado" }
];

export const horarios = [
    [
        {day: "lunes", lesson_id: enum_clases.MODELAJE, start: "9:30"},
        {day: "martes", lesson_id: enum_clases.PILATES, start: "9:30"},
        {day: "miercoles", lesson_id: enum_clases.MODELAJE, start: "9:30"},
        {day: "jueves", lesson_id: enum_clases.ESPALDA_SANA, start: "9:30"},
        {day: "viernes", lesson_id: enum_clases.MODELAJE, start: "9:30"},
        {day: "sabado", lesson_id: enum_clases.VIKING_BOX, start: "10:00"},
    ],
    [
        {day: "lunes", lesson_id: enum_clases.ESPALDA_SANA, start: "11:00"},
        {day: "martes", lesson_id: enum_clases.MODELAJE, start: "11:00"},
        {day: "miercoles", lesson_id: enum_clases.PILATES, start: "11:00"},
        {day: "jueves", lesson_id: enum_clases.MODELAJE, start: "11:00"},
        {day: "viernes", lesson_id: enum_clases.MODELAJE, start: "11:00"},
        {day: "sabado", lesson_id: enum_clases.PILATES, start: "11:00"},
    ],
    [
        {day: "lunes", lesson_id: enum_clases.HIT, start: "14:30"},
        {day: "martes", lesson_id: enum_clases.FUNCIONAL, start: "14:30"},
        {day: "miercoles", lesson_id: enum_clases.HIT, start: "14:30"},
        {day: "jueves", lesson_id: enum_clases.FUNCIONAL, start: "14:15"},
        {day: "viernes", lesson_id: enum_clases.HIT, start: "14:30"},
        {day: "sabado", lesson_id: enum_clases.NULL, start: ""},
    ],
    [
        {day: "lunes", lesson_id: enum_clases.ESTIRAMIENTOS, start: "16:00"},
        {day: "martes", lesson_id: enum_clases.NULL, start: ""},
        {day: "miercoles", lesson_id: enum_clases.ESTIRAMIENTOS, start: "16:00"},
        {day: "jueves", lesson_id: enum_clases.NULL, start: "16:00"},
        {day: "viernes", lesson_id: enum_clases.NULL, start: ""},
        {day: "sabado", lesson_id: enum_clases.NULL, start: ""},
    ],
    [
        {day: "lunes", lesson_id: enum_clases.NULL, start: ""},
        {day: "martes", lesson_id: enum_clases.FUNCIONAL, start: "17:00"},
        {day: "miercoles", lesson_id: enum_clases.NULL, start: "17:00"},
        {day: "jueves", lesson_id: enum_clases.ESPALDA_SANA, start: "17:00"},
        {day: "viernes", lesson_id: enum_clases.NULL, start: ""},
        {day: "sabado", lesson_id: enum_clases.NULL, start: ""},
    ],
    [
        {day: "lunes", lesson_id: enum_clases.MODELAJE, start: "18:00"},
        {day: "martes", lesson_id: enum_clases.ESPALDA_SANA, start: "18:00"},
        {day: "miercoles", lesson_id: enum_clases.PILATES, start: "18:00"},
        {day: "jueves", lesson_id: enum_clases.MODELAJE, start: "18:00"},
        {day: "viernes", lesson_id: enum_clases.ESTIRAMIENTOS, start: "18:00"},
        {day: "sabado", lesson_id: enum_clases.NULL, start: ""},
    ],
    [
        {day: "lunes", lesson_id: enum_clases.NULL, start: "19:00"},
        {day: "martes", lesson_id: enum_clases.BODY_PUMP, start: "19:00"},
        {day: "miercoles", lesson_id: enum_clases.NULL, start: "19:00"},
        {day: "jueves", lesson_id: enum_clases.PILATES, start: "19:00"},
        {day: "viernes", lesson_id: enum_clases.HIT, start: "19:00"},
        {day: "sabado", lesson_id: enum_clases.NULL, start: ""},
    ],
    [
        {day: "lunes", lesson_id: enum_clases.NULL, start: "20:00"},
        {day: "martes", lesson_id: enum_clases.HIT, start: "20:00"},
        {day: "miercoles", lesson_id: enum_clases.NULL, start: "20:00"},
        {day: "jueves", lesson_id: enum_clases.HIT, start: "20:00"},
        {day: "viernes", lesson_id: enum_clases.NULL, start: ""},
        {day: "sabado", lesson_id: enum_clases.NULL, start: ""},
    ],
    [
        {day: "lunes", lesson_id: enum_clases.NULL, start: ""},
        {day: "martes", lesson_id: enum_clases.YOGA, start: "20:30"},
        {day: "miercoles", lesson_id: enum_clases.NULL, start: ""},
        {day: "jueves", lesson_id: enum_clases.YOGA, start: "20:30"},
        {day: "viernes", lesson_id: enum_clases.NULL, start: ""},
        {day: "sabado", lesson_id: enum_clases.NULL, start: ""},
    ]
];