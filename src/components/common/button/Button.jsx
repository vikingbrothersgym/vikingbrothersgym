import { Link } from 'react-router-dom'
import './Button.css'

export default function Button({
    children,
    target,
    className,
    href
}) {
    return (
        <Link to={href} target={target} className={`button bg-third ${className}`}>
            {children}
        </Link>
    )
}