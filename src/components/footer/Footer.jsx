import React from "react";
import logo from "@assets/logo.webp"
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import constants from  "../../constants/Constants.jsx"
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {

    const navLinkClass = `text-white no-underline hover:text-orange-500 transition`;
    const navLinks = [
        { text: "Inicio", sectionLink: "" },
        { text: "Noticias", sectionLink: "noticias" },
        { text: "Clases", sectionLink: "clases" },
        { text: "Información", sectionLink: "informacion" },
    ];

    const socialMediaClass = `text-3xl text-white no-underline hover:text-orange-500 transition`;
    const socialMediaLinks = [
        { icon: <FaInstagram/>, link: "https://www.instagram.com/vikingbrothersgym/" },
        { icon: <FaYoutube/>, link: "https://www.youtube.com/@VikingBrothersGym" },
        { icon: <FaTiktok/>, link: "https://www.tiktok.com/@vikingbrothersgym" },
    ];

    const contactContent = [
        { icon: <BsFillTelephoneFill/>, text: "876 65 08 41" },
        { icon: <MdEmail/>, text: "vbrothersgym@gmail.com" },
        { icon: <FaLocationDot/>, text: "C/ Miraflores, 12-14, Zaragoza" },
    ]

    return (
        <footer className="bg-[#101010] text-white p-4 flex flex-col justify-center lg:flex-row lg:items-start lg:justify-center lg:gap-10">
            <div className="flex items-center justify-center gap-4">
                <img src={logo} className="w-1/2 max-w-40"/>
                <h1>
                    VIKING <br/>
                    BROTHERS <br/>
                    <span className="text-third">GYM</span>
                </h1>
            </div>
            <div className="flex flex-col justify-center sm:flex-row sm:items-start sm:justify-evenly sm:gap-10">
                <nav>
                    <h3>ENLACES</h3>
                    <ul>
                        {navLinks.map((navLink, idx) => (
                            <li key={idx}>
                                <Link 
                                    className={navLinkClass}
                                    to={constants.root + navLink.sectionLink}
                                > 
                                    {navLink.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div>
                    <h3>HORARIOS</h3>

                    <h4 className="mb-0">Lunes - Viernes</h4>
                    <p className="mt-0">7:00 - 22:00</p>

                    <h4 className="mb-0">Sábados, Domingos y festivos</h4>
                    <p className="mt-0">9:00 - 14:00</p>

                    <h4> Abiertos los 365 días del año</h4>
                </div>
                <nav>
                    <h3>CONTACTO</h3>

                    <ul>
                        {contactContent.map((contactRow, idx) => (
                            <p key={idx} className="flex gap-2 items-center">
                                {contactRow.icon}
                                {contactRow.text}
                            </p>
                        ))}
                    </ul>

                    <h3 className="mt-10 mb-0">SÍGUENOS</h3>
                    <ul className="mt-0 flex gap-10">
                        {socialMediaLinks.map((socialMedia, idx) => (
                            <li key={idx}>
                                <a
                                    className={socialMediaClass}
                                    href={socialMedia.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {socialMedia.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer