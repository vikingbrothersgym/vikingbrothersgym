import React from "react";
import Slider from "react-slick";
import "../CSS/Testimonios.css"

const Testimonios = () => {
    const data = [
        {
            image: "/vikingbrothersgym/src/assets/testimonios/1.jpg",
            nombre: "Papito",
            texto: "Le encanta el gimnasio"
        },
        {
            image: "/vikingbrothersgym/src/assets/testimonios/1.jpg",
            nombre: "Pepito",
            texto: "Cada día está más fuerte el chaval"
        },
        {
            image: "/vikingbrothersgym/src/assets/testimonios/1.jpg",
            nombre: "Pipito",
            texto: "Ha bajado 20 kilos"
        },
        {
            image: "/vikingbrothersgym/src/assets/testimonios/1.jpg",
            nombre: "Popito",
            texto: "Lleva 3 años con nosotros"
        },
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
    return (
        <div className="test-container">
            <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
             href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>

            {/* <Slider {...settings}> */}
            {data.map((tupla, index) => (
                <div className="test" key={index}>
                    <div >
                        <img className="im-test" src={tupla.image}></img>
                    </div>
                    <div>
                        <h1> {tupla.nombre} </h1>
                        <p> {tupla.texto} </p>
                    </div>
                </div>
            ))}
            {/* </Slider> */}
        </div>
    )
}

export default Testimonios