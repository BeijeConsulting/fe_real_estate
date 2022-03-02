import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd'
import Card from '../../components/UI/Card/Card';
import Input from '../../components/UI/Input/Input';

const ManageBusiness = (props) => {

    const [state, setState] = useState({
        name: props.userMe.name,
        surname: props.userMe.surname,
        vatNumber: props.userMe.vatNumber,
        phone: props.userMe.phone
    })

    let labelClass = "font-bold text-xl m-0 p-0"

    const setName = (e) => setState({ ...state, name: e.target.value })
    const setSurname = (e) => setState({ ...state, surname: e.target.value })
    const setVatNumber = (e) => setState({ ...state, vatNumber: e.target.value })
    const setPhone = (e) => setState({ ...state, phone: e.target.value })

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return (
        <div className='p-6 bg-gray-200 flex-1'>
            <h1 className="text-3xl font-bold color-secondary">Area riservata Business</h1>
            <div className='flex flex-col'>
                <Card className='flex flex-col my-4 justify-center items-center'>
                    <p className='text-xl font-bold my-2'>BUSINESS-NAME</p>
                    <p className='text-sm text-slate-500'>Creato il 02/03/2022</p>
                    <div className='flex flex-row p-4'>
                        <div className='flex flex-col mr-4'>
                            <p className={labelClass}>NOME REFERENTE</p>
                            <Input

                                value={"NAME"}
                                onChange={setName}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <p className={labelClass}>COGNOME REFERENTE</p>
                            <Input
                                value={"SURNAME"}
                                onChange={setSurname}
                            />
                        </div>
                    </div>
                    <div className='flex flex-row p-4'>
                        <div className='flex flex-col mr-4'>
                            <p className={labelClass}>VAT NUMBER</p>
                            <Input
                                value={"VAT NUMBER"}
                                onChange={setVatNumber}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <p className={labelClass}>PHONE</p>
                            <Input
                                value={"PHONE"}
                                onChange={setPhone}
                            />
                        </div>
                    </div>
                </Card>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    userMe: state.userMeDuck.userMe
})

export default connect(mapStateToProps)(ManageBusiness);

