import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-carousel-minimal";

//API
import javaAcademyService from "../../../services/javaAcademyService";

//Components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/UI/Card/Card";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Icon
import { faMapMarkerAlt, faHeart, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

//Images
import Avatar from "../../assets/images/jardin.jpeg";

import "./detailBuilding.css";

class DetailBuilding extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adv: {},
            data: [
                {
                    image:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS1Lpa3Gb4GhJLkprEGpKo_vP8lNMOwnLT7rUN_vDiNnX2YSEYl6WGc1nsNEJ8bqZeWOY&usqp=CAU",
                },
                {
                    image:
                        "https://www.easyrelooking.com/wp-content/uploads/taverna4_EasyRelooking.jpg",
                },
                {
                    image:
                        "https://www.diotti.com/media/wysiwyg/easyrelooking/easyrelooking-render-02.jpg",
                },
            ],
        };
    }

    componentDidMount() {
        javaAcademyService.getAds().then((res) => {
            const adv = res.data.find(
                (adv) => adv.id === parseInt(this.props.params.buildingId)
            );
            console.log(adv);

            let details = {};

            if (!!adv) {
                details = {
                    address: adv.address,
                    advType: adv.advType,
                    city: adv.city,
                    date: adv.publishedDateTime,
                    buildingType: adv.buildingType,
                    price: adv.price,
                    zipCode: adv.zipcode
                };
            }

            this.setState({ adv: details });
        });
    }

    render() {
        return (
            <>
                <Navbar fixed />
                <div className="flex flex-col font-primary bg-slate-200">
                    <div className="xl:max-w-5xl xl:mx-auto">
                        <div className="flex flex-row mx-auto mt-20 bg-white p-3">
                            <h1 className="text-2xl font-bold bg-white rounded">
                                BILOCALE IN PERIFERIA A NAPOLI
                            </h1>
                            <div className="bg-primary border-2 border-blue-900 ml-2">
                                <h1 className="text-xl font-bold color-secondary">{this.state.adv.advType}</h1>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row bg-white rounded mx-auto">
                            <Carousel
                                width="750px"
                                height="450px"
                                data={this.state.data}
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
                                    width: "60%",
                                    margin: "10px 25px"
                                }}
                            />
                            <div className={"flex flex-col h-60 w-1/4 p-2 mt-10 mx-auto"}>
                                <div className="flex flex-row">
                                    <div className="flex flex-row mx-2">
                                        <FontAwesomeIcon
                                            className={"h-8 color-primary"}
                                            icon={faMapMarkerAlt}
                                        />
                                        <h1 className="text-2xl font-bold mx-4 color-secondary uppercase">
                                            {
                                                this.state.adv.city
                                            }
                                        </h1>
                                    </div>
                                    <FontAwesomeIcon
                                        className={"ml-24 h-6 text-gray-500"}
                                        icon={faHeart}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex flex-row m-4 ">
                                        <FontAwesomeIcon className={"text-xl text-gray-800 mt-0.5 mr-2"} icon={faMapLocationDot} />
                                        <h1 className="text-lg font-medium">
                                            {this.state.adv.address}
                                        </h1>
                                    </div>
                                    <div className="flex flex-row">
                                        <img className={"avatar"} src={Avatar}></img>
                                        <h3 className="text-lg font-semibold m-2">Jessica Beje</h3>
                                    </div>
                                    <div className="price">{this.state.adv.price}€</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row">
                            <Card className="flex flex-col my-10 w-1/2 p-4 mx-auto">
                                <h1>Descrizione</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged.
                                </p>
                            </Card>
                            <Card className="flex flex-col m-10 w-1/2 p-4 mx-auto">
                                <h1>Informazioni nel dettaglio</h1>
                                <p>BAGNI BALCONI ASCENSORE GARAGE</p>
                            </Card>
                        </div>
                        <Card className="flex flex-col p-6 mx-auto mb-10 text-center">
                            <h1 className="text-lg font-bold">Contatta il venditore</h1>
                            <Input
                                className="w-auto rounded-r-sm m-2 p-2"
                                placeholder={"Inserisci la tua email"} />
                            <textarea className="w-auto">
                            </textarea>
                            <div className="flex flex-row">
                                <Button
                                    className="w-auto"
                                    label={"Invia"} />
                                <Button
                                    className="w-auto"
                                    label={"Annulla"} />
                            </div>
                        </Card>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

const Wrap = (props) => {
    const params = useParams();
    return <DetailBuilding {...props} params={params} />;
};

export default Wrap;
