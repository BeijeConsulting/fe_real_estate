import React, { Component } from 'react'
import Card from '../../components/UI/Card/Card';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const EditProfile = (props) => {

    let labelClass = "font-bold text-2xl m-0 p-0"

    return (
        <div className='p-6 bg-gray-200 flex-1'>
            <h1 className='text-3xl font-bold'>Profilo</h1>
            <p>Modifica le tue informazioni personali.</p>

            <Card className='max-w-2xl mx-auto flex flex-col p-16 mt-10'>

                {/* First Name, Last Name */}
                <div className='flex justify-between flex-1'>
                    <div className='flex flex-col'>
                        <p className={labelClass}>Nome</p>
                        <Input
                            value={props.userMe.name}
                        />
                    </div>

                    <div className='flex flex-col'>
                        <p className={labelClass}>Cognome</p>
                        <Input
                            value={props.userMe.surname}
                        />
                    </div>
                </div>

                <div className='mt-6'>
                    <p className={labelClass}>Email</p>
                    <Input
                        value={props.userMe.email}
                        image={<FontAwesomeIcon icon={faEnvelope} />}
                    />
                </div>

                <div className='flex max-w-lg mx-auto'>

                    <Button
                        className='max-w-lg'
                        marginTop={40}
                        iconPosition='right'
                        label="Aggiorna Profilo"
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