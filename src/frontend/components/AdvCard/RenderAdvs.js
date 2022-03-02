import React from 'react'
import AdvCard from './AdvCard'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


//img
import noAdv from '../../assets/illustrations/noAdvFound.svg'

import { connect } from 'react-redux'

const RenderAdvs = (props) => {

    let { lang } = useParams()
    let navigate = useNavigate()

    const handleNavigate = (dest) => () => {
        navigate(dest)
    }


    const handleRender = (adv, key) => {
        return (
            <div className={props.horizontal && 'inline-block mr-4'}>
            <AdvCard
                key={'advard-' + key + adv.id}
                savedAds={props.savedAds}
                id={adv.id}
                city={adv.city}
                address={adv.address}
                squareMeters={adv.areaMsq}
                description={adv?.longDescription}
                roomNumber={adv.rooms}
                price={adv.price}
                onClick={handleNavigate(`/${lang}/adv/${adv.id}`)}
                onAuthorClick={handleNavigate(`/${lang}/users-section/public-profile/${adv.seller.username}`)}
                authorName={adv.seller.username}
            />
            </div>
        )
    }

    return (
        <div className={props.className + ( props.horizontal && " scrolling-wrapper" ) }>
            {props.data.map(handleRender)}

            {/* no advs found */}
            { props.data.length <= 0 &&
                <div className='max-w-3xl mx-auto  mt-10 '>
                    <img className='h-60 w-60 mx-auto' src={noAdv} />
                    <p className='text-center text-3xl font-bold'>Non ho trovato annunci</p>
                </div>
            }
        </div>
    )
}

RenderAdvs.defaultProps = {
    data: [],
    className: ''
}

const mapStateToProps = state => ({
    savedAds: state.userMeDuck.savedAds
})

export default connect(mapStateToProps) (RenderAdvs)