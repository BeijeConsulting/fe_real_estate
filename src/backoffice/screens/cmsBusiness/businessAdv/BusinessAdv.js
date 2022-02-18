import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// css
import "./businessAdv.css"
// ant design

// axios
import { getAdvBusinessName } from '../../../../services/backoffice/advertisementApi';

//redux
import { connect } from "react-redux";

// react router
import { useParams } from "react-router-dom";

const BusinessAdv = (props) => {
    // hooks
    const [advBusiness, setAdvBusiness] = useState([]);

    //router
    const param = useParams();
    console.log('Param', param);

    //axios
    // const getListAdvForBusiness = async () => {
    //     let resultApi = await getAdvBusinessName(props.admin.token, param.id)
    //     let formatData = [formatDataFromApi(resultApi[0])]
    //     setAdv(formatData);
    // }

    // fuunc search bar

    // func List

    //useEffect

    useEffect(() => {

    }, []);

    return (
        <>
            {/* seachbar */}

            {/* list ADV for Business name */}

        </>
    )
}

// proptypes
BusinessAdv.propTypes = {}

//redux
const mapStateToProps = (state) => ({
    admin: state.adminDuck.admin
})
export default connect(mapStateToProps)(BusinessAdv)


