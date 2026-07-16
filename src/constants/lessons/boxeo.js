import { enum_clases } from "./clases";
import { days } from "./horarios";

export const horarios = [
    [
        {day: "lunes", lesson_id: enum_clases.NULL, start: ""},
        {day: "martes", lesson_id: enum_clases.NULL, start: ""},
        {day: "miercoles", lesson_id: enum_clases.BOXEO_INFANTIL, start: "17:30"},
        {day: "jueves", lesson_id: enum_clases.NULL, start: ""},
        {day: "viernes", lesson_id: enum_clases.NULL, start: ""},
        {day: "sabado", lesson_id: enum_clases.NULL, start: ""},
    ],
    [
        {day: "lunes", lesson_id: enum_clases.BOXEO_MARQUINO, start: "19:00"},
        {day: "martes", lesson_id: enum_clases.BOXEO_MARQUINO, start: "19:00"},
        {day: "miercoles", lesson_id: enum_clases.BOXEO_MARQUINO, start: "19:00"},
        {day: "jueves", lesson_id: enum_clases.BOXEO_MARQUINO, start: "19:00"},
        {day: "viernes", lesson_id: enum_clases.NULL, start: ""},
        {day: "sabado", lesson_id: enum_clases.NULL, start: ""},
    ],
    [
        {day: "lunes", lesson_id: enum_clases.NULL, start: ""},
        {day: "martes", lesson_id: enum_clases.BOXEO_MARQUINO, start: "20:30"},
        {day: "miercoles", lesson_id: enum_clases.NULL, start: ""},
        {day: "jueves", lesson_id: enum_clases.BOXEO_MARQUINO, start: "20:30"},
        {day: "viernes", lesson_id: enum_clases.NULL, start: ""},
        {day: "sabado", lesson_id: enum_clases.NULL, start: ""},
    ],
];