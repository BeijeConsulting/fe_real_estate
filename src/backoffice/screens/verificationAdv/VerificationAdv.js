import "./verificationAdv.css";
import 'antd/dist/antd.css' //Css Antdesign

import React, { useState, useEffect } from 'react';
/* react router */
import { Link } from "react-router-dom";
/* redux */
import { connect } from "react-redux";
// Import from AntDesign
import { Table, Input, Tag, Space } from "antd";
/* API */
import { getPendingAdvertaisement } from "../../../services/backoffice/advertisementApi";

const VerificationAdv = (props) => {
    /* definizione colonne */
    let columns = [
        {
            title: 'Username',
            dataIndex: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Tipo',
            dataIndex: 'commercialId',
            render: (text) => {
                let color = ""
                let type = ""
                if (text !== undefined && text === true) {
                    color = "green"
                    type = "BUSINESS"
                } else {
                    color = "blue"
                    type = "USER"
                }
                return (
                    <Tag color={color}>{type}</Tag>
                )
            },
            responsive: ["sm"]
        },

        {
            title: '',
            dataIndex: 'actions',
            render: (text, record) =>
                <Link to={"/admin/user/" + record.key}>Scheda utente</Link>
            ,
        }
    ]

    let [state, setState] = useState({
        advertisements: [],
        columns: columns,
        isLoading: true,
        totalElements: 0
    });
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
            totalElements: 0
        })
    }


    return (
        <div className="container-VerificationAdv">
            io sono  VerificationAdv
            <div className="container-table-VerificationAdv" >
                <Table dataSource={state.advertisements}
                    columns={columns}
                    loading={state.isLoading}
                    tableLayout="fixed"
                    scroll={{ scrollToFirstRowOnChange: true }}
                    pagination={{ showSizeChanger: false, total: state.totalElements, hideOnSinglePage: true }}
                />
            </div>

        </div>
    )
}
const mapStateToProps = (state) => ({
    admin: state.adminDuck.admin
})
export default connect(mapStateToProps)(VerificationAdv);

