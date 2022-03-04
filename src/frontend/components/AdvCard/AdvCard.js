import React from 'react'

// components
import PhotosCarousel from '../PhotosCarousel/PhotosCarousel'
import Card from "../UI/Card/Card";
import AdvAuthor from "./AdvAuthor";

// imgs
import avatar from '../../assets/images/avatar.png'

//utils
import getBuildingType from '../../../common/utils/getBuildingType'
import types from '../../utils/typesTranslator'


// redux
import { connect } from 'react-redux'
import AdvFavouriteButton from './AdvFavouriteButton';

const AdvCard = (props) => {

    let title =  getBuildingType(props.rooms) + " in " + types.adv(props.advType)  +  " a " + props.address 


    return (
        <>
            <Card className={'flex-col md:flex-row  overflow-hidden mb-6 shadow ' + props.className}>
                <div className='relative'>
                    {/* BLURRED USER SECTION */}
                    <AdvAuthor
                        onClick={props.onAuthorClick}
                        avatarUrl={avatar}
                        displayName={props.authorName}
                        business={props.business}
                    />

                    {/* PHOTOS */}
                    <PhotosCarousel
                        photos={props.photos}
                        className='h-48 md:h-60 md:w-96 2xl:h-64 2xl:w-96'
                    />
                </div>

                <div onClick={props.onClick} className='relative max-w-md text-clip bg-white hover:bg-gray-50 transition cursor-pointer  p-4 flex-col flex flex-1'>
                    {/* INFO-RIGHT */}
                    <div className='flex justify-between'>
                        <p className='font-primary font-semibold text-xl text-gray-700'>{props.city}</p>
                        <AdvFavouriteButton id={props.id} />
                    </div>

                    <p className='block font-primary font-bold text-3xl'>{title}</p>
                    <p className='font-primary'>
                        {!!props.description
                            ? props.description.slice(0, 90) + ".."
                            : "Descrizione non disponibile"
                        }
                    </p>

                    <p className='mt-2 text-right text-xl font-bold font-primary'>{!!props.rooms ? props.rooms : 0} locali • {props.squareMeters} mq</p>

                    <div className='flex-1 flex justify-end items-end'>
                        <p className='text-4xl font-primary font-bold'>{props.price?.toLocaleString()} <span className='text-lg'>€</span></p>
                    </div>
                </div>
            </Card>
        </>
    )
}

AdvCard.defaultProps = {
    id: 0,
    title: 'title',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elite Vestibulum ultricies suscipit rhoncus. Curabitur sed feugiat mi, sed mollis tortor. Duis aliquet dapibus nulla non venenatis. Duis rutrum mauris vitae lacus sagittis facilisis. Mauris vehicula nulla quis interdum tempor. ",
    city: 'city',
    rooms: 2,
    squareMeters: 10,
    price: 1000,
    photos: [
        "https://pwm.im-cdn.it/image/1091856063/cover-m-c.jpg",
        "https://q-xx.bstatic.com/xdata/images/hotel/840x460/190767694.jpg?k=a57de774e2f0cc3aec83bc2c03940ac029e25254b5c263294d6f65a585b01a8a&o="
    ],
    authorName: "Nascosto",
    authorAvatarUrl: "https://bit.ly/3GYboVJ",
    savedAds: []
}

export default connect() (AdvCard);
