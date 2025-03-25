/* Plantilla para una nueva noticia */
/*
id: X,
image: "/vikingbrothersgym/news/newX.png",
title: "",
date: "",
text: [""],
*/

const news = [
    {
        id: 10,
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
    {
        id: 8,
        image: "/vikingbrothersgym/news/new8.png",
        title: "Boxeo, Kick Boxing, Kick Boxing Infantil y Defensa Personal",
        date: "19/01/2025",
        text: [
            "¿Qué hay mejor que empezar el año con grandes propósitos?",
            "En Viking Brothers Gym tenemos muchas maneras para que las cumplas y una de ellas es con nuestras clases de Boxeo, Kick Boxing, Kick Boxing Infantil y Defensa Personal.",
            "Nuestros excelentes profes estarán encantados de recibirte, tengas el nivel que tengas.",
            "Consulta en esta web horarios y precios o acércate al gimnasio para contarte más sobre nuestras clases."
        ],
    },
    {
        id: 7,
        image: "/vikingbrothersgym/news/new7.jpeg",
        title: "¡NUEVO! Kick boxing infantil",
        date: "11/11/2024",
        text: [
            "Si tienes entre 6 y 14 años estás de suerte, ¡comienzan las clases de Kick boxing infantil!",
            "Tenemos el lujo de contar con Álex Clandestino para poder aprender de la mejor manera las bases del Kick boxing.",
            "Los horarios son los viernes de 19:00-20:00 y 20:15-21:15.",
            "Consulta en esta web y/o ven a preguntarnos para saber más. ¡Apúntate a nuestras clases y conviértete en un Vikingo!"
        ],
    },
    {
        id: 6,
        image: "/vikingbrothersgym/news/new6.jpeg",
        title: "El 9º campeón español del mundo (y nuestro profesor), José Antonio López Bueno",
        date: "11/11/2024",
        text: [
            "José Antonio es uno de nuestros profesores de boxeo del Viking Brothers Gym.",
            "En su carrera profesional, se convirtió en el noveno campeón mundial del boxeo español tras: Baltasar Berenguer, José Legrá, Pedro Carrasco, Perico Fernández, Miguel Velázquez, José Manuel Durán, Cecilio Lastra y Javier Castillejo.",
            "¿Qué puede haber mejor que entrenar y aprender de un campeón como José Antonio?",
            "Consulta en esta web y/o ven a preguntarnos para saber más. ¡Apúntate a nuestras clases tengas el nivel que tengas!"
        ],
    },
    {
        id: 5,
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
        id: 4,
        image: "/vikingbrothersgym/news/new4.jpeg",
        title: "El cachirulo más vikingo con tu matrícula",
        date: "25/09/2024",
        text: [
            "Como todos los meses de octubre sacamos a lucir nuestro cachirulo.",
            "Pero este año, los vikingos de Viking Brothers Gym resaltarán con el cachirulo más chulo de todos.😛",
            "Apúntate este mes y llévate gratis el cachirulo de Odín."
        ],
    },
    {
        id: 1,
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