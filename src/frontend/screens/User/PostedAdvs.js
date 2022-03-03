import React from 'react'
import RenderAdvs from '../../components/AdvCard/RenderAdvs'

import { connect } from 'react-redux'

//Translation
import { useTranslation } from 'react-i18next'

const PostedAdvs = (props) => {
    const { t } = useTranslation()
    return (
        <div className='p-6 bg-gray-200 flex-1'>
            <h1 className='text-3xl font-bold'>{t("Dashboard.OnlineAds")}</h1>
            <p>{t("Dashboard.PostedAds")}</p>
            <RenderAdvs
                className='max-w-3xl mt-4'
                data={props.postedAds}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    postedAds: state.userMeDuck.postedAds
})

export default connect(mapStateToProps)(PostedAdvs)