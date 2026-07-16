import ScheduleDesktop from "./ScheduleDesktop";
import ScheduleMobile from "./ScheduleMobile";

export default function Schedule({timetable}) {
    return (
        <>
            <div className="hidden lg:block">
                <ScheduleDesktop timetable={timetable} />
            </div>

            <div className="block lg:hidden">
                <ScheduleMobile timetable={timetable} />
            </div>
        </>
    );
}