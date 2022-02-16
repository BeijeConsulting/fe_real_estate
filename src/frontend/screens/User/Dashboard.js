import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import BlueSection from '../../components/BlueSection/BlueSection'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <h1 className='text-3xl font-bold m-4'>
                    Benvenuto @utente
                </h1>
                <div className='flex flex-col m-2 p-2'>
                    <div className='flex flex-row space-x-2'>
                        <h1 className='text-xl font-bold'>Riepilogo utente</h1>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </div>
                    <div className='flex flex-col m-2 '>
                        <p>Nome: Emilio</p>
                        <p>Cognome: Di Mari</p>
                        <p>Email: dimar******@***.it</p>
                        <p>Password: *****</p>
                    </div>
                </div>
                <div className='flex flex-col m-2 p-2'>
                    <h1 className='text-xl font-bold'>Annunci salvati:</h1>
                    <h4>Non c'è nessun annuncio salvato...</h4>
                </div>
                <div className='flex flex-col m-2 p-2'>
                    <h1 className='text-xl font-bold'>I tuoi annunci:</h1>
                    <h4>Non hai pubblicato alcun annuncio...</h4>
                    <BlueSection
                        text="Pubblica un nuovo annuncio gratis" />
                </div>
            </>
        )
    }
}

export default Dashboard; 