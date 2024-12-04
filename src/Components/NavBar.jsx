import { useNavigate } from "react-router-dom"
import logo from "../assets/logo_navidad.webp"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../CSS/NavBar.css"
import { useEffect, useState } from "react"
import constants from "../constants/Constants";

const NavBar = () => {
  const navigate = useNavigate()

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  // Añadir o quitar la clase 'no-scroll' al body solo cuando el menu-little está activo
  useEffect(() => {
    if (clicked) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Limpieza: asegurar que la clase se quite si el componente se desmonta
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [clicked]);

  return (
    <div className="navbar">
      <div className="navbar-big">
        <img className="logo" src={logo}/>

        <nav className="links-big">
          <a onClick={() => navigate(constants.root)} href=""> 
            Inicio 
          </a>
          <a onClick={() => navigate(constants.root + "noticias")} href=""> 
            Noticias
          </a>
          <a onClick={() => navigate(constants.root + "clases")} href=""> 
            Clases
          </a>
          <a onClick={() => navigate(constants.root + "informacion")} href=""> 
            Información 
          </a>
          <a href="#contacto"> 
            Contacto 
          </a>
        </nav>
      </div>
      <div className="navbar-little">
        <img className="logo" src={logo}/>

        <div className={`menu-button${clicked ? '-clicked' : ''}`}>
          <a className="flex items-center" onClick={handleClick} ><AiOutlineMenu/></a>
        </div>

        <div className={`close-button${clicked ? '-clicked' : ''}`}>
          <a className="flex items-center" onClick={handleClick} ><AiOutlineClose/></a>
        </div>

      </div>

      <div className={`menu-little${clicked ? '-clicked' : ''}`}>
        <a onClick={() => navigate(constants.root)} href=""> 
          Inicio 
        </a>
        <a onClick={() => navigate(constants.root + "noticias")} href=""> 
          Noticias
        </a>
        <a onClick={() => navigate(constants.root + "clases")} href=""> 
            Clases
        </a>
        <a onClick={() => navigate(constants.root + "informacion")} href=""> 
            Información 
        </a>
        <a href="#contacto" onClick={handleClick}> 
          Contacto 
        </a>

      </div>
    </div>
  )
}

export default NavBar