import { useEffect, useState } from "react"
import { days } from "../../constants/lessons/horarios";
import { clases } from "../../constants/lessons/clases";
import Lesson from "./Lesson";
import './ScheduleMobile.css'

export default function ScheduleMobile({timetable}) {
    const [lessonsByDay, setLessonsByDay] = useState([]); 

    useEffect(() => {
        const res = days.map(() => []);
        timetable.forEach((lessonRow, rowIdx) => {
            days.forEach((day, dayIdx) => {
                res[dayIdx][rowIdx] = lessonRow.find((lesson) => lesson.day == day.key);
            });
        });

        setLessonsByDay(res);
    }, []);

    return (
        <section className="schedule-mobile">
            {lessonsByDay && lessonsByDay.map((dayLessons, dayIdx) => (
                <div key={dayIdx}>
                    <div className="day">
                        <p>{days[dayIdx].label}</p>
                    </div>

                    <ul className="day-lessons">
                        {dayLessons
                            .filter(lesson => lesson.lesson_id)
                            .map((lesson, lessonIdx) => (
                                <li key={`${dayIdx}-${lesson.lesson_id}-${lesson.start}`}
                                    style={{
                                        background: `
                                            repeating-linear-gradient(
                                                45deg,
                                                rgba(255,255,255,.05) 0px,
                                                rgba(255,255,255,.05) 2px,
                                                transparent 2px,
                                                transparent 6px
                                            ),
                                            ${lesson.lesson_id 
                                                ? clases[lesson.lesson_id].color 
                                                : undefined}`,
                                    }}
                                >
                                    <Lesson lesson={lesson} />
                                </li>
                            ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}