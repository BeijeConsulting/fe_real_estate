//React imports
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
//css import
import "./businessDetails.css"
//Antd imports
import { Button, List } from "antd";
import "antd/dist/antd.css";
//Api imports
import { getBusinessById } from "../../../../services/backoffice/businessApi";
//i18n import
import { useTranslation } from "react-i18next";

const BusinessDetails = (props) => {

    let params = useParams()
    let navigate = useNavigate()
    let { t } = useTranslation()
    let businessData = {}
    let data = []

    const [state, setState] = useState({
        data: [],
        isLoading: true,
    })

    const getBusinessData = async () => {
        businessData = await getBusinessById(params.id, props.admin.token)
        data = [businessData]
        setState({ data, isLoading: false })
    }

    const clickUpdate = () => {
        navigate("/admin/business/" + params.id + "/details/update-details")

    }

    useEffect(() => {
        getBusinessData()
        //getAddress()
    }, [])


    return (
        <div className='business-detail-container' >
            <div className='business-info-box'>
                <List
                    className="business-info-list"
                    size="small"
                    header={<h4 className="info-profile-title">{t("BoBusiness.Detail.Info")}</h4>}
                    itemLayout="vertical"
                    loading={state.isLoading}
                    dataSource={state.data}
                    renderItem={item => (
                        <List.Item
                            className="info-profile-items"
                        >
                            <List.Item.Meta
                                title={t("BoBusiness.Detail.Name")}
                                description={item.businessName}
                            />
                            <List.Item.Meta
                                title={t("BoBusiness.Detail.Vat")}
                                description={item.vatNumber}
                            />

                        </List.Item>
                    )}
                />
            </div>

            <div className='manager-profile-box'>
                <List
                    className="contacts-list"
                    header={<h3 className='contacts-title'>{t("BoBusiness.Manager.Info")}</h3>}
                    itemLayout="vertical"
                    loading={state.isLoading}
                    dataSource={state.data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={t("BoBusiness.Manager.Name")}
                                description={item.refName}
                            />
                            <List.Item.Meta
                                title={t("BoBusiness.Manager.Surname")}
                                description={item.refSurname}
                            />
                            <List.Item.Meta
                                title={t("BoBusiness.Manager.Phone")}
                                description={item.phone}
                            />
                        </List.Item>
                    )}
                />
            </div>
            <Button
                className='button-business'
                type="primary"
                onClick={clickUpdate}
            >{t("BoBusiness.Button")}</Button>
        </div >
    )
}

const mapStateToProps = (state) => (
    {
        admin: state.adminDuck.admin
    }
)

export default connect(mapStateToProps)(BusinessDetails)