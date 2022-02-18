import { Button, Form, Input, Modal, Typography } from "antd";
import { useState } from "react";
import { connect } from "react-redux"
import "./addChecker.css"

import { createChecker } from "../../../services/backoffice/checkerApi";

const AddChecker = (props) => {
    const { Text } = Typography;
    const [form] = Form.useForm();

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
        setState({  ...state, checker: checker })
    }

    const handlePassword = (e) => {
        let password = e.target.value
        checker = { ...state.checker, password: password }
        setState({  ...state, checker: checker })
    }

    const handleUsername = (e) => {
        let username = e.target.value
        checker = { ...state.checker, username: username }
        setState({ ...state, checker: checker })
    }

    const openCloseModal = () => {
        setState({ ...state, isModalOpened: !state.isModalOpened })
    }

    const saveChecker = async () => {
        await createChecker(state.checker, props.admin.token)
    }



    return (
        <div className="add-checker-container">
        <Text strong>AGGIUNGI UN COLLABORATORE</Text>
            <Form
                className="add-checker-form"
                layout={"horizontal"}
                form={form}
            >
                <Form.Item name="name" label="Nome">
                    <Input onChange={handleName} placeholder="inserisci nome" />
                </Form.Item>
                <Form.Item name="surname" label="Cognome">
                    <Input onChange={handleSurname} placeholder="inserisci Cognome" />
                </Form.Item>
                <Form.Item name="email" label="Email">
                    <Input onChange={handleEmail} placeholder="inserisci Email" />
                </Form.Item>
                <Form.Item name="password" label="Password">
                    <Input onChange={handlePassword} placeholder="inserisci Password" />
                </Form.Item>
                <Form.Item name="username" label="Username">
                    <Input onChange={handleUsername} placeholder="inserisci Username" />
                </Form.Item>

            </Form>

            <Button className="button-save-checker" type="primary" onClick={openCloseModal}>Salva Collaboratore</Button>
            <Modal visible={state.isModalOpened} onOk={saveChecker} onCancel={openCloseModal}>
                <p>Vuoi salvare questo collaboratore?</p>
            </Modal>
        </div>
    )
}

const mapStateToProps = state => ({
    admin: state.adminDuck.admin
})

export default connect(mapStateToProps)(AddChecker)