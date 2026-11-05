import { Link, useNavigate } from "react-router-dom"
import logo from "@assets/logo.webp"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./NavBar.css"
import { useEffect, useState } from "react"
import constants from "@constants/Constants";

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
    <header className="navbar">
      <div className="navbar-big">
        <img className="logo relative l-0" src={logo}/>

        <nav className="links-big">
          <Link to={"/"} href=""> 
            INICIO 
          </Link>
          <Link to={"/blog"} href=""> 
            BLOG
          </Link>
          <Link to={"/clases"} href=""> 
            CLASES
          </Link>
          <Link to={"/informacion"} href=""> 
            INFORMACIÓN 
          </Link>
          <a href="#contacto"> 
            CONTACTO 
          </a>
        </nav>
      </div>
      <div className="navbar-little">
        <img className="logo" src={logo}/>

        <div className={`menu-button${clicked ? '-clicked' : ''}`}>
          <Link className="flex items-center" onClick={handleClick} ><AiOutlineMenu/></Link>
        </div>

        <div className={`close-button${clicked ? '-clicked' : ''}`}>
          <Link className="flex items-center" onClick={handleClick} ><AiOutlineClose/></Link>
        </div>

      </div>

      <div className={`menu-little${clicked ? '-clicked' : ''}`}>
        <Link to={"/"} href=""> 
          INICIO 
        </Link>
        <Link to={"/blog"} href=""> 
          BLOG
        </Link>
        <Link to={"/clases"} href=""> 
          CLASES
        </Link>
        <Link to={"/informacion"} href=""> 
          INFORMACIÓN 
        </Link>
        <a href="#contacto" onClick={handleClick}> 
          CONTACTO 
        </a>
      </div>
    </header>
  )
}

export default NavBar