import "./verificationAdv.css";
import 'antd/dist/antd.css' //Css Antdesign

import React, { useState, useEffect } from 'react';
/* react router */
import { Link } from "react-router-dom";
/* redux */
import { connect } from "react-redux";
// Import from AntDesign
import { Table, Input, Tag, Space, Button } from "antd";
/* API */
import { getPendingAdvertaisement } from "../../../services/backoffice/advertisementApi";

const VerificationAdv = (props) => {

    let [state, setState] = useState({
        advertisements: [],
        isLoading: true,
        totalElements: 0,
    });
    /* definizione colonne */
    let columns = [
        {
            title: 'Bulding Type',
            dataIndex: 'buildingType',
        },
        {
            title: 'advType',
            dataIndex: 'advType',
        },
        {
            title: 'City',
            dataIndex: 'city',
        },
        {
            title: 'Published Date Time',
            dataIndex: 'publishedDateTime',
            render: (text) => {
                if (text === null)
                    return (<span style={{ color: "red" }}>[missing data]</span>)
            }
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (text, record) =>
                <Link key={Math.random()} to={"/admin/advertisement/" + record.id}>Scheda advertisement</Link>
            ,
        }
    ]
    /* ComponentDidMount */
    useEffect(() => {
        sincAdv()
    }, [])

    /* sincronize  advertisements*/
    const sincAdv = async () => {
        let resultAPI = await getPendingAdvertaisement(props.admin.token)
        setState({
            advertisements: resultAPI,
            isLoading: false,
            totalElements: 0,
        })
    }

    /* methods to move between sections  */
    const GoToChecker = () => {

    }
    const GoToAdmin = () => {

    }


    return (
        <div className="container-VerificationAdv">
            verificationAdv
            < div className="container-table-VerificationAdv" >
                <Table dataSource={state.advertisements}
                    columns={columns}
                    loading={state.isLoading}
                    tableLayout="fixed"
                    scroll={{ scrollToFirstRowOnChange: true }}
                    pagination={{ showSizeChanger: false, total: state.totalElements, hideOnSinglePage: true }}
                />
            </div>

        </div >
    )
}
const mapStateToProps = (state) => ({
    admin: state.adminDuck.admin
})
export default connect(mapStateToProps)(VerificationAdv);

