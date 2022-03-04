import React from 'react'
import AdvCard from './AdvCard'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

//translation
import { useTranslation } from 'react-i18next';

//img
import noAdv from '../../assets/illustrations/noAdvFound.svg'

import { connect } from 'react-redux'

const RenderAdvs = (props) => {
    const { t } = useTranslation()
    let { lang } = useParams()
    let navigate = useNavigate()

    const handleNavigate = (dest) => () => {
        navigate(dest)
    }


    const handleRender = (adv, key) => {
        return (
            <div className={props.horizontal && ' whitespace-normal ml-4 max-w-sm md:max-w-3xl inline-block mr-4'}>
                <AdvCard
                    
                    advType={adv.advType}
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
                    business={adv.seller.business}
                />
            </div>
        )
    }

    return (
        <div className={props.className + (props.horizontal && " scrolling-wrapper")}>
            {props.data.map(handleRender)}

            {/* no advs found */}
            {props.data.length <= 0 &&
                <div className='max-w-3xl mx-auto  mt-10 '>
                    <img alt='not-found' className='h-60 w-60 mx-auto' src={noAdv} />
                    <p className='text-center text-3xl font-bold'>{t("Dashboard.AdsNotFound")}</p>
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

export default connect(mapStateToProps)(RenderAdvs)