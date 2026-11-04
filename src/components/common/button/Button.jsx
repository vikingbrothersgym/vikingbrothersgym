import './Button.css'

export default function Button({
    children,
    target,
    className,
    href
}) {
    return (
        <a href={href} target={target} className={`button bg-third ${className}`}>
            {children}
        </a>
    )
}