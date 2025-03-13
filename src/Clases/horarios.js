import { enum_clases } from "./clases";

const horarios = {
  lunes: [
    {clase: enum_clases.MODELAJE, inicio: "9:30"},
    {clase: enum_clases.ESPALDA_SANA, inicio: "11:00"},
    {clase: enum_clases.ABDOMINALES, inicio: "11:45"},
    {clase: enum_clases.NULL, inicio: ""},
    {clase: enum_clases.NULL, inicio: ""},
    {clase: enum_clases.MODELAJE, inicio: "18:00"},
    {clase: enum_clases.ZUMBA, inicio: "19:00"},
    {clase: enum_clases.SALSA_BACHATA, inicio: "20:00"},
  ],
  martes: [
    {clase: enum_clases.PILATES_ESPALDA, inicio: "9:30"},
    {clase: enum_clases.MODELAJE, inicio: "11:00"},
    {clase: enum_clases.ABDOMINALES, inicio: "11:45"},
    {clase: enum_clases.F_INTERVAL, inicio: "14:15"},
    {clase: enum_clases.FUNCIONAL, inicio: "17:00"},
    {clase: enum_clases.ESPALDA_SANA, inicio: "18:00"},
    {clase: enum_clases.BODY_PUMP, inicio: "19:00"},
    {clase: enum_clases.HIT, inicio: "20:00"},
    {clase: enum_clases.YOGA, inicio: "20:30"},
  ],
  miercoles: [
    {clase: enum_clases.MODELAJE, inicio: "9:30"},
    {clase: enum_clases.PILATES, inicio: "11:00"},
    {clase: enum_clases.ABDOMINALES, inicio: "11:45"},
    {clase: enum_clases.NULL, inicio: ""},
    {clase: enum_clases.NULL, inicio: ""},
    {clase: enum_clases.PILATES, inicio: "18:00"},
    {clase: enum_clases.ZUMBA, inicio: "19:00"},
    {clase: enum_clases.SALSA_BACHATA, inicio: "20:00"},
  ],
  jueves: [
    {clase: enum_clases.MODELAJE, inicio: "9:30"},
    {clase: enum_clases.MODELAJE, inicio: "11:00"},
    {clase: enum_clases.ABDOMINALES, inicio: "11:45"},
    {clase: enum_clases.FUNCIONAL, inicio: "14:15"},
    {clase: enum_clases.ESPALDA_CORE, inicio: "17:00"},
    {clase: enum_clases.MODELAJE, inicio: "18:00"},
    {clase: enum_clases.PILATES, inicio: "19:00"},
    {clase: enum_clases.HIT, inicio: "20:00"},
    {clase: enum_clases.YOGA, inicio: "20:30"},
  ],
  viernes: [
    {clase: enum_clases.MODELAJE, inicio: "9:30"},
    {clase: enum_clases.MODELAJE, inicio: "11:00"},
    {clase: enum_clases.ABDOMINALES, inicio: "11:45"},
    {clase: enum_clases.NULL, inicio: ""},
    {clase: enum_clases.NULL, inicio: ""},
    {clase: enum_clases.ZUMBA, inicio: "18:00"},
    {clase: enum_clases.HIT_AVANZADO, inicio: "19:00"},
  ],
  sabado: [
    {clase: enum_clases.VIKING_BOX, inicio: "10:00"},
    {clase: enum_clases.PILATES, inicio: "11:00"},
  ],
  domingo: [
    {clase: enum_clases.NULL, inicio: ""},
  ]
}

export default horarios;