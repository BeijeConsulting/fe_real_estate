import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import "./businessDetails.css"

import { Button, List } from "antd";
import "antd/dist/antd.css";

import { getBusinessById } from "../../../../services/backoffice/businessApi";
import { getAddressById } from "../../../../services/backoffice/addressApi";

const BusinessDetails = (props) => {

    let params = useParams()
    let businessData = {}
    let data = []

    const [state, setState] = useState({
        data: [],
        isLoading: true,
    })

    const getBusinessData = async () => {
        businessData = await getBusinessById(params.id, props.admin.token)
        data = [businessData]
        setState({ data, isLoading: false})
    }
    const getAddress = async () => {
        let businessAddress = await getAddressById(params.id, props.admin.token)
      
    }

    useEffect(() => {
        getBusinessData()
        getAddress()
    }, [])


    return (
        <div className='business-detail-container' >
            <div className='business-info-box'>
                <List
                    className="business-info-list"
                    size="small"
                    header={<h4 className="info-profile-title">Business info</h4>}
                    itemLayout="vertical"
                    loading={state.isLoading}
                    dataSource={state.data}
                    renderItem={item => (
                        <List.Item
                            className="info-profile-items"
                        >
                            <List.Item.Meta
                                title={'Nome Azienda'}
                                description={item.businessName}
                            />
                            <List.Item.Meta
                                title={'P.Iva'}
                                description={item.vatNumber}
                            />
                            <List.Item.Meta
                                title={'Indirizzo'}
                                description={
                                <p>{item?.addressId?.city} 
                                <br>{item?.addressId?.houseNumber}</br>{item?.addressId?.zipCode}
                                </p>}
                            />
                            
                        </List.Item>
                    )}
                />
            </div>

            <div className='manager-profile-box'>
                <List
                    className="contacts-list"
                    header={<h3 className='contacts-title'>Manager Info</h3>}
                    itemLayout="vertical"
                    loading={state.isLoading}
                    dataSource={state.data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={'Nome'}
                                description={item.refName}
                            />
                            <List.Item.Meta
                                title={'Cognome'}
                                description={item.refSurname}
                            />
                            <List.Item.Meta
                                title={'Numero di telefono'}
                                description={item.phone}
                            />
                        </List.Item>
                    )}
                />
            </div>
            <Button
                className='button-business'
                type="primary"
                
            > Modifica Dati </Button>
        </div >
    )
}

const mapStateToProps = (state) => (
    {
        admin: state.adminDuck.admin
    }
)

export default connect(mapStateToProps)(BusinessDetails)