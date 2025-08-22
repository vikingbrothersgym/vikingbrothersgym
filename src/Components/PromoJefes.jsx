import "./PromoJefes.css"
import hector from "../assets/jefes/hector.png"
import dani from "../assets/jefes/dani.png"

const PromoJefes = () => {
  return (
    <section className="promo-container">
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
        </div>
      </div>
      <h2 className="info-jefes-movil text-third"> Héctor y Dani </h2>
      <p className="info-jefes-movil text-white text-center px-3">
        Nuestros entrenadores personales y jefes del templo son especialistas de
        cada uno de los ejercicios que te llevarán a conseguir tu mejor versión.
        ¡Siempre dispuestos a personalizar tus entrenamientos!
      </p>
    </section>
  );
}

export default PromoJefes;
