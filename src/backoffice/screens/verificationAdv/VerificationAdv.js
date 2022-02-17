import "./verificationAdv.css";
import 'antd/dist/antd.css' //Css Antdesign

import React, { useState, useEffect } from 'react';
/* FuncComponet */
import TagComp from "../../componets/funcComponets/tagComp/TagComp";
/* react router */
import { Link } from "react-router-dom";
/* redux */
import { connect } from "react-redux";
// Import from AntDesign
import { Table, Input, Tag, Space, Button } from "antd";
/* API */
import { getPendingAdvertaisement, getRefusedAdvertaisement } from "../../../services/backoffice/advertisementApi";

const VerificationAdv = (props) => {

    let [state, setState] = useState({
        /* table Chaker */
        advertisementsChecker: [],
        isLoadingChecker: true,
        totalElementsChecker: 0,

        /* table Admin  */
        advertisementsAdmin: [],
        isLoadingAdmin: true,
        totalElementsAdmin: 0,

        /* flags tables */
        goToAdminFlag: null,
        goToCheckerFlag: null,
    });
    /* definizione colonne */
    let columnsChecker = [
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
                if (text === null) {
                    return (<span style={{ color: "red" }}>[missing data]</span>)
                } else {
                    return (<span >[{text}]</span>)
                }
            },
            responsive: ["sm"]
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (text, record) =>
                <Link key={Math.random()} to={"/admin/advertisement/" + record.id}>Scheda advertisement</Link>
            ,
        }
    ]
    let columnsAdmin = [
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
                if (text === null) {
                    return (<span style={{ color: "red" }}>[missing data]</span>)
                } else {
                    return (<span >[{text}]</span>)
                }
            },
            responsive: ["sm"]
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
        goToChecker()
    }, [])

    /* sincronize  advertisements*/
    const sincAdvChecker = async () => {
        let resultAPIChecker = await getPendingAdvertaisement(props.admin.token)
        setState({
            ...state,
            advertisementsChecker: resultAPIChecker,
            isLoadingChecker: false,
            goToCheckerFlag: true,
            goToAdminFlag: false,
        })
    }
    const sincAdvAdmin = async () => {
        let resultAPIAdmin = await getRefusedAdvertaisement(props.admin.token)
        setState({
            ...state,
            advertisementsAdmin: resultAPIAdmin,
            isLoadingAdmin: false,
            goToCheckerFlag: false,
            goToAdminFlag: true,
        })
    }

    /* methods to move between sections  */
    const goToChecker = () => {
        setState({
            ...state,
            goToCheckerFlag: true,
            goToAdminFlag: false,
        })
        sincAdvChecker()

    }
    const goToAdmin = () => {
        setState({
            ...state,
            goToCheckerFlag: false,
            goToAdminFlag: true,
        })
        sincAdvAdmin()
    }


    return (
        <>
            <div className="container-tags">
                <TagComp
                    key={Math.random()}
                    clickTag={goToChecker}
                    label={"Pending"} refClass={state.goToCheckerFlag === true ? "selected" : "unselected"} />
                <TagComp
                    key={Math.random()}
                    clickTag={goToAdmin}
                    label={"Refused"} refClass={state.goToAdminFlag === true ? "selected" : "unselected"} />
            </div>
            <div className="container-VerificationAdv">
                < div className="container-table-VerificationAdv" >
                    {
                        state.goToCheckerFlag &&
                        <Table dataSource={state.advertisementsChecker}
                            columns={columnsChecker}
                            loading={state.isLoadingChecker}
                            tableLayout="fixed"
                            scroll={{ scrollToFirstRowOnChange: true }}
                            pagination={{ showSizeChanger: false, total: state.totalElementsChecker, hideOnSinglePage: true }}
                        />
                    }
                    {
                        state.goToAdminFlag &&
                        <Table dataSource={state.advertisementsAdmin}
                            columns={columnsAdmin}
                            loading={state.isLoadingAdmin}
                            tableLayout="fixed"
                            scroll={{ scrollToFirstRowOnChange: true }}
                            pagination={{ showSizeChanger: false, total: state.totalElementsAdmin, hideOnSinglePage: true }}
                        />
                    }
                </div>

            </div >
        </>
    )
}
const mapStateToProps = (state) => ({
    admin: state.adminDuck.admin
})
export default connect(mapStateToProps)(VerificationAdv);

