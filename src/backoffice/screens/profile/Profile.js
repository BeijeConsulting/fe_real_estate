
//import React
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

//import Ant-Design
import { Button, List } from "antd";
import "antd/dist/antd.css";

//import css
import "./profile.css"

//import Api
import { getUserById } from "../../../services/backoffice/usersApi";

//import translations 
import { useTranslation } from "react-i18next";


const Profile = (props) => {
    const { t } = useTranslation()
    let navigate = useNavigate()
    let dataAdmin = {}
    let data = []

    const [state, setState] = useState({
        data: []
    })

    const handleClick = () => {
        navigate('/admin/profile/update-profile')
    }

    const getAdminData = async () => {
        dataAdmin = await getUserById(props.admin.id, props.admin.token)
        data = [dataAdmin]
        setState({data})
    }

    useEffect(() => {
        getAdminData() 
       
    }, [])

    return (
        <div className='profile-container' >
            <span className='img-profile'></span>
            <div className='info-profile-box'>
                <List
                    className="info-list"
                    size="small"
                    header={<h4 className="info-profile-title">{t("BoProfile.Info.Info")}</h4>}
                    itemLayout="vertical"
                    dataSource={state.data}
                    renderItem={item => (
                        <List.Item
                            className="info-profile-items"
                        >
                            <List.Item.Meta
                                title={t("BoProfile.Info.Name")}
                                description={item.name}
                            />
                            <List.Item.Meta
                                title={t("BoProfile.Info.Surname")}
                                description={item.surname}
                            />
                            <List.Item.Meta
                                title={t("BoProfile.Info.Username")}
                                description={item.username}
                            />
                        </List.Item>
                    )}
                />
            </div>

            <div className='contacts-profile-box'>
                <List
                    className="contacts-list"
                    header={<h3 className='contacts-title'>{t("BoProfile.Contacts.Contacts")}</h3>}
                    itemLayout="vertical"
                    dataSource={state.data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={t("BoProfile.Contacts.PersonalEmail")}
                                description={item.email}
                            />
                        </List.Item>
                    )}
                />
            </div>
            <Button
                className='button-profile'
                type="primary"
                onClick={handleClick}
            >{t("BoProfile.EditProfile")}</Button>
        </div >
    )
}

const mapStateToProps = (state) => (
    {
        admin: state.adminDuck.admin
    }
)

export default connect(mapStateToProps)(Profile)