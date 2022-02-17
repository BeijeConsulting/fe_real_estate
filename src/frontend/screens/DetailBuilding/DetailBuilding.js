import React, { Component } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Card from "../../components/UI/Card/Card"
import Button from "../../components/UI/Button/Button"
import Input from "../../components/UI/Input/Input"
import { Carousel } from 'react-carousel-minimal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faHeart } from "@fortawesome/free-solid-svg-icons"
import Avatar from "../../assets/images/jardin.jpeg"

import "./detailBuilding.css"

class DetailBuilding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS1Lpa3Gb4GhJLkprEGpKo_vP8lNMOwnLT7rUN_vDiNnX2YSEYl6WGc1nsNEJ8bqZeWOY&usqp=CAU",
                },
                {
                    image: "https://www.easyrelooking.com/wp-content/uploads/taverna4_EasyRelooking.jpg",
                },
                {
                    image: "https://www.diotti.com/media/wysiwyg/easyrelooking/easyrelooking-render-02.jpg",
                }
            ]
        }
    }

    render() {
        return (
            <>
                <Navbar fixed />
                <div className='flex flex-col font-primary bg-slate-200'>
                    <h1 className='text-2xl text-center font-bold mt-20 mx-10 p-2 bg-white rounded'>BILOCALE IN PERIFERIA A MILANO</h1>
                    <div className='flex flex-row bg-white rounded justify-center mx-10' >
                        <Carousel
                            data={this.state.data}
                            width="800px"
                            height="400px"
                            radius="10px"
                            slideNumber={true}
                            dots={true}
                            pauseIconColor="darkgrey"
                            pauseIconSize="40px"
                            slideBackgroundColor="darkgrey"
                            slideImageFit="cover"
                            thumbnails={true}
                            thumbnailWidth="100px"
                            style={{
                                maxWidth: "850px",
                                maxHeight: "500px",
                                margin: "20px auto",
                            }}
                        />
                        <div className={"flex flex-col h-60 w-1/2 m-2 p-2"}>
                            <div className='flex flex-row'>
                                <FontAwesomeIcon className={"h-6 color-primary"} icon={faMapMarkerAlt} />
                                <h1 className='text-xl font-bold mx-2 color-secondary'>MILANO</h1>
                                <FontAwesomeIcon className={"h-6 text-gray-500"} icon={faHeart} />
                            </div>
                            <div className='flex flex-col'>
                                <h1>Pubblicato da:</h1>
                                <div className='flex flex-row'>
                                    <img className={"avatar"} src={Avatar}></img>
                                    <h3 className='text-lg font-semibold m-2'>Jessica Beje</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <Card className='flex flex-col m-10 w-1/2 p-4'>
                            <h1>Descrizione</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                                Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Card>
                        <Card className='flex flex-col m-10 w-1/2 p-4'>
                            <h1>Informazioni nel dettaglio</h1>
                            <p>BAGNI
                                BALCONI
                                ASCENSORE
                                GARAGE

                            </p>
                        </Card>
                    </div>
                    <Card className='flex flex-col mx-10 p-6'>
                        <h1>Contatta il venditore</h1>
                        <Input
                            placeholder={"Inserisci la tua email"} />
                        <Input
                            type='text'
                            placeholder={"Inserisci qui il tuo messaggio..."} />
                        <div className='flex flex-row'>
                            <Button />
                            <Button />
                        </div>
                    </Card>
                </div>
                <Footer />
            </>
        )
    }
}

export default DetailBuilding;