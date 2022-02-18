import { Button, Form, Input, DatePicker, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./updateProfile.css";
import { useEffect, useState } from "react";
import { getUserById, updateUserInfo } from "../../../services/backoffice/usersApi";
import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";
import { get } from "lodash";

const UpdateProfile = (props) => {
    let dataAdmin = {}
    let updatedData = {}
    let navigate = useNavigate()
    const [form] = Form.useForm();
    const antProps = {
        action: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.interlinecenter.com%2F%3Fattachment_id%3D337&psig=AOvVaw1M-WHiEIbmWU6iI0nqA9iI&ust=1645182122041000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPibgZLLhvYCFQAAAAAdAAAAABAD'
    }

    const [state, setState] = useState({ dataAdmin: null, updatedData: {} })

    const getAdminData = async () => {
        dataAdmin = await getUserById(props.admin.id, props.admin.token)
        console.log('data admin', dataAdmin)
        updatedData = {
            email: dataAdmin.email,
            avatarUrl: dataAdmin.avatarUrl,
            name: dataAdmin.name,
            surname: dataAdmin.surname,
        }

        setState({ updatedData: updatedData, dataAdmin: dataAdmin })

    }

    const handleName = (e) => {
        let name = e.target.value
        updatedData = { ...state.updatedData, name: name }
        setState({ ...state, updatedData: updatedData })
    }

    const handleSurname = (e) => {
        let surname = e.target.value
        updatedData = { ...state.updatedData, surname: surname }
        setState({ ...state, updatedData: updatedData })
    }


    const handleEmail = (e) => {
        let email = e.target.value
        updatedData = { ...state.updatedData, email: email }
        setState({ ...state, updatedData: updatedData })
    }


    const handleClick = async () => {
        let data = await updateUserInfo(state.updatedData, props.admin.token)
        navigate("/admin/profile")
    }

    useEffect(() => {
        getAdminData()
        form.resetFields()
        console.log('admin data', state.dataAdmin)

    }, [])




    return (

        <>{state.dataAdmin !== null &&

            <div className="update-profile-container" >

                <Form
                    className="update-profile-form"
                    layout={"horizontal"}
                    form={form}
                    initialValues={state.dataAdmin}
                >
                    <span className="update-profile-img">
                    </span>
                    <Upload
                        className="update-profile-upload"
                        {...antProps}
                        accept="image/png, image/jpeg"

                    >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>

                    <div className="update-profile-info">
                        <Form.Item name="name" label="Nome">
                            <Input onChange={handleName} placeholder="inserisci nome" />
                        </Form.Item>
                        <Form.Item name="surname" label="Cognome">
                            <Input onChange={handleSurname} placeholder="inserisci cognome" />
                        </Form.Item>
                        <Form.Item name="username" label="Username">
                            <Input placeholder="admin" />
                        </Form.Item>
                        {/*<Form.Item name="birthPlace" label="Luogo di nascita">
                        <Input onChange={handleBirthPlace} placeholder="inserisci luogo di nascita" />
                    </Form.Item>*/}
                    </div>
                    <div className="update-profile-contacts">
                        <Form.Item name="email" label="Email">
                            <Input onChange={handleEmail} type="email" placeholder="inserisci la tua email" />
                        </Form.Item>
                        {/* <Form.Item name="phoneNumber" label="Numero di telefono">
                        <Input onChange={handlePhoneNumber} placeholder="inserisci numero di telefono " />
                    </Form.Item>
                    <Form.Item name="businessEmail" label="Email aziendale">
                        <Input onChange={handleBusinessEmail} type="email" placeholder="inserisci email aziendale" />
                    </Form.Item> */
                        }

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

export default connect(mapStateToProps)(UpdateProfile)