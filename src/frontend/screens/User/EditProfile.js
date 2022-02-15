import React, { Component } from 'react'
import Card from '../../components/UI/Card/Card';
import Input from '../../components/UI/Input/Input';

class EditProfile extends Component {
    render() {
        return (
            <div className='flex flex-col m-4 font-primary'>
                <h1 className='text-2xl font-bold'>Modifica il tuo profilo</h1>
                <Card>
                    <div className='flex flex-row '>
                        <div className='flex flex-col p-4'>
                            <h1>Dati anagrafici</h1>
                            <h1>Nome: </h1>
                            <h1>Cognome:</h1>
                            <h1>Email:</h1>
                            <h1>Password:</h1>
                        </div>
                        <div className='flex flex-col'>
                            <h1>Dati utente</h1>
                            <h1></h1>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default EditProfile;