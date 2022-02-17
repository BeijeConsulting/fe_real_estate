import React, { useState } from 'react'

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";


const PhotosCarousel = (props) => {

    const [currentPhoto, setCurrentPhoto] = useState(0)
    let maxPhotos = props.photos.length

    let arrowsStyle = "rounded-full py-1 px-4 text-white text-3xl cursor-pointer backdrop-blur-sm m-2"

    const nextPhoto = () => {

        if ((currentPhoto + 1) < maxPhotos) {
            console.log(currentPhoto + 1, maxPhotos)
            setCurrentPhoto(currentPhoto + 1)
        }

    }

    const prevPhoto = () => {
        if (currentPhoto > 0) {
            setCurrentPhoto(currentPhoto - 1)
        }

    }

    return (
        <div className={" relative select-none"}>

            {/*  PREV & NEXT ICON */}
            <div className='absolute inset-0 flex justify-between items-center'>
                <div className={arrowsStyle}>
                    <FontAwesomeIcon onClick={prevPhoto} icon={faAngleLeft} />
                </div>
                <div className={arrowsStyle}>
                    <FontAwesomeIcon onClick={nextPhoto} icon={faAngleRight} />
                </div>
            </div>

            {/* IMAGE */}
            <img
                className={props.className + " object-cover"}
                src={props.photos[currentPhoto]}
                height={"100%"}
                width={"100%"}
            />
        </div>
    )
}

PhotosCarousel.defaultProps = {
    photos: ['1', '2'],
    className: "h-20 w-20"
}

export default PhotosCarousel