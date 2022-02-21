import React, { Component } from 'react'
import Card from '../../components/UI/Card/Card';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
class EditProfile extends Component {
    render() {
        return (
            <div className='flex flex-col m-4 font-primary'>
                <h1 className='text-2xl font-bold'>Modifica il tuo profilo</h1>
                <Card>
                    <div className='flex flex-col md:flex-row'>
                        <div className='flex flex-col p-4'>
                            <h1 className='text-lg font-semibold'>Dati anagrafici</h1>
                            <div className='flex flex-row p-4'>
                                <h1 className="text-xl font-sans " > Nome: </h1>
                                <Input className={"rounded bg-secondary flex items-center text-white mt-8 px-2 py-2 border-b-2 border-amber-300 font-primary relative -ml-14"} />
                            </div>
                            <div className='flex flex-row p-4'>
                                <h1 className="text-xl font-sans ml-2">Cognome:</h1>
                                <Input className={"rounded bg-secondary flex items-center text-white mt-8 px-2 py-2 border-b-2 border-amber-300 font-primary relative -ml-24"} />
                            </div>
                            <div className='flex flex-row p-4'>
                                <h1 className="text-xl font-sans ml-2">Data di nascita:</h1>
                                <Input className={"rounded bg-secondary flex items-center text-white mt-8 px-2 py-2 border-b-2 border-amber-300 font-primary relative -ml-36"} />
                            </div>
                            <div className='flex flex-row p-4'>
                                <h1 className="text-xl font-sans">Numero di telefono:</h1>
                                <Input className={"rounded bg-secondary flex items-center text-white mt-8 px-2 py-2 border-b-2 border-amber-300 font-primary relative -ml-44"} />
                            </div>
                            <div className='mt-4'>

                            </div>
                        </div>
                        <div className='flex flex-col p-4'>
                            <h1 className="text-lg font-semibold">Dati utente</h1>
                            <div className='flex flex-row p-4'>
                                <h1 className="text-xl font-sans">Username: </h1>
                                <Input className={"rounded bg-secondary flex items-center text-white mt-8 px-2 py-2 border-b-2 border-amber-300 font-primary relative -ml-24"} />
                            </div>
                            <div className='flex flex-row p-4'>
                                <h1 className="text-xl font-sans">Email:</h1>
                                <Input className={"rounded bg-secondary flex items-center text-white mt-8 px-2 py-2 border-b-2 border-amber-300 font-primary relative -ml-14"} />
                            </div>
                            <div className='flex flex-row p-4'>
                                <h1 className="text-xl font-sans">Password:</h1>
                                <Input className={"rounded bg-secondary flex items-center text-white mt-8 px-2 py-2 border-b-2 border-amber-300 font-primary relative -ml-24"} />
                            </div>
                            <div className='flex flex-row p-4'>
                                <h1 className="text-xl font-sans">Value:</h1>
                                <Input className={"rounded bg-secondary flex items-center text-white mt-8 px-2 py-2 border-b-2 border-amber-300 font-primary relative -ml-14"} />
                            </div>
                            <div className='text-center mt-8 w-44 p-4 md:-ml-24 h-24'>
                                <Button
                                    label='Salva'
                                />
                            </div>
                        </div>

                    </div>


                </Card>
            </div>
        )
    }
}

export default EditProfile;