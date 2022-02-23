//import React
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

//import Ant-Design
import { Button, List } from "antd";
import "antd/dist/antd.css";

//import css
import "../profile/profile.css"

//import Api
import { getUserById } from "../../../services/backoffice/usersApi";

const Checker = (props) => {

    let navigate = useNavigate()
    let params = useParams()
    let dataChecker = {}
    let data = []

    const [state, setState] = useState({
        data: []
    })

    const handleClick = () => {
        navigate('/admin/collaborator/')
    }

    const getCheckerData = async () => {
        dataChecker = await getUserById(params.id, props.admin.token)
        data = [dataChecker]
        setState({data})
    }

    useEffect(() => {
        getCheckerData() 
       
    }, [])

    return(
        <>
        <div className='profile-container' >
            <div className='info-profile-box'>
                <List
                    className="info-list"
                    size="small"
                    header={<h4 className="info-profile-title">Info</h4>}
                    itemLayout="vertical"
                    dataSource={state.data}
                    renderItem={item => (
                        <List.Item
                            className="info-profile-items"
                        >
                            <List.Item.Meta
                                title={'Nome'}
                                description={item.name}
                            />
                            <List.Item.Meta
                                title={'Cognome'}
                                description={item.surname}
                            />
                            <List.Item.Meta
                                title={'Username'}
                                description={item.username}
                            />
                        </List.Item>
                    )}
                />
            </div>

            <div className='contacts-profile-box'>
                <List
                    className="contacts-list"
                    header={<h3 className='contacts-title'>Contatti</h3>}
                    itemLayout="vertical"
                    dataSource={state.data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={'Email personale'}
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
            > Modifica Dati </Button>
        </div >
        </>
    )
}

const mapStateToProps = (state) => (
    {
        admin: state.adminDuck.admin
    }
)

export default connect(mapStateToProps)(Checker)