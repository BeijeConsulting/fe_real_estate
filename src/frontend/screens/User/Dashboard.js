import "./Dashboard.css"
import React from 'react'
import RenderAdvs from "../../components/AdvCard/RenderAdvs"

// REDUX
import { connect } from 'react-redux'

//translation
import { useTranslation } from 'react-i18next';
const Dashboard = (props) => {
    const { t } = useTranslation()

    return (
        <div className=' bg-gray-200 flex-1'>
            <div className='p-6'>
                <p>@{props.userMe?.username}</p>
                <h1 className='text-3xl font-bold'>{t("Dashboard.Hello")} {props.userMe?.name} 👋 </h1>
            </div>

            {/*  latest saved ads */}
            <p className='ml-4 text-3xl font-semibold mt-10 mb-4'>{t("Dashboard.LatestSavedAds")}</p>
            <RenderAdvs horizontal data={props.savedAds?.slice(0, 3)} />

            <p className='ml-4 text-3xl font-semibold mt-10 mb-4'>{t("Dashboard.LatestPostedAds")}</p>
            <RenderAdvs horizontal data={props.postedAds?.slice(0, 3)} />

        </div>
    )
}


const mapStateToProps = state => ({
    userMe: state.userMeDuck.userMe,
    savedAds: state.userMeDuck.savedAds,
    postedAds: state.userMeDuck.postedAds
})

export default connect(mapStateToProps)(Dashboard);
