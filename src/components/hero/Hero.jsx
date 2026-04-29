import logo from "@assets/logo.webp";
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>

            <div className="hero-content animate-fadeIn">
                <img
                    className="hero-icon"
                    src={logo}
                />
                <h1>
                    VIKING BROTHERS <br/> 
                    <span>GYM</span>
                </h1>
                <p className='max-w-[50%]'>Forja tu mejor versión</p>
                <a href="#servicios" className="hero-btn">Empieza hoy</a>
            </div>
        </section>
    )
}

export default Hero;