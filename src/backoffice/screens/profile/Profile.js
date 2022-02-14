import { Button, List } from "antd";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";
import "./profile.css"

const Profile = () => {

    let navigate = useNavigate()

    let data = [
        {
            name: 'Pippo',
            lastName: 'Pippo',
            birthDate: '01/01/1990',
            birthPlace: 'Italia',
        }
    ]

    let dataContacts = [
        {
            email: 'pippo@pippo.it',
            phoneNumber: '3333333333',
            businessEmail: 'pippo@beije.it'
        }
    ]


    const handleClick = () => {
        navigate('/admin/profile/update-profile')
    }

    return (
        <div className='profile-container' >
            <span className='img-profile'></span>
            <div className='info-profile-box'>
                <h3 className='info-title'>Info</h3>
                <List
                    itemLayout="vertical"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={'Nome'}
                                description={item.name}
                            />
                            <List.Item.Meta
                                title={'Cognome'}
                                description={item.lastName}
                            />
                            <List.Item.Meta
                                title={'Data di nascita'}
                                description={item.birthDate}
                            />
                            <List.Item.Meta
                                title={'Luogo di nascita'}
                                description={item.birthPlace}
                            />
                        </List.Item>
                    )}
                />
            </div>

            <div className='contacts-profile-box'>
                <h3 className='contacts-title'>Contatti</h3>
                <List
                    itemLayout="vertical"
                    dataSource={dataContacts}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={'Email personale'}
                                description={item.email}
                            />
                            <List.Item.Meta
                                title={'Numero di telefono'}
                                description={item.phoneNumber}
                            />
                            <List.Item.Meta
                                title={'Email di lavoro'}
                                description={item.businessEmail}
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
    )
}

export default Profile