export const enum_clases = {
  NULL: 0,
  MODELAJE: 1,
  ESPALDA_SANA: 2,
  ABDOMINALES: 3,
  ZUMBA: 4,
  SALSA_BACHATA: 5,
  PILATES_ESPALDA: 6,
  F_INTERVAL: 7,
  FUNCIONAL: 8,
  BODY_PUMP: 9,
  HIT: 10,
  YOGA: 11,
  PILATES: 12,
  HIT_AVANZADO: 13,
  VIKING_BOX: 14,
  ESPALDA_CORE: 15,
  BOXEO_CHAMON: 16,
  KICK_PANEDAS: 17,
  BOXEO_BUENO: 18,
  BOXEO_MARQUINO: 19,
  BOXEO_INFANTIL: 20,
  ESTIRAMIENTOS: 21
};

export const clases = {
//   { // NULL
//     name: "",
//     info: [
//       ""
//     ],
//     url: "",
//     color: "none"
//   },
    [enum_clases.MODELAJE]: {
        name: "Modelaje",
        info: [""],
        url: "",
        color: "#0A3F2C"
    },
    [enum_clases.ESPALDA_SANA]: {
        name: "Espalda sana",
        info: [
        ""
        ],
        url: "",
        color: "#4D9F07"
    },
    [enum_clases.ABDOMINALES]: {
        name: "Abdominales",
        info: [
        ""
        ],
        url: "",
        color: "#2C1378"
    },
    [enum_clases.ZUMBA]: {
        name: "Zumba",
        info: [
        "Zumba Latino es una clase llena de energía y diversión que combina el baile con el ejercicio. Inspirada en ritmos latinos, esta sesión te hará moverte al ritmo de la música mientras mejoras tu resistencia, coordinación y quemas calorías.",
        "El entrenamiento perfecto para quienes buscan ponerse en forma mientras disfrutan de un ambiente vibrante y contagioso.",
        "¡Siente la música, libera el estrés y baila mientras entrenas! 🔥💃🕺"
        ],
        url: "https://youtube.com/shorts/XbKAZngUriQ",
        color: "#046C7A"
    },
    [enum_clases.SALSA_BACHATA]: {
        name: "Salsa + Bachata Fusión",
        info: [
        ""
        ],
        url: "",
        color: "#38933A"
    },
    [enum_clases.PILATES_ESPALDA]: {
        name: "Pilates + Espalda sana",
        info: [
        ""
        ],
        url: "",
        color: "#3E3D6E"
    },
    [enum_clases.F_INTERVAL]: {
        name: "F-Interval",
        info: [
        ""
        ],
        url: "",
        color: "#4B2831"
    },
    [enum_clases.FUNCIONAL]: {
        name: "Funcional",
        info: [
        ""
        ],
        url: "",
        color: "#36300D"

    },
    [enum_clases.BODY_PUMP]: {
        name: "Body Pump",
        info: [
        ""
        ],
        url: "",
        color: "#002210"
    },
    [enum_clases.HIT]: {
        name: "HIT-BOX",
        info: [
        ""
        ],
        url: "",
        color: "#110E1C"
    },
    [enum_clases.YOGA]: {
        name: "Yoga",
        info: [
        ""
        ],
        url: "",
        color: "#363F0A"
    },
    [enum_clases.PILATES]: {
        name: "Pilates",
        info: [
        "Pilates es una disciplina enfocada en fortalecer el cuerpo de manera equilibrada, mejorando la flexibilidad, la postura y el control corporal.",
        "Nuestras clases están diseñadas para personas de todas las edades y niveles, combinando ejercicios de respiración, concentración y precisión para desarrollar fuerza en el core, aliviar tensiones y aumentar la movilidad.",
        "Ideal para quienes buscan un entrenamiento efectivo y de bajo impacto en un ambiente relajante y motivador. ¡Conéctate con tu cuerpo y mente mientras te pones en forma! 💆‍♀️🧘‍♂️"
        ],
        url: "https://youtube.com/shorts/4ZqgpTnG7sE?feature=share",
        color: "#85037A"
    },
    [enum_clases.HIT_AVANZADO]: {
        name: "HIT + Avanzado 45 min",
        info: [
        ""
        ],
        url: "",
        color: "#754F7B"
    },
    [enum_clases.VIKING_BOX]: {
        name: "Viking Box",
        info: [
        "Diseñadas para personas de todas las edades, combina movimientos de baile enérgicos con ejercicios funcionales, al ritmo de música motivadora.",
        "Ideal para mejorar la resistencia, la coordinación y la fuerza mientras disfrutas de un ambiente lleno de energía y diversión.",
        "¡Perfecta para quienes buscan ponerse en forma sin dejar de pasarlo bien! ⚡💪"
        ],
        url: "https://youtu.be/s8HLdON4y00",
        color: "#190A3F"
    },
    [enum_clases.ESPALDA_CORE]: {
        name: "Espalda sana + core",
        info: [
        ""
        ],
        url: "",
        color: "#3F0A21"
    },
    //////////////////////////////////////////////////////////////////////////////
    // BOXEO
    //////////////////////////////////////////////////////////////////////////////
    [enum_clases.BOXEO_CHAMON]: {
        name: "Boxeo",
        info: [
        "Si quieres aprender boxeo de verdad, ¿qué mejor manera que hacerlo con un campeón? Chema Gómez Chamón, uno de nuestros profesores estrella, pone toda su experiencia y pasión en cada entrenamiento para ayudarte a mejorar, sin importar tu nivel.",
        "💥 Clases para todos los niveles",
        "💪 Técnica, resistencia, velocidad y estrategia",
        "🔥 Aprende de un verdadero profesional",
        ],
        url: "https://youtu.be/BHuGHNBE10o",
        color: "#3F0A21"
    },
    [enum_clases.KICK_PANEDAS]: {
        name: "King Boxing / Defensa Personal",
        info: [
            "Diseñada tanto para principiantes como para avanzados, esta sesión te enseñará a dominar los fundamentos del boxeo combinado con técnicas efectivas de defensa personal, útiles para la vida cotidiana.",
            "- Mejora tu resistencia física a través de intensas rutinas de boxeo y entrenamiento de fuerza.",
            "- Desarrolla habilidades defensivas con técnicas rápidas y efectivas, perfeccionadas para situaciones reales.",
            "- Trabajo de coordinación y reflejos, donde aprenderás a moverte estratégicamente, mejorar tus reflejos y precisión en los golpes.",
            "- Entrenamiento mental, fomentando la autoconfianza y disciplina mientras te preparas para defenderte en cualquier situación."
        ],
        url: "https://youtu.be/fwjkrcr3Iow",
        color: "#190A3F"
    },
    [enum_clases.BOXEO_BUENO]: {
        name: "Boxeo",
        info: [
            "Si quieres aprender boxeo de verdad, ¿qué mejor manera que hacerlo con un campeón mundial? José Antonio, uno de nuestros profesores estrella, no solo ha vivido el boxeo en el más alto nivel, sino que también forma parte de la historia del boxeo español.",
            "En su carrera profesional, se convirtió en el noveno campeón mundial de España, siguiendo los pasos de leyendas como Baltasar Berenguer, José Legrá, Pedro Carrasco y muchos más. Ahora, pone toda su experiencia y pasión en cada entrenamiento para ayudarte a mejorar, sin importar tu nivel.",
            "💥 Clases para todos los niveles",
            "💪 Técnica, resistencia, velocidad y estrategia",
            "🔥 Aprende de un verdadero campeón"
        ],
        url: "https://youtu.be/p9N6B0RB1P0",
        color: "#754F7B"
    },
    [enum_clases.BOXEO_MARQUINO]: {
        name: "Boxeo",
        info: [
            "Transforma tu cuerpo y libera tu energía con nuestras clases de boxeo, diseñadas para todos los niveles. Ya sea que estés buscando mejorar tu condición física, aprender defensa personal o simplemente desestresarte, te guiaruemos en un ambiente divertido y motivador.",
            "Experimenta los beneficios del boxeo, desde un aumento en la fuerza y resistencia hasta una mejor coordinación y agilidad. Te ayudaremos a alcanzar tus metas, ya sea que seas principiante o tengas experiencia previa. ¡Prepárate para sudar, golpear con confianza y sentirte más fuerte que nunca!",
            "¿Listo para empezar? Únete a nuestras clases de boxeo y dale un giro a tu entrenamiento.",
        ],
        url: "https://youtu.be/CX6E4xWbxJY",
        color: "#38933A"
    },
    [enum_clases.BOXEO_INFANTIL]: {
        name: "Boxeo infantil",
        info: [
            "Clases de Boxeo Infantil de iniciación para niños y niñas de 5–6 a 12–13 años, pensadas para aprender y disfrutar del deporte.",
            "Entrenamientos basados en técnicas básicas, juegos y trabajo con saco, adaptados a cada edad.",
            "Sin sparring, en un entorno seguro que fomenta la confianza, la disciplina y la diversión. 🥊💪"
        ],
        url: "",
        color: "#363F0A"
    },
    [enum_clases.ESTIRAMIENTOS]: {
        name: "Estiramientos",
        info: [
            "Clase de estiramientos de cuerpo completo enfocada en mejorar la movilidad, la flexibilidad y la recuperación muscular.",
            "Ideal para aliviar tensiones, prevenir lesiones y cuidar el cuerpo tras el entrenamiento."
        ],
        url: "",
        color: "#1E6AE8"
    }
};