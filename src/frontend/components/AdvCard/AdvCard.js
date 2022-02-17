import React from 'react'
import PhotosCarousel from '../PhotosCarousel/PhotosCarousel'

// components
import Card from '../UI/Card/Card'

const AdvCard = () => {
    
    let photos = [
        "https://www.cinematographe.it/wp-content/uploads/2021/01/shrek.jpg",
        "https://www.lascimmiapensa.com/wp-content/uploads/2021/11/Shrek.jpg"
    ]
    
    
    
    return (
        <Card className=''>
            <div>
                <PhotosCarousel 
                    photos={photos}
                    className='h-full w-40'
                />
            </div>
            <div>
                info
            </div>

        </Card>
    )
}

export default AdvCard