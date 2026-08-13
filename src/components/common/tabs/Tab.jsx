import "./Tab.css"
import { NavLink } from "react-router-dom";

export default function Tab({
    to,
    end = false,
    children
}) {
    return (
        <NavLink
            to={to}
            end={end}
            className={({ isActive }) =>
                `tab ${isActive ? "tab-active" : ""}`
            }
        >
            {children}
        </NavLink>
    )
}