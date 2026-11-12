import ImageGalleryModule from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

import "./Carrusel.css"

const ImageGallery = ImageGalleryModule.default ?? ImageGalleryModule;

const Carrusel = ({ images }) => {
    return (
        <div className="carrusel">
            <ImageGallery
                items={images}
                showBullets={true}
                slideInterval={3000}
                slideDuration={1000}
                autoPlay={true}
            />
        </div>
    )
}

export default Carrusel