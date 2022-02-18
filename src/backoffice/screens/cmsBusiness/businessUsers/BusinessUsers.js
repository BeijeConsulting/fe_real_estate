import "./businessUsers.css"
import React, { useState, useEffect } from 'react';
/* react router */
import { Link } from "react-router-dom";
/* redux */
import { connect } from "react-redux";
// Import from AntDesign
import { Table, Input, Tag, Space, Button } from "antd";
/* API */
import { getUsersBusiness } from '../../../../services/backoffice/businessApi';
const BusinessUsers = props => {

    let [state, setState] = useState({
        /* table */
        businessUsers: [],
        isLoading: true,
        totalElements: 0,
    });
    /* definizione colonne */
    let columnsTable = [
        {
            title: 'Username',
            dataIndex: '',
        },
        {
            title: 'Email',
            dataIndex: '',
        },
        {
            title: 'Tipo',
            dataIndex: '',
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (text, record) =>
                <Link key={Math.random()}>Scheda User</Link>
            ,
        }
    ]
    /* ComponentDidMount */
    useEffect(() => {
        sincBusinessUsers()
    }, [])
    /* sincronize BusinessUsers */
    const sincBusinessUsers = async () => {
        let resultAPI = await getUsersBusiness()
        console.log(resultAPI)
        /* ant design wanted a key inside an object to work */
        /*         resultAPI = resultAPI.map(item => {
                    item = {
                        ...item,
                        key: item.id
                    }
                    return item;
                })
                setState({
                    ...state,
                    businessUsers: resultAPI,
                    isLoading: false
                }) */
    }
    return (
        <div className='container-BusinessUsers' >
            <Table
                dataSource={state.businessUsers}
                columns={columnsTable}
                loading={state.isLoading}
                tableLayout="fixed"
                scroll={{ scrollToFirstRowOnChange: true }}
                pagination={{ showSizeChanger: false, total: state.totalElements, hideOnSinglePage: true }}
            />
        </div>
    )
}


export default BusinessUsers