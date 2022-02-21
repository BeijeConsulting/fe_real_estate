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

    let arrowsStyle = `rounded-full hover:bg-opacity-50 py-1 px-4 transition bg-opacity-20 text-white text-2xl bg-black m-2`

    const nextPhoto = () => {

        if ((currentPhoto + 1) < maxPhotos) {
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
                <div  onClick={prevPhoto}  className={arrowsStyle + (currentPhoto === 0 ? " cursor-not-allowed" : " cursor-pointer ") }>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div onClick={nextPhoto}  className={arrowsStyle + (currentPhoto === (maxPhotos - 1) ? " cursor-not-allowed" : " cursor-pointer ") }>
                    <FontAwesomeIcon icon={faAngleRight} />
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