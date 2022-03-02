import "./businessUsers.css"
import React, { useState, useEffect } from 'react';
/* react router */
import { Link } from "react-router-dom";

// Import from AntDesign
import { Table } from "antd";
/* API */
import { getUsersBusiness } from '../../../../services/backoffice/businessApi';
import { useTranslation } from "react-i18next";

const BusinessUsers = (props) => {

    const { t } = useTranslation()

    let [state, setState] = useState({
        /* table */
        businessUsers: [],
        isLoading: true,
        totalElements: 0,
    });

    /* definizione colonne */
    let columnsTable = [
        {
            title: t("BoBusiness.Users.Username"),
            dataIndex: '',
        },
        {
            title: t("BoBusiness.Users.Email"),
            dataIndex: '',
        },
        {
            title: t("BoBusiness.Users.Type"),
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

        //API is Missing
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