import { Button, Form, Input, Modal, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./updateProfile.css";
import { useEffect, useState } from "react";
import { getUserById, updateUserInfo, getUsersProfile } from "../../../services/backoffice/usersApi";
import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const UpdateProfile = (props) => {
    let dataAdmin = {}
    let updatedData = {}
    let navigate = useNavigate()
    const { t } = useTranslation()
    const [form] = Form.useForm();
    const antProps = {
        action: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.interlinecenter.com%2F%3Fattachment_id%3D337&psig=AOvVaw1M-WHiEIbmWU6iI0nqA9iI&ust=1645182122041000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPibgZLLhvYCFQAAAAAdAAAAABAD'
    }

    const [state, setState] = useState({ dataAdmin: null, updatedData: {}, isModalOpened: false })

    const getAdminData = async () => {
        dataAdmin = await getUsersProfile(props.admin.token)
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
        let isModalOpened = state.isModalOpened
        setState({ ...state, isModalOpened: !isModalOpened })
    }

    const saveChanges = async () => {
        await updateUserInfo(state.updatedData, props.admin.token)
        navigate("/admin/profile")
    }

    useEffect(() => {
        getAdminData()
        form.resetFields()
    }, [])




    return (

        <>{state.dataAdmin !== null &&

            <div className="update-profile-container" >
                <h2 className="update-title">{t("BoUpdateProfile.Update")}</h2>
                <Form
                    className="update-profile-form"
                    layout={"horizontal"}
                    form={form}
                    initialValues={state.dataAdmin}
                >
                    <div className="update-profile-info">
                        <Form.Item className="form-item" name="name" label={t("BoUpdateProfile.Info.Name")}>
                            <Input onChange={handleName} placeholder="inserisci nome" />
                        </Form.Item>
                        <Form.Item className="form-item" name="surname" label={t("BoUpdateProfile.Info.Surname")}>
                            <Input onChange={handleSurname} placeholder="inserisci cognome" />
                        </Form.Item>
                        <Form.Item className="form-item" name="username" label={t("BoUpdateProfile.Info.Username")}>
                            <Input placeholder="admin" />
                        </Form.Item>
                        <Form.Item className="form-item" name="email" label={t("BoUpdateProfile.Contacts.PersonalEmail")}>
                            <Input onChange={handleEmail} type="email" placeholder="inserisci la tua email" />
                        </Form.Item>
                    </div>
                    <div className="update-profile-button">
                        <Form.Item>
                            <Button type="primary" onClick={handleClick}>{t("BoUpdateProfile.Save")}</Button>
                        </Form.Item>
                    </div>
                    <Modal visible={state.isModalOpened} onOk={saveChanges} onCancel={handleClick} getContainer={false}>
                        <p>{t("BoUpdateProfile.Modal.Text")}</p>
                    </Modal>
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