import "./TrainingMuscleGroup.css"

export default function TrainingMuscleGroup({
    name,
    icon: Icon,
    exercises
}) {
    return (
        <article className="muscle-group-article">
            <div className="muscle-group-title">
                <Icon className="text-third text-[25px]"/>
                <h2>{name}</h2>
            </div>

            <ul className="grid gap-4 sm:gap-2 list-none p-4 m-0">
                {exercises.map((exercise, idx) => (
                    <li key={idx} className="exercise">
                        <p className="number">{idx + 1}</p>
                        <div className="flex flex-col lg:flex-row justify-between w-full">
                            <h2 className="text-third my-0">{exercise.name}</h2>
                            <p className="flex text-end my-0 text-2xl font-bold">{exercise.series} x {exercise.reps}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </article>
    )
}