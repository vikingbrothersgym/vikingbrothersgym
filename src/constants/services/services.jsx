import { RiBoxingLine, RiBrainLine, RiCapsuleLine, RiRestaurantLine, RiShieldLine } from "react-icons/ri";

import nutrition from "@assets/informacion/nutrition.webp";
import jose_krav_maga from "@assets/informacion/jose_krav_maga.webp";
import psychology from "@assets/informacion/psychology.webp";
import suple from "@assets/Suple.jpg"
import taekwondo from "@assets/informacion/taekwondo.webp";
import NutritionInfo from "../../components/informacion/nutrition/NutritionInfo";
import PsychologyInfo from "../../components/informacion/psychology/PsychologyInfo";
import KravInfo from "../../components/informacion/krav_maga/KravInfo";
import Taekwondo from "../../components/informacion/taekwondo/Taekwondo";
import SuplementacionInfo from "../../components/informacion/suplementacion/Suplementacion";

export const services = [
    {
        slug: 'nutricion',
        title: 'Nutrición',
        description: 'Cuida tu alimentación y alcanza tus objetivos.',
        image: nutrition,
        path: '/informacion/nutricion',
        icon: <RiRestaurantLine />,
        component: <NutritionInfo />
    },
    {
        slug: 'psicologia',
        title: 'Psicología',
        description: 'Cuida tu bienestar emocional.',
        image: psychology,
        path: '/informacion/psicologia',
        icon: <RiBrainLine />,
        component: <PsychologyInfo />
    },
    {
        slug: 'krav-maga',
        title: 'Krav Magá',
        description: 'Aprende defensa personal y gana seguridad.',
        image: jose_krav_maga,
        path: '/informacion/krav-maga',
        icon: <RiShieldLine />,
        component: <KravInfo />
    },
    {
        slug: 'taekwondo',
        title: 'Taekwondo',
        description: 'Disciplina, técnica y superación personal.',
        image: taekwondo,
        path: '/informacion/taekwondo',
        icon: <RiBoxingLine />,
        component: <Taekwondo />
    },
    {
        slug: 'suplementacion',
        title: 'Suplementación',
        description: 'Complementa tu entrenamiento.',
        image: suple,
        path: '/informacion/suplementacion',
        icon: <RiCapsuleLine />,
        component: <SuplementacionInfo />
    },
];
