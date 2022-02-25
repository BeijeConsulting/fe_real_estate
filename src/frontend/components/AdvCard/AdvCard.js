import React from 'react'
import PhotosCarousel from '../PhotosCarousel/PhotosCarousel'

// components
import Card from '../UI/Card/Card'
import AdvAuthor from './AdvAuthor'

import getBuildingType from '../../../common/utils/getBuildingType'

const AdvCard = (props) => {

    let title = getBuildingType(props.roomNumber) + " in " + props.address

    return (
        <Card className='flex-col md:flex-row overflow-hidden mb-6 shadow'>
            <div className='relative'>
                {/* BLURRED USER SECTION */}
                <AdvAuthor
                    onClick={props.onAuthorClick}
                    avatarUrl={props.authorAvatarUrl}
                    displayName={props.authorName}
                />

                {/* PHOTOS */}
                <PhotosCarousel
                    photos={props.photos}
                    className='md:h-60 md:w-96 2xl:h-64 2xl:w-96'
                />
            </div>

            <div onClick={props.onClick} className='relative bg-white hover:bg-gray-50 transition cursor-pointer  p-4 flex-col flex flex-1'>
                {/* INFO-RIGHT */}
                <p className='font-primary font-semibold text-xl text-gray-700'>{props.city}</p>
                <p className='block font-primary font-bold text-3xl '>{title}</p>
                <p className='font-primary'>
                    {!!props.description
                        ? props.description?.slice(0, 90) + ".."
                        : "Descrizione non disponibile"
                    }
                </p>

                <p className='mt-2 text-right text-xl font-bold font-primary'>{!!props.roomNumber ? props.roomNumber : 0} locali • {props.squareMeters} mq</p>
                
                <div className='flex-1 flex justify-end items-end'>
                <p className='text-4xl font-primary font-bold'>{props.price.toLocaleString()} <span className='text-lg'>€</span></p>
                </div>
            </div>
        </Card>
    )
}

AdvCard.defaultProps = {
    id: 0,
    title: 'title',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elite Vestibulum ultricies suscipit rhoncus. Curabitur sed feugiat mi, sed mollis tortor. Duis aliquet dapibus nulla non venenatis. Duis rutrum mauris vitae lacus sagittis facilisis. Mauris vehicula nulla quis interdum tempor. ",
    city: 'city',
    roomNumber: 2,
    squareMeters: 10,
    price: 1000,
    photos: [
        "https://pwm.im-cdn.it/image/1091856063/cover-m-c.jpg",
        "https://www.lascimmiapensa.com/wp-content/uploads/2021/11/Shrek.jpg"
    ],
    authorName: "Nascosto",
    authorAvatarUrl: "https://bit.ly/3GYboVJ"
}

export default AdvCard