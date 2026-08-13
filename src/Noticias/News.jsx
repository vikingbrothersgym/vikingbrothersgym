/* Plantilla para una nueva noticia */
/*
id: X,
image: "/vikingbrothersgym/news/newX.png",
title: "",
date: "",
text: [""],
*/

import {
    LuSun,
    LuSwords,
    LuShield,
    LuDrum,
    LuFlame,
    LuMoon,
    LuCircleCheck,
} from "react-icons/lu";

import desayuno_19 from "@assets/blog/nutrition/19_desayuno.webp"
import comida_19 from "@assets/blog/nutrition/19_comida.webp"
import cena_19 from "@assets/blog/nutrition/19_cena.webp"

import { category } from "../constants/news/news"

const news = [
    {
        id: 19,
        category: category.nutrition,
        image: "/vikingbrothersgym/news/new19.webp",
        title: <>Dieta del <span className="text-third">Guerrero Vikingo</span></>,
        date: "13/08/2026",
        text: [
            "La alimentación es tan importante como el entrenamiento. Esta dieta está diseñada para potenciar tu fuerza, aumentar tu masa muscular y mantener tu disciplina día tras día.",
            "Sigue el plan como un verdadero guerrero y lleva tu alimentación al siguiente nivel."
        ],
        meals: [
            {
                number: "01",
                icon: LuSun,
                title: "Desayuno del Jarl",
                subtitle: "Comienza el día",
                foods: [
                    "6 huevos enteros",
                    "150 g de salmón ahumado",
                    "Aguacate",
                    "Café solo o té",
                ],
                image: desayuno_19,
            },
            {
                number: "02",
                icon: LuSwords,
                title: "Media mañana",
                foods: [
                    "250 g de queso fresco batido o yogur griego",
                    "30 g de nueces",
                    "1 lata de atún al natural",
                ],
            },
            {
                number: "03",
                icon: LuDrum,
                title: "Banquete del Guerrero",
                foods: [
                    "300 g de carne roja magra o venado",
                    "Ensalada verde abundante",
                    "Aceite de oliva virgen extra",
                    "Verduras asadas",
                ],
                image: comida_19,
            },
            {
                number: "04",
                icon: LuShield,
                title: "Antes de la batalla",
                subtitle: "Pre-entreno",
                foods: [
                    "200 g de pechuga de pollo",
                    "1 pieza de fruta",
                    "Agua abundante",
                ],
            },
            {
                number: "05",
                icon: LuFlame,
                title: "Después de la batalla",
                subtitle: "Post-entreno",
                foods: [
                    "Batido de proteína",
                    "200 g de pescado blanco o pollo",
                ],
            },
            {
                number: "06",
                icon: LuMoon,
                title: "Cena del Clan",
                foods: [
                    "300 g de salmón, merluza o carne magra",
                    "Espárragos, brócoli o verduras verdes",
                    "Aguacate o frutos secos",
                ],
                image: cena_19,
            },
        ]
    },
    {
        id: 18,
        category: category.news,
        image: "/vikingbrothersgym/news/new18.webp",
        title: "Cancelación del Seminario Femenino de Defensa Personal",
        date: "21/01/2026",
        text: [
            "Informamos que el seminario femenino de defensa personal previsto para mañana ha sido cancelado por motivos personales.",
            "Lamentamos las molestias que esto pueda ocasionar y agradecemos vuestra comprensión.",
            "Próximamente comunicaremos una nueva fecha para la realización del seminario.",
            "Para cualquier duda o consulta, podéis contactar con nosotros directamente."
        ]
    },
    {
        id: 17,
        category: category.news,
        image: "/vikingbrothersgym/news/new17.webp",
        title: "¡Nuevas clases de Boxeo Infantil a partir de febrero!",
        date: "21/01/2026",
        text: [
            "En febrero comenzamos con una nueva actividad pensada para los más pequeños: Boxeo Infantil de Iniciación, dirigida a niños y niñas de entre 5–6 años hasta 12–13 años.",
            "Las clases estarán enfocadas en el aprendizaje progresivo del boxeo, siempre de forma segura y adaptada a cada edad. Se trabajarán técnicas básicas, coordinación y condición física a través de juegos, ejercicios dinámicos y trabajo con saco, fomentando la diversión y la confianza. ❌ No habrá sparring, priorizando en todo momento la seguridad, el respeto y el desarrollo personal de los niños.",
            "🗓 Horario: Miércoles de 17:30 a 18:30",
            "🥊 ¿Qué trabajamos en las clases? Técnicas de aprendizaje, juegos y saco (sin sparring)",
            "💶 Precio: 25 € al mes",
            "Una actividad ideal para que los más pequeños se inicien en el deporte, aprendan disciplina y disfruten del ejercicio en un entorno controlado y motivador.",
            "📩 Plazas limitadas",
            "Para más información o inscripciones, contacta con nosotros o pásate por el gimnasio.",
            "¡Te esperamos para empezar febrero a lo grande! 💪"
        ]
    },
    {
        id: 16,
        category: category.news,
        image: "/vikingbrothersgym/news/new16.webp",
        title: "🥋 Seminario de Krav Magá en Viking Brother Gym – 13 de Diciembre",
        date: "08/12/2025",
        text: [
            "El próximo 13 de diciembre, Viking Brother Gym acogerá un seminario exclusivo de Krav Magá, una disciplina enfocada en la defensa personal femenina y el desarrollo de habilidades para prevenir y afrontar situaciones de peligro real.",
            "La actividad será dirigida por José A. Ramos, Instructor y Árbitro Nacional de la Federación Española de Lucha (F.E.L.), reconocido por su amplia experiencia en técnicas de defensa personal, especialmente frente a amenazas como agresiones con cuchillo o agarres.",
            "🕒 Horario: De 10:00 h a 12:30 h",
            "📍 Lugar: Viking Brother Gym, C/ Miraflores 12-14, Zaragoza",
            "💶 Precio: 25 €",
            "📋 Inscripciones: En la recepción del gimnasio.",
            "Este seminario está orientado especialmente a mujeres, pero es abierto a todo el público interesado en mejorar su autoestima, su preparación física y su capacidad de respuesta ante situaciones de riesgo.",
            "¡No te lo pierdas! Una oportunidad única para entrenar con un profesional de primer nivel y aprender técnicas reales de defensa que pueden marcar la diferencia."
        ]
    },
    {
        id: 15,
        category: category.news,
        image: "/vikingbrothersgym/news/new15.webp",
        title: "🥋 Seminario de Krav Magá en Viking Brother Gym – 18 de Octubre",
        date: "20/09/2025",
        text: [
            "El próximo 18 de octubre, Viking Brother Gym acogerá un seminario exclusivo de Krav Magá, una disciplina enfocada en la defensa personal femenina y el desarrollo de habilidades para prevenir y afrontar situaciones de peligro real.",
            "La actividad será dirigida por José A. Ramos, Instructor y Árbitro Nacional de la Federación Española de Lucha (F.E.L.), reconocido por su amplia experiencia en técnicas de defensa personal, especialmente frente a amenazas como agresiones con cuchillo o agarres.",
            "🕒 Horario: De 10:00 h a 13:00 h",
            "📍 Lugar: Viking Brother Gym, C/ Miraflores 12-14, Zaragoza",
            "💶 Precio: 30 €",
            "📋 Inscripciones: En la recepción del gimnasio.",
            "Este seminario está orientado especialmente a mujeres, pero es abierto a todo el público interesado en mejorar su autoestima, su preparación física y su capacidad de respuesta ante situaciones de riesgo.",
            "¡No te lo pierdas! Una oportunidad única para entrenar con un profesional de primer nivel y aprender técnicas reales de defensa que pueden marcar la diferencia."
        ]
    },
    {
        id: 14,
        category: category.news,
        image: "/vikingbrothersgym/news/new14.webp",
        title: "🥊 ¡Vuelven las Clases de Boxeo en Viking Brothers Gym!",
        date: "31/08/2025",
        text: [
            "Nos alegra anunciar que a partir del lunes 1 de septiembre se reanudan las clases de Boxeo con nuestro profesor Fran Marquino, quien regresa para seguir formando y motivando a todos los apasionados de este deporte.",
            "📅 Horarios de las clases:",
            "- Lunes y Miércoles: 19:00 – 20:00",
            "- Martes y Jueves: 19:00 – 20:00 y 20:30 – 21:30",
            "El boxeo es una de las disciplinas más completas: mejora la resistencia, la fuerza, la coordinación y la disciplina mental. Tanto si eres principiante como si ya tienes experiencia, encontrarás un entrenamiento adaptado a tu nivel.",
            "👉 ¡No pierdas la oportunidad de entrenar con un gran profesional y llevar tu boxeo al siguiente nivel en Viking Brothers Gym!",
        ]
    },
    {
        id: 13,
        category: category.news,
        image: "/vikingbrothersgym/news/new13.webp",
        title: "🥋💥¡Nuevo! Krav Magá y Defensa Personal",
        date: "30/08/2025",
        text: [
            "🥋💥 ¡Nuevas Clases de Krav Magá y Defensa Personal en Viking Brothers Gym! 💥🥋",
            "Nos complace anunciar que a partir de la segunda quincena de septiembre incorporamos a nuestra programación las clases de Krav Magá y Defensa Personal, impartidas por José Ramos, profesor federado y experto en estas disciplinas.",
            "📅 Días: Lunes y Miércoles",
            "⏰ Horario: 10:00 a 11:00",
            "El Krav Magá es un sistema de defensa personal reconocido por su efectividad y practicidad en situaciones reales. Una oportunidad única para mejorar tu seguridad, confianza y condición física con la guía de un instructor cualificado.",
            "👉 ¡Reserva tu plaza y forma parte de esta nueva experiencia en Viking Brothers Gym!"
        ]
    },
    {
        id: 12,
        category: category.news,
        image: "/vikingbrothersgym/news/new12.webp",
        title: "Descanso Yoga: Volvemos en Septiembre",
        date: "10/07/2025",
        text: [
            "Querida comunidad de Viking Brothers Gym:",
            "Les informamos que durante los meses de verano no habrá clases de yoga, ya que nuestro equipo tomará un merecido descanso.",
            "⛱️ Pausa de verano: Julio y agosto",
            "📅 Reanudación de clases: 2 de septiembre",
            "Agradecemos su comprensión y esperamos que disfruten del verano. ¡Nos vemos renovados en septiembre para seguir fortaleciendo cuerpo y mente juntos!",
            "El equipo de Viking Brothers Gym 🧘‍♂️💪"
        ]
    },
    {
        id: 11,
        category: category.news,
        image: "/vikingbrothersgym/news/new11.webp",
        title: "🥋 Seminario de Krav Magá en Viking Brother Gym – 21 de Junio",
        date: "22/05/2025",
        text: [
            "El próximo 21 de junio, Viking Brother Gym acogerá un seminario exclusivo de Krav Magá, una disciplina enfocada en la defensa personal femenina y el desarrollo de habilidades para prevenir y afrontar situaciones de peligro real.",
            "La actividad será dirigida por José A. Ramos, Instructor y Árbitro Nacional de la Federación Española de Lucha (F.E.L.), reconocido por su amplia experiencia en técnicas de defensa personal, especialmente frente a amenazas como agresiones con cuchillo o agarres.",
            "🕒 Horario: De 10:00 h a 12:30 h",
            "📍 Lugar: Viking Brother Gym, C/ Miraflores 12-14, Zaragoza",
            "💶 Precio: 20 €",
            "📋 Inscripciones: En la recepción del gimnasio.",
            "Este seminario está orientado especialmente a mujeres, pero es abierto a todo el público interesado en mejorar su autoestima, su preparación física y su capacidad de respuesta ante situaciones de riesgo.",
            "¡No te lo pierdas! Una oportunidad única para entrenar con un profesional de primer nivel y aprender técnicas reales de defensa que pueden marcar la diferencia."
        ]
    },
    {
        id: 10,
        category: category.news,
        image: "/vikingbrothersgym/news/new10.webp",
        title: "💪🔥 ¡La Batalla Ha Comenzado en Viking Brothers Gym! 🔥💪",
        date: "25/03/2025",
        text: [
            "En Viking Brothers Gym, cada entrenamiento es una oportunidad para superarte. Nos enfocamos en brindar el mejor ambiente, equipo y motivación para que logres tus objetivos físicos y mentales.",
            "🔹 Entrenamiento para Todos 🏋️‍♂️",
            "No importa tu nivel, aquí encontrarás el espacio perfecto para mejorar tu fuerza, resistencia y bienestar.",
            "🔹 Unidos por la Disciplina ⚔️",
            "Forma parte de una comunidad que te impulsa a dar lo mejor de ti en cada sesión.",
            "🔹 Siente el Espíritu Viking 🛡️",
            "Sumérgete en una atmósfera llena de energía y determinación, donde cada entrenamiento es un paso más hacia tu mejor versión.",
            "👉 ¿Listo para el desafío? Ven a entrenar con nosotros y forja tu propio camino. ¡Nos vemos en Viking Brothers Gym! 💀🔥",
        ]
    },
    {
        id: 9,
        category: category.news,
        image: "/vikingbrothersgym/news/new9.webp",
        title: "¡No dejes pasar tu Drakkar!",
        date: "02/03/2025",
        text: [
            "Si has llegado hasta aquí, estás de suerte.",
            "En nuestro Templo te ofrecemos una gran variedad de servicios: sala de musculación, clases dirigidas, entrenadores personales que te llevarán al máximo nivel, y Boxeo y Kick Boxing.",
            "Pero esto no es lo mejor: ¡hazlo por tan solo 27.50€ al mes!",
            "¿De verdad estás dudando? Consulta para más informaciín en esta web y/o acércate al gimnasio para contarte más sobre él."
        ],
    },
    // {
    //     id: 8,
    //     image: "/vikingbrothersgym/news/new8.png",
    //     title: "Boxeo, Kick Boxing, Kick Boxing Infantil y Defensa Personal",
    //     date: "19/01/2025",
    //     text: [
    //         "¿Qué hay mejor que empezar el año con grandes propósitos?",
    //         "En Viking Brothers Gym tenemos muchas maneras para que las cumplas y una de ellas es con nuestras clases de Boxeo, Kick Boxing, Kick Boxing Infantil y Defensa Personal.",
    //         "Nuestros excelentes profes estarán encantados de recibirte, tengas el nivel que tengas.",
    //         "Consulta en esta web horarios y precios o acércate al gimnasio para contarte más sobre nuestras clases."
    //     ],
    // },
    // {
    //     id: 7,
    //     image: "/vikingbrothersgym/news/new7.jpeg",
    //     title: "¡NUEVO! Kick boxing infantil",
    //     date: "11/11/2024",
    //     text: [
    //         "Si tienes entre 6 y 14 años estás de suerte, ¡comienzan las clases de Kick boxing infantil!",
    //         "Tenemos el lujo de contar con Álex Clandestino para poder aprender de la mejor manera las bases del Kick boxing.",
    //         "Los horarios son los viernes de 19:00-20:00 y 20:15-21:15.",
    //         "Consulta en esta web y/o ven a preguntarnos para saber más. ¡Apúntate a nuestras clases y conviértete en un Vikingo!"
    //     ],
    // },
    {
        id: 5,
        category: category.news,
        image: "/vikingbrothersgym/news/new5.jpeg",
        title: "Nuestra campeona de boxeo del templo",
        date: "11/11/2024",
        text: [
            "Tenemos el placer de tener con nosotros a Andrea Marquino.",
            "Esta campeona vikinga es un diamante del boxeo aragonés.",
            "¿Sabías que también entrena y da clases junto con su padre en el Viking Brothers Gym?",
            "Consulta en esta web y/o ven a preguntarnos para saber más. ¡Apúntate a nuestras clases tengas el nivel que tengas!"
        ],
    },
    {
        id: 1,
        category: category.news,
        image: "/vikingbrothersgym/news/new1.png",
        title: "Web Viking Brothers Gym Zaragoza",
        date: "13/08/2024",
        text: [
            "En Viking Brothers Gym, hemos creado esta página web para ofrecerte una experiencia completa y conveniente, reflejando la energía y la dedicación que nos caracteriza.",
            "  - Explora nuestras Clases y Servicios: Desde entrenamientos de fuerza y resistencia hasta clases especializadas, tenemos una amplia variedad de opciones diseñadas para todos los niveles y objetivos.",
            "  - Conoce a Nuestros Entrenadores: Nuestro equipo de profesionales está aquí para guiarte en cada paso del camino. Navega por nuestra sección de Clases para descubrir más sobre las personas que estarán contigo en cada repetición, motivándote a alcanzar tus metas.",
            "  - Planifica Tu Visita: Nuestra web te permite reservar clases, consultar horarios, e incluso planificar entrenamientos personalizados. Todo lo que necesitas está a solo un clic de distancia.",
            "  - Mantente Informado: Accede a las últimas noticias, promociones y eventos especiales directamente desde nuestra página. Ya sea una nueva clase, un reto de fitness o una oferta exclusiva, serás el primero en enterarte.",
            "  - Únete a Nuestra Comunidad: Conecta con nosotros a través de nuestras redes sociales y mantente en contacto con otros miembros. Comparte tus progresos y sé parte de una comunidad que se apoya mutuamente.",
            "Tu viaje hacia un estilo de vida más saludable comienza aquí. Explora nuestra web, conoce nuestros servicios y déjanos ayudarte a alcanzar tus objetivos de fitness con pasión y profesionalismo."
        ],
    },
]

export default news