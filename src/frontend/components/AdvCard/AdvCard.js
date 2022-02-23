import React from 'react'
import { useNavigate } from 'react-router-dom'
import PhotosCarousel from '../PhotosCarousel/PhotosCarousel'

// components
import Card from '../UI/Card/Card'
import AdvAuthor from './AdvAuthor'

const AdvCard = (props) => {


    return (
        <Card className=' flex-col md:flex-row overflow-hidden mb-6 shadow'>
            <div className='relative flex-1'>
                {/* BLURRED USER SECTION */}
                <AdvAuthor
                    avatarUrl={props.authorAvatarUrl}
                    displayName={props.authorName}
                />

                {/* PHOTOS */}
                <PhotosCarousel
                    photos={props.photos}
                    className='md:h-60 md:w-96 2xl:h-64 lg:w-96'
                />
            </div>

            <div onClick={props.onClick} className=' relative bg-white hover:bg-gray-50 transition cursor-pointer  p-4 flex-col flex flex-1'>
                {/* INFO-RIGHT */}
                <p className='font-primary font-semibold text-xl text-gray-700'>{props.city}</p>
                <p className='block font-primary font-bold text-3xl '>{props.title}</p>
                <p className='font-primary'>
                    {!!props.description
                        ? props.description?.slice(0, 90) + ".."
                        : "Descrizione non disponibile"
                    }
                </p>

                <p className='mt-2 text-right text-xl font-bold font-primary'>{!!props.roomNumber ? props.roomNumber : 0} locali • {props.squareMeters} mq</p>
                <p className='bottom-4 right-6 absolute text-4xl font-primary font-bold'>{props.price.toLocaleString()} <span className='text-lg'>€</span></p>
            </div>
        </Card>
    )
}

AdvCard.defaultProps = {
    id: 0,
    title: 'BILOCALE IN PERIFERIA',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elite Vestibulum ultricies suscipit rhoncus. Curabitur sed feugiat mi, sed mollis tortor. Duis aliquet dapibus nulla non venenatis. Duis rutrum mauris vitae lacus sagittis facilisis. Mauris vehicula nulla quis interdum tempor. ",
    city: 'Milano',
    roomNumber: 2,
    squareMeters: 10,
    price: 1000,
    photos: [
        "https://www.cinematographe.it/wp-content/uploads/2021/01/shrek.jpg",
        "https://www.lascimmiapensa.com/wp-content/uploads/2021/11/Shrek.jpg"
    ],
    authorName: "Jessica Beije",
    authorAvatarUrl: "https://bit.ly/3GYboVJ"
}

export default AdvCard