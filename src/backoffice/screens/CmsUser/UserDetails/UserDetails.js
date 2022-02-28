import "./userDetails.css"
import { React, Component } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../../../services/backoffice/usersApi";

import { getUserById } from "../../../../services/backoffice/usersApi";

import { Button, List, Modal } from "antd";
import { useTranslation } from "react-i18next";

const UserDetails = (props) => {

    let params = useParams()
    let navigate = useNavigate()
    let { t } = useTranslation()
    const [state, setState] = useState({
        data: [],
        isLoading: true,
        isModalOpened: false
    })

    const getUserData = async () => {
        let dataAdmin = await getUserById(params.id, props.admin.token)
        let data = [dataAdmin]
        setState({ data })
    }

    const handleClick = () => {
        navigate('/admin/user/' + params.id + "/details/update-details")
    }

    const handleModal = () => {
        let isModalOpened = state.isModalOpened
        setState({
            ...state,
            isModalOpened: !isModalOpened
        })
    }

    const handleDelete = async () => {
        await deleteUser(props.admin.token, params.id)
        navigate("/admin/users")
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <div className='user-container' >
            <span className='img-user'></span>
            <div className='info-user-box'>
                <List
                    className="info-list"
                    size="small"
                    header={<h4 className="info-user-title">{t("BoUsers.CmsUser.Details")}</h4>}
                    itemLayout="vertical"
                    loading={state.isLoading}
                    dataSource={state.data}
                    renderItem={item => (
                        <List.Item
                            className="info-user-items"
                        >
                            <List.Item.Meta
                                title={t("BoUsers.CmsUser.Info.Name")}
                                description={item.name}
                            />
                            <List.Item.Meta
                                title={t("BoUsers.CmsUser.Info.Surname")}
                                description={item.surname}
                            />
                            <List.Item.Meta
                                title={t("BoUsers.CmsUser.Info.Username")}
                                description={item.username}
                            />
                        </List.Item>
                    )}
                />
            </div>

            <div className='contacts-user-box'>
                <List
                    className="contacts-list"
                    header={<h3 className='contacts-title'>{t("BoUsers.CmsUser.Info.Contacts")}</h3>}
                    itemLayout="vertical"
                    dataSource={state.data}
                    loading={state.isLoading}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={t("BoUsers.CmsUser.Info.Email")}
                                description={item.email}
                            />
                            {/*<List.Item.Meta
                            title={'Numero di telefono'}
                            description={item.phoneNumber}
                        />
                        <List.Item.Meta
                            title={'Email di lavoro'}
                            description={item.businessEmail}
                        />*/}
                        </List.Item>
                    )}
                />
            </div>
            {/*             <Button
                className='button-user'
                type="primary"
                onClick={handleClick}
            > Modifica Dati </Button> */}
            <Button
                className='button-delete'
                type="danger"
                onClick={handleModal}
            > Elimina </Button>
            <Modal visible={state.isModalOpened} onOk={handleDelete} onCancel={handleModal} getContainer={false}>
                <p>Attenzione, stai per eliminare questo utente. Procedere?</p>
            </Modal>
        </div >
    )
}

const mapStateToProps = (state) => (
    {
        admin: state.adminDuck.admin
    }
)


export default connect(mapStateToProps)(UserDetails)