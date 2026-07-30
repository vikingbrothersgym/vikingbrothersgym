import './Button.css'

export default function Button({
    children,
    className,
    href
}) {
    return (
        <a href={href} className={`button bg-third ${className}`}>
            {children}
        </a>
    )
}