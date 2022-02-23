import { React, Component } from "react"
import { useNavigate, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getUserById } from "../../../../services/backoffice/usersApi";

import { Button, List } from "antd";

const UserDetails = (props) => {

    let params = useParams()
    let navigate = useNavigate()

    const [state, setState] = useState({
        data: [],
        isLoading: true,
    })

    const getUserData = async () => {
        let dataAdmin = await getUserById(params.id, props.admin.token)
        let data = [dataAdmin]
        setState({data})
    }

    const handleClick = () => {
        navigate('/admin/user/' + params.id + "/details/update-details")
    }

    useEffect(() => {
        getUserData() 
    }, [])

    return (
        <div className='profile-container' >
        <span className='img-profile'></span>
        <div className='info-profile-box'>
            <List
                className="info-list"
                size="small"
                header={<h4 className="info-profile-title">Info</h4>}
                itemLayout="vertical"
                loading={state.isLoading}
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
                        {/*<List.Item.Meta
                            title={'Luogo di nascita'}
                            description={item.birthPlace}
                        />*/}
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
                loading={state.isLoading}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={'Email personale'}
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
        <Button
            className='button-profile'
            type="primary"
            onClick={handleClick}
        > Modifica Dati </Button>
    </div >
    )
}

const mapStateToProps = (state) => (
    {
        admin: state.adminDuck.admin
    }
)


export default connect(mapStateToProps) (UserDetails)