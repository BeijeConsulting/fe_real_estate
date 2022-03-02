import "./Dashboard.css"
import React from 'react'
import RenderAdvs from "../../components/AdvCard/RenderAdvs"

// REDUX
import { connect } from 'react-redux'
import SpinngerScreen from "../../../common/components/funcComponents/SpinnerScreen/SpinnerScreen"

const Dashboard = (props) => {


    return (
        <div className='p-6 bg-gray-200 flex-1'>
            <p>@{props.userMe?.username}</p>
            <h1 className='text-3xl font-bold'>Ciao {props.userMe?.name} 👋 </h1>

            {/*  latest saved ads */}
            <p className='text-3xl font-semibold mt-10 mb-4'>Ultimi Annunci Salvati</p>
            <RenderAdvs horizontal data={props.savedAds?.slice(0,3)} />
            
            <p className='text-3xl font-semibold mt-10 mb-4'>Ultimi Annunci Pubblicati</p>
            <RenderAdvs horizontal data={props.postedAds?.slice(0,3)} />

        </div>
    )
}


const mapStateToProps = state => ({
    userMe: state.userMeDuck.userMe,
    savedAds: state.userMeDuck.savedAds,
    postedAds: state.userMeDuck.postedAds
})

export default connect(mapStateToProps)(Dashboard); 
