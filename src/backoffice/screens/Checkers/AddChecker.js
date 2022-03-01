import { Button, Form, Input, Modal, Typography, Alert } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux"
import "./addChecker.css"

import { createChecker } from "../../../services/backoffice/checkerApi";
import { createUser, getUserByUsername, getUsers } from "../../../services/backoffice/usersApi";
import { useTranslation } from "react-i18next";

const AddChecker = (props) => {

    const { Text } = Typography;
    const [form] = Form.useForm();

    let navigate = useNavigate()
    const { t } = useTranslation()

    let user = {}
    let checker = {
        name: '',
        surname: '',
        email: '',
        password: '',
        username: ''
    }

    const [state, setState] = useState({
        checker: {},
        isModalOpened: false,
        checkStatus: '',
    })

    const handleName = (e) => {
        let name = e.target.value
        checker = { ...state.checker, name: name }
        setState({ ...state, checker: checker })
    }

    const handleSurname = (e) => {
        let surname = e.target.value
        checker = { ...state.checker, surname: surname }
        setState({ ...state, checker: checker })
    }

    const handleEmail = (e) => {
        let email = e.target.value
        checker = { ...state.checker, email: email }
        setState({ ...state, checker: checker })
    }

    const handlePassword = (e) => {
        let password = e.target.value
        checker = { ...state.checker, password: password }
        setState({ ...state, checker: checker })
    }

    const handleUsername = (e) => {
        let username = e.target.value
        checker = { ...state.checker, username: username }
        setState({ ...state, checker: checker })
    }

    const openCloseModal = () => {
        setState({ ...state, isModalOpened: !state.isModalOpened })
    }

    const saveUser = async () => {
        user = await createUser(state.checker)
        console.log('status', user)
    }

    const checkData = async () => {
        await saveUser()

        if (user.createUser.status === 200) {
            setState({
                ...state,
                checkStatus: 'ok',
                isModalOpened: true
            })

        } else if (user.err === 400) {
            setState({
                ...state,
                checkStatus: 'ko'
            })
        }
        console.log('check status', state.checkStatus)
    }

    const saveChecker = async () => {
        let user = await getUserByUsername(state.checker.username, props.admin.token)
        let check = await createChecker(user.id, {}, props.admin.token)
        console.log('check', check)
        navigate('/admin/collaborators')

    }



    return (
        <div className="add-checker-container">
            <Text strong>{t("BoCheckers.Checker.Add")}</Text>
            <Form
                className="add-checker-form"
                layout={"horizontal"}
                form={form}
            >
                <div >
                    <Form.Item className="form-item" name="name" label={t("BoCheckers.Checker.Name")}>
                        <Input onChange={handleName} placeholder="inserisci nome" />
                    </Form.Item>
                    <Form.Item className="form-item" name="surname" label={t("BoCheckers.Checker.Surname")}>
                        <Input onChange={handleSurname} placeholder="inserisci Cognome" />
                    </Form.Item>
                    <Form.Item
                        className="form-item"
                        name="username"
                        label="Username"
                        rules={[
                            {
                                required: true,
                                message: t("BoCheckers.ErrorUsername"),
                            },
                        ]}>
                        <Input onChange={handleUsername} placeholder="inserisci Username" />
                    </Form.Item>
                </div>
                <div>
                    <Form.Item
                        className="form-item"
                        name="email"
                        label={t("BoCheckers.Checker.Email")}
                        rules={[
                            {
                                required: true,
                                message: t("BoCheckers.ErrorEmail"),
                            },
                        ]}>
                        <Input onChange={handleEmail} type="email" placeholder="inserisci Email" />
                    </Form.Item>
                    <Form.Item className="form-item" name="password" label="Password" rules={[
                        {
                            required: true,
                            message: t("BoCheckers.ErrorPass"),
                        },
                    ]}>
                        <Input onChange={handlePassword} type="password" placeholder="inserisci Password" />
                    </Form.Item>
                </div>
            </Form>

            <Button className="button-save-checker" type="primary" onClick={checkData}>{t("BoCheckers.Checker.Button")}</Button>
            {
                (
                    state.checkStatus === 'ko' &&
                    <Alert type="error" message={"BoCheckers.AlertErrorMessage"} banner />
                )
                ||
                (
                    state.checkStatus === 'ok' &&
                    <Modal visible={state.isModalOpened} onOk={saveChecker} onCancel={openCloseModal} getContainer={false}>
                        <p>{t("BoCheckers.Modal.Text")}</p>
                    </Modal>
                )
            }
        </div>
    )
}

const mapStateToProps = state => ({
    admin: state.adminDuck.admin
})

export default connect(mapStateToProps)(AddChecker)