import React, { useState } from 'react'

// components
import PhotosCarousel from '../PhotosCarousel/PhotosCarousel'
import Card from "../UI/Card/Card";
import AdvAuthor from "./AdvAuthor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Toast from '../Toast/Toast'

// imgs
import avatar from '../../assets/images/avatar.png'

//utils
import getBuildingType from '../../../common/utils/getBuildingType'
import { userSaveAdv } from '../../../services/frontend/usersApi';
import { LOCAL_STORAGE_KEYS } from '../../../common/utils/storage';

const AdvCard = (props) => {

    let title = getBuildingType(props.rooms) + " in " + props.address

    const [toast, setToast] = useState({ type: '', msg: '' })

    const handleFavouriteClick = (e) => {
        e.stopPropagation()

        let token = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_TOKEN)

        if (!token) {
            setToast({ type: 'error', msg: 'Esegui il Login per Salvare' })
        } else {
            userSaveAdv(props.id, token)
                .then(res => setToast({ type: 'success', msg: 'Annuncio salvato!' }))
                .catch(e => setToast({ type: 'error', msg: 'Non sono riuscito a salvare' }))

        }

    }



    const handleFavouriteRender = () => {
        let isSaved = props.savedAds.find(ad => ad.id === props.id)

        if (isSaved) {
            return (
                <FontAwesomeIcon
                    onClick={(e) => e.stopPropagation()}
                    icon={faHeart}
                    className='text-red-500 text-2xl'
                />
            )
        } else {
            return (
                <FontAwesomeIcon
                    onClick={handleFavouriteClick}
                    icon={faHeart}
                    className='text-gray-400 text-2xl hover:text-red-400 transition'
                />
            )
        }
    }

    return (
        <>
            <Toast
                type={toast.type}
                msg={toast.msg}
            />
            <Card className={'flex-col md:flex-row overflow-hidden mb-6 shadow ' + props.className}>
                <div className='relative'>
                    {/* BLURRED USER SECTION */}
                    <AdvAuthor
                        onClick={props.onAuthorClick}
                        avatarUrl={avatar}
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
                    <div className='flex justify-between'>
                        <p className='font-primary font-semibold text-xl text-gray-700'>{props.city}</p>
                        {handleFavouriteRender()}
                    </div>

                    <p className='block font-primary font-bold text-3xl '>{title}</p>
                    <p className='font-primary'>
                        {!!props.description
                            ? props.description?.slice(0, 90) + ".."
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

export default AdvCard;
