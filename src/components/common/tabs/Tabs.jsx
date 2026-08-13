import "./Tabs.css"

export default function Tabs({children}) {
    return (
        <div className="tabs-container">
            <nav className="tabs">{children}</nav>
        </div>
    )
}