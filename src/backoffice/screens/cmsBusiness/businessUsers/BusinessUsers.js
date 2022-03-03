import "./businessUsers.css"
import React, { useState, useEffect } from 'react';
/* react router */
import { Link, useParams } from "react-router-dom";

// Import from AntDesign
import { Table } from "antd";
/* API */
import { getUsersBusiness } from '../../../../services/backoffice/businessApi';
import { useTranslation } from "react-i18next";

import { connect } from "react-redux";

const BusinessUsers = (props) => {
    const params = useParams()

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
            dataIndex: 'username',
        },
        {
            title: t("BoBusiness.Users.Email"),
            dataIndex: 'email',
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (text, record) =>
                <Link to={"/admin/user/" + record.id + "/details"}>{t("BoUsers.Users.FactsCard")}</Link>
            ,
        }
    ]
    /* ComponentDidMount */
    useEffect(() => {
        sincBusinessUsers()
    }, [])

    /* sincronize BusinessUsers */
    const sincBusinessUsers = async () => {
        let resultAPI = await getUsersBusiness(params.id, props.admin.token)
        /* ant design wanted a key inside an object to work */
        /*                  resultAPI = resultAPI.map(item => {
                            item = {
                                ...item,
                                key: item.id
                            }
                            return item;
                        }) */
        setState({
            ...state,
            businessUsers: resultAPI,
            isLoading: false
        })
    }
    return (
        <div className="BusinessUsers-background">
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
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        admin: state.adminDuck.admin
    }
)

export default connect(mapStateToProps)(BusinessUsers)