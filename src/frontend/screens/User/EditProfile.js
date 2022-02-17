import React, { Component } from 'react'
import Card from '../../components/UI/Card/Card';
import Input from '../../components/UI/Input/Input';

class EditProfile extends Component {
    render() {
        return (
            <div className='flex flex-col m-4 font-primary'>
                <h1 className='text-2xl font-bold'>Modifica il tuo profilo</h1>
                <Card>
                    <div className='flex flex-row'>
                        <div className='flex flex-col p-4'>
                            <h1 className='text-lg font-semibold'>Dati anagrafici</h1>
                            <div className='flex flex-row p-4'>
                                <h1>Nome: </h1>
                                <Input />
                            </div>
                            <div className='flex flex-row p-4'>
                                <h1>Cognome:</h1>
                                <Input />
                            </div>
                            <div className='flex flex-row p-4'>
                                <h1>Data di nascita:</h1>
                                <Input />
                            </div>
                            <div className='flex flex-row p-4'>
                                <h1>Numero di telefono:</h1>
                                <Input />
                            </div>
                        </div>
                        <div className='flex flex-col p-4'>
                            <h1 className="text-lg font-semibold">Dati utente</h1>
                            <div className='flex flex-row p-4'>
                                <h1>Username: </h1>
                                <Input />
                            </div>
                            <div className='flex flex-row p-4'>
                                <h1>Email:</h1>
                                <Input />
                            </div>
                            <div className='flex flex-row p-4'>
                                <h1>Password:</h1>
                                <Input />
                            </div>
                            <div className='flex flex-row p-4'>
                                <h1>value:</h1>
                                <Input />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default EditProfile;