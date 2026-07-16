import { days } from "../../constants/lessons/horarios.js";
import Lesson from "./Lesson.jsx";
import { clases } from "@lessons/clases";
import "./ScheduleDesktop.css";

export default function ScheduleDesktop({timetable}) {
    return (
        <section className="schedule-desktop">
            <table className="horario-grid">
                <thead>
                    <tr>
                        {days.map((dia) => (
                            <th key={dia.key} className="day">
                                {dia.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {timetable.map((row, rowIdx) => (
                        <tr key={rowIdx}>
                            {row.map((lesson, lessonIdx) => (
                                <td 
                                    key={lessonIdx}
                                    style={{
                                        background: `
                                            repeating-linear-gradient(
                                                45deg,
                                                rgba(255,255,255,.05) 0px,
                                                rgba(255,255,255,.05) 2px,
                                                transparent 2px,
                                                transparent 6px
                                            ),
                                            ${lesson.lesson_id ? clases[lesson.lesson_id].color : undefined}`,
                                    }}
                                >
                                    <Lesson key={lessonIdx} lesson={lesson}/>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}