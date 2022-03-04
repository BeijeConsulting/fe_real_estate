import React, { useState } from 'react'
import Toast from '../Toast/Toast'

import { connect } from 'react-redux'

//apis
import { getUserSavedAds, removeUserAdv, userSaveAdv } from '../../../services/frontend/usersApi';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartFull } from '@fortawesome/free-solid-svg-icons'

import { LOCAL_STORAGE_KEYS } from '../../../common/utils/storage';

const AdvFavouriteButton = (props) => {

    const [toast, setToast ] = useState({ type: '', msg:''})

    const addFavourite = (e) => {
        e.stopPropagation()
        let token = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_TOKEN)

        if (!token) {
            setToast({ type: 'error', msg: 'Esegui il Login per Salvare' })
        } else {
            userSaveAdv(props.id, token)
                .then(res => {
                    setToast({ type: 'success', msg: 'Annuncio salvato!' })
                    getUserSavedAds(props.dispatch)
                })
                .catch(e => setToast({ type: 'error', msg: 'Non sono riuscito a salvare' }))
        }

    }


    const removeFavourite = (e) => {
        e.stopPropagation()
        removeUserAdv(props.id)
            .then(res => {
                setToast({ type: 'success', msg: 'Annuncio Rimosso' })
                getUserSavedAds(props.dispatch)
            })
            .catch(e => setToast({ type: 'error', msg: 'Errore, operazione fallita' }))
    }

    let isSaved = props.savedAds.find(ad => ad.id === props.id)

    const renderIcon = () => {
        if (isSaved) {
            return (
                <FontAwesomeIcon
                    onClick={removeFavourite}
                    icon={faHeartFull}
                    className='text-red-500 text-2xl'
                />
            )
        } else {
            return (
                <FontAwesomeIcon
                    onClick={addFavourite}
                    icon={faHeart}
                    className='text-gray-400 text-2xl hover:text-red-400 transition'
                />
            )
        }
    }

    return (
        <>
            <Toast
                clearValues={setToast}
                type={toast.type}
                msg={toast.msg}
            />
            {renderIcon()}
        </>
    )

}

const mapStateToProps = state => ({
    savedAds: state.userMeDuck.savedAds
})

export default connect(mapStateToProps)(AdvFavouriteButton)