//import css
import "./userDetails.css"
//import react
import { React } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
//import api
import { deleteUser, getUserById } from "../../../../services/backoffice/usersApi";
//import antd
import { Button, List, Modal } from "antd";
//import i18n
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
                            <List.Item.Meta
                                title={t("BoUsers.CmsUser.Info.Email")}
                                description={item.email}
                            />
                        </List.Item>
                    )}
                />
            </div>
            <Button
                className='button-delete'
                type="danger"
                onClick={handleModal}
            >{t("BoUsers.CmsUser.Info.Delete")}</Button>
            <Modal visible={state.isModalOpened} onOk={handleDelete} onCancel={handleModal} getContainer={false}>
                <p>{t("BoUsers.CmsUser.Info.ModalText")}</p>
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