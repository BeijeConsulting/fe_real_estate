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
import { Table, Input, Tag, Space, Button, Alert } from "antd";
/* API */
import { getPendingAdvertaisement, getRefusedAdvertaisement } from "../../../services/backoffice/advertisementApi";
/* utils */
import utilsMethods from "../../../common/utils/utilsMethods";
import { useTranslation } from "react-i18next";

const VerificationAdv = (props) => {

    const { t } = useTranslation()

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
            title: t("BoVerification.Verification.BuildingType"),
            dataIndex: 'buildingType',
        },
        {
            title: t("BoVerification.Verification.AdvType"),
            dataIndex: 'advType',
        },
        {
            title: t("BoVerification.Verification.City"),
            dataIndex: 'city',
        },
        {
            title: t("BoVerification.Verification.PublishedDate"),
            dataIndex: 'publishedDateTime',
            render: (text) => {
                if (text === null) {
                    return (<span style={{ color: "red" }}>[missing data]</span>)
                } else {
                    text = utilsMethods.ModdingData(text)
                    return (<span >{text}</span>)
                }
            },
            responsive: ["sm"]
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (text, record) =>
                <Link key={Math.random()} to={"/admin/advertisement/" + record.id}>{t("BoVerification.Verification.Card")}</Link>
            ,

        }
    ]
    let columnsAdmin = [
        {
            title: t("BoVerification.Verification.BuildingType"),
            dataIndex: 'buildingType',
        },
        {
            title: t("BoVerification.Verification.AdvType"),
            dataIndex: 'advType',
        },
        {
            title: t("BoVerification.Verification.City"),
            dataIndex: 'city',
        },
        {
            title: t("BoVerification.Verification.PublishedDate"),
            dataIndex: 'publishedDateTime',
            render: (text) => {
                if (text === null) {
                    return (<span style={{ color: "red" }}>[missing data]</span>)
                } else {
                    text = utilsMethods.ModdingData(text)
                    return (<span >{text}</span>)
                }
            },
            responsive: ["sm"]
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (text, record) =>
                <Link key={Math.random()} to={"/admin/advertisement/" + record.id}>{t("BoVerification.Verification.Card")}</Link>
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
        /* ant design wanted a key inside an object to work */
        resultAPIChecker = resultAPIChecker.map(item => {
            item = {
                ...item,
                key: item.id
            }
            return item;
        })
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
        /* ant design wanted a key inside an object to work */
        resultAPIAdmin = resultAPIAdmin.map(item => {
            item = {
                ...item,
                key: item.id
            }
            return item;
        })

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
                    label={t("BoVerification.Verification.Pending")} refClass={state.goToCheckerFlag === true ? "selected" : "unselected"} />
                {
                    props.admin.permission?.includes("ADMIN") &&
                    <TagComp
                        key={Math.random()}
                        clickTag={goToAdmin}
                        label={t("BoVerification.Verification.Refused")} refClass={state.goToAdminFlag === true ? "selected" : "unselected"} />
                }
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

