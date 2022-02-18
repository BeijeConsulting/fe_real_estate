import { Button, Form, Input, DatePicker, Upload } from "antd";
import "antd/dist/antd.css";
import "./updateBusinessDetails.css"

import { connect } from "react-redux";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getBusinessById, updateBusinessInfo } from "../../../../services/backoffice/businessApi";

const UpdateBusinessDetails = (props) => {
    let businessData = {}
    let updatedData = {}
    let navigate = useNavigate()
    let params = useParams()
    const [form] = Form.useForm();

    const [state, setState] = useState({ businessData: null, updatedData: {} })

    const getBusinessData = async () => {
        businessData = await getBusinessById(params.id, props.admin.token)
        console.log('data admin', businessData)
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

    const handleManagerPhone = (e) =>{
        let phone = e.target.value
        updatedData = { ...state.updatedData, phone: phone }
        setState({ ...state, updatedData: updatedData })
    }

    const handleClick = async () => {
        let data = await updateBusinessInfo(state.updatedData, props.admin.token)
        navigate("/admin/profile")
    }

    useEffect(() => {
        getBusinessData()
        form.resetFields()
        console.log('admin data', state.businessData)

    }, [])




    return (

        <>{state.businessData !== null &&

            <div className="update-profile-container" >
                <Form
                    className="update-profile-form"
                    layout={"horizontal"}
                    form={form}
                    initialValues={state.businessData}
                >
                    <div className="update-profile-info">
                        <Form.Item name="businessName" label="Nome azienda">
                            <Input onChange={handleName} placeholder="Inserisci nome" />
                        </Form.Item>
                        <Form.Item name="vatNumber" label="P.Iva">
                            <Input onChange={handleVatNumber} placeholder="Inserisci p.iva" />
                        </Form.Item>
                        <Form.Item name="address" label="Indirizzo">
                            <Input placeholder="Inserisci indirizzo" />
                        </Form.Item>
                    </div>
                    <div className="update-profile-contacts">
                        <Form.Item name="refName" label="Nome Manager">
                            <Input onChange={handleManagerName} type="email" placeholder="inserisci nome" />
                        </Form.Item>
                        <Form.Item name="refSurname" label="Cognome Manager">
                            <Input onChange={handleManagerSurname} type="email" placeholder="inserisci cognome" />
                        </Form.Item>
                        <Form.Item name="phone" label="Numero telefono Manager">
                            <Input onChange={handleManagerPhone} type="email" placeholder="inserisci numero di telefono" />
                        </Form.Item>

                    </div>
                    <div className="update-profile-button">
                        <Form.Item>
                            <Button type="primary" onClick={handleClick}>Salva</Button>
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