import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import BlueSection from '../../components/BlueSection/BlueSection'
import { Link } from 'react-router-dom'
import AdvCard from '../../components/AdvCard/AdvCard'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <>
                <h1 className='text-3xl font-bold m-4 md:text-4xl'>
                    Benvenuto @utente
                </h1>
                <div className='flex flex-col m-2 p-2'>
                    <div className='flex flex-row space-x-2'>
                        <h1 className='text-2xl font-bold'>Riepilogo utente</h1>
                        <Link to={"edit-profile"}>
                            <FontAwesomeIcon className={"mt-1.5 h-5 text-slate-900"} icon={faPenToSquare} />
                        </Link>
                    </div>
                    <div className='flex flex-col m-2 text-lg '>
                        <span className='font-semibold'>Nome: </span>
                        <span className='font-semibold'>Cognome: </span>
                        <span className='font-semibold'>Email: </span>
                        <span className='font-semibold'>Password: </span>
                    </div>
                </div>
                <div className='flex flex-col m-2 p-2'>
                    <h1 className='text-3xl font-bold'>Annunci salvati:</h1>
                    <div className='max-w-lg max-h-xs'>
                        <AdvCard />
                    </div>
                </div>
                <div className='flex flex-col m-2 p-2'>
                    <h1 className='text-3xl font-bold'>I tuoi annunci:</h1>
                    <div className='max-w-lg max-h-xs'>
                        <AdvCard />
                    </div>
                </div>
            </>
        )
    }
}

export default Dashboard; 