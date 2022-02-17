import React from 'react'
import PhotosCarousel from '../PhotosCarousel/PhotosCarousel'

// components
import Card from '../UI/Card/Card'

const AdvCard = () => {

    let photos = [
        "https://www.cinematographe.it/wp-content/uploads/2021/01/shrek.jpg",
        "https://www.lascimmiapensa.com/wp-content/uploads/2021/11/Shrek.jpg"
    ]


    let adv = {
        author: "Roberta Brogia"
    }


    return (
        <Card className=' overflow-hidden '>
            <div className='relative'>

                <div className='p-2 backdrop-blur-sm absolute bottom-0 left-0 z-10 right-0 h-18'>
                    <p className='text-white font-bold text-2xl'>Roberta Brogia</p>
                </div>
                <PhotosCarousel
                    photos={photos}
                    className='md:h-60 md:w-96 2xl:h-64 lg:w-96'
                />

            </div>
            <div className='p-2 flex-col flex'>
                <p className='block font-primary font-bold text-2xl '>title</p>
            </div>

        </Card>
    )
}

export default AdvCard