import React from "react";
import { Link } from "react-router-dom";
import constants from "../../../constants/Constants";
import { FaChevronRight } from "react-icons/fa6";

export const breadcrumbs = {
    "": "Inicio",
    "blog": "Blog",
    "nutricion": "Nutrición",
    "entrenamiento": "Entrenamiento",
    "noticias": "Noticias"
};

export default function Breadcrumbs({
    path,
    className
}) {
    const linkClass = `text-white opacity-90 hover:text-third transition-all transition-ease`;
    console.log(path.length)
    return (
        <div className={`flex items-center gap-4 bg-[#151514] border-solid border-[rgba(255,174,0,.35)] border-1 w-fit rounded-[15px] px-4 ${className}`}>
            <Link className={linkClass} to={`${constants.root}`}>Inicio</Link>
            {path.map((segment, index) => {
                return (
                    <React.Fragment key={index}>
                        <FaChevronRight className="text-[15px]" />

                        {index + 1 == path.length ? (
                            <p className={`${linkClass} font-semibold`}>
                                {segment.label}
                            </p>
                        ) : (
                            <Link 
                                className={`${linkClass}`} 
                                to={`${constants.root + segment.to}`}
                            >
                                {segment.label}
                            </Link>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    )
}