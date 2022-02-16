import { Button, Form, Input, DatePicker, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./updateProfile.css";
import moment from "moment";
import { useEffect, useState } from "react";
import { getUserById, updateUserInfo } from "../../../services/backoffice/usersApi";
import { connect } from "react-redux";

import storage from "../../../common/utils/storage"
import defaultExport from "../../../common/utils/storage";


const UpdateProfile = (props) => {
    let dataAdmin = {}
    let updatedData = {
        id: '',
        business: null,
        email: "",
        avatarUrl: null,
        password: "",
        spamCheck: false,
        username: "",
        name: "",
        surname: "",
        status: null,

    }
    let name = ''
    let data = {}

    const [form] = Form.useForm();
    const antProps = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
    }
    const dateFormat = "YYYY-MM-DD";

    const [state, setState] = useState({ dataAdmin: {}, updatedData: {} })

    const getAdminData = async () => {
        return dataAdmin = await getUserById(props.admin.id)

    }

    const handleName = (e) => {
        name = e.target.value
        data = {...updatedData, name: name }
        setState({ ...state, updatedData: data })
    }

    const handleSurname = (e) => {
        let surname = e.target.value
    }

    const handleBirthPlace = (e) => {
        let birthPlace = e.target.value
    }

    const handleEmail = (e) => {
        let email = e.target.value
    }

    const handleBusinessEmail = (e) => {
        let businessEmail = e.target.value
    }

    const handlePhoneNumber = (e) => {
        let phoneNumber = e.target.value
    }

    const handleClick = async () => {
        console.log('content', state.updatedData)
        console.log('token', props.admin.token)
        let data = await updateUserInfo(state.updatedData, props.admin.token)
    }

    useEffect(async () => {
        data = await getAdminData()
        setState({ ...state, dataAdmin: dataAdmin })

    }, [])


    return (
        <div className="update-profile-container" >

            <Form
                className="update-profile-form"
                layout={"horizontal"}
                form={form}
                initialValues={state.dataAdmin}
            >
                <span className="update-profile-img"></span>
                <Upload className="update-profile-upload" {...antProps}>
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>

                <div className="update-profile-info">
                    <Form.Item name="name" label="Nome" initialValue={state.dataAdmin.name}>
                        <Input onChange={handleName} placeholder="inserisci nome" />
                    </Form.Item>
                    <Form.Item name="surname" label="Cognome">
                        <Input onChange={handleSurname} placeholder="inserisci cognome" />
                    </Form.Item>
                    <Form.Item name="birthDate" label="Data di nascita">
                        <DatePicker
                            initialValue={moment('01/01/1990', dateFormat)}
                            format={dateFormat}
                        />
                    </Form.Item>
                    <Form.Item name="birthPlace" label="Luogo di nascita">
                        <Input onChange={handleBirthPlace} placeholder="inserisci luogo di nascita" />
                    </Form.Item>
                </div>
                <div className="update-profile-contacts">
                    <Form.Item name="email" label="Email" initialValue={state.dataAdmin.email}>
                        <Input onChange={handleEmail} type="email" placeholder="inserisci la tua email" />
                    </Form.Item>
                    <Form.Item name="phoneNumber" label="Numero di telefono">
                        <Input onChange={handlePhoneNumber} placeholder="inserisci numero di telefono " />
                    </Form.Item>
                    <Form.Item name="businessEmail" label="Email aziendale">
                        <Input onChange={handleBusinessEmail} type="email" placeholder="inserisci email aziendale" />
                    </Form.Item>
                </div>
                <div className="update-profile-button">
                    <Form.Item>
                        <Button type="primary" onClick={handleClick}>Salva</Button>
                    </Form.Item>
                </div>
            </Form>
        </div >
    )

}

const mapStateToProps = (state) => (
    {
        admin: state.adminDuck.admin
    }
)

export default connect(mapStateToProps)(UpdateProfile)