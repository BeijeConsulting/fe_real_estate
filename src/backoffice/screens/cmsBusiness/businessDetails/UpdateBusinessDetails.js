//React imports 
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
//css imports
import "./updateBusinessDetails.css"
//antd imports
import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";
//api imports
import { getBusinessById, updateBusinessInfo } from "../../../../services/backoffice/businessApi";
//i18n imports
import { useTranslation } from "react-i18next";

const UpdateBusinessDetails = (props) => {

    let navigate = useNavigate()
    let params = useParams()
    let { t } = useTranslation()
    const [form] = Form.useForm();

    let businessData = {}
    let updatedData = {}

    const [state, setState] = useState(
        {
            businessData: null, 
            updatedData: {}
        }
    )

    const getBusinessData = async () => {
        businessData = await getBusinessById(params.id, props.admin.token)
        updatedData = {
            businessName: businessData.businessName,
        }
        setState({ updatedData: updatedData, businessData: businessData })
    }

    const handleName = (e) => {
        let name = e.target.value
        updatedData = { ...state.updatedData, name: name }
        setState({ ...state, updatedData: updatedData })
    }

    const handleVatNumber = (e) => {
        let vatNumber = e.target.value
        updatedData = { ...state.updatedData, vatNumber: vatNumber }
        setState({ ...state, updatedData: updatedData })
    }


    const handleManagerName = (e) => {
        let refName = e.target.value
        updatedData = { ...state.updatedData, refName: refName }
        setState({ ...state, updatedData: updatedData })
    }

    const handleManagerSurname = (e) => {
        let refSurname = e.target.value
        updatedData = { ...state.updatedData, refSurname: refSurname }
        setState({ ...state, updatedData: updatedData })
    }

    const handleManagerPhone = (e) => {
        let phone = e.target.value
        updatedData = { ...state.updatedData, phone: phone }
        setState({ ...state, updatedData: updatedData })
    }

    const updateData = async () => {
        await updateBusinessInfo(params.id, state.updatedData, props.admin.token)
    }

    const handleClick = () => {
        updateData()
        navigate("/admin/business/details")
    }

    useEffect(() => {
        getBusinessData()
        form.resetFields()

    }, [])

    return (

        <>{state.businessData !== null &&

            <div className="update-business-container" >
                <h2 className="update-title">{t("BoBusiness.UpdateBusiness.Update")}</h2>
                <Form
                    className="update-business-form"
                    layout={"horizontal"}
                    form={form}
                    initialValues={state.businessData}
                >
                    <div className="update-business-info">
                        <Form.Item className="form-item" name="businessName" label={t("BoBusiness.UpdateBusiness.BusinessName")}>
                            <Input onChange={handleName} placeholder={t("BoBusiness.UpdateBusiness.BusinessName")} />
                        </Form.Item>
                        <Form.Item className="form-item" name="vatNumber" label={t("BoBusiness.UpdateBusiness.Vat")}>
                            <Input onChange={handleVatNumber} placeholder={t("BoBusiness.UpdateBusiness.Vat")} />
                        </Form.Item>
                        <Form.Item className="form-item" name="address" label={t("BoBusiness.UpdateBusiness.Address")}>
                            <Input placeholder="Inserisci indirizzo" />
                        </Form.Item>
                    </div>
                    <div className="update-business-contacts">
                        <Form.Item className="form-item" name="refName" label={t("BoBusiness.UpdateBusiness.Manager.Name")}>
                            <Input onChange={handleManagerName} type="email" placeholder="inserisci nome" />
                        </Form.Item>
                        <Form.Item className="form-item" name="refSurname" label={t("BoBusiness.UpdateBusiness.Manager.Surname")}>
                            <Input onChange={handleManagerSurname} type="email" placeholder="inserisci cognome" />
                        </Form.Item>
                        <Form.Item className="form-item" name="phone" label={t("BoBusiness.UpdateBusiness.Manager.Phone")}>
                            <Input onChange={handleManagerPhone} type="email" placeholder="inserisci numero di telefono" />
                        </Form.Item>

                    </div>
                    <div className="update-business-button">
                        <Form.Item>
                            <Button type="primary" onClick={handleClick}>{t("BoBusiness.UpdateBusiness.SaveButton")}</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div >
        }
        </>
    )

}

const mapStateToProps = (state) => (
    {
        admin: state.adminDuck.admin
    }
)

export default connect(mapStateToProps)(UpdateBusinessDetails)