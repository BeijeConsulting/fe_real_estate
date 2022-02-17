import React, { useState } from 'react'

const PhotosCarousel = (props) => {

    const [ currentPhoto, setCurrentPhoto ] = useState(props.photos[0])

    return (
        <div className={props.className}>
            <img src={`${currentPhoto}`} height={"100%"} width={"100%"} />
        </div>
    )
}

PhotosCarousel.defaultProps = {
    photos: ['1', '2'],
    className:"h-20 w-20"
}

export default PhotosCarousel