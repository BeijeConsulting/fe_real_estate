import React, { useState } from 'react'
import Card from '../../components/UI/Card/Card';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { updateUser } from '../../../services/frontend/usersApi';

const EditProfile = (props) => {

    let labelClass = "font-bold text-2xl m-0 p-0"
    
    const [ state, setState] = useState({
        name: props.userMe.name,
        surname: props.userMe.surname,
        email: props.userMe.email
    })

    const setName = (e) => setState({ ...state, name: e.target.value})
    const setSurname = (e) => setState({ ...state, surname: e.target.value})
    const setEmail = (e) => setState({ ...state, email: e.target.value})

    const handleSubmit = () => {
        updateUser( state )
    }

    return (
        <div className='p-6 bg-gray-200 flex-1'>
            <h1 className='text-3xl font-bold'>Profilo</h1>
            <p>Modifica le tue informazioni personali.</p>

            <Card className='max-w-2xl mx-auto flex flex-col p-16 mt-10'>

                {/* First Name, Last Name */}
                <div className='flex flex-col md:flex-row justify-between flex-1'>
                    <div className='flex flex-col'>
                        <p className={labelClass}>Nome</p>
                        <Input
                            value={state.name}
                            onChange={setName}
                        />
                    </div>

                    <div className='flex flex-col'>
                        <p className={labelClass}>Cognome</p>
                        <Input
                            value={state.surname}
                            onChange={setSurname}
                        />
                    </div>
                </div>

                {/*  email  */}
                <div className='mt-6'>
                    <p className={labelClass}>Email</p>
                    <Input
                        value={state.email}
                        image={<FontAwesomeIcon icon={faEnvelope} />}
                        onChange={setEmail}
                    />
                </div>

                <div className='flex max-w-lg mx-auto'>

                    <Button
                        className='max-w-lg'
                        marginTop={40}
                        iconPosition='right'
                        label="Aggiorna Profilo"
                        onClick={handleSubmit}
                    />
                    
                </div>
                <p className='text-center italic mt-4'>Le modifiche vengono salvate solo dopo aver premuto il pulsante</p>

            </Card>
        </div>
    )

}

const mapStateToProps = state => ({
    userMe: state.userMeDuck.userMe
})

export default connect(mapStateToProps)(EditProfile);