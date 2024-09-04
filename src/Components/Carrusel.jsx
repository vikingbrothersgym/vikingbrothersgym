import React, { useEffect, useRef, useState } from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

import "../CSS/Carrusel.css"

const Carrusel = ({images}) => {
    return (
        <div className='carrusel'>
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