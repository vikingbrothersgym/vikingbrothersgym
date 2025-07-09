import "./PromoJefes.css"
import hector from "../assets/jefes/hector.png"
import dani from "../assets/jefes/dani.png"
import logo from "../assets/logo.webp"

const PromoJefes = () => {
  return (
    <div className="promo-container">
      <h1 className="sec-tit"> MEJORA TU ENTRENAMIENTO </h1>
      <div className="jefes-container">
        <div className="jefe-hector">
          <img className="hector-img" src={hector} alt="Héctor" />
          <div className="info-hector">
            <h2> Héctor </h2>
            <p>
              Te enseñará la técnica correcta de cada ejercicio y te motivará en 
              cada repetición para ayudarte a alcanzar tus objetivos. 
            </p>
          </div>
          {/* <img className="vb-izq-img" src={logo} alt="Viking Brothers Gym Logo"/> */}
        </div>
        <div className="jefe-dani">
          <img className="dani-img" src={dani} alt="Dani" />
          <div className="info-dani">
            <h2> Dani </h2>
            <p> 
              Siempre dispuesto a ofrecerte rutinas personalizadas. 
              Sus conocimientos harán que saques tu mejor versión.
            </p>
          </div>
          {/* <img className="vb-der-img" src={logo} alt="Viking Brothers Gym Logo"/> */}
        </div>
      </div>
    </div>
  );
}

export default PromoJefes;
